import React from 'react'
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ArrowDownOnSquareIcon from '@heroicons/react/24/solid/ArrowDownOnSquareIcon';
import ArrowUpOnSquareIcon from '@heroicons/react/24/solid/ArrowUpOnSquareIcon';
import PlusIcon from '@heroicons/react/24/solid/PlusIcon';
import { Box, Button, Container, Stack, SvgIcon, Typography } from '@mui/material';
import { useSelection } from '../../hooks/use-selection';
import { ProductsTable } from './ProductsTables';
import { AddProductDialogBox } from '../statelessViews';
import { AddProducts } from './AddProducts';
import { listProducts } from '../../actions/productActions';
import { useGetProductsQuery } from '../../slices/productsApiSlice';
import axios from 'axios';

  const data = [
    {
      id: '5e887ac47eed253091be10cb',
      address: {
        city: 'Cleveland',
        country: 'USA',
        state: 'Ohio',
        street: '2849 Fulton Street'
      },
      brand: 'johnson and johnson',
      createdAt: "",
      category: 'Consumables',
      name: 'JandJ',
      modelNo: '304-428-3097',
      oem: "johnson and johnson",
      hsnCode: "code1",
      salesRate: 5,
      gst: 12,
      unitRate: 'tbd'
    },
    {
      id: '5e887b209c28ac3dd97f6db5',
      address: {
        city: 'Atlanta',
        country: 'USA',
        state: 'Georgia',
        street: '1865  Pleasant Hill Road'
      },
      brand: 'Dettol',
      createdAt: "",
      category: 'Consumables',
      name: 'Dettol Consumables',
      modelNo: '712-351-5711',
      oem: "dettol",
      hsnCode: "code2",
      salesRate: 5,
      gst: 12,
      unitRate: 'tbd'
    },
    {
      id: '5e887b7602bdbc4dbb234b27',
      address: {
        city: 'North Canton',
        country: 'USA',
        state: 'Ohio',
        street: '4894  Lakeland Park Drive'
      },
      brand: 'Dr Reddys',
      createdAt: "",
      category: 'Consumables',
      name: 'Reddys Consumables',
      modelNo: '770-635-2682',
      oem: "dr reddys",
      hsnCode: "code3",
      salesRate: 5,
      gst: 12,
      unitRate: 'tbd'
    },
    {
      id: '5e86809283e28b96d2d38537',
      address: {
        city: 'Madrid',
        country: 'Spain',
        name: 'Anika Visser',
        street: '4158  Hedge Street'
      },
      brand: 'Cipla',
      createdAt: "",
      category: 'Consumables',
      name: 'Cipla Consumables',
      modelNo: '908-691-3242',
      oem: "cipla",
      hsnCode: "code4",
      salesRate: 5,
      gst: 12,
      unitRate: 'tbd'
    },
    {
      id: '5e86805e2bafd54f66cc95c3',
      address: {
        city: 'San Diego',
        country: 'USA',
        state: 'California',
        street: '75247'
      },
      brand: 'Lupin',
      createdAt: "",
      category: 'Consumables',
      name: 'Lupin Consumables',
      modelNo: '972-333-4106',
      oem: "lupin",
      hsnCode: "code5",
      salesRate: 5,
      gst: 12,
      unitRate: 'tbd'
    },
    {
      id: '5e887a1fbefd7938eea9c981',
      address: {
        city: 'Berkeley',
        country: 'USA',
        state: 'California',
        street: '317 Angus Road'
      },
      brand: 'Biocon',
      createdAt: "",
      category: 'Consumables',
      name: 'Biocon Consumables',
      modelNo: '858-602-3409',
      oem: "biocon",
      hsnCode: "code6",
      salesRate: 5,
      gst: 12,
      unitRate: 'tbd'
    },
    {
      id: '5e887d0b3d090c1b8f162003',
      address: {
        city: 'Carson City',
        country: 'USA',
        state: 'Nevada',
        street: '2188  Armbrester Drive'
      },
      brand: 'Sun Pharma',
      createdAt: "",
      category: 'Consumables',
      name: 'SunPharma Consumables',
      modelNo: '415-907-2647',
      oem: "sun pharma",
      hsnCode: "code7",
      salesRate: 5,
      gst: 12,
      unitRate: 'tbd'
    },
    {
      id: '5e88792be2d4cfb4bf0971d9',
      address: {
        city: 'Los Angeles',
        country: 'USA',
        state: 'California',
        street: '1798  Hickory Ridge Drive'
      },
      brand: 'Dabur',
      createdAt:"",
      category: 'Consumables',
      name: 'Dabur Consumables',
      modelNo: '702-661-1654',
      oem: "dabur",
      hsnCode: "code8",
      salesRate: 5,
      gst: 12,
      unitRate: 'tbd'
    },
    {
      id: '5e8877da9a65442b11551975',
      address: {
        city: 'Murray',
        country: 'USA',
        state: 'Utah',
        street: '3934  Wildrose Lane'
      },
      brand: 'Himalaya',
      createdAt: "",
      category: 'Consumables',
      name: 'Himalaya COnsumables',
      modelNo: '313-812-8947',
      oem: "himalaya",
      hsnCode: "code9",
      salesRate: 5,
      gst: 12,
      unitRate: 'tbd'
    },
    {
      id: '5e8680e60cba5019c5ca6fda',
      address: {
        city: 'Salt Lake City',
        country: 'USA',
        state: 'Utah',
        street: '368 Lamberts Branch Road'
      },
      brand: 'Roche',
      createdAt: "",
      category: 'Consumables',
      name: 'Roche Consumables',
      modelNo: '801-301-7894',
      oem: "roche",
      hsnCode: "code10",
      salesRate: 5,
      gst: 12,
      unitRate: 'tbd'
    }
  ];
  debugger;


const Products = () => {
    const dispatch = useDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [showAddProductDialog, setShowAddProductDialog] = useState(false);
    const [showAddProductsForm, setShowAddProductsForm] = useState(false);
    const [prods, setProds] = useState([]);
    let _products = []

   /*  const getData = async() => {
        debugger;
        _products = await axios.get('http://localhost:3500/product')
        console.log(_products)
        setProds(_products)
    }
    
  useEffect(() => {
    debugger;
    dispatch(listProducts())
    //products = axios.get(`http://localhost:3500/product`)

    getData();
  }, [dispatch]) */

  const {data: products, loading } = useGetProductsQuery();

  //const productList = useSelector(state => state.productList)
  //const {products} = productList

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 12
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Stack
              direction="row"
              justifyContent="space-between"
              spacing={4}
            >
              <Stack spacing={1} direction="row">
                <Typography variant="h4">
                  Products
                </Typography>

                {/* TO DO : Alignment needs to be fixed after adding the Search Bar */}
               {/*  <CustomersSearch /> */}
                
                <Stack
                  alignItems="center"
                  direction="row"
                  spacing={1}
                >
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowUpOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Import
                  </Button>
                  <Button
                    color="inherit"
                    startIcon={(
                      <SvgIcon fontSize="small">
                        <ArrowDownOnSquareIcon />
                      </SvgIcon>
                    )}
                  >
                    Export
                  </Button>
                </Stack>
              </Stack>
              <div>
                <Button
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <PlusIcon />
                    </SvgIcon>
                  )}
                  variant="contained"
                  onClick={() => {setShowAddProductsForm(!showAddProductsForm)}}
                >
                  {showAddProductsForm ? "Save" : "Add"}
                </Button>
              </div>
            </Stack>
            
            {/* {showAddProductDialog && <AddProductDialogBox open={showAddProductDialog} close={() => setShowAddProductDialog(false)}/>} */}

            {showAddProductsForm ? 
                <AddProducts /> 
                : 
                <ProductsTable
                    count={products?.length}
                    items={products}
                    //onDeselectAll={customersSelection.handleDeselectAll}
                    //onDeselectOne={customersSelection.handleDeselectOne}
                    //onPageChange={handlePageChange}
                    //onRowsPerPageChange={handleRowsPerPageChange}
                    //onSelectAll={customersSelection.handleSelectAll}
                    //onSelectOne={customersSelection.handleSelectOne}
                    page={page}
                    rowsPerPage={rowsPerPage}
                    //selected={customersSelection.selected}
              />}
          </Stack>
        </Container>
      </Box>
    </>
  )
}

export default Products
