const mongoose = require('mongoose');

const TenantSchema = new mongoose.Schema({
  date_created: {
    type: Date,
    default: Date.now
  },
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  dl_number: {
    type: String,
    required: true
  },
  dl_state: {
    type: String,
    required: true
  },
  dependants: [
    {
      type: String
    }
  ],
  previous_address: {
    address1: {
      type: String,
      required: true
    },
    address2: {
      type: String
    },
    city: {
      type: String,
      required: true
    },
    state: {
      type: String,
      required: true
    },
    zipcode: {
      type: String,
      required: true
    },
    start_date: {
      type: String,
      required: true
    },
    end_date: {
      type: String,
      required: true
    },
    why_left: {
      type: String,
      required: true
    },
    ref_name: {
      type: String,
      required: true
    },
    ref_phone: {
      type: String,
      required: true
    },
  },
  status: {
    type: String,
    required: true
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
  user: {
    id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    name: {
      type: String
    },
    email: {
      type: String
    }
  }
})

const Tenant = mongoose.model("Tenant", TenantSchema);

module.exports = Tenant;
