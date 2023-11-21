import React, {useState}from 'react';
import { useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import MenuItem from '@mui/material/MenuItem';
import { Grid, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { brandKit } from '../theme/colors';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import InventoryIcon from '@mui/icons-material/Inventory';
import SimpleBar from 'simplebar-react';
import { styled } from '@mui/material/styles';

export const Scrollbar = styled(SimpleBar)``;

export const AddProductDialogBox = (props) => {
    debugger;
    const [open, setOpen] = useState(props.open);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

  return (
    <>
    
      <Dialog open={open} onClose={props.close}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >
          <div>
            <TextField
              required
              id="outlined-required"
              label="Required"
              defaultValue="Hello World"
            />
            <TextField
              disabled
              id="outlined-disabled"
              label="Disabled"
              defaultValue="Hello World"
            />
            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
            <TextField
              id="outlined-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
            />
            <TextField
              id="outlined-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <TextField id="outlined-search" label="Search field" type="search" />
            <TextField
              id="outlined-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
            />
          </div>
          <div>
            <TextField
              required
              id="filled-required"
              label="Required"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              disabled
              id="filled-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="filled"
            />
            <TextField
              id="filled-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="filled"
            />
            <TextField
              id="filled-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="filled"
            />
            <TextField
              id="filled-search"
              label="Search field"
              type="search"
              variant="filled"
            />
            <TextField
              id="filled-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              required
              id="standard-required"
              label="Required"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              disabled
              id="standard-disabled"
              label="Disabled"
              defaultValue="Hello World"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
            />
            <TextField
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="standard"
            />
          </div>
        </Box>
    </DialogContent>
    <DialogActions>
        <Button onClick={props.close}>Cancel</Button>
        <Button onClick={props.close}>Subscribe</Button>
    </DialogActions>
    </Dialog>
      </>
  )
}

const dummyData = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];


const TypoTextGridItem = ({title}) => {
  var id = "outlined-"+ title.toLowerCase().replace(" ", "") + "-input"
  return(
    <>
      <Typography variant='subtitle2'>{title}</Typography>
      <TextField
          id={id}
          type="name"
      /> 
    </>
  )
}


export const Products_ProductDetails = () => {
  
  
  return(
      <>
            <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                  minWidth: 800
                }}
                noValidate
                autoComplete="off"

              >
              <div>
                
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item>
                    <Typography variant='subtitle2'>Brand</Typography>
                    <TextField
                      id="outlined-select-currency"
                      select
                      defaultValue=""
                    >
                      {dummyData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    </Grid>
                    <Grid item>
                    <Typography variant='subtitle2'>Category</Typography>
                    <TextField
                      id="outlined-select-currency"
                      select
                      defaultValue=""
                    >
                      {dummyData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                  <Grid item>
                    <Typography variant='subtitle2'>Sub-Category</Typography>
                    <TextField
                      id="outlined-select-currency"
                      select
                      
                      defaultValue=""
                    >
                      {dummyData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                </Grid>
                </Grid>    
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Grid item>
                        <TypoTextGridItem title="Name" />
                     </Grid>
                     <Grid item>
                        <TypoTextGridItem title="Model Number" />
                     </Grid>
                     <Grid item>
                        <TypoTextGridItem title="OEM" />
                     </Grid>
                  </Grid>
                  <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                   <Grid item>
                        <TypoTextGridItem title="HSN Code"/>
                     </Grid>
                     <Grid item>
                      <TypoTextGridItem title="SKU Code"/>
                     </Grid>
                  <Grid item>
                    <Typography variant='subtitle2'>Unit-Type</Typography>
                    <TextField
                      id="outlined-select-unitType"
                      select
                      defaultValue=""
                    >
                      {dummyData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                </Grid>
                </Grid>
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item>
                      <TypoTextGridItem title="size"/>
                     </Grid>
                     <Grid item>
                        <TypoTextGridItem title="Warranty In Months"/>
                     </Grid>
                     <Grid item>
                     <TypoTextGridItem title="Tags"/>
                     </Grid>
                  </Grid> 
                  <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                   <Grid item>
                      <TypoTextGridItem title="Specification"/>
                    </Grid>
                  </Grid> 

                  <div>
                    <Accordion>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        style={{backgroundColor: brandKit.sideNav}}
                      >
                      <Typography>Show Advanced Options</Typography>
                      
                      </AccordionSummary>
                      <AccordionDetails>
                        <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                        spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                          <Grid item>
                              <Typography variant='subtitle2'>Measurement Type</Typography>
                              <TextField
                                id="outlined-select-unitType"
                                select
                                defaultValue=""
                              >
                                {dummyData.map((option) => (
                                  <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                  </MenuItem>
                                ))}
                              </TextField>
                          </Grid>
                            <Grid item>
                                <TypoTextGridItem title="Measurement Formula"/>
                            </Grid>
                            <Grid item>
                            <TypoTextGridItem title="Labor Hours"/>
                            </Grid>
                        </Grid> 
                        <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                          spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                          <Grid item>
                          <TypoTextGridItem title="Required Days"/>
                            </Grid>
                            <Grid item>
                            <TypoTextGridItem title="Video"/>
                            </Grid>
                            <Grid item>
                            <TypoTextGridItem title="Barcode Number"/>
                            </Grid>
                          </Grid> 
                      </AccordionDetails>
                    </Accordion>
                    </div>
              </div>
          </Box>
    </>
  )
}

export const Products_PriceDetails = () => {
  
  
  return(
      <>
            <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
              <div>
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item>
                    <Typography variant='subtitle2'>GST (%)</Typography>
                    <TextField
                      id="outlined-select-currency"
                      select
                      defaultValue=""
                    >
                      {dummyData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                    </Grid>
                    <Grid item>
                    <TypoTextGridItem title="Price"/>
                     </Grid>
                     <Grid item>
                     <TypoTextGridItem title="Price with GST"/>
                     </Grid>
                </Grid>    
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Grid item>
                      <TypoTextGridItem title="Price Without GST"/>
                     </Grid>
                     <Grid item>
                     <TypoTextGridItem title="Purchase Rate"/>
                     </Grid>
                     <Grid item>
                        <Typography variant='subtitle2'>Dealer Discount Type</Typography>
                        <TextField
                          id="outlined-select-currency"
                          select
                          defaultValue=""
                        >
                          {dummyData.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                    </Grid>
                  </Grid>
                  <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                   <Grid item>
                   <TypoTextGridItem title="Dealer Discount"/>
                     </Grid>
                     <Grid item>
                        <Typography variant='subtitle2'>Profit Margin Type</Typography>
                        <TextField
                          id="outlined-select-currency"
                          select
                          defaultValue=""
                        >
                          {dummyData.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                    </Grid>
                  <Grid item>
                    <Typography variant='subtitle2'>Profit Margin</Typography>
                    <TextField
                      id="outlined-select-unitType"
                      select
                      defaultValue=""
                    >
                      {dummyData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                </Grid>
                </Grid>
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                   <Grid item>
                   <TypoTextGridItem title="Sales Rate"/>
                     </Grid>
                     <Grid item>
                     <TypoTextGridItem title="Unit Rate Including GST"/> 
                     </Grid>
                     <Grid item>
                     <TypoTextGridItem title="Unit Rate Excluding GST"/>
                     </Grid>
                  </Grid> 
                  <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      
                 {/*  <Grid item>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker />
                  </LocalizationProvider>
                  </Grid> */}

                    <Grid item>
                    <TypoTextGridItem title="Effective Date"/>
                     </Grid>
                   <Grid item>
                    <Typography variant='subtitle2'>Status</Typography>
                    <TextField
                      id="outlined-select-unitType"
                      select
                      defaultValue=""
                    >
                      {dummyData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                </Grid>
              </Grid> 
              </div>
          </Box>
    </>
  )
}

export const Products_Discount = () => {
  
  
  return(
      <>
            <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
              >
              <div>
                
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item>
                    <TypoTextGridItem title="Name"/>
                     </Grid>
                     <Grid item>
                        <Typography variant='subtitle2'>Status</Typography>
                        <TextField
                          id="outlined-select-status"
                          select
                          defaultValue=""
                        >
                          {dummyData.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))}
                        </TextField>
                    </Grid>
                </Grid>    
                <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                    spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Grid item>
                      <TypoTextGridItem title="Start Date"/>
                     </Grid>
                      <Grid item>
                      <TypoTextGridItem title="End Date"/>
                     </Grid>
                  </Grid>
                  <Grid container wrap='no-wrap' justifyContent={'space-around'} 
                      spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                      <Grid item>
                            <Typography variant='subtitle2'>Discount Type</Typography>
                            <TextField
                              id="outlined-select-discount-type"
                              select
                              defaultValue=""
                            >
                              {dummyData.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                  {option.label}
                                </MenuItem>
                              ))}
                            </TextField>
                        </Grid>
                  <Grid item>
                    <Typography variant='subtitle2'>Amount</Typography>
                    <TextField
                      id="outlined-select-unitType"
                      select
                      defaultValue=""
                    >
                      {dummyData.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </Grid>
                </Grid>
              </div>
          </Box>
    </>
  )
}

export const SupplyChain_Dashboard = () => {

  const theme = useTheme();
  return (
    <>
        <Card sx={{ display: 'flex' , maxWidth: 345, justifyContent: "center", alignItems: "center", backgroundColor: "#C7F1DD"}}>
          
          <InventoryIcon />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flex: '1 1 auto' }}>
              <Typography component="div" variant="h5">
                0
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" component="div">
                Supplies Approved
              </Typography>
            </CardContent>
            {/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
              <IconButton aria-label="previous">
                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
              </IconButton>
              <IconButton aria-label="play/pause">
                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
              </IconButton>
              <IconButton aria-label="next">
                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
              </IconButton>
            </Box> */}
          </Box>
          
    </Card>
    </>
  )
}