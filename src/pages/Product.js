import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleCard from "../components/SingleCard";

const Product = () => {
const[products,setProducts]=useState([])
useEffect(()=>{
  getAllProduct()
},[])
  const getAllProduct=async()=>{
     const products= await axios.get(`http://localhost:5000/api/v1/products`)
     if(products.status === 200){
      setProducts(products.data)
     }
    
  }

console.log(products)
  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {products.map((product,i) => (
        <SingleCard key={i} product={product}/>
      ))}
    </Box>
  );
};

export default Product;
