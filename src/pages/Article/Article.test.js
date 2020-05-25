import { getArticleMock } from 'testUtilities/mocks/queryMocks';
import { encodeUrl } from 'helpers/urlEncoder';

import { ArticlePageObject } from './ArticlePageObject';

const articleUrl = 'www.wp.pl/articles/test';
const encodedArticleUrl = encodeUrl(articleUrl);

describe('News List Page', () => {
  let page;

  beforeEach(async () => {
    page = await ArticlePageObject.render([getArticleMock(articleUrl)], encodedArticleUrl);
  });

  it('shows title and body of the article', async () => {
    expect(page.title).toEqual('Article title');
    expect(page.text).toEqual('Article text');
  });

  it('shows tags of the article', async () => {
    expect((await page.getTags()).map((tag) => tag.text)).toEqual(['tag 1', 'tag 2']);
  });
});
