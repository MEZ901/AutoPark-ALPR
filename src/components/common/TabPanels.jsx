import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const TabPanels = () => {
  const { role } = useSelector((state) => state.auth.user);
  const navigate = useNavigate();
  let initialVal;
  switch (window.location.pathname) {
    case '/home':
      initialVal = 1;
      break;
    case '/home/log':
      initialVal = 2;
      break;
    case '/home/dashboard':
      initialVal = 3;
      break;
    default:
      initialVal = 1;
      break;
  }
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
        navigate('/home/dashboard');
        break;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab value={1} label="The current vehicles in the garage" />
          <Tab value={2} label="My log" />
          {role === 'admin' && <Tab value={3} label="Dashboard" />}
        </Tabs>
      </Box>
    </Box>
  );
}

export default TabPanels;