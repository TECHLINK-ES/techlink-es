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

// 1. REPLACE THIS with your actual Cloud Name from the Dashboard
const CLOUD_NAME = "dkcifbzf2"; 

// 2. Helper function to generate optimized URLs
// This automatically resizes to 600px width and optimizes format (WebP/AVIF) for speed
const getCloudinaryUrl = (publicId) => 
  `https://res.cloudinary.com/${CLOUD_NAME}/image/upload/q_auto,f_auto,w_600/${publicId}`;

const projects = [
  {
    title: 'Corporate Security Overhaul',
    category: 'Security Systems',
    description: 'Installed a comprehensive 16-camera HD surveillance system.',
    // 3. REPLACE 'sample' with your actual image Public ID from Cloudinary
    // Example: if your image is named 'cctv_project', put 'cctv_project'
    publicId: 'Cctv_hfxtlk', 
  },
  {
    title: 'E-Commerce Platform',
    category: 'Software Development',
    description: 'Developed a custom online marketplace.',
    publicId: 'Desktop_fkwyac',
  },
  {
    title: 'Network Upgrade',
    category: 'IT Services',
    description: 'Improved network infrastructure.',
    publicId: 'Net_ktsqcj',
  },
  {
    title: 'Cybersecurity Training',
    category: 'Cybersecurity',
    description: 'Training for 200+ employees.',
    publicId: 'Cyber_hvtzjg',
  },
  {
    title: 'Event Technology',
    category: 'Event Tech',
    description: 'Live streaming & setup.',
    publicId: 'Cgarge_sqp73q',
  },
  {
    title: 'Video Production',
    category: 'Multimedia',
    description: '3D animation and branding.',
    publicId: 'multimedia_large2_xvot03',
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
              xs={12}   
              sm={6}    
              md={4}    
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
                  // 4. Use the helper function here
                  image={getCloudinaryUrl(project.publicId)}
                  alt={project.title}
                  sx={{
                    width: '100%',
                    height: 180, 
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