import React from 'react';
import { Container, Typography, Grid, CircularProgress, makeStyles } from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { GET_ARTICLES } from 'apollo/queries';

import { ArticleCard } from './ArticleCard';

const useStyles = makeStyles(() => ({
  // page: {
  //   backgroundColor: '#f5f5f5',
  // },
}));

export const NewsList = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <CircularProgress title="Loader" />;
  if (error) return 'Error!';

  return (
    <Container className={classes.page}>
      <Typography variant="h5" component="h1">
        News list
      </Typography>
      <Grid container spacing={2} title="News list">
        {data.articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </Grid>
    </Container>
  );
};
