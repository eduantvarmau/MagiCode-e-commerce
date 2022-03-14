const getData = () => {
    const titleElement = document.getElementById("title-input");
    const emailElement = document.getElementById("email-input");
    const photoUrlElement = document.getElementById("photo-input");
    const passwordElement = document.getElementById("password-input");
  
    const title = titleElement.value;
    const email = emailElement.value;
    const photoUrl = photoUrlElement.value;
    const password = passwordElement.value;
  
    createProduct(title, email, password, photoUrl);
  };
  
  const submitBtn = document.getElementById("submit-btn");
  
  submitBtn.addEventListener("click", getData);