import { gql } from 'apollo-boost';

export const GET_ARTICLES = gql`
  query getArticles {
    articles(t: Article, limit: 10) {
      id
      title
      url
      img {
        original_url
        description
        title
      }
    }
  }
`;

export const GET_ARTICLE = gql`
  query getArticle($url: String!) {
    article(url: $url) {
      title
      body {
        data
      }
    }
  }
`;
