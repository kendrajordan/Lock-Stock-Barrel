
let menudescription = document.getElementsByClassName('menudescription');
let error = document.getElementById('error');

let apiRequest = new XMLHttpRequest();

document.onreadystatechange = function () {
  if (document.readyState == "interactive") {
    getMenuDescriptions();
  }
};
function getMenuDescriptions() {
  url = 'https://entree-f18.herokuapp.com/v1/menu';
  apiRequest.onload = fillText;
  apiRequest.open('get', url, true);
  apiRequest.send();
}
function fillText() {
  if (apiRequest.status == "200") {
    let description = JSON.parse(apiRequest.responseText);
    console.log(description);
    for (var i = 0; i < 8; i++) {
      menudescription[i].innerHTML = description.menu_items[i].description;
    }
  } else {
    onError();
  }
}
function onError() {
  console.log(JSON.parse(apiRequest.responseText).message);
}