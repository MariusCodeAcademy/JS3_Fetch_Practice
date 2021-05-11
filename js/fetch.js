export function fetchData(url, successCallback) {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      // cia jau turim data
      //   console.log(data);
      successCallback(data);
    })
    .catch((err) => console.log(err));
}

export function getOneUser(url) {
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => noriuDuomenu(data))
    .catch((err) => console.log(err));
}

function noriuDuomenu(data) {
  return data;
}
