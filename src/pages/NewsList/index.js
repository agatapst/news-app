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
  IconButton,
  makeStyles,
} from '@material-ui/core';
import RefreshIcon from '@material-ui/icons/Refresh';
import { Pagination } from '@material-ui/lab';
import { useQuery } from '@apollo/react-hooks';
import { GET_ARTICLES } from 'apollo/queries';
import { ARTICLES_PER_PAGE } from 'config/constants';

import { ArticleCard } from './ArticleCard';

const useStyles = makeStyles(() => ({
  appBar: {
    marginBottom: 10,
  },
  appHeader: {
    flex: 1,
  },
  toolbar: {
    padding: 0,
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    margin: '40px 0',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
}));

export const NewsList = () => {
  const classes = useStyles();
  const location = useLocation();
  const history = useHistory();
  const searchParams = new URLSearchParams(location.search);
  const [page, setPage] = useState(parseInt(searchParams.get('page') || 1));

  const { loading, error, data, refetch } = useQuery(GET_ARTICLES, {
    variables: { limit: ARTICLES_PER_PAGE, offset: (page - 1) * ARTICLES_PER_PAGE },
    fetchPolicy: 'cache-and-network',
  });

  const handlePageChange = (_event, page) => {
    setPage(page);
    searchParams.set('page', page);
    history.push({ pathname: location.pathname, search: '?' + searchParams.toString() });
  };

  if (loading && !data)
    return (
      <div className={classes.loader}>
        <CircularProgress title="Loader" />
      </div>
    );
  if (error) return 'Sorry, something went wrong. Please try again.';

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Container>
          <Toolbar className={classes.toolbar}>
            <Typography variant="h6" component="h1" className={classes.appHeader}>
              News
            </Typography>
            <IconButton onClick={() => refetch()} color="inherit">
              <RefreshIcon />
            </IconButton>
          </Toolbar>
        </Container>
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
