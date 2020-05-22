export function encodeUrl(url) {
  return btoa(url);
}

export function decodeUrl(url) {
  return atob(url);
}
