import React, { useState } from 'react';
import { Box, Typography, TextField, Button, Container, Paper, Grid, InputAdornment } from '@mui/material';
import { AccountCircle, Email, Lock} from '@mui/icons-material';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API request)
    alert('Form submitted!');
  };

  return (
    <Box sx={{ backgroundColor: '#91c48f', minHeight: '100vh', padding: '4rem 0' }}>
      <Container maxWidth="sm">
        <Paper sx={{ padding: '2rem', borderRadius: '12px', boxShadow: 8 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#1976d2',
              textAlign: 'center',
              marginBottom: '1.5rem',
            }}
          >
            Join the EcoExchange Community
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#555',
              textAlign: 'center',
              marginBottom: '2rem',
              fontSize: '1.25rem',
            }}
          >
            Help us create a sustainable future. Register today and be part of the movement.
          </Typography>

          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Name Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Full Name"
                  variant="outlined"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Email Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Email Address"
                  variant="outlined"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  type="email"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Password Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Confirm Password Field */}
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Confirm Password"
                  variant="outlined"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                  type="password"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12} sx={{ textAlign: 'center', marginTop: '1.5rem' }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    padding: '12px 30px',
                    fontSize: '1.1rem',
                    fontWeight: 'bold',
                    borderRadius: '30px',
                    boxShadow: 6,
                    '&:hover': {
                      backgroundColor: '#1976d2',
                      boxShadow: 8,
                      transform: 'translateY(-2px)',
                    },
                  }}
                >
                  Register Now
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default Register;
