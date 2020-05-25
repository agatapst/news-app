import { getArticlesMock } from 'testUtilities/mocks/queryMocks';
// import { prettyDOM } from '@testing-library/dom';

import { NewsListPageObject } from './NewsListPageObject';

describe('News List Page', () => {
  let page;

  beforeEach(async () => {
    page = await NewsListPageObject.render([getArticlesMock()]);
  });

  it('shows titles of articles', async () => {
    expect((await page.getArticles()).map((article) => article.title)).toEqual([
      'Article 1 title',
      'Article 2 title',
    ]);
  });

  it('redirects to the article content', async () => {
    const articles = await page.getArticles();
    articles[0].clickReadMore();
    expect(page.pathname).toEqual('/articles/d3d3LndwLnBsL2FydGljbGUx');
  });
});
