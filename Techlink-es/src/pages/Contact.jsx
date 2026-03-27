import React, { useState, useRef } from 'react';
import { Container, Box, Typography, Grid, TextField, Button, Paper, Snackbar, Alert, MenuItem, CircularProgress } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import emailjs from '@emailjs/browser';

const serviceOptions = [
  'IT Consultation',
  'Cybersecurity Assessment',
  'CCTV Installation',
  'Software Development',
  'Multimedia Production',
  'Event Technology Support',
  'Other',
];

const Contact = () => {
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Get keys from .env file
    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    try {
      // Send email using EmailJS
      await emailjs.sendForm(
        SERVICE_ID, 
        TEMPLATE_ID, 
        formRef.current, 
        PUBLIC_KEY
      );

      setSnackbar({ open: true, message: 'Message sent successfully! We will contact you soon.', severity: 'success' });
      // Clear form
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSnackbar({ open: true, message: 'Failed to send message. Please try again later.', severity: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', py: 12, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            GET IN TOUCH
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mt: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mt: 2, fontWeight: 400 }}>
            Ready to start your project? Send us a message or request a quote.
          </Typography>
        </Container>
      </Box>

      {/* Form Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={6}>
          {/* Left Column: Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.dark', mb: 4 }}>
              Contact Information
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <Box sx={{ width: 50, height: 50, borderRadius: 2, bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', mr: 2 }}>
                <LocationOnIcon />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Address</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>Maseru, Lesotho</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <Box sx={{ width: 50, height: 50, borderRadius: 2, bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', mr: 2 }}>
                <EmailIcon />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Email</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>techlinkengineeringsolutions@gmail.com</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <Box sx={{ width: 50, height: 50, borderRadius: 2, bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', mr: 2 }}>
                <PhoneIcon />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Phone</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>+266 5963 0165</Typography>
              </Box>
            </Box>
          </Grid>

          {/* Right Column: Form */}
          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.dark', mb: 3 }}>
                Request a Quote
              </Typography>
              {/* The ref is attached here to read form data */}
              <Box component="form" ref={formRef} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {/* Name Field */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  {/* Email Field */}
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      label="Email Address"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    />
                  </Grid>
                  {/* Phone Field */}
                  <Grid item xs={12} sm={6}>
                     <TextField
                      fullWidth
                      label="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      variant="outlined"
                    />
                  </Grid>
                  {/* Service Selection */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      select
                      label="Service Needed"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      variant="outlined"
                      helperText="Please select the service you are interested in"
                    >
                      {serviceOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  {/* Message Field */}
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Your Message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      multiline
                      rows={4}
                      variant="outlined"
                    />
                  </Grid>
                  {/* Submit Button */}
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="secondary"
                      size="large"
                      disabled={loading}
                      sx={{ px: 6, fontWeight: 700, color: 'black' }}
                    >
                      {loading ? <CircularProgress size={24} /> : 'Send Message'}
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.dark', mb: 4, textAlign: 'center' }}>
            Our Location
          </Typography>
          
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper 
              elevation={0} 
              sx={{ 
                borderRadius: 3, 
                overflow: 'hidden', 
                border: '1px solid', 
                borderColor: 'divider',
                width: '100%',
                maxWidth: 500, 
                aspectRatio: '1 / 1',
              }}
            >
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1894.6412863078363!2d27.475540835474458!3d-29.322863270534626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8dcb40e6d04fef%3A0xcfd21925e42fadfc!2sMFHG%2B7JR%2C%20Maseru%20100!5e1!3m2!1sen!2sls!4v1773756505725!5m2!1sen!2sls"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Paper>
          </Box>
        </Container>
      </Box>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;