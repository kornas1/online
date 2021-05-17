//const { response } = require("express");
const express = require("express"),
  mongoose = require("mongoose"),
  keys = require("./config/keys.js"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  User = require("./models/users"),
  Game = require("./models/clothes");
const { db } = require("./models/users");

const PORT = process.env.PORT || 5500;

const app = express();
app.use(cors());
var cb = bodyParser.json();
app.use(cb);

async function start() {
  try {
    await mongoose
      .connect(keys.mongoURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("MongoDB connected");
      })
      .catch((error) => console.log(error));
    app.listen(PORT, () => {
      console.log(`Server ${PORT} is work!`);
    });
  } catch (e) {
    console.log(e);
  }
}

start();

// app.post("/new_game", cb, (req, res) => {
//   const game_info = req.body.game_info;

//   console.log(game_info);

//   const size = game_info[1].split(","),
//    firma = game_info[4].split(","),
//    images = game_info[5].split(","),
//    structure = game_info[6].split(",");

//   const clothes = new Clothes({
//     name: game_info[0],
//     size: {
//       short_size:size[0],
//        length:size[1],
//        Waist_width:size[2],
//        Hip_Width:size[3],
//     },
//     prise: game_info[2],
//     color: game_info[3],
//     firma: {
//       name: firma[0],
//       country:firma[1],
//     },
//     images: {
//       main_img: images[0],
//       all_img: images[1],
//     },
//   structure: {
//     cotton: structure[0],
//     silk: structure[1],
//     polyester: structure[2],
//     wool: structure[3],
//     flax: structure[4],
//   },
//   collection:game_info[7],
//   sezon: game_info[8],
//   discount: {
//   type:game_info[9],
//   default:'none',
//   },
//   sex: game_info[10],
// });

//   clothes.save();
//   res.sendStatus(200);
// });

// app.post("/change_game", cb, (req, res) => {
//   console.log(req.body.game_info);
//   const change_game_info = req.body.game_info;
//   if (change_game_info[2] === "Effect" && change_game_info.length === 3) {
//     console.log("effect");
//     console.log("ne disc");
//     Game.findOneAndUpdate(
//       { name: change_game_info[0] },
//       { $push: { effect: change_game_info[1] } },
//       { new: true },
//       (err, respons) => {
//         if (err) {
//           console.log(err);
//           res.json({ status: "error" });
//         } else {
//           console.log(respons);
//           res.json({ status: "complite" });
//         }
//       }
//     );
//   } else if (
//     change_game_info[3] === "Effect" &&
//     change_game_info.length === 4
//   ) {
//     Game.findOneAndUpdate(
//       { name: change_game_info[1] },
//       {
//         $push: { effect: change_game_info[2] },
//         $set: { discaunt: change_game_info[0] },
//       },
//       { new: true },
//       (err, respons) => {
//         if (err) {
//           console.log(err);
//           res.json({ status: "error" });
//         } else {
//           console.log(respons);
//           res.json({ status: "complite" });
//         }
//       }
//     );
//   } else {
//     Game.findOneAndUpdate(
//       { name: change_game_info[1] },
//       { $set: { prize: change_game_info[2] } },
//       { new: true },
//       (err, resp) => {
//         if (err) {
//           console.log(err);
//           res.json("error");
//         } else {
//           console.log(resp);
//           res.json({ status: "coplite" });
//         }
//       }
//     );
//   }
// });

app.post("/new_game", cb, (req, res) => {
  const game_info = req.body.game_info;

  console.log(game_info);

  const size = game_info[1].split(","),
   firma = game_info[4].split(","),
   images = game_info[5].split(","),
   structure = game_info[7].split(",");

  const game = new Game({
    name: game_info[0],
    size: {
      short_size:size[0],
       length:size[1],
       Waist_width:size[2],
       Hip_Width:size[3],
    },
    prise: game_info[2],
    color: game_info[3],
    firma: {
      name: firma[0],
      country:firma[1],
    },
    images: {
      main_img: game_info[6],
      all_img: images,
    },
  coleion:game_info[8],
  sezon: game_info[9],
  discount: game_info[10],
  sex: game_info[11],
  structure: {
    cotton: structure[0],
    silk: structure[1],
    polyester: structure[2],
    wool: structure[3],
   flax: structure[4],
},
});

  game.save();
  res.sendStatus(200);
  });
app.post("/new_user", cb, (req, res) => {
  const user_info = req.body.user_info;
  console.log(user_info);
  console.log("ia v fun");
  User.find({ login: user_info[0] }).then((result) => {
    console.log(result);
    if (result.length === 0) {
      User.find({ email: user_info[1] }).then((result) => {
        if (result.length === 0) {
          const user = new User({
            login: user_info[0],
            email: user_info[1],
            password: user_info[2],
            status: "client",
          });
          user.save();
          res.json({ status: "добавлен" });
        } else {
          console.log("существует");
          res.json({ status: "существует" });
        }
      });
    } else {
      console.log("существует");
      res.json({ status: "существует" });
    }
  });
});

app.post("/new_status", cb, (req, res) => {
  console.log(req.body.user_status);
  const user = req.body.user_status;
  console.log(user);
  User.findOneAndUpdate(
    { login: user },
    { $set: { status: "admin" } },
    { new: true },
    (err, doc) => {
      if (err) {
        console.log("we have a problem");
        res.json({ status: "error" });
      } else {
        console.log(doc);
        if (doc !== null) {
          res.json({ status: "complited" });
        } else {
          res.json({ status: "error" });
        }
      }
    }
  );
});

app.get("/log_in/:word", (req, res) => {
  const val = req.params.word.toString().split(",");
  console.log(val);
  User.find({ login: val[0], password: val[1] }).then((result) => {
    if (result.length !== 0) {
      console.log(result[0].status);
      res.json({ login: val[0], status: result[0].status });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/find_clothes/:word", (req, res) => {
  const val = req.params.word;
  console.log("find_clothes ----- ", val);
  Game.find({ name: val }).then((result) => {
    if (result.length !== 0) {
      console.log(result[0]);
      res.json({ clothes: result[0] });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

// //--------------------------------------------

app.get("/dress_arr/:word", (req, res) => {
  // const val = req.params.word.toString().split(",");
  console.log("dress_arr");
  let arr_new = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      console.log(result);
      arr_new = result.filter((element) => {
        return element.coleion === "dress"
      });
      console.log(arr_new);
      res.json({ arr_dress: arr_new });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/arr_all_clothes/:word", (req, res) => {
  // const val = req.params.word.toString().split(",");
  console.log("arr_all_clothes");
  let arr_new = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      res.json({ arr_all_clothes: result });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/sweatshirt_arr/:word", (req, res) => {
  let sweatshirt_clothes = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      console.log(result);
      sweatshirt_clothes = result.filter((element) => {
        return element.coleion === "sweatshirt";
      });
      console.log(sweatshirt_clothes);
      res.json({ arr_sweatshirt: sweatshirt_clothes });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/top_arr/:word", (req, res) => {
  let top_clothes = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      console.log(result);
      top_clothes = result.filter((element) => {
        return element.coleion === "top";
      });
      console.log(top_clothes);
      res.json({ arr_top: top_clothes });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

app.get("/skirt_arr/:word", (req, res) => {
  let skirt_clothes = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      console.log(result);
      skirt_clothes = result.filter((element) => {
        return element.coleion === "skirt";
      });
      console.log(skirt_clothes);
      res.json({ arr_skirts: skirt_clothes });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});

// app.get("/free_arr/:word", (req, res) => {
//   let free_games = [];
//   Game.find({}).then((result) => {
//     if (result.length !== 0) {
//       console.log(result);
//       free_games = result.filter((element) => {
//         return element.coleion === ""("free");
//       });
//       console.log(free_games);
//       res.json({ arr_free_games: free_games });
//     } else {
//       res.json({ status: "Error!" });
//     }
//   });
//   // JSON.stringify(arr)
// });

// app.get("/preprodaction_arr/:word", (req, res) => {
//   let preprodaction_games = [];
//   Game.find({}).then((result) => {
//     if (result.length !== 0) {
//       console.log(result);
//       preprodaction_games = result.filter((element) => {
//         return element.coleion === ""("preprodaction");
//       });
//       console.log(preprodaction_games);
//       res.json({ arr_preprodaction_games: preprodaction_games });
//     } else {
//       res.json({ status: "Error!" });
//     }
//   });
//   // JSON.stringify(arr)
// });

// app.get("/online_arr/:word", (req, res) => {
//   let online_games = [];
//   Game.find({}).then((result) => {
//     if (result.length !== 0) {
//       online_games = result.filter((element) => {
//         return element.coleion === ""("online");
//       });
//       console.log(online_games);
//       res.json({ arr_online_games: online_games });
//     } else {
//       res.json({ status: "Error!" });
//     }
//   });
//   // JSON.stringify(arr)
// });

app.get("/suit_arr/:word", (req, res) => {
  let suit_clothes = [];
  Game.find({}).then((result) => {
    if (result.length !== 0) {
      suit_clothes = result.filter((element) => {
        return element.coleion === "suit";
      });
      console.log(suit_clothes);
      res.json({ arr_suit_clothes: suit_clothes });
    } else {
      res.json({ status: "Error!" });
    }
  });
  // JSON.stringify(arr)
});
