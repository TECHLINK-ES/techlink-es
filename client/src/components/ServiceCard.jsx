import React from 'react';
import { Card, CardContent, Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ icon, title, description, items }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'all 0.3s ease',
        border: '1px solid',
        borderColor: 'divider',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 40px rgba(4, 40, 94, 0.15)',
          borderColor: 'secondary.main',
        },
      }}
    >
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box
          sx={{
            width: 60,
            height: 60,
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'primary.main',
            color: 'white',
            mb: 2,
            fontSize: '1.75rem',
          }}
        >
          {icon}
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, mb: 1, color: 'primary.dark' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
          {description}
        </Typography>
        {items && (
          <Box component="ul" sx={{ pl: 2, m: 0 }}>
            {items.slice(0, 3).map((item, index) => (
              <Typography
                component="li"
                key={index}
                variant="body2"
                sx={{ color: 'text.secondary', mb: 0.5 }}
              >
                {item}
              </Typography>
            ))}
          </Box>
        )}
        <Button 
          sx={{ mt: 2, fontWeight: 600, color: 'primary.main' }}
          onClick={() => navigate('/services')}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;