let userText = document.getElementById("user");
let passText = document.getElementById("pass");
let btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const obj = {
    username: userText.value,
    pass: passText.value
  };

  localStorage.setItem("send", JSON.stringify(obj));
});

console.log("Sehife yuklendi ozumden sonraki kodu oxuyuram ");
let user = JSON.parse(localStorage.getItem("send"));
if (user) {
  userText.value = user.username;
  passText.value = user.pass;
}
