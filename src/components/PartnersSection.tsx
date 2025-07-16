import { Box, Container, Typography } from '@mui/material';

export const PartnersSection = () => {
  const partners = [
    'Empresa 1',
    'Empresa 2',
    'Empresa 3',
    'Empresa 4',
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 8,
        backgroundColor: 'white'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 3, textAlign: 'center' }}>
          <Typography 
            component="span" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: '#333',
              display: 'inline'
            }}
          >
            Mais de{' '}
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
            500 empresas
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
            {' '}confiam nos insights do PostUp para alavancar suas vendas. Veja algumas delas:
          </Typography>
        </Box>

        <Typography 
          sx={{ 
            color: '#666',
            fontSize: { xs: '1rem', md: '1.125rem' },
            maxWidth: '800px',
            mx: 'auto',
            mb: 6,
            textAlign: 'center',
            lineHeight: 1.6
          }}
        >
          O sucesso dos nossos clientes é a nossa maior prova! Mais de 500 empresas já transformaram 
          seus resultados com a PostUp, alcançando novos patamares em suas estratégias de marketing 
          digital. Junte-se a essa comunidade de sucesso e veja como podemos impulsionar o seu negócio.
        </Typography>

        <Box 
          sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            gap: { xs: 4, md: 8 }
          }}
        >
          {partners.map((partner, index) => (
            <Box
              key={index}
              sx={{
                width: '180px',
                height: '60px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#f8f9fa',
                borderRadius: '8px',
                opacity: 0.7,
                transition: 'all 0.3s ease',
                '&:hover': {
                  opacity: 1,
                  backgroundColor: '#f0f0f0'
                }
              }}
            >
              <Typography
                sx={{
                  color: '#666',
                  fontWeight: 500,
                  fontSize: '1rem'
                }}
              >
                {partner}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}; 