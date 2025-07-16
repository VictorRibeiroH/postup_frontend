import { Box, Container, Typography } from '@mui/material';

const segmentos = [
  { icone: '🍽️', nome: 'Alimentação' },
  { icone: '⚕️', nome: 'Saúde' },
  { icone: '🏋️', nome: 'Esporte' },
  { icone: '💅', nome: 'Estética' },
  { icone: '🧘', nome: 'Beleza e bem estar' },
  { icone: '⚖️', nome: 'Advocacia' },
  { icone: '🏗️', nome: 'Arquitetura' },
  { icone: '🏡', nome: 'Imóveis' },
  { icone: '🐾', nome: 'Pet' },
  { icone: '👗', nome: 'Moda' }
];

export const SegmentosSection = () => {
  return (
    <Box 
      component="section" 
      sx={{ 
        py: 8,
        backgroundColor: '#fff'
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <Typography 
            component="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: '#333',
              mb: 3
            }}
          >
            Segmentos Atendidos:{' '}
            <Typography 
              component="span" 
              sx={{ 
                fontSize: 'inherit',
                fontWeight: 'inherit',
                color: '#333',
                display: 'inline'
              }}
            >
              Sua Área de Atuação é a Nossa Prioridade!
            </Typography>
          </Typography>

          <Typography 
            sx={{ 
              color: '#666',
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            A PostUp é versátil e se adapta às necessidades de diversos setores. Não importa qual seja o 
            seu nicho, nossa plataforma oferece as ferramentas e insights que você precisa para se 
            destacar. Conheça alguns dos segmentos que já confiam na PostUp para impulsionar seus 
            resultados:
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(5, 1fr)'
            },
            gap: 2,
            maxWidth: '1000px',
            mx: 'auto',
            mb: 8
          }}
        >
          {segmentos.map((segmento, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#f8f9fa',
                borderRadius: '12px',
                p: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 2,
                transition: 'transform 0.2s, box-shadow 0.2s',
                cursor: 'pointer',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }
              }}
            >
              <Typography sx={{ fontSize: '1.5rem' }}>
                {segmento.icone}
              </Typography>
              <Typography 
                sx={{ 
                  color: '#333',
                  fontWeight: 500
                }}
              >
                {segmento.nome}
              </Typography>
            </Box>
          ))}
        </Box>

        {/* Seção de Planos */}
        <Box sx={{ textAlign: 'center', maxWidth: '1000px', mx: 'auto' }}>
          <Typography 
            component="h2" 
            sx={{ 
              fontSize: { xs: '2rem', md: '2.75rem' },
              fontWeight: 700,
              color: '#333',
              mb: 3
            }}
          >
            PLANOS CONTEÚDO:{' '}
            <Typography 
              component="span" 
              sx={{ 
                fontSize: 'inherit',
                fontWeight: 'inherit',
                color: '#333',
                display: 'inline'
              }}
            >
              Escolha o ideal para o seu negócio!
            </Typography>
          </Typography>

          <Typography 
            sx={{ 
              color: '#666',
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Descubra o plano perfeito para impulsionar sua presença digital. Nossos pacotes são 
            flexíveis e projetados para atender às necessidades de cada negócio, desde o pequeno 
            empreendedor até grandes empresas. Escolha o que melhor se adapta aos seus objetivos e 
            comece a transform
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}; 