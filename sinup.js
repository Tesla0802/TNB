const nameInput = document.querySelector("#name");
const lastnameInput = document.querySelector("#lastname");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const RAdio = document.querySelector("#radio");
const submitButton = document.querySelector("#submitButton");
const userArray = getArrayFromFirebase("User");

submitButton.addEventListener("click", () => {
  let name = nameInput.value;
  let last_name = lastnameInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let radio = RAdio.value;
  if (
    name == "" ||
    last_name == "" ||
    email == "" ||
    password == "" || radio == "" || radio == ""
  )
    return;
  let alreadyUsedEmail = false;
  userArray.forEach((element) => {
    if (element.data.email === email) {
      alreadyUsedEmail = true;
      return;
    }
  });
  let Radio = false;
  if (RAdio.value == "Brand") {
    Radio = true;
  } else if (RAdio.value == "Influencer") {
    Radio = true;
  } else {
    Radio = false;
  }

  if (alreadyUsedEmail) {
    displayAlert("შეცდომა", "უკვე არსებობს ესეთი იმეილი", "info");
    return;
  }
  addElementInFirebase("User/", {
    name: name,
    last_name: last_name,
    email: email,
    password: password,
    Status: Radio,
    radio: RAdio.value,
  });
  displayAlert("შესრულდა", "წარმატებით დაემატა მომხარებელი", "success");
  setTimeout(() => {
    location.href = "login.html";
  }, 1500);
});
