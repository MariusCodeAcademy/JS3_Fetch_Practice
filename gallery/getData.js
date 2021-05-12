export function getImages(successCallback) {
  // gauti duomenis
  fetch("https://jsonplaceholder.typicode.com/photos")
    .then((resp) => resp.json())
    .then((data) => {
      successCallback(data);
    })
    .catch((err) => console.log(err));
}
