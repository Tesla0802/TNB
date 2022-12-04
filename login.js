const emailInput1 = document.querySelector("#email");
const passwordInput1 = document.querySelector("#password");
const submitButton1 = document.querySelector("#submitButton");
const userArray1 = getArrayFromFirebase("User");

submitButton1.addEventListener("click", () => {
  let email = emailInput1.value;
  let password = passwordInput1.value;
  let currentUser = {};
  let successAuth = false;
  userArray1.forEach((element) => {
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