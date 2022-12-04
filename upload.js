let FullName = document.querySelector(".inputone");
let ProfileName = document.querySelector(".inputtwo");
let ProfileLink = document.querySelector(".inputthree");
let imgSrc = document.querySelector(".inputfour");
let Btn = document.querySelector(".Btn");

Btn.addEventListener("click", () => {
    let fullname = FullName.value;
    let profilename = ProfileName.value;
    let profilelink = ProfileLink.value;
    if(fullname == "" || profilename == "" || profilelink == "" ) {
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
            imgSrc: imgSrc,
            uploadTime: new Date().toLocaleString(),
        });
      }
} )