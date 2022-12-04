let emailInput1 = document.querySelector("#Email");
let Password = document.querySelector("#password");
const userArray = getArrayFromFirebase("User");
let BTN = document.querySelector("#submitButton");
BTN.addEventListener("click", () => {
  let email = emailInput1.value;
  let password = Password.value;
  let currentUser = {};
  let successAuth = false;
  userArray.forEach((element) => {
    if (element.data.email === email && element.data.password === password) {
      successAuth = true;
      currentUser = element;
      return;
    }
  });
  if (!successAuth) {
    displayAlert("შეცდომა", "არ არსებობს მომხარებელი", "info");
    return;
  }
  displayAlert("შესრულდა", "წარმატებით დაემატა გაიარეთ ავტორიზაცია", "success");
  localStorage.setItem("userid", currentUser.userid);
});