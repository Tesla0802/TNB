const userArray1 = getArrayFromFirebase("User");
let Display = document.querySelector(".none");
userArray1.forEach((element) => {
    if(element.data.radio == "Influencer") {
        Display.style.display = "flex" 
      }
});