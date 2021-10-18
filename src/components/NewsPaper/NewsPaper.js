import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import News from '../News/News';

const NewsPaper = () => {
    const [articles, setArticles] = useState([]);
    useEffect(() =>{
        fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=b50b2f2510054034a523f96a50fdc178')
        .then(res => res.json())
        .then(data =>setArticles(data.articles));
    },[])

    return (
        <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {
                articles.map(article => <Grid item xs={2} sm={4} md={4}>
                    <News article={article}/>
                 </Grid>)
            }
        </Grid>
        </Box>
    );
}

export default NewsPaper
