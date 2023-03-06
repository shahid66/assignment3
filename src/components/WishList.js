import {
    Avatar,
    Box,
    Button,
    Divider,
    Drawer,
    Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    removeFromWishList,
    setIsWishOpen,
} from "../state/cartSlice";

const WishList = () => {
  const dispatch = useDispatch();
  const WishOpen = useSelector((state) => state.cart.isWishOpen);

  const wishList = useSelector((state) => state.cart.wishList);
  return (
    <Drawer
      open={WishOpen}
      anchor="right"
      PaperProps={{
        sx: {
          width: 500,
          background: "rgba(244, 203, 149,1)",
        },
      }}
    >
      <Box
        display={"flex"}
        justifyContent="space-between"
        alignItems={"center"}
        padding="20px"
      >
        <Typography variant="h5">Wish Cart</Typography>
        <Button onClick={() => dispatch(setIsWishOpen({}))}>X</Button>
      </Box>
      <Divider />
      {wishList.map((item) => (
        <Box mt={2}>
          <Box display={"flex"} padding="10px">
            <Avatar src={item.image} sx={{ width: 96, height: 96, mr: 2 }} />
           <Box display={"flex"} justifyContent="space-between" paddingRight={"40px"} flexGrow={1} flexDirection={'row'}>
            <Box display={"flex"} flexDirection={"column"}>
                <Typography variant="h6">{item.name}</Typography>
                <Typography variant="subtitle2">{item.description}</Typography>
            </Box>
            <Typography variant="body1">
            {item.price}
            </Typography>
           </Box>
          </Box>
          <Box
            padding={4}
            display={"flex"}
            justifyContent="space-between"
            alignItems={"center"}
          >
            <Button
              onClick={() => {
                dispatch(addToCart(item));
                dispatch(removeFromWishList({ id: item.id }));
              }}
              variant="outlined"
            >
              Add To Cart
            </Button>

            <Button
              onClick={() => dispatch(removeFromWishList({ id: item.id }))}
              variant="outlined"
            >
              Remove
            </Button>
          </Box>
          <Divider />
        </Box>
      ))}
    </Drawer>
  );
};

export default WishList;
