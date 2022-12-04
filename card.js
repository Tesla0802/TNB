const carArray = getArrayFromFirebase("Card");
let card = document.querySelector(".Center");
setTimeout(() => {
    carArray.forEach((element) => {
        card.innerHTML += `
        <div class="card " style="display:flex ;" style="width: 18rem;">
        <img src="${element.data.imgSrc}" alt="">
        <div class="card-body">
          <p class="card-text">Full Name - ${element.data.Fullname}</p>
          <p class="card-text">Profile Name -  ${element.data.Profilename}</p>
          <p class="card-text">Profile Link - ${element.data.Profilelink}</p>
          <p class="card-text">Mail - ${element.data.Mail}</p>
          <p class="card-text">Contact - ${element.data.Contaction}</p>
        </div>
      </div>
        `
    } )
},3000 )