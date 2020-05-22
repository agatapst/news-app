import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  Typography,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  makeStyles,
} from '@material-ui/core';
import { routes } from 'config/routes';
import { useQuery } from '@apollo/react-hooks';
import { GET_ARTICLES } from 'apollo/queries';
import { encodeUrl } from 'helpers/urlEncoder';

const useStyles = makeStyles(() => ({
  page: {
    backgroundColor: '#f5f5f5',
  },
  card: {
    width: '100%',
  },
  header: {
    height: 100,
  },
  headerText: {
    fontSize: 16,
  },
  media: {
    height: 200,
  },
  content: {
    height: 68,
  },
  tagsContainer: {
    height: 60,
    paddingTop: 5,
    paddingBottom: 0,
  },
  tag: {
    margin: '0 10px 10px 0',
  },
}));

export const NewsList = () => {
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    <Container className={classes.page}>
      <Typography variant="h5" component="h1">
        News list
      </Typography>
      <Grid container spacing={2}>
        {data.articles.map((article) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={article.id}>
            <Card className={classes.card}>
              <CardHeader
                title={article.title}
                subheader={article.src}
                className={classes.header}
                titleTypographyProps={{ className: classes.headerText }}
              />
              <CardMedia
                image={article.img.url}
                title={article.img.title}
                className={classes.media}
              />

              <CardContent className={classes.content}>
                {article.body[0].data.slice(0, 100)}...
              </CardContent>
              <CardActions>
                <Button
                  component={Link}
                  to={routes.article(encodeUrl(article.url))}
                  size="small"
                  color="primary"
                >
                  Przeczytaj
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
