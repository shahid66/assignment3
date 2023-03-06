import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin:false,
  isCartOpen: false,
  isWishOpen: false,
  cart: [],
  items: [],
  wishList:[],
  userID:false,
  userData:{}
  
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToWishList: (state, action) => {
      const itemIndex=state.wishList.findIndex(
        (item)=>item.id === action.payload.id
      );
      if(itemIndex >=0){
        
      }else{
        const tempProduct={...action.payload}
        state.wishList.push(tempProduct)
        
      }
      
    },
    removeFromWishList: (state, action) => {
      state.wishList = state.wishList.filter((item) => item.id !== action.payload.id);
      
    },
    addToCart: (state, action) => {
      const itemIndex=state.cart.findIndex(
        (item)=>item.id === action.payload.id
      );
      if(itemIndex >=0){
        state.cart[itemIndex].cartQuantity +=1;
        state.cartTotalQuantity +=1;
      }else{
        const tempProduct={...action.payload, cartQuantity:1}
        state.cart.push(tempProduct)
        state.cartTotalQuantity +=1;
      }
      
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      
    },


    increaseCount:(state,action)=>{

      const itemIndex=state.cart.findIndex(
        (item)=>item.id === action.payload.id
      );
      if(itemIndex >=0){
        state.cart[itemIndex].cartQuantity +=1;
       
      }else{
        const tempProduct={...action.payload, cartQuantity:1}
        state.cart.push(tempProduct)
     
      }
      
    },
    decreaseCount:(state,action)=>{

      const itemIndex=state.cart.findIndex(
        (item)=>item.id === action.payload.id
      );
      if(itemIndex >=0 && state.cart[itemIndex].cartQuantity >1){
        state.cart[itemIndex].cartQuantity -=1;
      
      }

    },
    setIsCartOpen: (state)=>{
        state.isCartOpen = !state.isCartOpen;
    },
    setIsWishOpen: (state)=>{
        state.isWishOpen = !state.isWishOpen;
    },
    setLogin: (state)=>{
        state.isLogin = !state.isLogin;
    },
    setLoginApi: (state,action)=>{
        state.userData = {token:action.payload.token,user:action.payload.user};
    },
   
  },
});

export const { setItems, addToCart,setLogin,setLoginApi,removeFromCart,increaseCount,decreaseCount, setIsCartOpen,setIsWishOpen,removeFromWishList,addToWishList} = cartSlice.actions;
export default cartSlice.reducer;
