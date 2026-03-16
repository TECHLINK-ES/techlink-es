import React from 'react';
import { Container, Box, Typography, Grid, Card, CardMedia, CardContent, CardActions, Button, Chip } from '@mui/material';

const projects = [
  {
    title: 'Corporate Security Overhaul',
    category: 'Security Systems',
    description: 'Installed a comprehensive 16-camera HD surveillance system with remote monitoring for a financial institution in Maseru.',
    image: 'https://images.unsplash.com/photo-1558002038-bb4237b50b11?w=600&h=400&fit=crop',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Software Development',
    description: 'Developed a custom online marketplace with integrated payment gateways and inventory management.',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    title: 'Network Infrastructure Upgrade',
    category: 'IT Services',
    description: 'Upgraded the entire network infrastructure for a government office, improving speed and reliability by 300%.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=600&h=400&fit=crop',
  },
  {
    title: 'Security Awareness Training',
    category: 'Cybersecurity',
    description: 'Conducted organization-wide cybersecurity training for 200+ employees of a healthcare provider.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
  },
  {
    title: 'Product Launch Event',
    category: 'Event Technology',
    description: 'Provided full technical support including live streaming, network setup, and charging stations for a major product launch.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&h=400&fit=crop',
  },
  {
    title: 'Corporate Video Production',
    category: 'Multimedia',
    description: 'Produced a series of promotional videos including 3D animated logos and motion graphics for a retail brand.',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=400&fit=crop',
  },
];

const Portfolio = () => {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', py: 12, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            OUR WORK
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mt: 1 }}>
            Portfolio
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mt: 2, fontWeight: 400 }}>
            Showcasing our successful projects across various industries.
          </Typography>
        </Container>
      </Box>

      {/* Projects Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  overflow: 'hidden',
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.1)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ p: 3 }}>
                  <Chip label={project.category} size="small" sx={{ mb: 2, bgcolor: 'secondary.main', color: 'black', fontWeight: 600 }} />
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.dark', mb: 1 }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {project.description}
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