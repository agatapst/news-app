import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Grid,
  makeStyles,
} from '@material-ui/core';
import { routes } from 'config/routes';
import { encodeUrl } from 'helpers/urlEncoder';

const propTypes = {
  article: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    img: PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
    url: PropTypes.string.isRequired,
    body: PropTypes.arrayOf(
      PropTypes.shape({
        data: PropTypes.string.isRequired,
      })
    ),
  }).isRequired,
};

const useStyles = makeStyles(() => ({
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
}));

export const ArticleCard = ({ article }) => {
  const classes = useStyles();

  const { id, title, src, img, url } = article;

  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={id} title="Article">
      <Card className={classes.card}>
        <CardHeader
          title={title}
          subheader={src}
          className={classes.header}
          titleTypographyProps={{ className: classes.headerText, title: 'Article title' }}
        />
        {img && <CardMedia image={img.url} title={img.title} className={classes.media} />}

        <CardContent className={classes.content}>
          {article.body[0].data.slice(0, 100)}...
        </CardContent>
        <CardActions>
          <Button component={Link} to={routes.article(encodeUrl(url))} size="small" color="primary">
            Przeczytaj
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

ArticleCard.propTypes = propTypes;
