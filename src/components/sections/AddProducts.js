import React, {useState}from 'react';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  TextField
} from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Scrollbar, Products_Discount, Products_PriceDetails, Products_ProductDetails } from '../statelessViews';

export const AddProducts = (props) => {
  const {
    count = 0,
    items = [],
    onDeselectAll,
    onDeselectOne,
    onPageChange = () => {},
    onRowsPerPageChange,
    onSelectAll,
    onSelectOne,
    page = 0,
    rowsPerPage = 0,
    selected = []
  } = props;

  const [value, setValue] = useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{display: "flex", flexDirection: "row"}}>
    <Card style={{marginRight: "20px"}}>
        <Box sx={{ minWidth: 300 }}>
        <TabContext value={value}>
          <Box sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "auto" , width: "min-content"}}>
            <Tabs
              orientation="vertical"
              value={value} 
              onChange={handleChange}
              indicatorColor='white'
              textColor="primary"
              aria-label="secondary tabs example"
              initialselectedindex={value}
              centered
            >
              <Tab value="1" label="Product Details" />
              <Tab value="2" label="Price Details" />
              <Tab value="3" label="Discount" />
            </Tabs>
          </Box>
          </TabContext>
        </Box>
      
    </Card>
    <Card style={{minWidth: 1000}}>
      <Scrollbar>
        <Box >
        <TabContext value={value}>
          <TabPanel value="1">
              <>
              <Products_ProductDetails />
              </>
          </TabPanel>
          <TabPanel value="2">
              <>
              <Products_PriceDetails />
              </>
          </TabPanel>
          <TabPanel value="3">
            <>
            <Products_Discount />
            </>
          </TabPanel>
          </TabContext>
        </Box>
      </Scrollbar>
      {/* <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
    </div>
  );
};
