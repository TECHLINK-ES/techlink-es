import React from 'react';
import {
  Container,
  Box,
  Typography,
  Button,
  Grid,
  Chip,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import SecurityIcon from '@mui/icons-material/Security';
import CodeIcon from '@mui/icons-material/Code';
import VideocamIcon from '@mui/icons-material/Videocam';
import LanIcon from '@mui/icons-material/Lan';
import ServiceCard from '../components/ServiceCard';

const services = [
  {
    icon: <LanIcon fontSize="inherit" />,
    title: 'IT Services',
    description: 'Comprehensive IT consultation, support, and optimization.',
    items: ['IT Consultation', 'Technical Support', 'Network Configuration'],
  },
  {
    icon: <SecurityIcon fontSize="inherit" />,
    title: 'Cybersecurity',
    description: 'Protecting your digital assets with advanced security measures.',
    items: ['Vulnerability Assessments', 'Penetration Testing', 'Security Monitoring'],
  },
  {
    icon: <VideocamIcon fontSize="inherit" />,
    title: 'Security Systems',
    description: 'State-of-the-art surveillance and access control.',
    items: ['CCTV Installation', 'Access Control', 'Remote Monitoring'],
  },
  {
    icon: <CodeIcon fontSize="inherit" />,
    title: 'Software Development',
    description: 'Custom software solutions for your business needs.',
    items: ['Web Applications', 'POS Systems', 'Cloud Systems'],
  },
];

const stats = [
  { number: '100+', label: 'Projects Completed' },
  { number: '50+', label: 'Happy Clients' },
  { number: '5+', label: 'Years Experience' },
  { number: '24/7', label: 'Support' },
];

const Home = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          minHeight: '85vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          pt: { xs: 8, md: 0 },
          pb: { xs: 8, md: 0 },
        }}
      >
        {/* Background Shapes */}
        <Box sx={{ position: 'absolute', inset: 0, overflow: 'hidden', opacity: 0.1 }}>
          <Box sx={{ position: 'absolute', top: '10%', right: '10%', width: 400, height: 400, borderRadius: '50%', border: '2px solid white' }} />
          <Box sx={{ position: 'absolute', bottom: '20%', left: '5%', width: 200, height: 200, borderRadius: '50%', bgcolor: 'secondary.main' }} />
        </Box>

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={7}>
              <Chip 
                label={`“Connecting Technology, Securing Tomorrow.”`}
                sx={{ 
                  bgcolor: 'rgba(255,255,255,0.15)', 
                  color: 'white', 
                  mb: 3, 
                  fontWeight: 600,
                  fontSize: '0.85rem'
                }} 
              />
              <Typography
                variant="h1"
                sx={{
                  color: 'white',
                  fontWeight: 800,
                  fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                Innovative Technology &<br />
                <Box component="span" sx={{ color: 'secondary.main' }}>Security Solutions</Box>
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: 'rgba(255,255,255,0.8)',
                  fontWeight: 400,
                  mb: 4,
                  maxWidth: 600,
                  lineHeight: 1.6,
                }}
              >
                Techlink Engineering Solutions delivers cutting-edge cybersecurity, smart security systems, and custom software development.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <Button
                  variant="contained"
                  color="secondary"
                  size="large"
                  component={RouterLink}
                  to="/contact"
                  sx={{ px: 4, py: 1.5, fontSize: '1rem', fontWeight: 700, color: 'black' }}
                >
                  Request a Quote
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  component={RouterLink}
                  to="/services"
                  sx={{
                    px: 4, py: 1.5, fontSize: '1rem', borderColor: 'rgba(255,255,255,0.5)', color: 'white',
                    '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' }
                  }}
                >
                  Our Services
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Bar */}
      <Box sx={{ bgcolor: 'primary.dark', py: 4 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Box sx={{ textAlign: 'center' }}>
                  <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 800 }}>
                    {stat.number}
                  </Typography>
                  <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.7)' }}>
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Services Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}
            >
              WHAT WE OFFER
            </Typography>
            <Typography variant="h2" sx={{ fontWeight: 700, color: 'primary.dark', mt: 1 }}>
              Core Services
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <ServiceCard {...service} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Security Highlight Section */}
      <Box sx={{ py: 10, bgcolor: 'white' }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: 'relative',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: -20,
                    left: -20,
                    right: 20,
                    bottom: 20,
                    border: '3px solid',
                    borderColor: 'secondary.main',
                    borderRadius: 4,
                    opacity: 0.3,
                  },
                }}
              >
                <Box
                  sx={{
                    position: 'relative',
                    height: 400,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0d47a1 0%, #002171 100%)',
                    borderRadius: 4,
                  }}
                >
                  <SecurityIcon sx={{ fontSize: 150, color: 'rgba(255,255,255,0.2)' }} />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="overline"
                sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}
              >
                SECURITY SYSTEMS
              </Typography>
              <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.dark', mt: 1, mb: 3 }}>
                Advanced Surveillance
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3, lineHeight: 1.8 }}>
                Protect your premises with our cutting-edge security solutions. From HD CCTV surveillance to biometric access control.
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0, mb: 3 }}>
                {['CCTV Surveillance Installation', 'Smart Camera Monitoring', 'Access Control Systems'].map((item, i) => (
                  <Typography component="li" key={i} sx={{ color: 'text.secondary', mb: 1 }}>
                    {item}
                  </Typography>
                ))}
              </Box>
              <Button variant="contained" size="large" component={RouterLink} to="/services">
                View All Services
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          py: 12,
          background: 'linear-gradient(135deg, #0d47a1 0%, #002171 100%)',
          textAlign: 'center',
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" sx={{ color: 'white', fontWeight: 700, mb: 2 }}>
            Ready to Secure Your Future?
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mb: 4, fontWeight: 400 }}>
            Contact us today for a free consultation.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/contact"
            sx={{ px: 6, py: 1.5, fontSize: '1.1rem', fontWeight: 700, color: 'black' }}
          >
            Get Started
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;