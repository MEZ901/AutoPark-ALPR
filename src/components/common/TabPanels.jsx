import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TabPanels = () => {
  const { role } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  const tabValues = {
    '/home': 1,
    '/home/log': 2,
    '/home/stats': 3,
    '/home/dashboard': 4,
  };
  const initialVal = tabValues[window.location.pathname] || 1;
  const [value, setValue] = useState(initialVal);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 1:
        navigate('/home');
        break;
      case 2:
        navigate('/home/log');
        break;
      case 3:
        navigate('/home/stats');
        break;
      case 4:
        navigate('/home/dashboard');
        break;
      default:
        console.log('Error: No tab selected')
        break;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} variant="scrollable">
          <Tab value={1} label="The current vehicles in the garage" />
          <Tab value={2} label="My log" />
          <Tab value={3} label="Stats" />
          {role === 'admin' && <Tab value={4} label="Dashboard" />}
        </Tabs>
      </Box>
    </Box>
  );
}

export default TabPanels;