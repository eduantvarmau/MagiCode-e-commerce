const params = new URLSearchParams(window.location.search);

const userId = params.get("userId");
const deleteBtn = document.getElementById("btn-delete");
const editBtn = document.getElementById("btn-edit");

getUser(userId);

const deleteUser = (userId) => {
  const url = `https://magicode-7ac7e-default-rtdb.firebaseio.com/users/${userId}.json`;

  fetch(url, {
    method: "DELETE",
  }).then((res) => {
    if (res.ok) {
      window.location.href = "/index.html";
    } else {
      console.error(res);
    }
  });
};

deleteBtn.addEventListener("click", () => {
  deleteUser(userId);
});

editBtn.addEventListener("click", () => {
  window.location.href = `/updateUser.html?userId=${userId}`;
});
