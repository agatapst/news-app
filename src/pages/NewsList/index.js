import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  Container,
  Typography,
  Grid,
  CircularProgress,
  AppBar,
  Toolbar,
  Box,
  makeStyles,
} from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { useQuery } from '@apollo/react-hooks';
import { GET_ARTICLES } from 'apollo/queries';

import { ArticleCard } from './ArticleCard';

const PER_PAGE = 12;

const useStyles = makeStyles(() => ({
  appBar: {
    marginBottom: 10,
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px 0',
  },
}));

export const NewsList = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const [page, setPage] = useState(parseInt(searchParams.get('page') || 1));

  const { loading, error, data } = useQuery(GET_ARTICLES, {
    variables: { limit: PER_PAGE, offset: (page - 1) * PER_PAGE },
  });

  const handlePageChange = (_event, page) => {
    setPage(page);
    searchParams.set('page', page);
    history.push({ pathname: location.pathname, search: '?' + searchParams.toString() });
  };

  if (loading) return <CircularProgress title="Loader" />;
  if (error) return 'Error!';

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Container>
            <Typography variant="h6" component="h1">
              News
            </Typography>
          </Container>
        </Toolbar>
      </AppBar>
      <Container className={classes.page}>
        <Grid container spacing={2} title="News list">
          {data.articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
              <ArticleCard article={article} />
            </Grid>
          ))}
        </Grid>
        <Box className={classes.paginationContainer}>
          <Pagination
            title="Pagination"
            count={page + 1}
            page={page}
            siblingCount={0}
            boundaryCount={1}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>
      </Container>
    </>
  );
};
