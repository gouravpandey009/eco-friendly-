import React from 'react';
import { Box, Typography, Button, Paper, Stack, Container } from '@mui/material';
import backgroundVideo from '../assets/eco-background.mp4'; // Ensure the video file exists

const About = () => {
  return (
    <Box sx={{ position: 'relative', overflow: 'hidden', height: '100vh' }}>
      {/* Video Background */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
        }}
      >
        <video
          autoPlay
          loop
          muted
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      </Box>

      {/* Content Section */}
      <Container sx={{ padding: { xs: '2rem', sm: '4rem' }, color: '#fff' }}>
        <Box sx={{ textAlign: 'center', marginBottom: '3rem' }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '2.5rem', sm: '3.5rem' },
              marginBottom: '1rem',
              textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)',
            }}
          >
            About EcoExchange
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: '1rem', sm: '1.25rem' },
              color: '#fff',
              marginBottom: '2rem',
              textShadow: '1px 1px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            A platform dedicated to building a sustainable future through reuse, recycling, and responsible consumption.
          </Typography>
        </Box>

        {/* Mission and Key Features */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={4}
          justifyContent="space-between"
          sx={{ marginBottom: '3rem' }}
        >
          <Paper
            sx={{
              padding: '2rem',
              boxShadow: 6,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '12px',
              flex: 1,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', marginBottom: '1rem', color: '#1976d2' }}
            >
              Our Mission
            </Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>
              At EcoExchange, we aim to provide a seamless platform for individuals and businesses to buy, sell,
              or exchange used products, promoting a sustainable, eco-friendly environment. We reduce waste, lower
              carbon footprints, and create a thriving community that cares for the planet.
            </Typography>
          </Paper>

          <Paper
            sx={{
              padding: '2rem',
              boxShadow: 6,
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              borderRadius: '12px',
              flex: 1,
              transition: 'transform 0.3s',
              '&:hover': {
                transform: 'translateY(-10px)',
              },
            }}
          >
            <Typography
              variant="h5"
              sx={{ fontWeight: 'bold', marginBottom: '1rem', color: '#1976d2' }}
            >
              Key Features
            </Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>
              <ul>
                <li>Discover sustainable, eco-friendly products.</li>
                <li>Sell, donate, or exchange used items in the community.</li>
                <li>Track the environmental impact of your contributions.</li>
                <li>Access tips, advice, and resources for a greener lifestyle.</li>
              </ul>
            </Typography>
          </Paper>
        </Stack>

        {/* Call to Action */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="h5"
            sx={{ fontWeight: 'bold', marginBottom: '1rem', fontSize: { xs: '1.5rem', sm: '2rem' } }}
          >
            Join the EcoExchange Community
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#ddd',
              marginBottom: '1rem',
              fontSize: { xs: '1rem', sm: '1.25rem' },
              textShadow: '1px 1px 6px rgba(0, 0, 0, 0.3)',
            }}
          >
            Be a part of the movement. Buy, sell, or donate your unused items, and help us create a sustainable
            future for generations to come.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            href="/register"
            sx={{
              borderRadius: '30px',
              padding: '12px 30px',
              fontSize: '1rem',
              fontWeight: 'bold',
              boxShadow: 6,
              '&:hover': {
                backgroundColor: '#1976d2',
                boxShadow: 8,
                transform: 'translateY(-2px)',
              },
            }}
          >
            Get Started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
