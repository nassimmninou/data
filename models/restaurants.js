const mongoose=require("mongoose")

const restaurantSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true
    },
    subTitle: {
      type: String,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
    },
    menu: {
      type: String,
    },
    categoryci: {
      type: String,
      required: true
    },
    address: {
      type: String,
      required: true
    },
    locatedIn: {
      type: String,
    },
    neighborhood: {
      type: String,
      required: true
    },
    street: {
      type: String,
      required: true
    },
    ci: {
      type: String,
      required: true
    },
    postalCode: {
      type: String,
    },
    state: {
      type: String,
    },
    countryCode: {
      type: String,
      required: true
    },
    plusCode: {
      type: String,
    },
    website: {
      type: String,
    },
    phone: {
      type: String,
    },
    temporarilyClosed: {
      type: Boolean,
      default: false
    },
    claimThisBusiness: {
      type: Boolean,
      default: false
    },
    location: {
      type: {
        type: String,
        enum: ['Point'],
        required: true
      },
      coordinates: {
        type: [Number],
        required: true
      },
      url: {
        type: String,
        required: true
      },
      openingHours: {
        day: {
          type: String,
          required: true
        },
        hours: {
          type: String,
          required: true
        }
    }
    }
  });

const RestaurantModel=mongoose.model("restaurants",restaurantSchema)
module.exports=RestaurantModel