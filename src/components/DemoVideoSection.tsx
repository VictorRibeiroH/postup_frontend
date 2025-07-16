import { Box, Container, Typography, IconButton } from '@mui/material';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

export const DemoVideoSection = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: 8,
        backgroundColor: '#f8f9fa',
        textAlign: 'center'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 3 }}>
          <Typography 
            component="span" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: '#333',
              display: 'inline'
            }}
          >
            Veja{' '}
          </Typography>
          <Typography 
            component="span" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: '#FF6B35',
              display: 'inline'
            }}
          >
            como o PostUp funciona
          </Typography>
          <Typography 
            component="span" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: '#333',
              display: 'inline'
            }}
          >
            {' '}na prática!
          </Typography>
        </Box>

        <Typography 
          sx={{ 
            color: '#666',
            fontSize: { xs: '1rem', md: '1.125rem' },
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
            lineHeight: 1.6
          }}
        >
          Assista ao nosso vídeo demonstrativo e descubra como é fácil e intuitivo gerenciar suas 
          campanhas de marketing digital com a PostUp. Entenda cada funcionalidade em detalhes e veja 
          como nossa plataforma pode transformar seus resultados.
        </Typography>

        <Box 
          sx={{ 
            backgroundColor: '#000',
            borderRadius: '16px',
            overflow: 'hidden',
            position: 'relative',
            maxWidth: '960px',
            mx: 'auto',
            aspectRatio: '16/9',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            '&:hover .playButton': {
              transform: 'scale(1.1)',
              backgroundColor: '#FF6B35'
            }
          }}
        >
          <IconButton 
            className="playButton"
            sx={{ 
              width: '80px',
              height: '80px',
              backgroundColor: 'rgba(255, 107, 53, 0.9)',
              transition: 'all 0.3s ease',
              '&:hover': {
                backgroundColor: '#FF6B35'
              },
              '& svg': {
                fontSize: '48px',
                color: 'white'
              }
            }}
          >
            <PlayCircleIcon />
          </IconButton>

          <Typography 
            sx={{ 
              position: 'absolute',
              bottom: '20px',
              left: '20px',
              color: 'white',
              fontSize: '1rem',
              fontWeight: 500
            }}
          >
            [POSTUP] Como o PostUp FUNCIONA NA PRÁTICA?
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}; 