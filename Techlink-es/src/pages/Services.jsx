import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ComputerIcon from '@mui/icons-material/Computer';
import SecurityIcon from '@mui/icons-material/Security';
import VideocamIcon from '@mui/icons-material/Videocam';
import CodeIcon from '@mui/icons-material/Code';
import CameraIcon from '@mui/icons-material/CameraAlt';
import EventIcon from '@mui/icons-material/Event';

const servicesData = [
  {
    icon: <ComputerIcon sx={{ fontSize: 40 }} />,
    title: 'Information Technology Services',
    description: 'Comprehensive IT solutions to keep your business running smoothly.',
    items: ['IT consultation', 'Technical support', 'System optimization', 'Software troubleshooting', 'Network configuration', 'Data backup and recovery'],
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40 }} />,
    title: 'Cybersecurity Services',
    description: 'Protect your organization from digital threats and vulnerabilities.',
    items: ['Vulnerability assessments', 'Penetration testing', 'Security monitoring', 'Incident response', 'Cybersecurity awareness training'],
  },
  {
    icon: <VideocamIcon sx={{ fontSize: 40 }} />,
    title: 'Security Systems Engineering',
    description: 'Advanced physical security solutions for your premises.',
    items: ['CCTV surveillance installation', 'Smart camera monitoring', 'Access control systems', 'Alarm systems', 'Motion sensors', 'Remote monitoring solutions'],
  },
  {
    icon: <CodeIcon sx={{ fontSize: 40 }} />,
    title: 'Software Development',
    description: 'Custom software tailored to your unique business requirements.',
    items: ['Web application development', 'POS systems', 'Cloud systems', 'Custom enterprise systems'],
  },
  {
    icon: <CameraIcon sx={{ fontSize: 40 }} />,
    title: 'Multimedia Production',
    description: 'Creative visual content to elevate your brand presence.',
    items: ['3D modeling', '3D animation', 'Video production', 'Motion graphics'],
  },
  {
    icon: <EventIcon sx={{ fontSize: 40 }} />,
    title: 'Event Technology Infrastructure',
    description: 'Technical support and infrastructure for successful events.',
    items: ['Device charging stations', 'Event networking', 'Event security monitoring', 'Technical event support'],
  },
];

const Services = () => {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', py: 12, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            OUR EXPERTISE
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mt: 1 }}>
            Services We Offer
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mt: 2, fontWeight: 400 }}>
            End-to-end technology solutions designed to drive your business forward.
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {servicesData.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: 'secondary.main',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 70,
                        height: 70,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        bgcolor: 'primary.main',
                        color: 'white',
                        mr: 2,
                      }}
                    >
                      {service.icon}
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.dark' }}>
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
                    {service.description}
                  </Typography>
                  <List dense disablePadding>
                    {service.items.map((item, i) => (
                      <ListItem key={i} disableGutters>
                        <ListItemIcon sx={{ minWidth: 32 }}>
                          <CheckCircleIcon color="secondary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={item} primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;