import { 
    Avatar,
    Card,
    CardHeader,
    CardMedia,
    CardActions, Collapse, IconButton, Typography, CardContent } from '@mui/material';
import React from 'react'

const News = (props) => {
    const {title, description, urlToImage, publishedAt} = props.article;
    return (
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  <Avatar  aria-label="recipe">
                    R
                  </Avatar>
                }
                title={title}
                subheader={publishedAt}
              />
              <CardMedia
                component="img"
                height="194"
                image={urlToImage}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {description}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                </IconButton>
                <IconButton aria-label="share">
                </IconButton>
              </CardActions>
            </Card>
          );
        }
        
export default News
