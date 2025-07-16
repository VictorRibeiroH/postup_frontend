import { Box, Container, Typography, Button } from '@mui/material';

export const PricingSection = () => {
  const planos = [
    {
      nome: 'START',
      preco: '100',
      descricao: 'Ideal para quem está começando! Gestão de conteúdo com 4 artes personalizáveis para dar o pontapé inicial na sua presença online.',
      popular: false,
      linha: 1
    },
    {
      nome: 'GROWTH',
      preco: '180',
      descricao: 'Perfeito para quem busca expandir! Gestão de conteúdo com 8 artes personalizáveis para um crescimento consistente e engajamento da sua audiência.',
      popular: false,
      linha: 1
    },
    {
      nome: 'PRO',
      preco: '249',
      descricao: 'Nosso plano mais popular! Gestão de conteúdo com 12 artes personalizáveis, ideal para negócios que buscam alta frequência e impacto nas redes sociais.',
      popular: true,
      linha: 1
    },
    {
      nome: 'ADVANCED',
      preco: '399',
      descricao: 'Para empresas em crescimento! Gestão de conteúdo com 20 artes personalizáveis, relatórios avançados e suporte prioritário.',
      popular: false,
      linha: 2
    },
    {
      nome: 'ENTERPRISE',
      preco: '599',
      descricao: 'Solução completa para grandes empresas! Gestão de conteúdo ilimitada, consultoria estratégica e recursos exclusivos.',
      popular: false,
      linha: 2
    }
  ];

  return (
    <Box 
      component="section" 
      sx={{ 
        py: 8,
        backgroundColor: '#f8f9fa'
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
            PLANOS CONTEÚDO:{' '}
            <Typography 
              component="span" 
              sx={{ 
                fontSize: 'inherit',
                fontWeight: 'inherit',
                color: '#FF6B35',
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
            empreendedor até grandes empresas. Escolha o que melhor se adapta aos seus objetivos 
            e comece a transformar seus resultados hoje mesmo!
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'center', width: '100%' }}>
          {/* Primeira linha - 3 cards */}
          <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            width: '100%',
            justifyContent: 'space-between',
            flexWrap: { xs: 'wrap', md: 'nowrap' }
          }}>
            {planos.filter(p => p.linha === 1).map((plano) => (
              <Box
                key={plano.nome}
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 320px', md: '1 1 0' },
                  minWidth: { xs: '100%', sm: '320px', md: 0 },
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  border: plano.popular ? '2px solid #FF6B35' : '1px solid #e0e0e0',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                {/* Resto do conteúdo do card permanece igual */}
                {plano.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: 24,
                      backgroundColor: '#FF6B35',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }}
                  >
                    MAIS POPULAR
                  </Box>
                )}

                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#333',
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  {plano.nome}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                  <Typography component="span" sx={{ fontSize: '1rem', color: '#666', mr: 1 }}>
                    R$
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: '3.5rem',
                      fontWeight: 700,
                      color: '#FF6B35',
                      lineHeight: 1
                    }}
                  >
                    {plano.preco}
                  </Typography>
                  <Typography component="span" sx={{ fontSize: '1rem', color: '#666', ml: 1 }}>
                    /MES
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: '#666',
                    textAlign: 'center',
                    mb: 4,
                    minHeight: '80px'
                  }}
                >
                  {plano.descricao}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.5,
                    backgroundColor: '#FF6B35',
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#ff5722'
                    }
                  }}
                >
                  Escolher Plano
                </Button>
              </Box>
            ))}
          </Box>

          {/* Segunda linha - 2 cards */}
          <Box sx={{ 
            display: 'flex', 
            gap: 3, 
            width: '100%',
            justifyContent: 'flex-start',
            flexWrap: { xs: 'wrap', md: 'nowrap' }
          }}>
            {planos.filter(p => p.linha === 2).map((plano) => (
              <Box
                key={plano.nome}
                sx={{
                  flex: { xs: '1 1 100%', sm: '1 1 320px', md: '0 1 320px' },
                  minWidth: { xs: '100%', sm: '320px' },
                  maxWidth: '320px',
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  position: 'relative',
                  border: plano.popular ? '2px solid #FF6B35' : '1px solid #e0e0e0',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    transition: 'transform 0.3s ease'
                  }
                }}
              >
                {plano.popular && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: -12,
                      right: 24,
                      backgroundColor: '#FF6B35',
                      color: 'white',
                      px: 2,
                      py: 0.5,
                      borderRadius: '12px',
                      fontSize: '0.875rem',
                      fontWeight: 600
                    }}
                  >
                    MAIS POPULAR
                  </Box>
                )}

                <Typography
                  variant="h3"
                  component="h3"
                  sx={{
                    fontSize: '1.75rem',
                    fontWeight: 700,
                    color: '#333',
                    mb: 3,
                    textAlign: 'center'
                  }}
                >
                  {plano.nome}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 3 }}>
                  <Typography component="span" sx={{ fontSize: '1rem', color: '#666', mr: 1 }}>
                    R$
                  </Typography>
                  <Typography
                    component="span"
                    sx={{
                      fontSize: '3.5rem',
                      fontWeight: 700,
                      color: '#FF6B35',
                      lineHeight: 1
                    }}
                  >
                    {plano.preco}
                  </Typography>
                  <Typography component="span" sx={{ fontSize: '1rem', color: '#666', ml: 1 }}>
                    /MES
                  </Typography>
                </Box>

                <Typography
                  sx={{
                    color: '#666',
                    textAlign: 'center',
                    mb: 4,
                    minHeight: '80px'
                  }}
                >
                  {plano.descricao}
                </Typography>

                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    py: 1.5,
                    backgroundColor: '#FF6B35',
                    borderRadius: '8px',
                    textTransform: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    '&:hover': {
                      backgroundColor: '#ff5722'
                    }
                  }}
                >
                  Escolher Plano
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}; 