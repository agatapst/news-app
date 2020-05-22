import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { decodeUrl } from 'helpers/urlEncoder';
import { GET_ARTICLE } from 'apollo/queries';
import { useQuery } from '@apollo/react-hooks';

export const Article = () => {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_ARTICLE, { variables: { url: decodeUrl(id) } });

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  const { article } = data;

  return (
    <Container>
      <p>This is an article {decodeUrl(id)}</p>
      {article.title}
    </Container>
  );
};
