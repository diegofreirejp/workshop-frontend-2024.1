import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

/* Função das cartas de filmes e quais são os parâmetros de entrada dela */
export default function CartasFilme({ name , image , summary }) {
  return (
    /* Altura máxima e Comprimento máximo para que os filmes fiquem alinhados em altura e comprimento. */
    <Card sx={{ maxWidth: 345, maxHeight: 350, backgroundColor: 'black'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="225"
          image={image}
          alt="imagem filme"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" sx={{ fontWeight: 'bold', color: 'white' }}>
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: 'gray' }}>
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
