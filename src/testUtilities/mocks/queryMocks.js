import { GET_ARTICLES } from 'apollo/queries';

export const getArticlesMock = () => ({
  request: { query: GET_ARTICLES },
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
