let Name = document.querySelector("#name");
let LastName = document.querySelector("#lastname");
let email = document.querySelector("#email");
let password = document.querySelector("#password")
let Btn = document.querySelector("#submitButton")

Btn.addEventListener("click", () => {
    let name = Name.value;
    let last_name = LastName.value;
    let email = email.value;
    let password = password.value;
    if (name == "" || last_name == "" || email == "" || password == "") return;
    let alreadyUsedEmail = false;
    userArray.forEach((element) => {
      if (element.data.email === email) {
        alreadyUsedEmail = true;
        return;
      }
    });
    if (alreadyUsedEmail) {
      displayAlert("შეცდომა", "უკვე არსებობს ესეთი იმეილი", "info");
      return;
    }
    addElementInFirebase("User/", {
      name: name,
      last_name: last_name,
      email: email,
      password: password,
    });
    displayAlert("შესრულდა", "წარმატებით დაემატა მომხარებელი", "success");
  setTimeout(() => {
    location.href= "login.html"
  },1500 )
  });