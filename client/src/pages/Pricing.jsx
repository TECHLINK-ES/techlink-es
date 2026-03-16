import React from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const pricingData = [
  {
    category: 'IT Services',
    items: [
      { name: 'IT Consultation', price: 'M150' },
      { name: 'System Diagnosis', price: 'M250' },
      { name: 'Virus Removal', price: 'M350' },
      { name: 'Windows Installation', price: 'M350' },
      { name: 'Linux Installation', price: 'M300' },
      { name: 'Software Installation', price: 'M200' },
    ],
  },
  {
    category: 'Network Services',
    items: [
      { name: 'Router Configuration', price: 'M350' },
      { name: 'Network Setup', price: 'M800 – M2500' },
      { name: 'Office Network Deployment', price: 'M2500 – M8000' },
    ],
  },
  {
    category: 'Cybersecurity',
    items: [
      { name: 'Security Audit', price: 'M1500' },
      { name: 'Vulnerability Assessment', price: 'M3000 – M6000' },
      { name: 'Penetration Testing', price: 'M5000 – M12000' },
    ],
  },
  {
    category: 'Security Systems',
    items: [
      { name: 'CCTV Installation', price: 'M900 per camera' },
      { name: '4 Camera System', price: 'M4500 – M6500' },
      { name: '8 Camera System', price: 'M8500 – M12000' },
      { name: 'Access Control Installation', price: 'M3500 – M8000' },
      { name: 'Alarm System Installation', price: 'M2500 – M7000' },
    ],
  },
  {
    category: 'Software Development',
    items: [
      { name: 'Basic Package', price: 'M25,000' },
      { name: 'Professional Package', price: 'M35,000' },
      { name: 'Enterprise Package', price: 'M45,000' },
    ],
  },
  {
    category: 'Multimedia Services',
    items: [
      { name: 'Logo Animation', price: 'M800' },
      { name: 'Video Editing', price: 'M1200 – M3500' },
      { name: '3D Modeling', price: 'M1500 – M4500' },
      { name: '3D Animation', price: 'M4000 – M12000' },
    ],
  },
  {
    category: 'Event Technology',
    items: [
      { name: 'Device Charging Station Setup', price: 'M1500 – M3500' },
      { name: 'Event Network Setup', price: 'M2000 – M6000' },
      { name: 'Technical Event Support', price: 'M1500 per day' },
    ],
  },
];

const Pricing = () => {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', py: 12, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            TRANSPARENT PRICING
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mt: 1 }}>
            Our Pricing Catalogue
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mt: 2, fontWeight: 400 }}>
            Competitive rates for professional technology solutions in Lesotho.
          </Typography>
        </Container>
      </Box>

      {/* Pricing Tables */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {pricingData.map((category, index) => (
            <Grid item xs={12} sm={6} lg={4} key={index}>
              <Card
                elevation={0}
                sx={{
                  height: '100%',
                  borderRadius: 3,
                  border: '1px solid',
                  borderColor: 'divider',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <CardContent sx={{ p: 3, flexGrow: 1 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.dark', mb: 2, pb: 2, borderBottom: '2px solid', borderColor: 'secondary.main' }}>
                    {category.category}
                  </Typography>
                  {category.items.map((item, i) => (
                    <Box key={i} sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', py: 1.5, borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                        {item.name}
                      </Typography>
                      <Chip label={item.price} size="small" sx={{ bgcolor: 'primary.main', color: 'white', fontWeight: 600 }} />
                    </Box>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box sx={{ textAlign: 'center', mt: 8 }}>
          <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.dark', mb: 2 }}>
            Need a Custom Solution?
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 3 }}>
            Contact us for a personalized quote tailored to your specific requirements.
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            component={RouterLink}
            to="/contact"
            sx={{ px: 6, fontWeight: 700, color: 'black' }}
          >
            Request Quote
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default Pricing;