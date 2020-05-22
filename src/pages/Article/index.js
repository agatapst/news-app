import React from 'react';
import { useParams } from 'react-router-dom';
import { Container } from '@material-ui/core';

export const Article = () => {
  const { id } = useParams();

  return (
    <Container>
      <p>This is an article {id}</p>
    </Container>
  );
};
