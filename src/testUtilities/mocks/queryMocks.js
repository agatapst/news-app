import { GET_ARTICLES, GET_ARTICLE } from 'apollo/queries';

export const getArticlesMock = () => ({
  request: { query: GET_ARTICLES, variables: { limit: 12, offset: 0 } },
  result: {
    data: {
      articles: [
        {
          id: '123-id',
          body: [
            {
              data: 'Article 1 body',
              __typename: 'ArticleBody',
            },
          ],
          img: {
            title: 'Article 1 img',
            url:
              'https://i.wpimg.pl/1920x1080/m.autokult.pl/bez-nazwy-3-0c5a225c49100df93fb7,0,0,0,0.jpg',
            description: '',
            __typename: 'ArticleWebAsset',
          },
          src: 'www.money.pl',
          title: 'Article 1 title',
          url: 'www.wp.pl/article1',
          __typename: 'Article',
        },
        {
          id: '456-id',
          body: [
            {
              data: 'Article 2 body',
              __typename: 'ArticleBody',
            },
          ],
          img: {
            title: 'Article 2 img',
            url:
              'https://i.wpimg.pl/1920x1080/m.autokult.pl/bez-nazwy-3-0c5a225c49100df93fb7,0,0,0,0.jpg',
            description: '',
            __typename: 'ArticleWebAsset',
          },
          src: 'www.wp.tv.pl',
          title: 'Article 2 title',
          url: 'www.wp.pl/article2',
          __typename: 'Article',
        },
      ],
    },
  },
});

export const getSecondPageArticlesMock = () => ({
  request: { query: GET_ARTICLES, variables: { limit: 12, offset: 12 } },
  result: {
    data: {
      articles: [
        {
          id: '123-id-second-page',
          body: [
            {
              data: 'Article 1 body - second page',
              __typename: 'ArticleBody',
            },
          ],
          img: {
            title: 'Article 1 img - second page',
            url:
              'https://i.wpimg.pl/1920x1080/m.autokult.pl/bez-nazwy-3-0c5a225c49100df93fb7,0,0,0,0.jpg',
            description: '',
            __typename: 'ArticleWebAsset',
          },
          src: 'www.money.pl',
          title: 'Article 1 title - second page',
          url: 'www.wp.pl/2/article1',
          __typename: 'Article',
        },
      ],
    },
  },
});

export const getArticleMock = (url) => ({
  request: { query: GET_ARTICLE, variables: { url } },
  result: {
    data: {
      article: {
        bodyHTML: [
          {
            data: '<p title="Article text">Article text</p>',
            __typename: 'ArticleBody',
          },
        ],
        bodyPlain: [],
        img: {
          title: 'Article 1 img',
          url:
            'https://i.wpimg.pl/1920x1080/m.autokult.pl/bez-nazwy-3-0c5a225c49100df93fb7,0,0,0,0.jpg',
          description: '',
          __typename: 'ArticleWebAsset',
        },
        title: 'Article title',
        tags: ['tag 1', 'tag 2'],
        __typename: 'Article',
      },
    },
  },
});
