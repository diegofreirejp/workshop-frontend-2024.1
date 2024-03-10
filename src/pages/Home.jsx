import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar'
import CartasFilme from '../components/CartasFilmes'
import { Box, Container } from "@mui/system";
import { Grid } from '@mui/material';
import axios from 'axios';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Swiper, SwiperSlide} from 'swiper/react';


/* Nesse Home vai estar incluso tudo que eu quero que seja mostrado na tela, nesse caso, a NavBar (NavBar.jsx) e
    as Cartas dos Filmes (CartasFilmes.jsx) */

export const Home = () => {

    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        getFilmes();
    }, []);
    /* o .then é posto por ser uma situação Assíncrona, isto é, ele vai fazer a requisição da API do get, e, só após isso, continuar */
    const getFilmes = () => {
        axios
            .get("https://api.tvmaze.com/shows")
            .then((res) => setFilmes(res.data))
            .catch((err) => console.log(err));
        };

  return (
    /* O <Container> vai fazer com que o que esteja dentro dele seja posto dentro de uma espécie de "caixa", e isso vai
    fazer com que as cartas dos filmes não fiquem coladas com a lateral da tela. (Não consegui fazer o mesmo usando margin)*/

    /* O Grid vai separar, dentro do container, o conteúdo em partes iguais que podem ser de 0 a 12 elementos. */
    <div>
        
        <NavBar/>

        <Container>
            <Swiper
            slidesPerView={6} 
            navigation
            pagination = {false}
            style={{marginBottom: '30px', backgroundColor: 'red'}}
            >
                {filmes.map((filme) => (
                <SwiperSlide>
                    <img
                        src={filme.image && filme.image.medium}
                        alt="Filmes disponiveis"
                        className="slide-item"
                    />

                </SwiperSlide>
                ))}
            </Swiper>
        </Container>
      
        <Container maxWidth="false" sx={{backgroundColor: '#222222'}}>
        
            <Grid container spacing={2}>
                {filmes.map((filme) => (
                    <Grid item xs={2}>
                        <CartasFilme
                            name={filme.name}
                            image={filme.image && filme.image.medium}
                            summary={filme.summary}
                        />
                    </Grid>
                ))}
            </Grid>
            
        </Container>
    </div>
  )
}
