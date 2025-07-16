import { Box, Button, Container, Typography } from '@mui/material';
import { MetricCard } from './MetricCard';
import { DateRangePicker } from './DateRangePicker';
import { DashboardCharts } from './DashboardCharts';
import { useState } from 'react';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface DateRange {
  start: Date;
  end: Date;
  label?: string;
}

export const DashboardSection = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    start: new Date(2024, 3, 14), // 14 de Abril de 2024
    end: new Date(2024, 4, 3)     // 3 de Maio de 2024
  });

  const handleDateRangeChange = (newRange: DateRange) => {
    setDateRange(newRange);
    // Aqui você pode implementar a lógica para atualizar os dados baseado no período
    console.log('Novo período:', {
      inicio: format(newRange.start, 'dd/MM/yyyy', { locale: ptBR }),
      fim: format(newRange.end, 'dd/MM/yyyy', { locale: ptBR })
    });
  };

  const metrics = [
    {
      icon: '📊',
      title: 'Alcance Total',
      value: '8.473'
    },
    {
      icon: '👁️',
      title: 'Views',
      value: '20.381'
    },
    {
      icon: '💬',
      title: 'Conversas Iniciadas',
      value: '143'
    },
    {
      icon: '💰',
      title: 'Valor Investido em Anúncio',
      value: 'R$218,49'
    }
  ];

  return (
    <Box component="section" sx={{ py: 6, backgroundColor: '#f8f9fa' }}>
      <Container maxWidth="lg">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'stretch', sm: 'center' },
            gap: 2,
            mb: 3
          }}
        >
          <Typography 
            variant="h5" 
            component="h2" 
            sx={{ 
              color: '#333',
              fontWeight: 700,
              fontSize: '1.25rem'
            }}
          >
            Dashboard do cliente
          </Typography>
          
          <Box 
            sx={{ 
              display: 'flex',
              gap: 2,
              flexWrap: { xs: 'wrap', md: 'nowrap' },
              justifyContent: { xs: 'stretch', sm: 'flex-end' }
            }}
          >
            <DateRangePicker onRangeChange={handleDateRangeChange} />
            <Button 
              variant="contained" 
              fullWidth={false}
              sx={{ 
                backgroundColor: '#FF6B35',
                minWidth: 'fit-content',
                '&:hover': {
                  backgroundColor: '#ff5722'
                }
              }}
            >
              Baixar Relatório
            </Button>
          </Box>
        </Box>

        <Box 
          sx={{ 
            display: 'flex',
            flexWrap: 'wrap',
            gap: 3,
            mb: 3
          }}
        >
          {metrics.map((metric, index) => (
            <Box 
              key={index}
              sx={{ 
                flexBasis: {
                  xs: '100%',
                  sm: 'calc(50% - 12px)',
                  md: 'calc(25% - 18px)'
                }
              }}
            >
              <MetricCard {...metric} />
            </Box>
          ))}
        </Box>

        <DashboardCharts />
      </Container>
    </Box>
  );
}; 