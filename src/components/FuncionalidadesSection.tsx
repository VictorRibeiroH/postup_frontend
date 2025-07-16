import { Box, Container, Typography } from '@mui/material';

const funcionalidades = [
  {
    icone: '🏠',
    titulo: 'Página Inicial',
    descricao: 'Tenha uma visão geral do seu desempenho e acesse rapidamente as principais ferramentas.'
  },
  {
    icone: '📥',
    titulo: 'Caixa de entrada',
    descricao: 'Centralize suas mensagens e interaja com seus clientes de forma organizada.'
  },
  {
    icone: '📝',
    titulo: 'Conteúdos',
    descricao: 'Crie, edite e organize todo o seu material de marketing em um só lugar.'
  },
  {
    icone: '📅',
    titulo: 'Planner',
    descricao: 'Agende suas postagens e campanhas com antecedência, garantindo consistência e planejamento.'
  },
  {
    icone: '📢',
    titulo: 'Anúncios',
    descricao: 'Gerencie suas campanhas de tráfego pago de forma intuitiva e acompanhe o retorno sobre o investimento.'
  },
  {
    icone: '📊',
    titulo: 'Insights - Dashboard',
    descricao: 'Acesse dados e relatórios detalhados para tomar decisões estratégicas e otimizar suas ações.'
  }
];

export const FuncionalidadesSection = () => {
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
            FUNCIONALIDADES:{' '}
            <Typography 
              component="span" 
              sx={{ 
                fontSize: 'inherit',
                fontWeight: 'inherit',
                color: '#333',
                display: 'inline'
              }}
            >
              Tudo o que você precisa para dominar o marketing digital!
            </Typography>
          </Typography>

          <Typography 
            sx={{ 
              color: '#666',
              fontSize: { xs: '1rem', md: '1.125rem' },
              maxWidth: '800px',
              mx: 'auto',
              lineHeight: 1.6,
              mb: 8
            }}
          >
            A PostUp oferece um conjunto completo de ferramentas para você gerenciar sua presença 
            online de forma eficiente e descomplicada. Explore cada funcionalidade e descubra como 
            podemos otimizar seu tempo e maximizar seus resultados:
          </Typography>
        </Box>

        <Box 
          sx={{ 
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)'
            },
            gap: 4,
            maxWidth: '1200px',
            mx: 'auto'
          }}
        >
          {funcionalidades.map((funcionalidade, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                p: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-8px)'
                }
              }}
            >
              <Box
                sx={{
                  width: 64,
                  height: 64,
                  borderRadius: '16px',
                  backgroundColor: '#FF6B35',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  mb: 2,
                  fontSize: '2rem'
                }}
              >
                {funcionalidade.icone}
              </Box>

              <Typography
                variant="h3"
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#333',
                  mb: 2
                }}
              >
                {funcionalidade.titulo}
              </Typography>

              <Typography
                sx={{
                  color: '#666',
                  fontSize: '1rem',
                  lineHeight: 1.6
                }}
              >
                {funcionalidade.descricao}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}; 