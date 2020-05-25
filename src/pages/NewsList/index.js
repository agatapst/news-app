import React from 'react';
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  AppBar,
  Toolbar,
  makeStyles,
} from '@material-ui/core';
import { useQuery } from '@apollo/react-hooks';
import { GET_ARTICLES } from 'apollo/queries';

import { ArticleCard } from './ArticleCard';

const useStyles = makeStyles(() => ({
  appBar: {
    marginBottom: 10,
  },
}));

export const NewsList = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <CircularProgress title="Loader" />;
  if (error) return 'Error!';

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" component="h1">
            News
          </Typography>
        </Toolbar>
      </AppBar>
      <Container className={classes.page}>
        <Grid container spacing={2} title="News list">
          {data.articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Grid>
      </Container>
    </>
  );
};
