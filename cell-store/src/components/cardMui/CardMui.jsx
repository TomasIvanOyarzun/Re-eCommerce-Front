import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { logoMatch } from './helperCard';
import style from './CardMui.module.css'
import { Link } from 'react-router-dom';

const CardMui = ({image, name, description, brand, id}) => {
  return (
    <Card sx={{ maxWidth: 345 , padding: 0}}>
    <CardActionArea>
       <div className={style.div_image}>
      <CardMedia
        component="img"
        height="300"
        image={image}
        alt={name}
      />
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        
          <img  src={logoMatch(brand)} alt={brand + ' logo'}></img>
   
      </CardContent>
    </CardActionArea>
    <CardActions>
      <Link className={style.link} to={`/detail/${id}`}><Button size="large" color="primary">
        Detalle
      </Button></Link>
    </CardActions>
  </Card>
  )
}

export default CardMui
