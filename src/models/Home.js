const mongoose = require('mongoose');

const HomeSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  date_created: {
    type: Date,
    default: Date.now
  },
  title: {
    type: String,
    required: true
  },
  typical_rent: {
    type: Number,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  desc: {
    type: String
  },
  amenities: {
    type: []
  },
  isVacant: {
    type: Boolean,
    default: false
  },
  contracts: [
    {
      id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Contract'
      },
      home: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Home'
        }
      },
      tenant: {
        id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Tenant'
        }
      }
    }
  ],
})

const Home = mongoose.model("Home", HomeSchema);

module.exports = Home;
