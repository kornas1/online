//  function main_list(main_pict) {
   
//   let html_text = `
//     <img class="main-slide" src="${main_pict.images.main_img}" alt="${main_pict.name}">
//       `;
//     document
//       .querySelector(".main-slide-container")
//       .insertAdjacentHTML("afterBegin", html_text);

//  }
//   //console.log(new_arr[1].images.main_img);

//   let html_text = `
//   <img class="main-slide" src="${main_pict.images.main_img}" alt="${main_pict.name}">
//     `;
//   document
//     .querySelector(".main-slide-container")
//     .insertAdjacentHTML("afterBegin", html_text);
  
// }


//---------------------------------------------
function main_list_dress(new_arr) {
  // let new_arr = arr.filter((element) => {
  // return element.coleion === "dress";
  // });
  
  let dresses_clothess_html = `
  <div class="items-dresses-clothess">
  
  <img class="click_img" src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}">
  <div class="dresses-clothes-name">${new_arr[0].name}</div>
  <div class="dresses-clothes-prise">${new_arr[0].prise} ₽</div>
  </div>
  <div class="items-dresses-clothess">
  
  <img class="click_img" src="${new_arr[1].images.main_img}" alt="${new_arr[1].name}">
  <div class="dresses-clothes-name">${new_arr[1].name}</div>
  <div class="dresses-clothes-prise">${new_arr[1].prise} ₽</div>
  </div>
  <div class="items-dresses-clothess">
  
  <img class="click_img" src="${new_arr[2].images.main_img}" alt="${new_arr[2].name}">
  <div class="dresses-clothes-name">${new_arr[2].name}</div>
  <div class="dresses-clothes-prise">${new_arr[2].prise} ₽</div>
  </div>
  <div class="items-dresses-clothess">
  
  <img class="click_img" src="${new_arr[3].images.main_img}" alt="${new_arr[3].name}">
  <div class="dresses-clothes-name">${new_arr[3].name}</div>
  <div class="dresses-clothes-prise">${new_arr[3].prise} ₽</div>
  </div>

  
  `;
  document
  .querySelector(".container-dresses-clothess")
  .insertAdjacentHTML("beforeend", dresses_clothess_html);
  }

// <div class="items-dresses-clothess">
  // <img class="click_img" src="${new_arr[4].images.main_img}" alt="${new_arr[4].name}">
  // <div class="dresses-clothes-name">${new_arr[4].name}</div>
  // <div class="dresses-clothes-prise">${new_arr[4].prise} ₽</div>
  // </div>

// -----------------------------------------------------------


function main_list_sweatshirt(new_arr) {
  // let new_arr = arr.filter((element) => {
  // return element.coleion === "sweatshirt";
  // });
  
console.log(new_arr)


  let sweatshirt_clothess_html = `
  <div class="items-sweatshirt-clothess">
  
  <img class="click_img" src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}">
  <div class="sweatshirt-clothes-name">${new_arr[0].name}</div>
  <div class="sweatshirt-clothes-prise">${new_arr[0].prise} ₽</div>
  </div>
  <div class="items-sweatshirt-clothess">
  
  <img class="click_img" src="${new_arr[1].images.main_img}" alt="${new_arr[1].name}">
  <div class="sweatshirt-clothes-name">${new_arr[1].name}</div>
  <div class="sweatshirt-clothes-prise">${new_arr[1].prise} ₽</div>
  </div>
  <div class="items-sweatshirt-clothess">
  
  <img class="click_img" src="${new_arr[2].images.main_img}" alt="${new_arr[2].name}">
  <div class="sweatshirt-clothes-name">${new_arr[2].name}</div>
  <div class="sweatshirt-clothes-prise">${new_arr[2].prise} ₽</div>
  </div>
  <div class="items-sweatshirt-clothess">
  
  <img class="click_img" src="${new_arr[3].images.main_img}" alt="${new_arr[3].name}">
  <div class="sweatshirt-clothes-name">${new_arr[3].name}</div>
  <div class="sweatshirt-clothes-prise">${new_arr[3].prise} ₽</div>
  </div>
 
  `;
  document
  .querySelector(".container-sweatshirt-clothess")
  .insertAdjacentHTML("beforeend", sweatshirt_clothess_html);
  }

   //<div class="items-sweatshirt-clothess">
  
  // <img class="click_img" src="${new_arr[4].images.main_img}" alt="${new_arr[4].name}">
  // <div class="sweatshirt-clothes-name">${new_arr[4].name}</div>
  // <div class="sweatshirt-clothes-prise">${new_arr[4].prise} ₽</div>
  // </div>
// -----------------------------------------------------------

function main_list_skirt(new_arr) {
  // let new_arr = arr.filter((element) => {
  // return element.coleion === "skirt";
  // });
  
  let skirt_clothess_html = `
  <div class="items-skirt-clothess">
  
  <img class="click_img" src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}">
  <div class="skirt-clothes-name">${new_arr[0].name}</div>
  <div class="skirt-clothes-prise">${new_arr[0].prise} ₽</div>
  </div>
  <div class="items-skirt-clothess">
  
  <img class="click_img" src="${new_arr[1].images.main_img}" alt="${new_arr[1].name}">
  <div class="skirt-clothes-name">${new_arr[1].name}</div>
  <div class="skirt-clothes-prise">${new_arr[1].prise} ₽</div>
  </div>
  <div class="items-skirt-clothess">
  
  <img class="click_img" src="${new_arr[2].images.main_img}" alt="${new_arr[2].name}">
  <div class="skirt-clothes-name">${new_arr[2].name}</div>
  <div class="skirt-clothes-prise">${new_arr[2].prise} ₽</div>
  </div>
  <div class="items-skirt-clothess">
  
  <img class="click_img" src="${new_arr[3].images.main_img}" alt="${new_arr[3].name}">
  <div class="skirt-clothes-name">${new_arr[3].name}</div>
  <div class="skirt-clothes-prise">${new_arr[3].prise} ₽</div>
  </div>
 
  `;
  document
  .querySelector(".container-skirt-clothess")
  .insertAdjacentHTML("beforeend", skirt_clothess_html);
  }
// <div class="items-skirt-clothess">
  
  // <img class="click_img" src="${new_arr[4].images.main_img}" alt="${new_arr[4].name}">
  // <div class="skirt-clothes-name">${new_arr[4].name}</div>
  // <div class="skirt-clothes-prise">${new_arr[4].prise} ₽</div>
  // </div>
// -----------------------------------------------------------

function main_list_top(new_arr) {
  // let new_arr = arr.filter((element) => {
  // return element.coleion === "top";
  // });
  
  let top_clothess_html = `
  <div class="items-top-clothess">
  
  <img class="click_img" src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}">
  <div class="top-clothes-name">${new_arr[0].name}</div>
  <div class="top-clothes-prise">${new_arr[0].prise} ₽</div>
  </div>
  <div class="items-top-clothess">
  
  <img class="click_img" src="${new_arr[1].images.main_img}" alt="${new_arr[1].name}">
  <div class="top-clothes-name">${new_arr[1].name}</div>
  <div class="top-clothes-prise">${new_arr[1].prise} ₽</div>
  </div>
  <div class="items-top-clothess">
  
  <img class="click_img" src="${new_arr[2].images.main_img}" alt="${new_arr[2].name}">
  <div class="top-clothes-name">${new_arr[2].name}</div>
  <div class="top-clothes-prise">${new_arr[2].prise} ₽</div>
  </div>
  <div class="items-top-clothess">
  
  <img class="click_img" src="${new_arr[3].images.main_img}" alt="${new_arr[3].name}">
  <div class="top-clothes-name">${new_arr[3].name}</div>
  <div class="top-clothes-prise">${new_arr[3].prise} ₽</div>
  </div>
 
  `;
  document
  .querySelector(".container-top-clothess")
  .insertAdjacentHTML("beforeend", top_clothess_html);
  }

  //<div class="items-top-clothess">
  
  // <img class="click_img" src="${new_arr[4].images.main_img}" alt="${new_arr[4].name}">
  // <div class="top-clothes-name">${new_arr[4].name}</div>
  // <div class="top-clothes-prise">${new_arr[4].prise} ₽</div>
  // </div>
// -----------------------------------------------------------
function main_list_suit(new_arr) {
  // let new_arr = arr.filter((element) => {
  // return element.coleion === "suit";
  // });
  
  let suit_clothess_html = `
  <div class="items-suit-clothess">
  
  <img class="click_img" src="${new_arr[0].images.main_img}" alt="${new_arr[0].name}">
  <div class="suit-clothes-name">${new_arr[0].name}</div>
  <div class="suit-clothes-prise">${new_arr[0].prise} ₽</div>
  </div>
  <div class="items-suit-clothess">
  
  <img class="click_img" src="${new_arr[1].images.main_img}" alt="${new_arr[1].name}">
  <div class="suit-clothes-name">${new_arr[1].name}</div>
  <div class="suit-clothes-prise">${new_arr[1].prise} ₽</div>
  </div>
  <div class="items-suit-clothess">
  
  <img class="click_img" src="${new_arr[2].images.main_img}" alt="${new_arr[2].name}">
  <div class="suit-clothes-name">${new_arr[2].name}</div>
  <div class="suit-clothes-prise">${new_arr[2].prise} ₽</div>
  </div>
  <div class="items-suit-clothess">
  
  <img class="click_img" src="${new_arr[3].images.main_img}" alt="${new_arr[3].name}">
  <div class="suit-clothes-name">${new_arr[3].name}</div>
  <div class="suit-clothes-prise">${new_arr[3].prise} ₽</div>
  </div>
  
  `;
  document
  .querySelector(".container-suit-clothess")
  .insertAdjacentHTML("beforeend", suit_clothess_html);
  }

 // <div class="items-suit-clothess">
  
  // <img class="click_img" src="${new_arr[4].images.main_img}" alt="${new_arr[4].name}">
  // <div class="suit-clothes-name">${new_arr[4].name}</div>
  // <div class="suit-clothes-prise">${new_arr[4].prise} ₽</div>
  // </div>
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------
// -----------------------------------------------------------


export {
  //main_list,
  main_list_dress,
  main_list_sweatshirt,
  main_list_top,
  main_list_skirt,
  // main_list_discount_clothess,
  main_list_suit,
};