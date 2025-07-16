import { Box, Container, Typography } from '@mui/material';
import { FeatureCard } from './FeatureCard';

export const FeatureSection = () => {
  const features = [
    {
      icon: '🎨',
      title: 'Criar artes e descrições impactantes'
    },
    {
      icon: '📅',
      title: 'Planejar e agendar postagens'
    },
    {
      icon: '📈',
      title: 'Analisar o crescimento da sua rede social'
    },
    {
      icon: '📢',
      title: 'Gerenciar suas campanhas de anúncios'
    }
  ];

  return (
    <Box component="section" sx={{ py: 8, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ textAlign: 'center', mb: 6, maxWidth: '800px' }}>
          <Typography 
            variant="h2" 
            component="h2" 
            sx={{ 
              mb: 3, 
              color: '#333',
              fontSize: '2.5rem',
              fontWeight: 700
            }}
          >
            O que é a <Typography 
              component="span" 
              variant="h2" 
              sx={{ 
                color: '#FF6B35',
                fontSize: 'inherit',
                fontWeight: 'inherit'
              }}
            >
              PostUp
            </Typography>?
          </Typography>
          <Typography 
            variant="body1" 
            sx={{ 
              color: '#555',
              lineHeight: 1.8,
              fontWeight: 500,
              fontSize: '1.2rem'
            }}
          >
            A <Typography component="span" sx={{ color: '#555', fontWeight: 700 }}>PostUp</Typography> foi criada para 
            simplificar o marketing digital, transformando processos complexos
            em ações intuitivas. Com ela, você gerencia tudo em um só lugar, desde a criação de conteúdo
            até a gestão de anúncios, sem complicação!
          </Typography>
        </Box>

        <Box sx={{ width: '100%', maxWidth: '1000px' }}>
          <Box 
            sx={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: 2,
              mb: 2
            }}
          >
            {features.slice(0, 3).map((feature, index) => (
              <Box 
                key={index}
                sx={{ 
                  flex: {
                    xs: '0 0 100%',
                    sm: '0 0 calc(50% - 8px)',
                    md: '0 0 calc(33.333% - 11px)'
                  }
                }}
              >
                <Box sx={{ maxWidth: '320px', mx: 'auto' }}>
                  <FeatureCard {...feature} />
                </Box>
              </Box>
            ))}
          </Box>
          
          <Box sx={{ pl: { xs: 0, sm: 0, md: 0 } }}>
            <Box sx={{ maxWidth: '320px' }}>
              <FeatureCard {...features[3]} />
            </Box>
          </Box>
        </Box>

        <Typography 
          variant="body1" 
          sx={{ 
            textAlign: 'center', 
            mt: 6,
            maxWidth: '800px',
            color: '#555',
            lineHeight: 1.8,
            fontWeight: 500,
            fontSize: '1.2rem'
          }}
        >
          Tudo isso a um clique de distância, para você focar no que realmente importa: o sucesso do seu negócio!
        </Typography>
      </Container>
    </Box>
  );
}; 