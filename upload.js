let FullName = document.querySelector(".inputone");
let ProfileName = document.querySelector(".inputtwo");
let ProfileLink = document.querySelector(".inputthree");
let Mail = document.querySelector(".inputfive");
let Contaction = document.querySelector(".inputsix");
let imgSrc = document.querySelector(".inputfour");
let BTN = document.querySelector("#BTN");
BTN.addEventListener("click", () => {
  let fullname = FullName.value;
  let profilename = ProfileName.value;
    let profilelink = ProfileLink.value;
    let mail = Mail.value;
    let contaction = Contaction.value;
    if(fullname == "" || profilename == "" || profilelink == "" || mail == "" || contaction== "") {
        return;
    }
    let imgSrc = "";
    try {
        const reader = new FileReader();
        reader.readAsDataURL(image.files[0]);
        reader.onload = () => {
          imgSrc = reader.result;
          addElementInFirebase("Card/", {
            Fullname : FullName.value,
            Profilename: ProfileName.value,
            Profilelink: ProfileLink.value,
            Mail : Mail.value,
            Contaction:Contaction.value,
            imgSrc: imgSrc,
            uploadTime: new Date().toLocaleString(),
          });
        };
      } catch (err) {
        imgSrc =
          "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png";
        addElementInFirebase("Card/", {
            Fullname : FullName.value,
            Profilename: ProfileName.value,
            Profilelink: ProfileLink.value,
            Mail : Mail.value,
            Contaction:Contaction.value,
            imgSrc: imgSrc,
            uploadTime: new Date().toLocaleString(),
        });
      }
      displayAlert("წარმატებული ოპერაცია", "პოსტი წარმატებით დაემატა", "success");
      FullName.value = "";
      ProfileName.value = "";
      setTimeout(() => {
        location.href = "index.html";
      }, 1500);
} )