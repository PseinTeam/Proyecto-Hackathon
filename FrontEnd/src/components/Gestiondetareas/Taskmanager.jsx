import React, { useState, useCallback, useContext } from "react";
import Calendar from "react-calendar";
import { Container, Button, Form, Table, Alert } from "react-bootstrap";
import { format } from "date-fns";
import { es } from "date-fns/locale"; // Importar locale directamente desde 'date-fns/locale'
import "react-calendar/dist/Calendar.css";
import "../../../public/css/components/TaskManager.css"; // Importar el archivo CSS
import { AuthContext } from "../../context/AuthProvider";

const urgencyColors = {
  Alta: "#FF4C4C", // Rojo
  Media: "#FFA24C", // Naranja
  Baja: "#F6F700", // Amarillo
  Ninguna: "#4CAF50", // Verde
};

let taskId = 0; // Contador para generar IDs únicos

export const TaskManager = () => {
  const [date, setDate] = useState(new Date());
  const [tasks, setTasks] = useState([]);
  const [taskTitle, setTaskTitle] = useState("");
  const [taskColor, setTaskColor] = useState("Ninguna");
  const [selectedDateTasks, setSelectedDateTasks] = useState([]);

  const { user } = useContext(AuthContext);

  const handleDateChange = useCallback(
    (newDate) => {
      setDate(newDate);
      // Filtrar tareas para la fecha seleccionada
      const formattedDate = newDate.toDateString();
      const tasksForDate = tasks.filter(
        (task) => new Date(task.date).toDateString() === formattedDate
      );
      setSelectedDateTasks(tasksForDate);
    },
    [tasks]
  );

  const handleAddTask = () => {
    if (!taskTitle) {
      alert("Por favor, ingrese un título para la tarea.");
      return;
    }
    const newTask = {
      id: taskId++, // Asignar un ID único a la tarea
      title: taskTitle,
      date: date.toISOString(),
      color: taskColor,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskTitle("");
    setTaskColor("Ninguna");
    handleDateChange(date); // Actualizar tareas para la fecha seleccionada
  };

  const handleTaskTitleChange = (e) => {
    setTaskTitle(e.target.value);
  };

  const handleTaskColorChange = (e) => {
    setTaskColor(e.target.value);
  };

  const handleMarkAsCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    handleDateChange(date); // Actualizar tareas para la fecha seleccionada
  };

  const handleDeleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    handleDateChange(date); // Actualizar tareas para la fecha seleccionada
  };

  // Formatear la fecha en español
  const formattedDate = format(date, "d 'de' MMMM 'de' yyyy", { locale: es });

  return (
    <Container>
      <h1 className="my-4 text-center">Gestor de Tareas</h1>
      <div className="d-flex">
        <div className="flex-fill me-2" style={{ marginLeft: "6%" }}>
          <Calendar
            onChange={handleDateChange}
            value={date}
            tileClassName={({ date }) => {
              const formattedDate = date.toDateString();
              return tasks.some(
                (task) => new Date(task.date).toDateString() === formattedDate
              )
                ? "react-calendar__tile--highlight-task"
                : null;
            }}
          />
        </div>
        <div className="flex-fill" style={{ marginRight: "5.5%" }}>
            {user?.rol?.nombre === "segurity" && (
                        <Form>
                        <Form.Group controlId="taskTitle">
                          <Form.Label>Título de la Tarea</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Ingrese el título de la tarea"
                            value={taskTitle}
                            onChange={handleTaskTitleChange}
                          />
                        </Form.Group>
                        <Form.Group controlId="taskColor" className="mt-3">
                          <Form.Label>Urgencia de la Tarea</Form.Label>
                          <Form.Control
                            as="select"
                            value={taskColor}
                            onChange={handleTaskColorChange}
                          >
                            <option value="Ninguna">Sin urgencia</option>
                            <option value="Baja">Baja urgencia</option>
                            <option value="Media">Media urgencia</option>
                            <option value="Alta">Alta urgencia</option>
                          </Form.Control>
                        </Form.Group>
                        <Button variant="primary" className="mt-3" onClick={handleAddTask}>
                          Agregar Tarea
                        </Button>
                      </Form>
            )}
          <div className="mt-4">
            <h3>Tareas del {formattedDate}</h3>
            {selectedDateTasks.length > 0 ? (
              <Table striped bordered hover className="mt-2">
                <thead>
                  <tr>
                    <th>Título</th>
                    <th>Urgencia</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedDateTasks.map((task) => (
                    <tr key={task.id}>
                      <td>{task.title}</td>
                      <td
                        style={{
                          backgroundColor: urgencyColors[task.color],
                          color: "#fff",
                        }}
                      >
                        {task.color.charAt(0).toUpperCase() +
                          task.color.slice(1)}
                      </td>
                      <td>
                        {task.completed ? (
                          <span className="text-success">Cumplida</span>
                        ) : (
                          <span className="text-danger">Pendiente</span>
                        )}
                      </td>
                      <td>
                        <Button
                          variant={task.completed ? "secondary" : "success"}
                          onClick={() => handleMarkAsCompleted(task.id)}
                          className="me-2"
                        >
                          {task.completed
                            ? "Marcar como pendiente"
                            : "Marcar como cumplida"}
                        </Button>
                        <Button
                          variant="danger"
                          onClick={() => handleDeleteTask(task.id)}
                        >
                          Eliminar
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <Alert variant="info">No hay tareas para esta fecha.</Alert>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};
