import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  ZAxis,
  LineChart,
  Line,
} from "recharts";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { blue, green, red, yellow } from "@mui/material/colors";

// Datos aleatorios para 1000 usuarios
const generateRandomData = (numUsers) => {
  const accidentsTypes = ["Leves", "Graves", "Fatales"];
  const hoursTypes = [4, 2, 9];

  const data = [];
  for (let i = 0; i < numUsers; i++) {
    data.push({
      horasTrabajadas: hoursTypes[Math.floor(Math.random() * hoursTypes.length)],
      accidentes: accidentsTypes[Math.floor(Math.random() * accidentsTypes.length)],
      asistencia: Math.random() > 0.5 ? "Asistencia" : "Inasistencia",
    });
  }
  return data;
};

const userData = generateRandomData(1000);

// Procesar datos para los gráficos
const asistenciaData = userData.reduce((acc, item) => {
  const asistenciaType = item.asistencia;
  if (!acc[asistenciaType]) {
    acc[asistenciaType] = 0;
  }
  acc[asistenciaType]++;
  return acc;
}, {});

const accidentesData = userData.reduce((acc, item) => {
  const accidentesType = item.accidentes;
  if (!acc[accidentesType]) {
    acc[accidentesType] = 0;
  }
  acc[accidentesType]++;
  return acc;
}, {});

const horasTrabajadasData = userData.reduce((acc, item) => {
  const horas = item.horasTrabajadas;
  if (!acc[horas]) {
    acc[horas] = 0;
  }
  acc[horas]++;
  return acc;
}, {});

const pieAsistenciaData = Object.keys(asistenciaData).map((key) => ({
  name: key,
  value: asistenciaData[key],
}));

const pieAccidentesData = Object.keys(accidentesData).map((key) => ({
  name: `Accidentes ${key}`,
  value: accidentesData[key],
}));

const pieHorasTrabajadasData = Object.keys(horasTrabajadasData).map((key) => ({
  name: `Horas ${key}`,
  value: horasTrabajadasData[key],
}));

const COLORS = [blue[500], green[500], red[500], yellow[500]];

// Datos para el gráfico de dispersión con relación entre horas trabajadas y accidentes
const scatterData = [
  { horasTrabajadas: 2, accidentes: 5 },
  { horasTrabajadas: 4, accidentes: 15 },
  { horasTrabajadas: 9, accidentes: 30 },
  { horasTrabajadas: 2, accidentes: 6 },
  { horasTrabajadas: 4, accidentes: 17 },
  { horasTrabajadas: 9, accidentes: 35 },
  { horasTrabajadas: 2, accidentes: 4 },
  { horasTrabajadas: 4, accidentes: 14 },
  { horasTrabajadas: 9, accidentes: 33 },
];

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">Distribución de Asistencia</Typography>
            <PieChart width={300} height={250}>
              <Pie
                data={pieAsistenciaData}
                dataKey="value"
                outerRadius={100}
                fill="#8884d8"
                label
              >
                {pieAsistenciaData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">Distribución de Accidentes</Typography>
            <PieChart width={300} height={250}>
              <Pie
                data={pieAccidentesData}
                dataKey="value"
                outerRadius={100}
                fill="#82ca9d"
                label
              >
                {pieAccidentesData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "16px" }}>
            <Typography variant="h6">Distribución de Horas Trabajadas</Typography>
            <PieChart width={300} height={250}>
              <Pie
                data={pieHorasTrabajadasData}
                dataKey="value"
                outerRadius={100}
                fill="#ffc658"
                label
              >
                {pieHorasTrabajadasData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper elevation={3} style={{ padding: 16 }}>
            <Typography variant="h6" gutterBottom align="center">
              Comparación de Horas Trabajadas y Accidentes
            </Typography>
            <ScatterChart
              width={700}
              height={400}
              margin={{ top: 20, right: 30, bottom: 20, left: 20 }}
            >
              <CartesianGrid />
              <XAxis
                type="number"
                dataKey="horasTrabajadas"
                name="Horas Trabajadas"
              />
              <YAxis type="number" dataKey="accidentes" name="Accidentes" />
              <ZAxis type="number" dataKey="horasTrabajadas" />
              <Tooltip />
              <Scatter name="Datos" data={scatterData} fill={red[500]} />
              <Line
                type="linear"
                dataKey="horasTrabajadas"
                stroke="#8884d8"
                dot={false}
                strokeWidth={2}
              />
            </ScatterChart>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
