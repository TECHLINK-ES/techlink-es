import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Chip
} from '@mui/material';

const projects = [
  {
    title: 'Corporate Security Overhaul',
    category: 'Security Systems',
    description: 'Installed a comprehensive 16-camera HD surveillance system.',
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Software Development',
    description: 'Developed a custom online marketplace.',
    image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg',
  },
  {
    title: 'Network Upgrade',
    category: 'IT Services',
    description: 'Improved network infrastructure.',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg',
  },
  {
    title: 'Cybersecurity Training',
    category: 'Cybersecurity',
    description: 'Training for 200+ employees.',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg',
  },
  {
    title: 'Event Technology',
    category: 'Event Tech',
    description: 'Live streaming & setup.',
    image: 'https://images.pexels.com/photos/1540404/pexels-photo-1540404.jpeg',
  },
  {
    title: 'Video Production',
    category: 'Multimedia',
    description: '3D animation and branding.',
    image: 'https://images.pexels.com/photos/2789320/pexels-photo-2789320.jpeg',
  },
];

const Portfolio = () => {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', py: 10, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ color: 'white', fontWeight: 800 }}>
          Portfolio
        </Typography>
      </Box>

      {/* Grid Container */}
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Grid container spacing={3}>
          {projects.map((project, index) => (
            <Grid
              item
              xs={12}   // Mobile: 1 per row
              sm={6}    // Tablet: 2 per row
              md={4}    // Desktop: 3 per row (Strict 1 row, 3 columns layout)
              key={index}
            >
              <Card
                sx={{
                  height: '100%',
                  borderRadius: 2,
                  overflow: 'hidden',
                  transition: '0.3s',
                  border: '1px solid',
                  borderColor: 'divider',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                  },
                }}
              >
                {/* Small Image - Fixed Height */}
                <CardMedia
                  component="img"
                  image={project.image}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: 180, // Fixed small height for a compact look
                    objectFit: 'cover',
                  }}
                />

                <CardContent>
                  <Chip
                    label={project.category}
                    size="small"
                    sx={{ mb: 1, bgcolor: 'secondary.main', color: 'black', fontWeight: 600 }}
                  />
                  <Typography variant="subtitle1" fontWeight={700} sx={{ color: 'primary.dark' }}>
                    {project.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Portfolio;