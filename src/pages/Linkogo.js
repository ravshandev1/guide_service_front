import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import PersonIcon from '@mui/icons-material/Person';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import '../pages/linkogo.css';

const actions = [
  { icon: <a href='https://instagram.com/expert.tour.guide?igshid=ZDdkNTZiNTM='><InstagramIcon /></a>, name: 'Instagram' },
  { icon: <a href='https://t.me/+998500019944'><TelegramIcon /></a>, name: 'Telegram' },
  { icon: <a href='https://wa.me/qr/ZNXWW65DCEKUN1'><WhatsAppIcon /></a>, name: 'WhatsApp' },
];

export default function BasicSpeedDial() {
  return (
    <Box className="linkogo"  sx={{height: 0, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'sticky',  bottom: 16, right: 16 }}
        icon={<PersonIcon/>}
      >
        {actions.map((action) => (
          <SpeedDialAction
           className="bg-black text-white"
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}