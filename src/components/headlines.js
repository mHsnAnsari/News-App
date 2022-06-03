import { Typography, Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import axios from 'axios'




function Headlines() {

    const getNews = () => {
        const api = 
       "https://newsapi.org/v2/everything?q=tesla&from=2022-05-02&sortBy=publishedAt&apiKey=db174fcd20704eefb82df43880608f68"

        axios.get(api).then((success) => {
            console.log(success);
            setArticles(success.data.articles)
        }).catch((err) => {
            console.log(err);
        });
    }

    useEffect(() => {
        getNews()
    }, []);

    const [articles, setArticles] = useState([]);


  return (
      <>
      
          <Typography>News Headlines</Typography>
          {articles.map((e,i) => (
          <Box textAlign="left" sx={{ marginBottom : 5 , boxShadow : '0 10px 10px rgba(0,0,0,.5)'}}>
            <Box sx={ { display : "flex", justifyContent : "start"}}>
                <img src={e.urlToImage} width="200px" alt="" />
                <Typography variant='h4'>{e.title}</Typography>
            </Box>
            <Box>
                <Typography>{e.description}</Typography>
            </Box>
            </Box>
            ))};
        
      </>
  )
}

export default Headlines