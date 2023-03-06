import { Avatar, Box, Button, Divider, Drawer, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getToken } from '../helper/SessionHelper';
import { decreaseCount, increaseCount, removeFromCart, setIsCartOpen } from '../state/cartSlice';

const Cart = () => {
  const AxiosHeader={headers:{'token':getToken()}}
  const navigate=useNavigate()
    const dispatch = useDispatch();
    const[productQu,setProductQu]=useState(null)
    
    const isCartOpen = useSelector((state) => state.cart.isCartOpen);
  
    const cart = useSelector((state) => state.cart.cart);
    
    
    
    const totalPrice = cart.reduce((total, item) => {
      
      console.log(item)
        return total + item.cartQuantity * item.price;
      
    }, 0);
    localStorage.setItem('total',totalPrice)

    const productQuantaty=async(id)=>{
      console.log(id)
      const product= await axios.get(`http://localhost:5000/api/v1/product/${id}`,AxiosHeader)
      setProductQu(product.data[0].quantity)
    }

  return (
    <Drawer
    open={isCartOpen}
    anchor="right"
    PaperProps={{
        sx:{
            width:500,
            background:"rgba(244, 203, 149,1)"
        }
    }}
    >
        <Box display={'flex'} justifyContent="space-between" alignItems={'center'} padding="20px">
        <Typography variant='h5' >My Cart</Typography>
        <Button onClick={() => dispatch(setIsCartOpen({}))}>X</Button>
        </Box>
        <Divider/>
        {cart.map((item)=>(
            <Box mt={2}>
            <Box display={'flex'}
            alignItems="start"
            justifyContent={"space-between"}
            padding="20px"
            >
    <Avatar src={item.image.fileLocalPath} sx={{width:96, height: 96, objectFit:'cover', mr:2}}/>
    <Box display={"flex"} justifyContent="space-between" paddingRight={"40px"} flexGrow={1} flexDirection={'row'}>
            <Box display={"flex"} flexDirection={"column"}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="subtitle2">{item.description}</Typography>
            </Box>
            <Typography variant="body1">
              {item.price}
            </Typography>
           </Box>
    
            </Box>
            <Box mb={4} display={'flex'} justifyContent="space-between">
              <Box  mb={4} display={'flex'} justifyContent="center" alignItems={'center'}>
              <Button disabled={productQu === item.cartQuantity}  onClick={() => {dispatch(increaseCount( item._id));productQuantaty(  item._id )}} variant="outlined">+</Button>
              <Typography fontSize={20} padding="0px 20px">{item.cartQuantity}</Typography>
              <Button onClick={() => dispatch(decreaseCount( item._id))} variant="outlined" >-</Button>
            </Box>
              <Box  mb={4} display={'flex'} justifyContent="center" alignItems={'center'}>
              <Button onClick={() => dispatch(removeFromCart( item._id))} variant="outlined">Remove</Button>
             
            </Box>

            </Box>
            <Divider/>
            </Box>
        ))}

        <Box display={'flex'} justifyContent={"space-between"} padding="20px">
            <Typography variant='h5'>Total</Typography>
            <Typography >${totalPrice}</Typography>
        </Box>
        <Box display={'flex'} justifyContent={"space-between"} padding="20px">
          <Button onClick={()=>{navigate('/checkout');dispatch(setIsCartOpen())}}>Check Out</Button>
        </Box>
    </Drawer>
  )
}

export default Cart