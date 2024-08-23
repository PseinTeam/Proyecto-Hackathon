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
} from "recharts";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { blue, green, red, yellow } from "@mui/material/colors";

// Datos de ejemplo para los gráficos
const pieData1 = [
  { name: "Horas Trabajadas", value: 400 },
  { name: "Horas No Trabajadas", value: 300 },
  { name: "Horas Extras", value: 300 },
];

const pieData2 = [
  { name: "Accidentes Leves", value: 150 },
  { name: "Accidentes Graves", value: 50 },
  { name: "Accidentes Fatales", value: 10 },
];

const pieData3 = [
  { name: "Inasistencia", value: 150 },
  { name: "Asistencia", value: 50 },
];

const scatterData = [
  { name: "Enero", horasTrabajadas: 40, accidentes: 3 },
  { name: "Febrero", horasTrabajadas: 35, accidentes: 2 },
  { name: "Marzo", horasTrabajadas: 50, accidentes: 5 },
  { name: "Abril", horasTrabajadas: 45, accidentes: 4 },
  // Agrega más datos según sea necesario
];
const COLORS = [blue[500], green[500], red[500], yellow[500]];

const Dashboard = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Distribución de Horas</Typography>
            <PieChart width={400} height={300}>
              <Pie
                data={pieData1}
                dataKey="value"
                outerRadius={120}
                fill="#8884d8"
                label
              >
                {pieData1.map((entry, index) => (
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
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Distribución de Accidentes</Typography>
            <PieChart width={400} height={300}>
              <Pie
                data={pieData2}
                dataKey="value"
                outerRadius={120}
                fill="#82ca9d"
                label
              >
                {pieData2.map((entry, index) => (
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
          <Paper elevation={3} style={{ padding: "20px" }}>
            <Typography variant="h6">Distribución de Accidentes</Typography>
            <PieChart width={400} height={300}>
              <Pie
                data={pieData3}
                dataKey="value"
                outerRadius={120}
                fill="#82ca9d"
                label
              >
                {pieData3.map((entry, index) => (
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
              width={800}
              height={400}
              margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
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
            </ScatterChart>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
