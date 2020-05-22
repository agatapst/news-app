import { gql } from 'apollo-boost';

export const GET_ARTICLES = gql`
  query getArticles {
    articles(t: Article, limit: 10) {
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
        params {
          id
        }
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query getArticle($url: String!) {
    article(url: $url) {
      title
      tags
      body(t: Plain) {
        data
        params {
          id
        }
      }
      img {
        url
        description
        title
      }
    }
  }
`;