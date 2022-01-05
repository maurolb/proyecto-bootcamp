import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate} from 'react-router-dom';
import { CardActionArea } from '@mui/material';

export const ProductCard = ({item}) => {

  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/product/${item.id}`)
  }

  return (
    <Card sx={{ maxWidth: 345, padding: '10px' }}>
      <CardActionArea>
        <Typography gutterBottom variant="h6" component="div">
          {item.name}
        </Typography>

        <CardMedia
        component="img"
        height="170"
        image={item.img}
        alt="product-img"
        style={{padding: '10px 0', objectFit: 'scale-down'}}
        />
        <CardContent>
          
          <Typography gutterBottom variant="h6" component="div">
            $ {item.price}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions style={{borderTop: '1px solid #ebebeb'}}>
        <Button size="small" onClick={handleClick} style={{marginLeft: 'auto'}}>Ver más</Button>
      </CardActions>
    </Card>
  );
}