const carArray = getArrayFromFirebase("Card");
let card = document.querySelector(".Center");
setTimeout(() => {
    carArray.forEach((element) => {
        card.innerHTML += `
        <div class="card " style="display:none ;" style="width: 18rem;">
        <img src="${element.data.imgSrc}" alt="">
        <div class="card-body">
          <p class="card-text">${element.data.Fullname}</p>
          <p class="card-text">${element.data.Profilename}</p>
          <p class="card-text">${element.data.Profilelink}</p>
          <p class="card-text">${element.data.Mail}</p>
          <p class="card-text">${element.data.Contaction}</p>
        </div>
      </div>
        `
    } )
},3000 )