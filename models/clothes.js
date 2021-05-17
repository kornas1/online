

// const clothesSchem = new Schema({
//   name: String,
//   size:{
//     short_size:String,
//     length:String,
//     Waist_width:String,
//     Hip_Width:String,
//   },
//   prise: String,
//   color: String,
//   firma: {
//     name: String,
//     country: String,
//   },
//   images: {
//     main_img: String,
//     all_img: Array,
//   },
//   structure: {
//     cotton: String,
//     silk: String,
//     polyester: String,
//     wool: String,
//     flax: String,
//   },
//   collection:String,
//   sezon: String,
//   discount: {
// type:String,
// default:'none',
//   },
//   sex: String,
// });

const mongoose = require("mongoose");
  const { Schema } = mongoose;
  
  const gameSchema = new Schema({
    name: String,
      size:{
        short_size:String,
        length:String,
        Waist_width:String,
        Hip_Width:String,
      },
    prise: String,
    color: String,
      firma: {
        name: String,
        country: String,
      },
    images: {
        main_img: String,
        all_img: Array,
      },
    
  coleion: String,
  sezon: String,
  discount: String,
  sex: String,
  structure: {
        cotton: String,
        silk: String,
        polyester: String,
        wool: String,
        flax: String,
      },
  });

  module.exports = mongoose.model("game", gameSchema);

