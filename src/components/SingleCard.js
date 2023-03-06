import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import dateFormat from "dateformat";
import * as React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from 'react-router-dom';
import { addToCart, addToWishList, removeFromWishList } from "../state/cartSlice";

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

const SingleCard = ({product}) => {
    const token=localStorage.getItem('token')
    const dispatch=useDispatch()
    const wishList = useSelector((state) => state.cart.wishList);
    const isListed=wishList.findIndex(x => x.id === product.id);
    const cartList = useSelector((state) => state.cart.cart);
    const iscartListed=cartList.findIndex(x => x.id === product.id);

    const navigate=useNavigate()
  return (
    <Card sx={{ maxWidth: 345, m:2 }}>
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
        title=<Link to={`/product/${product._id}`}><h3>{product.title}</h3></Link>
        subheader={dateFormat(product.createdAt,"fullDate")}
      />
      <CardMedia
        component="img"
        height="194"
        image={product.image.fileLocalPath}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
        <br />
        <Typography variant="body2" color="text.secondary">
          <div className='priceSection'>
            <div><span className='price_bold'>Price</span> <span>{product.price}</span><span>Tk</span></div>
            <div><span>Quantity</span> <span>{product.quantity}</span></div>
          </div>
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {token!==null ?<div>
        {isListed === -1?<IconButton onClick={() => dispatch(addToWishList(product))}>
          <FavoriteIcon />
        </IconButton>:<IconButton sx={{color:"red"}}  onClick={() => dispatch(removeFromWishList(product))}>
          <FavoriteIcon sx={{color:isListed !==-1 && "red"}} />
        </IconButton>}
        {iscartListed === -1?<IconButton onClick={() => dispatch(addToCart(product))} >
        <AddShoppingCartIcon/>
        </IconButton>:<IconButton disabled >
        <AddShoppingCartIcon/>
        </IconButton>}
        </div>:
        <div>
        <IconButton onClick={()=>navigate('/login')}>
          
          <FavoriteIcon />
        </IconButton>
        <IconButton to={'/login'} >
        <AddShoppingCartIcon/>
        </IconButton>
        </div>}
       
      </CardActions>
      
    </Card>
  )
}

export default SingleCard