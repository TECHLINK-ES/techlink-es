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
    // CCTV Camera / Security Tool
    image: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'E-Commerce Platform',
    category: 'Software Development',
    description: 'Developed a custom online marketplace.',
    // Code on Screen / Tech
    image: 'https://images.pexels.com/photos/1089440/pexels-photo-1089440.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Network Upgrade',
    category: 'IT Services',
    description: 'Improved network infrastructure.',
    // Server Cables and Hardware
    image: 'https://images.pexels.com/photos/1095814/pexels-photo-1095814.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Cybersecurity Training',
    category: 'Cybersecurity',
    description: 'Training for 200+ employees.',
    // Digital Lock / Security Concept
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Event Technology',
    category: 'Event Tech',
    description: 'Live streaming & setup.',
    // Camera Equipment / Tripod
    image: 'https://images.pexels.com/photos/169194/pexels-photo-169194.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    title: 'Video Production',
    category: 'Multimedia',
    description: '3D animation and branding.',
    // Camera Lens / Multimedia Tool
   image: 'https://images.pexels.com/photos/274937/pexels-photo-274937.jpeg?auto=compress&cs=tinysrgb&w=600',
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