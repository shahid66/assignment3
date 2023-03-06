import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActions } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getToken } from '../helper/SessionHelper';
import { addToCart, addToWishList, removeFromWishList } from '../state/cartSlice';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

const SingleProduct = () => {
    const AxiosHeader={headers:{'token':getToken()}}
    const {productId}=useParams()
   
    const dispatch=useDispatch()
 
    const[product,setProduct]=React.useState(null)
    const wishList = useSelector((state) => state.cart.wishList);
    const isListed=wishList.findIndex(x => x._id === product._id);
    const cartList = useSelector((state) => state.cart.cart);
    const iscartListed=cartList.findIndex(x => x._id === product._id);

    React.useEffect(()=>{
        productData()
    },[productId])

    const productData=async()=>{
        
        const product= await axios.get(`http://localhost:5000/api/v1/product/${productId}`,AxiosHeader)
        setProduct(product.data[0])
      }
      
  return (
    <>
    {product !==null? <div className='singleProduct'>
        <div className='singleProductCard'>
                <Card sx={{ maxWidth: 700,height:700, m:2 }}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    R
                </Avatar>
                }
                // action={
                //   <IconButton aria-label="settings">
                //     <MoreVertIcon />
                //   </IconButton>
                // }
                title={product.title}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="400"
                image={product.image?.fileLocalPath}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                {product.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {isListed === -1?<IconButton onClick={() => dispatch(addToWishList(product && product ))}>
                <FavoriteIcon />
                </IconButton>:<IconButton sx={{color:"red"}}  onClick={() => dispatch(removeFromWishList(product && product))}>
                <FavoriteIcon sx={{color:isListed !==-1 && "red"}} />
                </IconButton>}
                {iscartListed === -1?<IconButton onClick={() => dispatch(addToCart(product && product))} >
                <AddShoppingCartIcon/>
                </IconButton>:<IconButton disabled >
                <AddShoppingCartIcon/>
                </IconButton>}
            
            </CardActions>
            
            </Card>
   
        </div>
        <div>
 
    </div>
    </div>:<div>Loading</div>}
    </>
  )
}

export default SingleProduct