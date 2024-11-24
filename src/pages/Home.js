import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import heroVideo from '../assets/background-video.mp4'; // Ensure this is the correct path to your video file

const Home = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: '100vh',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Video Background */}
      <video
        src={heroVideo}
        type="video/mp4"
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      />

      {/* Dark Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)', // Adjust overlay opacity if needed
          zIndex: 1,
        }}
      ></Box>

      {/* Hero Content */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          textAlign: 'center',
          padding: { xs: '2rem', sm: '4rem' },
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            sx={{
              fontSize: { xs: '3rem', sm: '4rem', md: '5rem' },
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            }}
          >
            Welcome to EcoExchange
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontSize: { xs: '1.2rem', sm: '1.5rem', md: '1.8rem' },
              marginBottom: '2rem',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
            }}
          >
            Build a Sustainable Future by Reusing and Recycling
          </Typography>
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Button
            variant="contained"
            color="secondary"
            size="large"
            sx={{
              padding: '1rem 2rem',
              borderRadius: '30px',
              fontWeight: 'bold',
              letterSpacing: '1px',
              boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#f9a825',
                boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.3)',
                transform: 'translateY(-2px)',
              },
            }}
            href="/browse"
          >
            Get Started
          </Button>
        </motion.div>
      </Box>
    </Box>
  );
};

export default Home;
