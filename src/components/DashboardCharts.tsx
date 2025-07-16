import { Box, Typography, Tab, Tabs } from '@mui/material';
import { useState } from 'react';
import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';

const mockData = [
  { data: '01/05', alcance: 1200, views: 2800, conversas: 20, investimento: 30.5 },
  { data: '02/05', alcance: 1500, views: 3200, conversas: 25, investimento: 35.8 },
  { data: '03/05', alcance: 1800, views: 4100, conversas: 30, investimento: 42.2 },
  { data: '04/05', alcance: 2200, views: 5000, conversas: 35, investimento: 48.5 },
  { data: '05/05', alcance: 2600, views: 6200, conversas: 40, investimento: 55.9 },
  { data: '06/05', alcance: 3100, views: 7500, conversas: 45, investimento: 62.3 },
  { data: '07/05', alcance: 3700, views: 9000, conversas: 50, investimento: 70.0 }
];

const pieData = [
  { name: 'Alcance', value: 8473, color: '#FF6B35' },
  { name: 'Views', value: 20381, color: '#FF8A65' },
  { name: 'Conversas', value: 143, color: '#FFB299' },
];

interface PieChartLabelProps {
  name: string;
  percent?: number;
}

export const DashboardCharts = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  const renderBarChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={mockData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="alcance" name="Alcance Total" fill="#FF6B35" />
        <Bar dataKey="views" name="Views" fill="#FF8A65" />
        <Bar dataKey="conversas" name="Conversas" fill="#FFB299" />
      </BarChart>
    </ResponsiveContainer>
  );

  const renderPieChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={pieData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={({ name, percent }: PieChartLabelProps) => 
            `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`
          }
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );

  const renderLineChart = () => (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={mockData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="data" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line 
          type="monotone" 
          dataKey="investimento" 
          name="Valor Investido (R$)" 
          stroke="#FF6B35" 
          strokeWidth={2}
          dot={{ fill: '#FF6B35' }}
        />
        <Line 
          type="monotone" 
          dataKey="conversas" 
          name="Conversas" 
          stroke="#FFB299"
          strokeWidth={2}
          dot={{ fill: '#FFB299' }}
        />
      </LineChart>
    </ResponsiveContainer>
  );

  return (
    <Box sx={{ mt: 4, p: 3, backgroundColor: 'white', borderRadius: '16px', boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.05)' }}>
      <Typography variant="h6" sx={{ mb: 3, color: '#333', fontWeight: 600 }}>
        Análise de Desempenho
      </Typography>
      
      <Tabs 
        value={selectedTab} 
        onChange={handleTabChange}
        sx={{ 
          mb: 3,
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 500,
            color: '#666',
            '&.Mui-selected': {
              color: '#FF6B35'
            }
          },
          '& .MuiTabs-indicator': {
            backgroundColor: '#FF6B35'
          }
        }}
      >
        <Tab label="Gráfico de Barras" />
        <Tab label="Gráfico de Pizza" />
        <Tab label="Gráfico de Linha" />
      </Tabs>

      {selectedTab === 0 && renderBarChart()}
      {selectedTab === 1 && renderPieChart()}
      {selectedTab === 2 && renderLineChart()}
    </Box>
  );
}; 