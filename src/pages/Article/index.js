import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Typography, Paper, CircularProgress, Button, makeStyles } from '@material-ui/core';
import { decodeUrl } from 'helpers/urlEncoder';
import { GET_ARTICLE } from 'apollo/queries';
import { useQuery } from '@apollo/react-hooks';
import { Chip } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import { RawHtmlParagraph } from 'components/RawHtmlParagraph';
import { routes } from 'config/routes';
import { EmptyStateImage } from 'components/EmptyStateImage';

const useStyles = makeStyles(() => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    margin: '20px auto',
    width: '100%',
    maxWidth: 640,
    boxSizing: 'border-box',
    '& img': {
      maxWidth: '100%',
    },
  },
  tagsContainer: {
    height: 60,
    paddingTop: 5,
    paddingBottom: 0,
  },
  tag: {
    margin: '0 10px 10px 0',
  },
  img: {
    width: '100%',
  },
  loader: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 10,
  },
}));

export const Article = () => {
  const { id } = useParams();
  const classes = useStyles();

  const { loading, error, data } = useQuery(GET_ARTICLE, { variables: { url: decodeUrl(id) } });

  if (loading && !data)
    return (
      <div className={classes.loader}>
        <CircularProgress title="Loader" />
      </div>
    );

  if (error) return <Alert severity="error">Nie udało się pobrać artykułu.</Alert>;

  const { article } = data;

  return (
    <Paper elevation={3} className={classes.wrapper}>
      <Box>
        <Button component={Link} to={routes.home()} size="small" color="primary">
          Wróć do strony głównej
        </Button>
        <Typography variant="h5" component="h1" title="Article title">
          {article.title}
        </Typography>
        {article.tags.length > 0 && (
          <div className={classes.tagsContainer} title="Tags list">
            {article.tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" className={classes.tag} title="Tag" />
            ))}
          </div>
        )}
        <Box>
          {article.img ? (
            <img src={article.img.url} alt={article.img.title} className={classes.img} />
          ) : (
            <EmptyStateImage />
          )}

          {article.bodyHTML.length > 0
            ? article.bodyHTML.map((paragraph, index) => (
                <RawHtmlParagraph key={index} content={paragraph.data} />
              ))
            : article.bodyPlain.map((paragraph, index) => <p key={index}>{paragraph.data}</p>)}
        </Box>
      </Box>
    </Paper>
  );
};
