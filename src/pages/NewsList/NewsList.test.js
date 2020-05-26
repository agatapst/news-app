import { getArticlesMock, getSecondPageArticlesMock } from 'testUtilities/mocks/queryMocks';
// import { prettyDOM } from '@testing-library/dom';

import { NewsListPageObject } from './NewsListPageObject';

describe('News List Page', () => {
  let page;

  beforeEach(async () => {
    page = await NewsListPageObject.render([getArticlesMock(), getSecondPageArticlesMock()]);
    await page.waitUntilLoaded();
  });

  it('shows titles of articles', async () => {
    expect((await page.getArticles()).map((article) => article.title)).toEqual([
      'Article 1 title',
      'Article 2 title',
    ]);
  });

  it('shows pagination', async () => {
    expect(page.pagination.element).toBeInTheDocument();
    expect(page.pagination.currentPage).toEqual(1);
  });

  it('changes page', async () => {
    page.pagination.changePage(2);
    await page.waitUntilLoaded();
    expect(page.pagination.currentPage).toEqual(2);
    expect(page.queryParams).toEqual('?page=2');
    expect((await page.getArticles()).map((article) => article.title)).toContain(
      'Article 1 title - second page'
    );
  });

  it('redirects to the article content', async () => {
    const articles = await page.getArticles();
    articles[0].clickReadMore();
    expect(page.pathname).toEqual('/articles/d3d3LndwLnBsL2FydGljbGUx');
  });
});
