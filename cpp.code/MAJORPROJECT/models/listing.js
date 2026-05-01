const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title:{
        type:String,
        required:true,
    },
    image:{
        filename:{
            type:String,
            default:"https://tse2.mm.bing.net/th/id/OIP.5ePCNx3-wG62e3qRQLjLxgHaFj?pid=Api&P=0&h=180",
            set: (v)=>
                v === "" ? "https://tse2.mm.bing.net/th/id/OIP.5ePCNx3-wG62e3qRQLjLxgHaFj?pid=Api&P=0&h=180" : v,
        }
    },
    price:Number,
    location:String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;