function get_response(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((result) => result);
}
