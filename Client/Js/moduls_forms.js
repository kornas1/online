import {
  add_new_game_db,
  add_new_user,
  log_in_user,
  add_new_status,
  find_choose_clothes,
} from "./script.js";


function all_game(massPict) {
  console.log(massPict);
  const module_window_all_game = document.createElement("div"),
    back_module_window = document.createElement("div"),
    main_section_module_window = document.createElement("div"),
    module_content = document.createElement("div"),
    up_modul = document.createElement("div"),
    exit = document.createElement("div");
  back_module_window.classList.add("back-modul");
  module_window_all_game.classList.add("modul-window");
  up_modul.classList.add("up-module-window");
  exit.classList.add("exit");
  exit.setAttribute("id", "exit");
  exit.innerHTML = "<span>&#10006</span>";
  main_section_module_window.classList.add("main-section-modul-window");
  main_section_module_window.classList.add("all-game");
  module_content.classList.add("module-content");
  document.querySelector("header").after(back_module_window);
  back_module_window.after(module_window_all_game);
  module_window_all_game.prepend(up_modul);
  up_modul.append(exit);
  module_window_all_game.append(main_section_module_window);
  main_section_module_window.append(module_content);
  massPict.forEach((element) => {
    let img = document.createElement("img");
    img.classList.add("slides");
    img.classList.add("module-content-items");
    img.setAttribute("src", `${element.images.main_img}`);
    img.setAttribute("alt", `${element.name}`);
    module_content.append(img);
  });

  document.querySelector(".exit").addEventListener("click", () => {
    document
      .querySelector(".modul-window")
      .parentNode.removeChild(document.querySelector(".modul-window"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });

  Array.from(document.querySelectorAll("img")).forEach((element) => {
    element.addEventListener("click", () => {
      find_choose_clothes(element.alt);
      document
        .querySelector(".modul-window")
        .parentNode.removeChild(document.querySelector(".modul-window"));
      document
        .querySelector(".back-modul")
        .parentNode.removeChild(document.querySelector(".back-modul"));
    });
  });
}

function top_chart(massPict) {
  const module_window_all_game = document.createElement("div"),
    back_module_window = document.createElement("div"),
    main_section_module_window = document.createElement("div"),
    module_content = document.createElement("div"),
    up_modul = document.createElement("div"),
    exit = document.createElement("div");
  back_module_window.classList.add("back-modul");
  module_window_all_game.classList.add("modul-window");
  up_modul.classList.add("up-module-window");
  exit.classList.add("exit");
  exit.setAttribute("id", "exit");
  exit.innerHTML = "<span>&#10006</span>";
  main_section_module_window.classList.add("main-section-modul-window");
  main_section_module_window.classList.add("all-game");
  module_content.classList.add("module-content");
  module_content.classList.add("top-chart");
  document.querySelector("header").after(back_module_window);
  back_module_window.after(module_window_all_game);
  module_window_all_game.prepend(up_modul);
  up_modul.append(exit);
  module_window_all_game.append(main_section_module_window);
  main_section_module_window.append(module_content);
  massPict.forEach((element) => {
    let img = document.createElement("img");
    img.classList.add("slides");
    img.classList.add("module-content-items");
    img.classList.add("top-chart-items-game");
    img.setAttribute("src", `${element.images.main_img}`);
    img.setAttribute("alt", `${element.name}`);
    module_content.append(img);
  });

  document.querySelector(".exit").addEventListener("click", () => {
    document
      .querySelector(".modul-window")
      .parentNode.removeChild(document.querySelector(".modul-window"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
  Array.from(document.querySelectorAll("img")).forEach((element) =>
    element.addEventListener("click", () => find_choose_clothes(element.alt))
  );
}

function log_in() {
  console.log('login module')
  const log_window = document.createElement("div"),
    back_module_window = document.createElement("div"),
    content_log_in = document.createElement("div"),
    inputs = document.createElement("div"),
    up_modul = document.createElement("div"),
    h1 = document.createElement("h1"),
    exit = document.createElement("div"),
    button = document.createElement("button");
  back_module_window.classList.add("back-modul");
  log_window.classList.add("log_in");
  up_modul.classList.add("up-module-window");
  exit.classList.add("exit");
  exit.setAttribute("id", "exit");
  exit.innerHTML = "<span>&#10006</span>";
  content_log_in.classList.add("content_log_in");
  inputs.classList.add("inputs");
  document.querySelector("header").after(back_module_window);
  back_module_window.after(log_window);
  log_window.prepend(up_modul);
  up_modul.append(exit);
  log_window.append(content_log_in);
  h1.innerHTML = "Log in";
  content_log_in.prepend(h1);
  content_log_in.append(inputs);
  for (let i = 0; i < 2; i++) {
    console.log(i);
    let nick = document.createElement("div"),
      span = document.createElement("span"),
      input = document.createElement("input");
    nick.classList.add("nick");
    if (i === 0) {
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Login");
    } else {
      input.setAttribute("type", "password");
      input.setAttribute("placeholder", "Password");
    }
    inputs.append(nick);
    nick.append(span);
    nick.append(input);
  }

  button.classList.add("add_user");
  button.setAttribute("type", "submit");
  button.innerHTML = "Submit";
  inputs.append(button);

  document.querySelector(".exit").addEventListener("click", () => {
    document
      .querySelector(".log_in")
      .parentNode.removeChild(document.querySelector(".log_in"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });

  const full_information_new_game = document.querySelectorAll(".nick input");
  console.log(full_information_new_game);
  document.querySelector(".add_user").addEventListener("click", () => {
    const info_items = Array.from(full_information_new_game).map(
      (element) => element.value
    );
    log_in_user(info_items);
  });
}

function sign_up() {
  const log_window = document.createElement("div"),
    back_module_window = document.createElement("div"),
    content_log_in = document.createElement("div"),
    inputs = document.createElement("div"),
    up_modul = document.createElement("div"),
    h1 = document.createElement("h1"),
    exit = document.createElement("div"),
    button = document.createElement("button");
  back_module_window.classList.add("back-modul");
  log_window.classList.add("sign_up");
  up_modul.classList.add("up-module-window");
  exit.classList.add("exit");
  exit.setAttribute("id", "exit");
  exit.innerHTML = "<span>&#10006</span>";
  content_log_in.classList.add("content_log_in");
  inputs.classList.add("inputs");
  inputs.classList.add("inputs_sign_up");
  document.querySelector("header").after(back_module_window);
  back_module_window.after(log_window);
  log_window.prepend(up_modul);
  up_modul.append(exit);
  log_window.append(content_log_in);
  h1.innerHTML = "Sign up";
  content_log_in.prepend(h1);
  content_log_in.append(inputs);
  for (let i = 0; i < 3; i++) {
    console.log(i);
    let nick = document.createElement("div"),
      span = document.createElement("span"),
      input = document.createElement("input");
    nick.classList.add("nick");
    if (i === 0) {
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Login");
    } else if (i === 1) {
      input.setAttribute("type", "text");
      input.setAttribute("placeholder", "Email");
    } else {
      input.setAttribute("type", "password");
      input.setAttribute("placeholder", "password");
    }
    inputs.append(nick);
    nick.append(span);
    nick.append(input);
  }
  button.classList.add("add_user");
  button.setAttribute("type", "submit");
  button.innerHTML = "Submit";
  inputs.append(button);
  const full_information_new_game = document.querySelectorAll(".nick input");
  console.log(full_information_new_game);
  document.querySelector(".add_user").addEventListener("click", () => {
    const info_items = Array.from(full_information_new_game).map(
      (element) => element.value
    );
    console.log(info_items);
    add_new_user(info_items, full_information_new_game);
  });
  document.querySelector(".exit").addEventListener("click", () => {
    document
      .querySelector(".sign_up")
      .parentNode.removeChild(document.querySelector(".sign_up"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
}

function status() {
  const log_window = document.createElement("div"),
    back_module_window = document.createElement("div"),
    content_log_in = document.createElement("div"),
    inputs = document.createElement("div"),
    up_modul = document.createElement("div"),
    h1 = document.createElement("h1"),
    exit = document.createElement("div"),
    button = document.createElement("button");
  back_module_window.classList.add("back-modul");
  log_window.classList.add("log_in");
  up_modul.classList.add("up-module-window");
  exit.classList.add("exit");
  exit.setAttribute("id", "exit");
  exit.innerHTML = "<span>&#10006</span>";
  content_log_in.classList.add("content_log_in");
  inputs.classList.add("inputs");
  document.querySelector("header").after(back_module_window);
  back_module_window.after(log_window);
  log_window.prepend(up_modul);
  up_modul.append(exit);
  log_window.append(content_log_in);
  h1.innerHTML = "Status";
  content_log_in.prepend(h1);
  content_log_in.append(inputs);
  let nick = document.createElement("div"),
    span = document.createElement("span"),
    input = document.createElement("input");
  nick.classList.add("nick");
  input.setAttribute("type", "text");
  input.setAttribute("placeholder", "Login");
  inputs.append(nick);
  nick.append(span);
  nick.append(input);
  button.classList.add("add_user");
  button.setAttribute("type", "submit");
  button.innerHTML = "Submit";
  inputs.append(button);

  document.querySelector(".exit").addEventListener("click", () => {
    document
      .querySelector(".log_in")
      .parentNode.removeChild(document.querySelector(".log_in"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });

  document.querySelector(".add_user").addEventListener("click", () => {
    const user = document.querySelector(".nick input").value;
    console.log(user);
    add_new_status(user);
  });
}

function module_game(obj) {
  console.log(obj);

let text = `
<div class="back-modul-clothes"></div>
<div class="modul-window">
  <div class="up-module-window">
    <div id='exit' class="exit"><span>&#10006</span></div>
  </div> 
 <div class="short_module_info">
    <img src="${obj.images.main_img}" alt="${obj.name}">
    <div class="short_text_module">
      <div class="marg">${obj.name}</div>
      
      This fibre is made from recycled PET plastic, 
      like that used in water bottles. By transforming
       this waste into a new resource, we reduce the production 
       of virgin raw materials 
      and the consumption of water, energy and natural resources.
      <div class="flex">
         <div class="module_button_buy">Buy</div>
         <div class="numb_prize"><span>${obj.prise} &#8381;</span></div>
    </div>
    </div>
    <div class="module_conteiner_prize">
      <div class="module_prize">
        
        
      </div>
    </div>
  </div> 
  <div class="full_module_info">
    <div class="title_module">
      Description
    </div>
    <div class="info_for_module_clothes">
      <div class="module_clothes_dev">
        <div>Size</div>
        <div>${obj.size.short_size}</div>
      </div>
      <div class="module_clothes_publisher">
        <div>Firma</div>
        <div>${obj.firma.name}</div>
      </div>
      <div class="module_clothes_data">
        <div>Cotton</div>
        <div>${obj.structure.cotton}</div>
      </div>
      <div class="module_clothes_tags">
        <div>Polyester</div>
        <div>${obj.structure.polyester}</div>
      </div>
      <div class="module_clothes_raiting">
        <div>Wool</div>
        <div>${obj.structure.wool}</div>
      </div>
      <div class="module_clothes_platform">
        <div>Flax</div>
        <div>${obj.structure.flax}</div>
      </div>
      </div>
  </div>
</div>  
`;

  document.querySelector("header").insertAdjacentHTML("afterend", text);

  document.querySelector(".exit").addEventListener("click", () => {
    console.log('exit');
    document
      .querySelector(".modul-window")
      .parentNode.removeChild(document.querySelector(".modul-window"));
    document
      .querySelector(".back-modul-clothes")
      .parentNode.removeChild(document.querySelector(".back-modul-clothes"));
  });
}

function add_new_game() {
  let html_text = `
  <div class="back-modul"></div>
  <form action="new_game" method='POST' class='module_wind_new_game' onsubmit="return false;">
  <div class="up-module-window">
    <div id='exit' class="exit"><span>&#10006</span></div>
  </div>
  <div class='content_log_in'>
    <h1>New object</h1>
<div class="inputs inputs_add_new_game">
<div class="nick"><input placeholder="Name" type="text"></div>
<div class="nick"><input placeholder="Size" type="text"></div>
<div class="nick"><input placeholder="Prise" type="text"></div>
<div class="nick"><input placeholder="color" type="text"></div>
<div class="nick"><input placeholder="firma" type="text"></div>
<div class="nick"><input placeholder="All imges" type="text"></div>
<div class="nick"><input placeholder="Main image" type="text"></div>
<div class="nick"><input placeholder="structure" type="text"></div>
<div class="nick"><input placeholder="collection" type="text"></div>
<div class="nick"><input placeholder="sezon" type="text"></div>
<div class="nick"><input placeholder="discount" type="text"></div>
<div class="nick"><input placeholder="sex" type="text"></div>
<button type="submit" class="add_user">Add</button></div>
  </div>
</form>
`;
  document.querySelector("header").insertAdjacentHTML("afterend", html_text);

  const full_information_new_game = document.querySelectorAll(".nick input");
  console.log(full_information_new_game);
  document.querySelector(".add_user").addEventListener("click", () => {
    const info_items = Array.from(full_information_new_game).map(
      (element) => element.value
    );
    console.log(info_items);
    add_new_game_db(info_items);
    document
      .querySelector(".module_wind_new_game")
      .parentNode.removeChild(document.querySelector(".module_wind_new_game"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
  document.getElementById("exit").addEventListener("click", () => {
    document
      .querySelector(".module_wind_new_game")
      .parentNode.removeChild(document.querySelector(".module_wind_new_game"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
}

function change_game_but() {
  let html_text = `
  <div class="back-modul"></div>
<form action="change_game" class='sign_up' method='POST'onsubmit = "return false;">
  <div class="up-module-window">
    <div id='exit' class="exit"><span>&#10006</span></div>
  </div>
  <div class='content_log_in'>
    <h1>Change_game</h1>
<div class="inputs inputs_sign_up">
  <div class="nick"><input type="text" placeholder="Name"></div>
  <div class="nick nick-flex"><div><select size="0" name="hero[]">
    <option selected>Choose function</option>
    <option value="Prize">Prize</option>
    <option value="Effect">Effect</option>
   </select></div><input type="text" id='change_effect' placeholder="Effect"></div>
<button type="submit" id="change_game" class="add_user">Add</button>
</div>
  </div>
</form>
main_list
`;
  document.querySelector("header").insertAdjacentHTML("afterend", html_text);

  const select = document.querySelector("select"),
    change_btn = document.querySelector(".add_user"),
    change_effect = document.getElementById("change_effect");

  select.addEventListener("change", () => {
    console.log(select.value);
  });
  change_btn.addEventListener("click", () => {
    if (
      change_effect.value === "discaunt" ||
      change_effect.value === "Discaunt"
    ) {
      const select_val = select.value;
      discaunt(select_val);
    } else {
      const full_information_new_game =
        document.querySelectorAll(".nick input");
      document.querySelector(".add_user").addEventListener("click", () => {
        const info_items = Array.from(full_information_new_game).map(
          (element) => element.value
        );
        info_items.push(select.value);
        add_new_game_db(info_items);
        document
          .querySelector(".sign_up")
          .parentNode.removeChild(document.querySelector(".sign_up"));
        document
          .querySelector(".back-modul")
          .parentNode.removeChild(document.querySelector(".back-modul"));
      });
    }
  });
  document.getElementById("exit").addEventListener("click", () => {
    document
      .querySelector(".sign_up")
      .parentNode.removeChild(document.querySelector(".sign_up"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
}

function admin_buttons() {
  const add_game = `<span id="add_new_game" class="add_new_game">  ADD+</span>`;

  document
    .querySelector(".lower-header div")
    .insertAdjacentHTML("beforeend", add_game);


  document.getElementById("add_new_game").addEventListener("click", () => {
    add_new_game();
  });

}

function discaunt(select) {
  const html = `<div id="discaunt_module" class='sign_up up_mod' method='POST'onsubmit = "return false;">
  <div class='content_log_in'>
    <h1>Discaunt</h1>
<div class="inputs inputs_sign_up">
  <div class="nick"><input type="text" id="amount_of_discaunt" placeholder="Discaunt"></div>
<button type="submit" id="add_discaunt" class="add_user">Add</button>
</div>
  </div>
</div>`;
  document.querySelector("header").insertAdjacentHTML("afterend", html);

  console.log("rabotaet tyt");
  console.log("rabotaet posle");
  document.getElementById("add_discaunt").addEventListener("click", () => {
    const full_information_new_game = document.querySelectorAll(".nick input");
    const info_items = Array.from(full_information_new_game).map(
      (element) => element.value
    );
    info_items.push(select);
    console.log(info_items);
    add_new_game_db(info_items);
    document
      .querySelector(".sign_up")
      .parentNode.removeChild(document.querySelector(".sign_up"));
  });
  document.getElementById("exit").addEventListener("click", () => {
    document
      .querySelector(".sign_up")
      .parentNode.removeChild(document.querySelector(".sign_up .up_mod"));
    document
      .querySelector(".back-modul")
      .parentNode.removeChild(document.querySelector(".back-modul"));
  });
}

export {
  all_game,
  top_chart,
  log_in,
  sign_up,
  module_game,
  status,
  admin_buttons,
};

