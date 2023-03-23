import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TabPanels = () => {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
    switch (newValue) {
      case 1:
        navigate('/home/vehicles');
        break;
      case 2:
        navigate('/home/log');
        break;
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab value={1} label="The current vehicles in the garage" />
          <Tab value={2} label="My log" />
        </Tabs>
      </Box>
    </Box>
  );
}

export default TabPanels;