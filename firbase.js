const firebaseConfig = {
    apiKey: "AIzaSyAaxC24Kwd947dDsxG_VOUyDjK781_FX9g",
    authDomain: "tistory-a1d7f.firebaseapp.com",
    databaseURL: "https://tistory-a1d7f-default-rtdb.firebaseio.com",
    projectId: "tistory-a1d7f",
    storageBucket: "tistory-a1d7f.appspot.com",
    messagingSenderId: "789448325431",
    appId: "1:789448325431:web:434a105e6ebedc383a02b2",
    measurementId: "G-PH5KNHLNKQ"
  };
  firebase.initializeApp(firebaseConfig);
  
  function randomID() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      let r = (Math.random() * 16) | 0;
      let v = c == "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }
  
  function generateFirebaseItem(ID, value) {
    return {
      userid: ID,
      data: value,
    };
  }
  
  function addElementInFirebase(REF, data) {
    firebase
      .database()
      .ref(REF + randomID())
      .set(data);
  }
  
  function getArrayFromFirebase(REF) {
    let tempArray = [];
    firebase
      .database()
      .ref(REF)
      .on("value", (response) => {
        response.forEach((element) => {
          tempArray.push(generateFirebaseItem(element.key, element.val()));
        });
      });
    return tempArray;
  }
  
  function removeRefFromFirebase(REF) {
    firebase.database().ref(`${REF}`).remove();
  }
  
  function removeElementFromFirebase(REF, id) {
    firebase.database().ref(`${REF}/${id}`).remove();
  }
  
  function getElementFromFirebaseByID(REF, id) {
    const tempArray = getArrayFromFirebase(REF);
    let temp = {};
    tempArray.forEach((element) => {
      if (element.userid === id) {
        temp = element;
      }
    });
    return temp;
  }
  
  function changeDataOnFirebaseByID(REF, ID, data) {
    firebase
      .database()
      .ref(REF + "/" + ID)
      .set(data);
  }