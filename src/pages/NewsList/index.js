import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { routes } from 'config/routes';
import { useQuery } from '@apollo/react-hooks';
import { GET_ARTICLES } from 'apollo/queries';
import { encodeUrl } from 'helpers/urlEncoder';

export const NewsList = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return 'Loading...';
  if (error) return 'Error!';

  return (
    <Container>
      <p>News list</p>
      <ul>
        {data.articles.map((article) => (
          <li key={article.id}>
            <Link to={routes.article(encodeUrl(article.url))}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </Container>
  );
};
