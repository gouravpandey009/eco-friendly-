import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Grid,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Rating,
} from '@mui/material';
import productsData from './productsData';




const ProductsPage = () => {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(to bottom, #e8f5e9, #a5d6a7)', // Light green gradient
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
      }}
    >
      <Typography
        variant="h3"
        sx={{
          marginBottom: '2rem',
          fontWeight: 'bold',
          color: '#2e7d32', // Rich green text
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)', // Subtle shadow for pop
        }}
      >
        Eco-Friendly Products
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          maxWidth: '1200px',
          justifyContent: 'center',
        }}
      >
        {productsData.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Box
              sx={{
                background: 'rgba(255, 255, 255, 0.9)', // White with slight transparency
                borderRadius: '15px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', // Soft shadow
                padding: '1.5rem',
                textAlign: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                '&:hover': {
                  transform: 'translateY(-5px)', // Subtle lift on hover
                  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', // Enhanced shadow
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{ fontWeight: 'bold', color: '#388e3c', marginBottom: '1rem' }}
              >
                {product.name}
              </Typography>
              <Typography variant="body1" sx={{ color: '#4f4f4f' }}>
                {product.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

const ProductGrid = () => {
  const [filterCategory, setFilterCategory] = useState('All');
  const [sortOption, setSortOption] = useState('');

  // Filter and Sort Logic
  const filteredProducts = productsData
    .filter((product) =>
      filterCategory === 'All' ? true : product.category === filterCategory
    )
    .sort((a, b) => {
      if (sortOption === 'priceLowToHigh') return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
      if (sortOption === 'priceHighToLow') return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
      if (sortOption === 'ratingHighToLow') return b.rating - a.rating;
      return 0; 
    });

  return (
    <Box sx={{ padding: '1.5rem' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel>Filter by Category</InputLabel>
          <Select
            value={filterCategory}
            onChange={(e) => setFilterCategory(e.target.value)}
            label="Filter by Category"
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Electronics">Electronics</MenuItem>
            <MenuItem value="Clothing">Clothing</MenuItem>
            <MenuItem value="Furniture">Furniture</MenuItem>
            <MenuItem value="Kitchenware">Kitchenware</MenuItem>
            <MenuItem value="Outdoor">Outdoor</MenuItem>
            <MenuItem value="Miscellaneous">Miscellaneous</MenuItem>
          </Select>
        </FormControl>

        <FormControl variant="outlined" sx={{ minWidth: 200 }}>
          <InputLabel>Sort by</InputLabel>
          <Select
            value={sortOption}
            onChange={(e) => setSortOption(e.target.value)}
            label="Sort by"
          >
            <MenuItem value="">None</MenuItem>
            <MenuItem value="priceLowToHigh">Price: Low to High</MenuItem>
            <MenuItem value="priceHighToLow">Price: High to Low</MenuItem>
            <MenuItem value="ratingHighToLow">Rating: High to Low</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Grid container spacing={3}>
        {filteredProducts.map((product) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="160"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
                <Box sx={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Typography variant="subtitle1" color="primary">
                    {product.price}
                  </Typography>
                  <Rating value={product.rating} precision={0.1} readOnly />
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
