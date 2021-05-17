// import {
//   default_previus_slider,
//   default_next_slider,
//   discaunt_previus_slider,
//   discaunt_next_slider,
// } from "./sliders.js";


import {
  all_game,
  top_chart,
  log_in,
  sign_up,
  module_game,
  status,
  admin_buttons,
} from "./moduls_forms.js";

import {
//  main_list,
  main_list_dress,
  main_list_sweatshirt,
  main_list_top,
  main_list_skirt,
  main_list_suit,
} from "./home_page.js";
// console.log('scriiiipt');
//main_list()

// // let mass_pict_new_game = [
// //     {
// //       link: "../images/Medal_of_honor.jpg",
// //       name: "Medal of honor",
// //       develop: "Respawn Entartaimont",
// //       prize: "1000",
// //       // link: "../images/FarCray.jpg",
// //       // name: "FarCray",
// //       // develop: "Ubisoft",
// //       // prize: "1500",
// //       // all_img: [
// //       //   "../images/FarCray.jpg",
// //       //   "../images/FarCry_2.jpg",
// //       //   "../images/FarCry_3.jpg",
// //       // ],
// //       // short_info:
// //       //   "Игра про времена индертальцев как в те далекие времена выживали наши предки",
// //       // publish: "Ubisoft",
// //       // release: "6 октября 2015",
// //       // tag: "За жизнь надо бороться!",
// //       // rait: "4",
// //       // platform: "Windows",
// //       // full_info:
// //       //   "игра про давние времена когда челоек еще не находился на вершине пищевой цепи и каждый день был на грани жизни и смерти и что бы выжить люди шли на отчаенные меры",
// //       // proc: ["intel_1", "intel_2"],
// //       // cpu: ["8gb", "16gb"],
// //       // memory: ["70gb", "100gb"],
// //       // direct: ["10", "11"],
// //       // video: ["960", "1660ti"],
// //     },
// //     {
// //       link: "../images/Back4Blood.jpg",
// //       name: "Back4Blood",
// //       develop: "Turtle Rock Studios",
// //       prize: "1200",
// //     },
// //     {
// //       link: "../images/Batman.jpg",
// //       name: "Batman",
// //       develop: "Rocksteady Studios",
// //       prize: "1100",
// //     },
// //     {
// //       link: "../images/FarCray.jpg",
// //       name: "FarCray",
// //       develop: "Ubisoft",
// //       prize: "1500",
// //       all_img: [
// //         "../images/FarCray.jpg",
// //         "../images/FarCry_2.jpg",
// //         "../images/FarCry_3.jpg",
// //       ],
// //       short_info:
// //         "Игра про времена индертальцев как в те далекие времена выживали наши предки",
// //       publish: "Ubisoft",
// //       release: "6 октября 2015",
// //       tag: "За жизнь надо бороться!",
// //       rait: "4",
// //       platform: "Windows",
// //       full_info:
// //         "игра про давние времена когда челоек еще не находился на вершине пищевой цепи и каждый день был на грани жизни и смерти и что бы выжить люди шли на отчаенные меры",
// //       proc: ["intel_1", "intel_2"],
// //       cpu: ["8gb", "16gb"],
// //       memory: ["70gb", "100gb"],
// //       direct: ["10", "11"],
// //       video: ["960", "1660ti"],
// //     },

// //     {
// //       link: "../images/GTA_5.jpg",
// //       name: "GTA 5",
// //       develop: "Rockstar Games",

// //       prize: "1900",
// //     },
// //     {
// //       link: "../images/Hitman.jpeg",
// //       name: "Hitman",
// //       develop: "IO Interactive",
// //       prize: "2500",
// //     },
// //     {
// //       link: "../images/Left4Dead.jpg",
// //       name: "Left4Dead",
// //       develop: "Turtle Rock Studios",
// //       prize: "2000",
// //     },
// //     {
// //       link: "../images/Assasin.jpg",
// //       name: "Assasin",
// //       develop: "Ubisoft",
// //       prize: "1400",
// //     },
// //     {
// //       link: "../images/Metpo.jpg",
// //       name: "Metpo",
// //       develop: "4A Games",
// //       prize: "3000",
// //     },
// //     {
// //       link: "../images/NFS.jpg",
// //       name: "NFS",
// //       develop: "Electronic Arts",
// //       prize: "2800",
// //     },
// //     {
// //       link: "../images/TombRaider.jpg",
// //       name: "Tomb Raider",
// //       develop: "Eidos Montreal",
// //       prize: "2700",
// //     },
// //     {
// //       link: "../images/WatchDogs.jpg",
// //       name: "WatchDogs",
// //       develop: "Ubisoft",
// //       prize: "2200",
// //     },
// //     {
// //       link: "../images/Witcher_3.jpg",
// //       name: "Witcher 3",
// //       develop: "CD Projekt RED",
// //       prize: "3100",
// //     },
// //     {
// //       link: "../images/WoF3.jpg",
// //       name: "World of Warcraft 3",
// //       develop: "BLIZZARD",
// //       prize: "900",
// //     },
// //     {
// //       link: "../images/Skyrim.jpg",
// //       name: "Skyrim",
// //       develop: "Bethesda Game Studios",
// //       prize: "2900",
// //     },
// //     {
// //       link: "../images/RDR_2.jpg",
// //       name: "Red Dead Redamtion 2",
// //       develop: "Rockstar Games",
// //       prize: "3000",
// //     },
// //   ],

  let 
 click_img = document.querySelectorAll("click_img"),
  //admin = false,
    arr_all_clothes = [];

let place_dress,
  place_suit,
  place_sweatshirt,
  place_skirt,
  place_top;

function ForEach(mass, fun) {
  return Array.prototype.forEach.call(mass, fun);
}

const add_class = (place_pict) => {
  ForEach(place_pict, (element) => {
    element.classList.add("slider-popcity");
  });
};

const delete_class = (place_pict) => {
  ForEach(place_pict, (element) => element.classList.remove("slider-popcity"));
};

async function default_slider_for_previus_elements(
  id_game,
  mass_pict_new_game,
  place_pict,
  numb_pict
) {
  console.log(place_pict)
  add_class(place_pict);
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        default_previus_slider(
          id_game,
          mass_pict_new_game,
          place_pict,
          numb_pict
        )
      );
    }, 1000);
  }).then((result) => {
    setTimeout(() => {
      delete_class(place_pict);
    }, 200);
    return result;
  });

  let return_promise = await promise;

  return return_promise;
}

async function default_slider_for_next_elements(
  id_game,
  mass_pict_new_game,
  place_pict,
  numb_pict
) {
  console.log("id - game(postupivshee) :", id_game);
  add_class(place_pict);
  let promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(
        default_next_slider(id_game, mass_pict_new_game, place_pict, numb_pict)
      );
    }, 1000);
  }).then((result) => {
    console.log("lololol rabotaets");
    setTimeout(() => {
      delete_class(place_pict);
    }, 200);
    console.log("new id after fun : ", result);
    return result;
  });
  let return_promise = await promise;

  return return_promise;
}

// async function discaunt_slider_for_next_elements(
//   id_game,
//   mass_pict_new_game,
//   place_pict,
//   numb_pict
// ) {
//   console.log("id - game(postupivshee) :", id_game);
//   add_class(place_pict);
//   let promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(
//         discaunt_next_slider(id_game, mass_pict_new_game, place_pict, numb_pict)
//       );
//     }, 1000);
//   }).then((result) => {
//     console.log("lololol rabotaets");
//     setTimeout(() => {
//       delete_class(place_pict);
//     }, 200);
//     console.log("new id after fun : ", result);
//     return result;
//   });
//   let return_promise = await promise;

//   return return_promise;
// }

// async function discaunt_slider_for_previus_elements(
//   id_game,
//   mass_pict_new_game,
//   place_pict,
//   numb_pict
// ) {
//   add_class(place_pict);
//   let promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(
//         discaunt_previus_slider(
//           id_game,
//           mass_pict_new_game,
//           place_pict,
//           numb_pict
//         )
//       );
//     }, 1000);
//   }).then((result) => {
//     setTimeout(() => {
//       delete_class(place_pict);
//     }, 200);
//     return result;
//   });

//   let return_promise = await promise;

//   return return_promise;
// }

// function listener_for_img() {
//   for (let i = 0; i < click_img.length; i++) {
//     click_img[i].addEventListener("click", (e) => {
//       find_choose_clothes(e);
//     });
//   }
// }

async function find_choose_clothes(name) {
  console.log("lol");
  const val = name;
  try {
    console.log(val);
    const response = await fetch(`http://localhost:5500/find_clothes/${val}`);
    const clothes = await response.json().then((res) => {
      console.log(res)
      return res.clothes;
    });
    module_game(clothes);
  } catch (err) {
    console.log(err);
  }
}

// let main_list_dress = 0,
// main_list_sweatshirt = 0,
// main_list_top = 0,
// main_list_suit = 0,
// main_list_skirt = 0;

async function add_new_game_db(arr) {
  console.log(arr);
  const game_info = arr;
  if (game_info.length <= 4) {
    try {
      await fetch("http://localhost:5500/change_game", {
        method: "POST",
        body: JSON.stringify({
          game_info,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      await fetch("http://localhost:5500/new_game", {
        method: "POST",
        body: JSON.stringify({
          game_info,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

async function add_new_user(arr, arr_inp) {
  console.log("dobavlenie novogo usera");
  const user_info = arr;
  console.log(user_info)
  try {
    const response = await fetch("http://localhost:5500/new_user", {
      method: "POST",
      body: JSON.stringify({
        user_info,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });





    response.json().then((res) => {
      if (res.status == "существует") {
        Array.from(arr_inp).forEach((element, index) => {
          if (index < 2) {
            element.style.border = "2px solid red";
          }
        });
        alert("Неправильно введен Логин или  Emai!");
      } else if (res.status === "добавлен") {
        document
          .querySelector(".sign_up")
          .parentNode.removeChild(document.querySelector(".sign_up"));
        document
          .querySelector(".back-modul")
          .parentNode.removeChild(document.querySelector(".back-modul"));
        document
          .getElementById("log_in")
          .parentNode.removeChild(document.getElementById("log_in"));
        document
          .getElementById("sign_up")
          .parentNode.removeChild(document.getElementById("sign_up"));
        let html = `
        <a id="sign_up" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="../images/account_edit_icon_135995.png" alt="sign up">
        ${arr[0]}
    </a>
        `;
        document
          .querySelector(".enter-site")
          .insertAdjacentHTML("beforeend", html);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

async function log_in_user(arr) {
  const val = arr;
  //console.log(val)
  try {
    console.log(val);
    const response = await fetch(`http://localhost:5500/log_in/${val}`);
    const list = await response.json().then();
    console.log(Object.keys(list).length);
    if (Object.keys(list).length === 2) {
      document
        .querySelector(".log_in")
        .parentNode.removeChild(document.querySelector(".log_in"));
      document
        .querySelector(".back-modul")
        .parentNode.removeChild(document.querySelector(".back-modul"));
      document
        .getElementById("log_in")
        .parentNode.removeChild(document.getElementById("log_in"));
      document
        .getElementById("sign_up")
        .parentNode.removeChild(document.getElementById("sign_up"));
      if (list.status === "admin") {
        console.log('admin sozdanir knopok')
        let html = `
        <a id="sign_up" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="../images/account_edit_icon_135995.png" alt="sign up">
        ${list.login}
    </a>
    <a id="log_in" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="../images/account_edit_icon_135995.png" alt="sign up">
        Status
    </a>
        `;
       // admin = true;
        document
          .querySelector(".enter-site")
          .insertAdjacentHTML("beforeend", html);
        document
          .getElementById("log_in")
          .addEventListener("click", () => status());
        admin_buttons();
      } else {
        let html = `
        <a id="sign_up" href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <img src="../images/account_edit_icon_135995.png" alt="sign up">
        ${list.login}
    </a>
        `;
        document
          .querySelector(".enter-site")
          .insertAdjacentHTML("beforeend", html);
      }
    } else {
      Array.from(document.querySelectorAll(".nick input")).forEach(
        (element) => (element.style.border = "2px solid red")
      );
      alert("Неправильный Login или Пароль!");
    }
  } catch (error) {
    console.log(error);
  }
}

async function add_new_status(user) {
  const user_status = user;
  console.log("status");
  try {
    const res = await fetch("http://localhost:5500/new_status", {
      method: "POST",
      body: JSON.stringify({
        user_status,
      }),
      headers: {
        "Content-type": "application/json",
      },
    });
    res.json().then((res) => {
      console.log(res.status);
      if (res.status == "complited") {
        document
          .querySelector(".log_in")
          .parentNode.removeChild(document.querySelector(".log_in"));
        document
          .querySelector(".back-modul")
          .parentNode.removeChild(document.querySelector(".back-modul"));
      } else {
        document.querySelector(".nick input").style.border = "2px solid red";
        alert("Неправильный Login!");
      }
    });
  } catch (error) {
    console.log(error);
  }
}
let id_dress = 0,
id_sweatshirt = 0,
id_top = 0,
id_suit = 0,
id_skirt = 0;

document.getElementById("dresses-prev").addEventListener("click", () => {
  default_slider_for_previus_elements(
    id_dress,
    arr_dress,
    place_dress,
    5
  ).then((res) => (id_dress = res));
});
document.getElementById("dresses-next").addEventListener("click", () => {
  default_slider_for_next_elements(
    id_dress,
    arr_dress,
    place_dress,
    5
  ).then((res) => (id_dress = res));
});

document.getElementById("sweatshirt-prev").addEventListener("click", () => {
  default_slider_for_previus_elements(
    id_sweatshirt,
    arr_sweatshirt,
    place_sweatshirt,
    5
  ).then((res) => (id_dress = res));
});
document.getElementById("sweatshirt-next").addEventListener("click", () => {
  default_slider_for_next_elements(
    id_sweatshirt,
    arr_sweatshirt,
    place_sweatshirt,
    5
  ).then((res) => (id_sweatshirt = res));
});

document.getElementById("top-prev").addEventListener("click", () => {
  default_slider_for_previus_elements(
    id_top,
    arr_top,
    place_top,
    5
  ).then((res) => (id_top = res));
});

document.getElementById("top-next").addEventListener("click", () => {
  default_slider_for_next_elements(
    id_top,
    arr_top,
    place_top,
    5
  ).then((res) => (id_top = res));
});

document.getElementById("suit-next").addEventListener("click", () => {
  default_slider_for_next_elements(
    id_suit,
    arr_suit,
    place_suit,
    5
  ).then((res) => (id_suit = res));
});

document.getElementById("suit-prev").addEventListener("click", () => {
  default_slider_for_previus_elements(
    id_suit,
    arr_suit,
    place_suit,
    5
  ).then((res) => (id_suit = res));
});

document.getElementById("skirts-prev").addEventListener("click", () => {
  default_slider_for_previus_elements(
    id_skirt,
    arr_skirt,
    place_skirt,
    5
  ).then((res) => (id_skirt = res));
});

document.getElementById("skirts-next").addEventListener("click", () => {
  default_slider_for_next_elements(
    id_skirt,
    arr_skirt,
    place_skirt,
    5
  ).then((res) => (id_skirt= res));
});


// //------------------------------
// //массивы на слайдеры

 let arr_dress=[],
  arr_sweatshirt=[],
  arr_top=[],
  arr_skirt=[],
  arr_suit=[];


async function serv_arr_dress() {
  console.log("вызов");
  try {
    const response = await fetch(`http://localhost:5500/dress_arr/dress_ar`);
    await response.json().then((res) => (arr_dress = res.arr_dress));
    console.log(arr_dress);
  } catch (error) {
    console.log(error);
  }
}

//serv_arr_dress();

async function serv_arr_sweatshirt() {
  try {
    const response = await fetch(`http://localhost:5500/sweatshirt_arr/sweatshirt_ar`);
    await response.json().then((res) => {
      arr_sweatshirt = res.arr_sweatshirt;
    });
    console.log(arr_sweatshirt)
  } catch (error) {
    console.log(error);
  }
}

async function serv_arr_top() {
  try {
    const response = await fetch(`http://localhost:5500/top_arr/top`);
    await response.json().then((res) => {
      arr_top = res.arr_top;
    });
    console.log(arr_top)
  } catch (error) {
    console.log(error);
  }
}

async function serv_arr_all_clothes() {
  try {
    const response = await fetch(`http://localhost:5500/arr_all_clothes/all`);
    await response.json().then((res) => {
      arr_all_clothes = res.arr_all_clothes;
    });
  } catch (error) {
    console.log(error);
  }
}

async function serv_arr_skirt() {
  try {
    const response = await fetch(`http://localhost:5500/skirt_arr/skirt_ar`);
    await response.json().then((res) => {
      arr_skirt = res.arr_skirts;
    });
    console.log(arr_skirt)
  } catch (error) {
    console.log(error);
  }
}

// async function serv_arr_free_game() {
//   try {
//     const response = await fetch(`http://localhost:5500/free_arr/free`);
//     await response.json().then((res) => {
//       arr_free_game = res.arr_free_games;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

async function serv_arr_suit() {
  try {
    const response = await fetch(`http://localhost:5500/suit_arr/suit`);
    await response.json().then((res) => {
      arr_suit = res.arr_suit_clothes;
    });
    console.log(arr_suit);
  } catch (error) {
    console.log(error);
  }
}

// document.querySelector('.tesst').addEventListener('click', ()=>{
//   serv_arr_sweatshirt();
// })


// async function serv_arr_preprodaction_games() {
//   try {
//     const response = await fetch(
//       `http://localhost:5500/preprodaction_arr/preprodaction`
//     );
//     await response.json().then((res) => {
//       arr_preprodaction_games = res.arr_preprodaction_games;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// async function serv_arr_online_games() {
//   try {
//     const response = await fetch(`http://localhost:5500/online_arr/online`);
//     await response.json().then((res) => {
//       arr_online_games = res.arr_online_games;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }

// //-------------------------------------------------------

window.onload = async function () {
  console.log('onload')
  await serv_arr_dress();
  // await serv_arr_online_games();
  // await serv_arr_preprodaction_games();
  await serv_arr_suit();
  // await serv_arr_free_game();
  await serv_arr_skirt();
  await serv_arr_top();
  await serv_arr_sweatshirt();
  await serv_arr_all_clothes();

 // main_list(arr_dress);
  main_list_dress(arr_dress);
  main_list_sweatshirt(arr_sweatshirt);
  main_list_top(arr_top);
  main_list_skirt(arr_skirt);
  main_list_suit(arr_suit);

  place_dress = document.querySelectorAll(".items-dresses-clothess");
  place_sweatshirt = document.querySelectorAll(".items-sweatshirt-clothess" );
  place_top = document.querySelectorAll(".items-top-clothess");
  place_skirt = document.querySelectorAll('.items-skirt-clothess');
  place_suit = document.querySelectorAll(".items-suit-clothess");
  Array.from(document.querySelectorAll("img")).forEach((element) =>
  element.addEventListener("click", () => find_choose_clothes(element.alt))
);
}

// //   place_dress = document.querySelectorAll(".items-dresses-clothess")
// //   place_sweatshirt = document.querySelectorAll(".items-sweatshirt-clothess" );
// //   place_top = document.querySelectorAll(".items-top-clothess");
//      place_skirt = document.querySelectorAll('.items-skirt-clothess');
// //   place_suit = document.querySelectorAll(".items-suit-clothess");

// // };

// //---------------------------------------------------------

// // document.getElementById('discount-prev').addEventListener('click',()=>{default_slider_prev_game(id_discount_game,mass_pict_new_game, place_dress)});
// // document.getElementById('discount-next').addEventListener('click',()=>{default_slider_next_game(id_discount_game,mass_pict_new_game, place_dress)});
// document.getElementById("preproduces-prev").addEventListener("click", () => {
//   default_slider_for_previus_elements(
//     id_preproduces_game,
//     arr_preprodaction_games,
//     place_sweatshirt,
//     4
//   ).then((res) => (id_preproduces_game = res));
// });
// document.getElementById("preproduces-next").addEventListener("click", () => {
//   default_slider_for_next_elements(
//     id_preproduces_game,
//     arr_preprodaction_games,
//     place_sweatshirt,
//     4
//   ).then((res) => (id_preproduces_game = res));
// });
// document.getElementById("best-online-prev").addEventListener("click", () => {
//   default_slider_for_previus_elements(
//     id_best_online_game,
//     arr_online_games,
//     place_top,
//     5
//   ).then((res) => (id_best_online_game = res));
// });

// document.getElementById("discount-prev").addEventListener("click", () => {
//   discaunt_slider_for_previus_elements(
//     id_discaunt_game,
//     arr_suit,
//     place_suit,
//     5
//   ).then((res) => (id_best_online_game = res));
// });

// document.getElementById("discount-next").addEventListener("click", () => {
//   console.log("element ", place_suit[0].childNodes[7].childNodes[1]);
//   console.log("element ", place_suit[0].childNodes[7].childNodes[3]);
//   console.log("element ", place_suit[0].childNodes[7].childNodes[5]);
//   discaunt_slider_for_next_elements(
//     id_discaunt_game,
//     arr_suit,
//     place_suit,
//     5
//   ).then((res) => (id_discaunt_game = res));
// });

// document.getElementById("best-online-next").addEventListener("click", () => {
//   default_slider_for_next_elements(
//     id_best_online_game,
//     arr_online_games,
//     place_top,
//     5
//   ).then((res) => (id_best_online_game = res));
// });
document.getElementById("view").addEventListener("click", () => {
  console.log(arr_all_clothes);
  all_game(arr_all_clothes);
});

// document.getElementById("more_top_gaems").addEventListener("click", () => {
//   top_chart(mass_pict_new_game);
// });
document.getElementById("log_in").addEventListener("click", () => {
  console.log('login')
  log_in();
});
document.getElementById("sign_up").addEventListener("click", () => {
  sign_up();
});
// listener_for_img();

// document.querySelector('.search_game').addEventListener('');

document.querySelector(".search-wrapper").addEventListener("submit", () => {
  find_choose_clothes(document.querySelector(".search").value);
});

document.querySelector(".find").addEventListener("click", () => {
  find_choose_clothes(document.querySelector(".search").value);
});

 export {
   add_new_game_db,
   add_new_user,
   log_in_user,
   add_new_status,
  find_choose_clothes,
 };
console.log('ojfpqejklfqjgqe')