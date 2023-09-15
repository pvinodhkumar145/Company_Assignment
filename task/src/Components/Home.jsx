import React from 'react';
import { Box, Typography, Paper } from '@mui/material';
import FlightTakeoffSharpIcon from '@mui/icons-material/FlightTakeoffSharp';
import HotelIcon from '@mui/icons-material/Hotel';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import TrainOutlinedIcon from '@mui/icons-material/TrainOutlined';
import DirectionsBusOutlinedIcon from '@mui/icons-material/DirectionsBusOutlined';
import LocalTaxiOutlinedIcon from '@mui/icons-material/LocalTaxiOutlined';
import MoneyIcon from '@mui/icons-material/Money';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const Home = () => {
  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'center',
        
      }}
    >
      <Paper
        sx={{
          display: 'flex',
          justifyContent: "center",
          alignItems:"center",
          gap: "30px",
          padding: "15px 20px",
        }}
      >
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            '&:hover': { 
              color: 'red', 
            },
        }}>
          <FlightTakeoffSharpIcon />
          <Typography sx={{ fontSize: '12px', }}>Flights</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
          <HotelIcon />
          <Typography sx={{ fontSize: '12px' }}>HotelIcon</Typography>
        </Box>
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}
        > 
          <HomeWorkOutlinedIcon />
          <Typography sx={{ fontSize: '12px' }}>Homestays</Typography>
        </Box>
        <Box 
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}
        >
          <HolidayVillageOutlinedIcon />
          <Typography sx={{ fontSize: '12px' }}>Holiday Packages</Typography>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
          <TrainOutlinedIcon />
          <Typography sx={{ fontSize: '12px' }}>Train</Typography>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
          <DirectionsBusOutlinedIcon />
          <Typography sx={{ fontSize: '12px' }}>Buses</Typography>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
          <LocalTaxiOutlinedIcon />
          <Typography sx={{ fontSize: '12px' }}>Cabs</Typography>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
          <MoneyIcon />
          <Typography sx={{ fontSize: '12px' }}>Forex</Typography>
        </Box>
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        }}>
          <CardGiftcardIcon />
          <Typography sx={{ fontSize: '12px' }}>GiftCard</Typography>
        </Box>
      </Paper>
    </div>
  );
}

export default Home;
