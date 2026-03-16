import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// Using the provided Logo URL
const LOGO_FULL = 'https://z-cdn-media.chatglm.cn/files/a18129f3-4788-4f5f-912c-f09e1a18acb8.jpg?auth_key=1873675982-71609fad009e4a4792ce254c9052a386-0-5f1983f79335b6d810007a58d957a9a9';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FacebookIcon />, url: '#', label: 'Facebook' },
    { icon: <InstagramIcon />, url: '#', label: 'Instagram' },
    { icon: <LinkedInIcon />, url: '#', label: 'LinkedIn' },
    { icon: <YouTubeIcon />, url: '#', label: 'YouTube' },
    { icon: <WhatsAppIcon />, url: 'https://wa.me/26600000000', label: 'WhatsApp' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#0a1929',
        color: 'white',
        pt: 8,
        pb: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={LOGO_FULL}
              alt="Techlink Logo"
              sx={{ height: 60, mb: 2, filter: 'brightness(0) invert(1)' }} // Makes logo white
            />
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)', mb: 3, lineHeight: 1.7 }}>
              Delivering innovative, secure, and scalable technology solutions in Maseru, Lesotho. Your trusted partner in cybersecurity and digital innovation.
            </Typography>
            <Box sx={{ display: 'flex', gap: 1 }}>
              {socialLinks.map((social) => (
                <IconButton
                  key={social.label}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    color: 'rgba(255,255,255,0.7)',
                    bgcolor: 'rgba(255,255,255,0.05)',
                    '&:hover': { bgcolor: 'secondary.main', color: 'black' },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Quick Links
            </Typography>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                component={RouterLink}
                to={link.path}
                color="inherit"
                underline="hover"
                display="block"
                sx={{ mb: 1, color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}
              >
                {link.name}
              </Link>
            ))}
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Services
            </Typography>
            {['IT Services', 'Cybersecurity', 'Security Systems', 'Software Development', 'Multimedia'].map((service) => (
              <Link
                key={service}
                component={RouterLink}
                to="/services"
                color="inherit"
                underline="hover"
                display="block"
                sx={{ mb: 1, color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}
              >
                {service}
              </Link>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2 }}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 1 }}>
              Maseru, Lesotho
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', mb: 1 }}>
              info@techlink-es.co.ls
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)' }}>
              +266 00 000 000
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            © {currentYear} Techlink Engineering Solutions. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;