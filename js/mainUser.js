const buildUser = (title, email, photoUrl, password, usertId) => {
    let cardContainer = document.createElement("div");
    let cardImage = document.createElement("img");
    let cardBody = document.createElement("div");
    let cardTitle = document.createElement("h5");
    let cardText = document.createElement("p");
    let cardButton = document.createElement("a");
  
    // Add classes to elements
    cardContainer.classList.add("card", "custom-card", "m-2");
    cardImage.classList.add("card-img-top", "custom-card-image");
    cardBody.classList.add("card-body");
    cardTitle.classList.add("card-title");
    cardText.classList.add("card-text");
    cardButton.classList.add("btn", `btnStyle`); 
  
    // Add values to the elements
    cardImage.src = photoUrl;
    cardTitle.innerText = title;
    cardText.innerText = `${email} Contraseña:  ${password}`;
    cardButton.innerText = "Detalles";
    cardButton.href = `/detailsUser.html?userId=${usertId}`;
  
    // Build structure
    cardContainer.appendChild(cardImage);
    cardContainer.appendChild(cardBody);
  
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(cardButton);
  
    return cardContainer;
  };
  
  let mainContent = document.getElementById("main-content");
  
  
  
  const createProduct = (title, email, password, imageUrl) => {
    const url =
      "https://magicode-7ac7e-default-rtdb.firebaseio.com/users.json";
  
    const user = {
      title: title,
      email: email,
      passwors: password,
      imageUrl: imageUrl,
    };
  
    let userId = "";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        userId = user.name;
        window.location.href = `/detailsUser.html?userId=${userId}`;
      });
  };
  
  const getUser = (id) => {
    const url = `https://magicode-7ac7e-default-rtdb.firebaseio.com/users/${id}.json`;
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((user) => {
        const card = buildCard(
            user.title,
            user.email,
            user.imageUrl,
            user.password
        );
  
        mainContent.appendChild(card);
      });
  };
  
  const getAllUsers = () => {
    const url = `https://magicode-7ac7e-default-rtdb.firebaseio.com/users.json`;
  
    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((users) => {
        for (const key in users) {
          const user = users[key];
  
          const card = buildCard(
            user.title,
            user.email,
            user.imageUrl,
            user.password,
            key
          );
  
          mainContent.appendChild(card);
        }
      });
  };
  
  const updateProduct = (title, email, password, imageUrl, userId) => {
    const url = `https://magicode-7ac7e-default-rtdb.firebaseio.com/users/${userId}.json`;
  
    const user = {
      title: title,
      email: email,
      password: password,
      imageUrl: imageUrl,
    };
  
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      if (res.ok) {
        window.location.href = `/detailsUser.html?productId=${userId}`;
      } else {
        console.error(res);
      }
    });
  };
  