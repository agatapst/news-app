import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from '@material-ui/core';
import { routes } from 'config/routes';

export const NewsList = () => {
  return (
    <Container>
      <p>News list</p>
      <Link to={routes.article(1)}>News article</Link>
    </Container>
  );
};
