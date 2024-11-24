import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Fade,
} from '@mui/material';
import productsData from '../services/sampleProducts'; // Ensure this file exists
import StatsDashboard from '../components/StatsDashboard'; // Ensure this component is implemented

// Product Filter Component
const ProductFilter = ({ category, setCategory, search, setSearch, handleFilter }) => (
  <Box
  sx={{
    display: 'flex',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: '1rem',
    marginBottom: '1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #4caf50, #81c784, #a5d6a7)',
    borderRadius: '10px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow to enhance the eco-feel
  }}
  >
    <FormControl fullWidth>
      <InputLabel>Category</InputLabel>
      <Select value={category} onChange={(e) => setCategory(e.target.value)} sx={{ boxShadow: 2 }}>
        <MenuItem value="">All Categories</MenuItem>
        <MenuItem value="Electronics">Electronics</MenuItem>
        <MenuItem value="Clothing">Clothing</MenuItem>
        <MenuItem value="Furniture">Furniture</MenuItem>
      </Select>
    </FormControl>

    <TextField
      fullWidth
      placeholder="Search by product name..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      sx={{
        '& .MuiInputBase-root': {
          borderRadius: '25px',
          boxShadow: 1,
        },
        marginBottom: { xs: '1rem', sm: 0 },
      }}
    />
    <Fade in={true} timeout={1000}>
      <Button
        variant="contained"
        color="primary"
        onClick={handleFilter}
        sx={{
          borderRadius: '9px', // Rounded corners for a sleek, modern look
          padding: '9px 35px', // Increased padding for a larger button
          fontSize: '1.2rem', // Slightly larger font size for better readability
          fontWeight: 'bold',
          backgroundColor: '#388e3c', // A deep, vibrant green representing sustainability
          color: '#fff', // White text for contrast and clarity
          boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Subtle shadow for depth
          '&:hover': {
            backgroundColor: '#2c6b2f', // Darker green on hover for an elegant effect
            boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.3)', // Stronger shadow on hover
            transform: 'translateY(-4px)', // Lift effect on hover for better interactivity
          },
        }}
        
      >
        Apply Filters
      </Button>
    </Fade>
  </Box>
);


const ProductGrid = ({ products }) => (
  <Grid container spacing={3}>
    {products.length > 0 ? (
      products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Card
            sx={{
              borderRadius: '16px',
              boxShadow: 3,
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              '&:hover': {
                transform: 'translateY(-10px)', 
                boxShadow: 6,
              },
            }}
          >
            <CardContent>
              <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#333' }}>
                {product.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" sx={{ marginTop: '0.5rem' }}>
                {product.description}
              </Typography>
              <Typography
                variant="body2"
                color="primary"
                sx={{ marginTop: '0.5rem', fontWeight: 'bold' }}
              >
                Category: {product.category}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))
    ) : (
      <Grid item xs={12}>
        <Typography variant="h6" color="textSecondary" sx={{ textAlign: 'center', width: '100%' }}>
          No products found.
        </Typography>
      </Grid>
    )}
  </Grid>
);

const Browse = () => {
  const [products, setProducts] = useState(productsData); // Initializing products from productsData
  const [category, setCategory] = useState('');
  const [search, setSearch] = useState('');

  // Handle Filter Logic
  const handleFilter = () => {
    const filteredProducts = productsData.filter(
      (product) =>
        (category === '' || product.category === category) &&
        product.name.toLowerCase().includes(search.toLowerCase())
    );
    setProducts(filteredProducts);
  };

  useEffect(() => {
    setProducts(productsData);
  }, []);

  return (
    <Box  sx={{
      padding: '4rem',
      background: 'linear-gradient(45deg, #388e3c, #81c784)',  // Earthy green to soft green gradient
      minHeight: '100vh',
    }}>
      {/* Filter Section */}
      <ProductFilter
        category={category}
        setCategory={setCategory}
        search={search}
        setSearch={setSearch}
        handleFilter={handleFilter}
      />

      {/* Products Grid */}
      <ProductGrid products={products} />

      {/* Statistics Dashboard */}
      <StatsDashboard />
    </Box>
  );
};

export default Browse;
