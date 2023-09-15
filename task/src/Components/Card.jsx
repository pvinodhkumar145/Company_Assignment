import React from 'react';
import { Box, FormControl, FormControlLabel, RadioGroup, Radio, Paper, Typography, Button } from '@mui/material';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';


const Card = () => {


  return (
    <div>

      <Box>
        <Paper>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '20px',
            paddingTop: '70px',
            margin: '20px',
            

          }}>
            <Box sx={{


            }}>
              <FormControl component="fieldset" sx={{
                fontSize: '12px'
              }} >
                <RadioGroup

                  name="radio-buttons-group" sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    fontSize: '1px'
                  }}
                >
                  <FormControlLabel value="One Way" control={<Radio />} label="One Way" />
                  <FormControlLabel value="Round Trip" control={<Radio />} label="Round Trip" />
                  <FormControlLabel value="Mult City" control={<Radio />} label="Mult City" />
                </RadioGroup>
              </FormControl>
            </Box>

            <Box>
              <Typography>Book International and Domestic Flights</Typography>
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
          margin:'20px',
            boxShadow: '1px 1px 2px 1px',
            bgcolor: '#b7d4d9',
            border: '10px',
            height:'120px',



          }}>

            <Paper sx={{
              
              padding: '20px',
              transition: 'background-color 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#b2f0ec',
              }

            }}>
              <Box>
                <Typography sx={{
                  fontSize: '15px'
                }}>
                  From
                </Typography>
                <Typography variant='h5'>
                  Delhi
                </Typography>
                <Typography sx={{
                  fontSize: '15px'
                }} >
                  Delhi Airport India
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{
              padding: '20px',
              transition: 'background-color 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#b2f0ec',
              }

            }}>
              <Box>
                <Typography sx={{
                  fontSize: '15px'
                }}>
                  To
                </Typography>
                <Typography variant='h5'>
                  Bangaluru
                </Typography>
                <Typography sx={{
                  fontSize: '15px'
                }}>
                  BLR, Bengaluru International Airport India
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{
              padding: '20px',
              transition: 'background-color 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#b2f0ec',
              }
            }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',


                }}>
                <Typography variant='h6' sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '15px'
                }}>
                  Departure
                  <KeyboardArrowDownOutlinedIcon />
                </Typography>

                <Typography>
                  <Box sx={{
                    display: 'flex',
                    alignItems: 'center'

                  }}>
                    <Typography variant='h5'>
                      14

                    </Typography>
                    <Typography sx={{
                      fontSize: '20px'
                    }}>Sep'23</Typography>
                  </Box>

                </Typography>
                <Typography
                  sx={{
                    fontSize: '15px'
                  }}>
                  Thursday
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{
              padding: '20px',
              transition: 'background-color 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#b2f0ec',
              }
            }}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',


                }}>
                <Typography variant='h6' sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '15px'
                }}>
                  Return
                  <KeyboardArrowDownOutlinedIcon sx={{ color: '#17cdc1' }} />
                </Typography>
                <Typography sx={{
                  fontSize: '13px'
                }}>
                  Tap to Add a return
                </Typography>
                <Typography sx={{
                  fontSize: '13px'
                }}>
                  data for bigger
                </Typography>
                <Typography sx={{
                  fontSize: '13px'
                }}>
                  discounts
                </Typography>
              </Box>
            </Paper>
            <Paper sx={{
              padding: '22px',
              paddingRight:'120px',
              transition: 'background-color 0.3s ease-in-out',
              '&:hover': {
                backgroundColor: '#b2f0ec',
              }



            }}>
              <Box>
                <Typography sx={{
                  display: 'flex',

                  justifyContent: 'center',
                  alignItems: 'center',




                }}>
                  Travellers & Class
                  <KeyboardArrowDownOutlinedIcon sx={{ color: '#17cdc1' }} />

                </Typography>
                <Box>

                  <Box sx={{
                    display: 'flex', flexDirection: 'column',
                  }}>

                    <Typography variant='h5'>
                      1
                      <label sx={{
                        fontSize: '10px'

                      }}> Traveller</label>
                    </Typography>
                  </Box>
                </Box>
                <Typography sx={{
                  fontSize: '15px'
                }}>
                  Economy/Premium Economy
                </Typography>
              </Box>
            </Paper>


          </Box>
          <Box sx={{
            display: 'flex',
            alignItems: 'center'

          }}>
            <Box>
              <FormControl>

                <RadioGroup
                  sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: '20px',

                  }}

                  name="radio-buttons-group"
                >
                  <Typography sx={{
                    color: 'black',
                    margin: '20px'


                  }}>
                    Select A
                    <br />
                    Fare Type:
                  </Typography>

                  <FormControlLabel sx={{
                    background: '#c3e3e8',
                    borderRadius: '5px'
                  }}
                    value="Regular Fares"
                    control={<Radio />}
                    label={
                      <div style={{ width: '100px', }}>
                        <Typography sx={{ fontSize: '13px' }}>Regular Fares </Typography>
                      </div>
                    }
                  />
                  <FormControlLabel sx={{
                    background: '#c3e3e8'
                  }}
                    value="Armed Forces Fares"
                    control={<Radio />}
                    label={
                      <div style={{ width: '100px', }}>
                        <Typography sx={{ fontSize: '13px' }}> Armed Forces Fares </Typography>
                      </div>
                    }
                  />
                  <FormControlLabel sx={{
                    background: '#c3e3e8'
                  }}
                    value=" Student Fares"
                    control={<Radio />}
                    label={
                      <div style={{ width: '100px', }}>
                        <Typography sx={{ fontSize: '13px' }}>  Student Fares</Typography>
                      </div>
                    }
                  />
                  <FormControlLabel sx={{
                    background: '#c3e3e8',
                    borderRadius: '5px'
                  }}
                    value="Senior Citizen Fares"
                    control={<Radio />}
                    label={
                      <div style={{ width: '100px', }}>
                        <Typography sx={{ fontSize: '13px' }}> Senior Citizen Fares </Typography>

                      </div>
                    }
                  />
                  <FormControlLabel sx={{
                    background: '#c3e3e8',
                    borderRadius: '5px'
                  }}
                    value="Doctors & Nurses Fares"
                    control={<Radio />}
                    label={
                      <div style={{ width: '100px', }}>
                        <Typography sx={{ fontSize: '13px' }}> Doctors & Nurses Fares </Typography>

                      </div>
                    }
                  />
                  <FormControlLabel sx={{
                    background: '#c3e3e8',
                    borderRadius: '5px'
                  }}
                    value="Double Seat Fares"
                    control={<Radio />}
                    label={
                      <div style={{ width: '100px', }}>
                        <Typography sx={{ fontSize: '13px' }}> Double Seat Fares </Typography>

                      </div>
                    }
                  />

                  <Box sx={{
                    bgcolor: '#c3e3e8',

                  }}>
                  </Box>
                </RadioGroup>
              </FormControl>
            </Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '5px',
              padding: '10px'

            }}>

              <Typography sx={{
                fontSize: '15px',
                margin: '10px'
              }}>
                Trending Searches:
              </Typography>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '13px',
                bgcolor: '#c3e3e8',
                padding: '3px'
              }}>
                Mumbai <ArrowRightAltIcon sx={{ color: '#44a1b0' }} /> Bangkok
              </Typography>
              <Typography sx={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '13px',
                bgcolor: '#c3e3e8',
                margin: '10px',
                padding: '3px'
              }}>
                Delhi <ArrowRightAltIcon sx={{ color: '#44a1b0' }} /> Paris
              </Typography>
            </Box>
          </Box>
        </Paper>
        
        <div style={{
          position: 'relative',
          marginTop: '28px'
        }}>
          {/* Create a container for the button */}
          <div style={{
            position: 'absolute',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: '1',
          }}>
            <Button
              sx={{
                bgcolor: 'blue',
                fontSize: '20px',
                padding: '10px 50px',
                borderRadius: '20px',
                color: 'white',
               
              }}
            >
              SEARCH
            </Button>
          </div>
        </div>

      </Box>
    </div>
  );
}

export default Card;