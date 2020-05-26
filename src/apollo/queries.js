import { gql } from 'apollo-boost';

export const GET_ARTICLES = gql`
  query getArticles($limit: Int!, $offset: Int!) {
    articles(t: Article, limit: $limit, offset: $offset) {
      id
      title
      url
      src
      img {
        url
        description
        title
      }
      body(t: Plain) {
        data
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query getArticle($url: String!) {
    article(url: $url) {
      title
      tags
      bodyHTML: body(t: HTML) {
        data
      }
      bodyPlain: body(t: Plain) {
        data
      }
      img {
        url
        description
        title
      }
    }
  }
`;
