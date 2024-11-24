import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { Home, Search, Info } from '@mui/icons-material';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <AppBar
      position="sticky"
      sx={{
        background: '#364a28',  
        boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.6)', // Subtle shadow for depth
        transition: 'all 0.3s ease', // Smooth transition for hover effects
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0 2rem',
          alignItems: 'center',
        }}
      >
        {/* Animated Title */}
        <motion.div
          animate={{ x: [-10, 10, -10] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: 'bold',
              fontSize: '2rem',
              letterSpacing: '3px',
              color: '#00000',
              textShadow: '2px 2px 6px rgba(0, 0, 0, 0.5)',
            }}
          >
            EcoExchange
          </Typography>
        </motion.div>

        {/* Buttons Section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Home Button */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              color="inherit"
              href="/"
              sx={{
                marginLeft: 2,
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#01579b',
                  borderRadius: '8px',
                  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
                },
              }}
              startIcon={<Home />}
            >
              Home
            </Button>
          </motion.div>

          {/* Browse Button */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              color="inherit"
              href="/browse"
              sx={{
                marginLeft: 2,
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#f57f17',
                  borderRadius: '8px',
                  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
                },
              }}
              startIcon={<Search />}
            >
              Browse
            </Button>
          </motion.div>

          {/* About Button */}
          <motion.div whileHover={{ scale: 1.1 }}>
            <Button
              color="inherit"
              href="/about"
              sx={{
                marginLeft: 2,
                fontWeight: 'bold',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#0ef043',
                  borderRadius: '8px',
                  boxShadow: '0px 5px 15px rgba(0, 0, 0, 0.3)',
                },
              }}
              startIcon={<Info />}
            >
              About
            </Button>
          </motion.div>
        </Box>
      </Toolbar>

      {/* Stats Section */}
      <Box
        sx={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: '#445735',
          display: 'flex',
          justifyContent: 'space-around',
          padding: '-2rem 0',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#0288d1', textAlign: 'center' }}
          >
            1M+
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 'medium', color: '#666', textAlign: 'center' }}
          >
            Products Reused
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#0288d1', textAlign: 'center' }}
          >
            500K+
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 'medium', color: '#666', textAlign: 'center' }}
          >
            Users Engaged
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', color: '#0288d1', textAlign: 'center' }}
          >
            2M+
          </Typography>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 'medium', color: '#666', textAlign: 'center' }}
          >
            Transactions Logged
          </Typography>
        </motion.div>
      </Box>
    </AppBar>
  );
};

export default Navbar;
