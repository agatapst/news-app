export const routes = {
  home: () => '/',
  article: (id = ':id') => `/articles/${id}`,
};
