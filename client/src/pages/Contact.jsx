import React, { useState } from 'react';
import { Container, Box, Typography, Grid, TextField, Button, Paper, Snackbar, Alert, MenuItem, CircularProgress } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSnackbar({ open: true, message: 'Message sent successfully! We will contact you soon.', severity: 'success' });
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
      } else {
        throw new Error(data.error || 'Failed to send message');
      }
    } catch (error) {
      setSnackbar({ open: true, message: error.message, severity: 'error' });
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
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>info@techlink-es.co.ls</Typography>
              </Box>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 3 }}>
              <Box sx={{ width: 50, height: 50, borderRadius: 2, bgcolor: 'primary.main', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', mr: 2 }}>
                <PhoneIcon />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>Phone</Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>+266 00 000 000</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={8}>
            <Paper elevation={0} sx={{ p: 4, borderRadius: 3, border: '1px solid', borderColor: 'divider' }}>
              <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.dark', mb: 3 }}>
                Request a Quote
              </Typography>
              <Box component="form" onSubmit={handleSubmit}>
                <Grid container spacing={2}>
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
                  <Grid item xs={12} sm={6}>
                    <TextField
                      fullWidth
                      select
                      label="Service Needed"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      variant="outlined"
                    >
                      {serviceOptions.map((option) => (
                        <MenuItem key={option} value={option}>
                          {option}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
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