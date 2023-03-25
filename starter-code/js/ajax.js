function get_response(url) {
  let retrunVal;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      retrunVal = result;
    });
  console.log(retrunVal);
  return retrunVal;
}
