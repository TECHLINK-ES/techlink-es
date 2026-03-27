import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton, Divider } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// IMPORTING LOCAL ASSET (ensure this file exists in your src/assets folder)
import TechlinkLogoFull from '../assets/logo-full.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Specific color requested
  const textColor = '#375265';

  const socialLinks = [
    { icon: <FacebookIcon />, url: 'https://www.facebook.com/share/1JaWK526P9/', label: 'Facebook' },
    { icon: <InstagramIcon />, url: 'https://www.instagram.com/invites/contact/?utm_source=ig_contact_invite&utm_medium=copy_link&utm_content=kc707jl', label: 'Instagram' },
    { icon: <LinkedInIcon />, url: '#', label: 'LinkedIn' },
    { icon: <YouTubeIcon />, url: 'https://youtube.com/@techlink-es?si=ZBY5jT7raHrEgDp8', label: 'YouTube' },
    { icon: <WhatsAppIcon />, url: 'https://wa.me/26659630165', label: 'WhatsApp' },
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
        bgcolor: '#f4f6f8', // Light background
        color: textColor,   // Custom text color
        pt: 8,
        pb: 3,
        mt: 'auto',
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box
              component="img"
              src={TechlinkLogoFull}
              alt="Techlink Logo"
              sx={{ height: 20, mb: 1 }} 
            />
            <Typography variant="body2" sx={{ color: textColor, opacity: 0.8, mb: 3, lineHeight: 1.7 }}>
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
                    color: textColor,
                    bgcolor: 'rgba(0,0,0,0.05)',
                    '&:hover': { bgcolor: 'primary.main', color: 'white' },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          <Grid item xs={6} md={2}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: textColor }}>
              Quick Links
            </Typography>
            {quickLinks.map((link) => (
              <Link
                key={link.name}
                component={RouterLink}
                to={link.path}
                underline="hover"
                display="block"
                sx={{ mb: 1, color: textColor, opacity: 0.8, fontSize: '0.9rem', '&:hover': { opacity: 1 } }}
              >
                {link.name}
              </Link>
            ))}
          </Grid>

          <Grid item xs={6} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: textColor }}>
              Services
            </Typography>
            {['IT Services', 'Cybersecurity', 'Security Systems', 'Software Development', 'Multimedia'].map((service) => (
              <Link
                key={service}
                component={RouterLink}
                to="/services"
                underline="hover"
                display="block"
                sx={{ mb: 1, color: textColor, opacity: 0.8, fontSize: '0.9rem', '&:hover': { opacity: 1 } }}
              >
                {service}
              </Link>
            ))}
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: textColor }}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ color: textColor, opacity: 0.8, mb: 1 }}>
              Maseru, Lesotho
            </Typography>
            <Typography variant="body2" sx={{ color: textColor, opacity: 0.8, mb: 1 }}>
              techlinkengineeringsolutions@gmail.com
            </Typography>
            <Typography variant="body2" sx={{ color: textColor, opacity: 0.8 }}>
              +266 5963 0165
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(55, 82, 101, 0.1)' }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="body2" sx={{ color: textColor, opacity: 0.6 }}>
            © {currentYear} Techlink Engineering Solutions. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;