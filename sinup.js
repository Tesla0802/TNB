let Name = document.querySelector("#name");
let LastName = document.querySelector("#lastname");
let emailInput = document.querySelector("#email");
let password1 = document.querySelector("#password")
let Btn = document.querySelector("#submitButton")

Btn.addEventListener("click", () => {
    let name = Name.value;
    let last_name = LastName.value;
    let emailInput = email.value;
    let password = password1.value;
    if (name == "" || last_name == "" || emailInput == "" || password == "") return;
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
      email: emailInput,
      password: password,
    });
    displayAlert("შესრულდა", "წარმატებით დაემატა მომხარებელი", "success");
  });