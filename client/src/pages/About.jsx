import React from 'react';
import { Container, Box, Typography, Grid, Paper, Chip, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import TargetIcon from '@mui/icons-material/TrackChanges';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';

const coreValues = [
  { title: 'Innovation', desc: 'Constantly evolving with technology trends' },
  { title: 'Integrity', desc: 'Honest and transparent business practices' },
  { title: 'Excellence', desc: 'Delivering quality in every project' },
  { title: 'Security', desc: 'Protecting client data and infrastructure' },
];

const founders = [
  {
    name: 'Likano Mbobo',
    role: 'Business & Delivery Lead Engineer',
    education: 'BSc Software Engineering with Multimedia – Limkokwing University of Creative Technology',
    bio: 'Likano is the visionary behind the company, combining technical expertise with strategic business insight. He was awarded Best Performance in Software Engineering, Class of 2025, by Econet Telecom Lesotho, demonstrating academic and practical excellence. Likano’s entrepreneurial journey and leadership are supported by JR Ventures, which also recognized his achievements in sports performance.',
    certifications: [
      'React Native Fundamentals – Alison (27 April 2024)',
      'Introduction to CCTV Systems and AutoCAD Layouts – Alison (28 July 2023)',
      'Introduction to Drones – Alison (8 Jan 2026)',
    ]
  },
  {
    name: 'Kananelo Mosututsoana',
    role: 'Product & Tech Lead Engineer',
    education: 'BSc Software Engineering with Multimedia – Limkokwing University of Creative Technology',
    bio: 'Kananelo brings a blend of software engineering and multimedia creativity to the team. He was awarded Best Performance in Coding and Programming with Python at the Samsung Innovation Campus. Kananelo specializes in product development, software solutions, cybersecurity, and technical training, ensuring that our products are innovative and reliable.',
    certifications: [
      'Coding and Programming with Python – Samsung Innovation Campus (Nov 2025)',
      'Teaching English as a Foreign Language (120 Hours) – Teacher Record (Aug 2024)',
      'Introduction to Cybersecurity – Cisco (Mar 2024)',
      'Cybersecurity Awareness Course (CSAM 2023) – CyberSafe Foundation (Oct 2023)',
      'NDG Linux Unhatched – Cisco Networking Academy (Feb 2022)',
      'NDG Linux Unhatched English 0521b cga – Cisco Networking Academy (Jun 2021)',
      'Excel in an Hour – Certificate of Achievement – GoSkills.com (Aug 2022)',
    ]
  }
];

const About = () => {
  return (
    <Box>
      {/* Header */}
      <Box sx={{ bgcolor: 'primary.main', py: 12, textAlign: 'center' }}>
        <Container maxWidth="md">
          <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
            WHO WE ARE
          </Typography>
          <Typography variant="h2" sx={{ color: 'white', fontWeight: 800, mt: 1 }}>
            About Techlink-ES
          </Typography>
          <Typography variant="h6" sx={{ color: 'rgba(255,255,255,0.8)', mt: 2, fontWeight: 400 }}>
            A leading technology and security engineering company based in Maseru, Lesotho.
          </Typography>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={8}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4" sx={{ fontWeight: 700, color: 'primary.dark', mb: 3 }}>
              Company Overview
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
              Techlink Engineering Solutions is a technology and engineering company specializing in Information Technology Services, Cybersecurity, Security Systems Engineering, Software Development, Multimedia Production, and Event Technology Infrastructure.
            </Typography>
            <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              We deliver innovative, secure, and scalable technology solutions that help organizations operate efficiently in the modern digital environment. Our team of experts is dedicated to providing cutting-edge services tailored to your business needs.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', gap: 3, flexDirection: 'column' }}>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'primary.main', borderRadius: 3, color: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <TargetIcon sx={{ color: 'secondary.main' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>Our Mission</Typography>
                </Box>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.7 }}>
                  To deliver innovative, secure, and affordable technology solutions that empower businesses and communities through advanced digital infrastructure and smart security systems.
                </Typography>
              </Paper>
              <Paper elevation={0} sx={{ p: 3, bgcolor: 'primary.dark', borderRadius: 3, color: 'white' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
                  <VisibilityIcon sx={{ color: 'secondary.main' }} />
                  <Typography variant="h5" sx={{ fontWeight: 700 }}>Our Vision</Typography>
                </Box>
                <Typography variant="body1" sx={{ opacity: 0.9, lineHeight: 1.7 }}>
                  To become a leading technology and security engineering company in Africa providing cutting-edge solutions in cybersecurity, smart security systems, and digital innovation.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>

        {/* Core Values */}
        <Box sx={{ mt: 10 }}>
          <Box sx={{ textAlign: 'center', mb: 5 }}>
            <LightbulbIcon sx={{ fontSize: 40, color: 'secondary.main', mb: 1 }} />
            <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.dark' }}>
              Core Values
            </Typography>
          </Box>
          <Grid container spacing={3}>
            {coreValues.map((value, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    height: '100%',
                    bgcolor: 'background.paper',
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 700, color: 'primary.main', mb: 1 }}>
                    {value.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {value.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      {/* Founders & Leadership Section */}
      <Box sx={{ py: 10, bgcolor: 'background.paper' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="overline"
              sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}
            >
              THE TEAM
            </Typography>
            <Typography variant="h3" sx={{ fontWeight: 700, color: 'primary.dark', mt: 1 }}>
              Founders & Leadership
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {founders.map((founder, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  elevation={0}
                  sx={{
                    height: '100%',
                    p: 4,
                    borderRadius: 3,
                    border: '1px solid',
                    borderColor: 'divider',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Box
                      sx={{
                        width: 60,
                        height: 60,
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontSize: '1.5rem',
                        fontWeight: 700,
                        mr: 2
                      }}
                    >
                      {founder.name.charAt(0)}
                    </Box>
                    <Box>
                      <Typography variant="h5" sx={{ fontWeight: 700, color: 'primary.dark' }}>
                        {founder.name}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                        {founder.role}
                      </Typography>
                    </Box>
                  </Box>

                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, color: 'text.secondary' }}>
                    <SchoolIcon sx={{ fontSize: 18, mr: 1, mt: 0.5, color: 'primary.main' }} />
                    <Typography variant="body2">{founder.education}</Typography>
                  </Box>

                  <Typography variant="body1" sx={{ color: 'text.secondary', lineHeight: 1.7, mb: 3 }}>
                    {founder.bio}
                  </Typography>

                  <Divider sx={{ my: 2 }} />

                  <Box sx={{ mt: 'auto' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1.5 }}>
                      <WorkspacePremiumIcon sx={{ color: 'primary.main', fontSize: 20, mr: 1 }} />
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, color: 'primary.dark' }}>
                        Certifications
                      </Typography>
                    </Box>
                    <List dense disablePadding>
                      {founder.certifications.map((cert, i) => (
                        <ListItem key={i} disableGutters sx={{ py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 24 }}>
                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'secondary.main' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary={cert} 
                            primaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }} 
                          />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default About;