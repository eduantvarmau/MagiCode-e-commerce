const params = new URLSearchParams(window.location.search);
const userId = params.get("userId");

const titleElement = document.getElementById("title-input");
const emailElement = document.getElementById("email-input");
const photoUrlElement = document.getElementById("photo-input");
const passwordElement = document.getElementById("password-input");
const submitBtn = document.getElementById("submit-btn");

const getData = () => {
  const title = titleElement.value;
  const email = emailElement.value;
  const photoUrl = photoUrlElement.value;
  const password = passwordElement.value;

  updateProduct(title, email, password, photoUrl, userId);
};

submitBtn.addEventListener("click", getData);

const placeProductData = () => {
  const url = `https://magicode-7ac7e-default-rtdb.firebaseio.com/users/${userId}.json`;

  fetch(url)
    .then((res) => {
      return res.json();
    })
    .then((user) => {
      titleElement.value = user.title;
      emailElement.value = user.email;
      photoUrlElement.value = user.imageUrl;
      passwordElement.value = user.password;
    });
};

placeUserData();
