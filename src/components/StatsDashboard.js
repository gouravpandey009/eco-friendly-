import React from 'react';
import { Bar, Pie, Line, Radar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, RadialLinearScale, Title, Tooltip, Legend } from 'chart.js';
import { Card, CardContent, Typography, Box, Grid } from '@mui/material';

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, PointElement, LineElement, RadialLinearScale, Title, Tooltip, Legend);

const StatsDashboard = () => {
  // Bar Chart Data
  const barChartData = {
    labels: ['Electronics', 'Clothing', 'Furniture', 'Books', 'Toys'],
    datasets: [
      {
        label: 'Products by Category',
        data: [15, 10, 12, 7, 8],
        backgroundColor: ['#0288d1', '#f9a825', '#8bc34a', '#ff7043', '#ab47bc'],
        borderRadius: 8,
        borderColor: ['#01579b', '#f57f17', '#558b2f', '#d84315', '#8e24aa'],
        borderWidth: 1.5,
      },
    ],
  };

  // Pie Chart 1 Data
  const pieChartData1 = {
    labels: ['New Users', 'Returning Users', 'Guests'],
    datasets: [
      {
        data: [40, 35, 25],
        backgroundColor: ['#42a5f5', '#66bb6a', '#ffa726'],
        hoverBackgroundColor: ['#1e88e5', '#388e3c', '#fb8c00'],
      },
    ],
  };

  // Pie Chart 2 Data
  const pieChartData2 = {
    labels: ['Recycled', 'Disposed', 'Repurposed'],
    datasets: [
      {
        data: [60, 20, 20],
        backgroundColor: ['#8bc34a', '#f44336', '#ff9800'],
        hoverBackgroundColor: ['#558b2f', '#c62828', '#ef6c00'],
      },
    ],
  };

  // Line Chart Data
  const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly User Growth',
        data: [50, 70, 90, 120, 150, 200],
        borderColor: '#1976d2',
        backgroundColor: 'rgba(25, 118, 210, 0.3)',
        tension: 0.4,
        pointBackgroundColor: '#1976d2',
      },
    ],
  };

  // Radar Chart Data
  const radarChartData = {
    labels: ['Ease of Use', 'Community Engagement', 'Sustainability Impact', 'User Support', 'Affordability'],
    datasets: [
      {
        label: 'Platform Ratings',
        data: [4.5, 4.0, 4.8, 4.2, 4.3],
        backgroundColor: 'rgba(255, 99, 132, 0.3)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  // Doughnut Chart Data
  const doughnutChartData = {
    labels: ['Electronics', 'Clothing', 'Furniture', 'Books'],
    datasets: [
      {
        data: [30, 20, 25, 25],
        backgroundColor: ['#29b6f6', '#ffca28', '#66bb6a', '#ef5350'],
        hoverBackgroundColor: ['#0288d1', '#ffa000', '#388e3c', '#c62828'],
      },
    ],
  };

  return (
    <Box sx={{ padding: '2rem', backgroundColor: '#f9f9f9' }}>
      <Grid container spacing={4}>
        {/* Bar Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent sx={{ padding: '1.5rem' }}>
              <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                Products by Category
              </Typography>
              <Box sx={{ height: 300 }}>
                <Bar data={barChartData} options={{ responsive: true, maintainAspectRatio: false }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Pie Chart 1 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent sx={{ padding: '1.5rem' }}>
              <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                User Types
              </Typography>
              <Box sx={{ height: 300 }}>
                <Pie data={pieChartData1} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Pie Chart 2 */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent sx={{ padding: '1.5rem' }}>
              <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                Recycling Distribution
              </Typography>
              <Box sx={{ height: 300 }}>
                <Pie data={pieChartData2} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Line Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent sx={{ padding: '1.5rem' }}>
              <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                Monthly User Growth
              </Typography>
              <Box sx={{ height: 300 }}>
                <Line data={lineChartData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Radar Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent sx={{ padding: '1.5rem' }}>
              <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                Platform Ratings
              </Typography>
              <Box sx={{ height: 300 }}>
                <Radar data={radarChartData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Doughnut Chart */}
        <Grid item xs={12} md={6}>
          <Card sx={{ boxShadow: 3, borderRadius: 2 }}>
            <CardContent sx={{ padding: '1.5rem' }}>
              <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }}>
                Product Distribution
              </Typography>
              <Box sx={{ height: 300 }}>
                <Doughnut data={doughnutChartData} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default StatsDashboard;
