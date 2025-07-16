import { Box, Button, Menu, MenuItem } from '@mui/material';
import { useState } from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { format, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface DateRange {
  start: Date;
  end: Date;
  label?: string;
}

interface DateRangePickerProps {
  onRangeChange: (range: DateRange) => void;
}

export const DateRangePicker = ({ onRangeChange }: DateRangePickerProps) => {
  const today = new Date();
  const [selectedRange, setSelectedRange] = useState<DateRange>({
    start: subDays(today, 7),
    end: today
  });
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const formatDateRange = (start: Date, end: Date) => {
    return `${format(start, 'dd/MM/yyyy', { locale: ptBR })} - ${format(end, 'dd/MM/yyyy', { locale: ptBR })}`;
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleRangeSelect = (days: number | 'all') => {
    const end = new Date();
    let start: Date;
    let label: string | undefined;

    if (days === 'all') {
      start = new Date(2024, 0, 1); // Começa em 1º de Janeiro de 2024
      label = 'Histórico Completo';
    } else {
      start = subDays(end, days);
    }

    const newRange = { start, end, label };
    setSelectedRange(newRange);
    onRangeChange(newRange);
    handleClose();
  };

  return (
    <Box>
      <Button
        onClick={handleClick}
        startIcon={<CalendarTodayIcon />}
        variant="outlined"
        sx={{
          color: '#666',
          borderColor: '#ddd',
          '&:hover': {
            borderColor: '#ccc',
            backgroundColor: 'rgba(0, 0, 0, 0.02)'
          }
        }}
      >
        {selectedRange.label || formatDateRange(selectedRange.start, selectedRange.end)}
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => handleRangeSelect(7)}>Últimos 7 dias</MenuItem>
        <MenuItem onClick={() => handleRangeSelect(14)}>Últimos 14 dias</MenuItem>
        <MenuItem onClick={() => handleRangeSelect(30)}>Últimos 30 dias</MenuItem>
        <MenuItem onClick={() => handleRangeSelect('all')}>Histórico Completo</MenuItem>
      </Menu>
    </Box>
  );
}; 