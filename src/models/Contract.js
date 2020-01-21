const mongoose = require('mongoose');

const ContractSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true
  },
  date_created: {
    type: Date,
    default: Date.now
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
  },
  balance: {
    type: Number,
    required: true
  },
  rent_amount: {
    type: Number,
    required: true
  },
  deposit: {
    type: Number,
    required: true
  },
  due_date: {
    type: Number,
    required: true
  },
  late_start_day: {
    type: Number,
    required: true
  },
  late_lump_sum: {
    type: Number,
    required: true
  },
  late_fee: {
    type: Number,
    required: true
  },
  lease_start: {
    type: Date,
    required: true
  },
  lease_end: {
    type: Date
  },
  lease_duration: {
    type: Number,
    required: true
  },
  pets: {
    type: Boolean,
    required: true
  },
  pet_deposit: {
    type: Number
  },
  pet_rent: {
    type: Number
  },
  extra_terms: {
    type: String
  },
  charges: {
    type: [
      {
        desc: {
          type: String
        },
        amount: {
          type: Number
        },
        time_charged: {
          type: Date
        },
        previous_balance: {
          type: Number
        },
        new_balance: {
          type: Number
        }
      }
    ]
  },
  payments: {
    type: [
      {
        paid_by: {
          type: String
        },
        amount: {
          type: Number
        },
        process_fee: {
          type: Number
        },
        time_paid: {
          type: Date
        },
        paid: {
          type: Boolean
        },
        status: {
          type: String
        },
        previous_balance: {
          type: Number
        },
        new_balance: {
          type: Number
        }
      }
    ]
  },
})

const Contract = mongoose.model("Contract", ContractSchema);

module.exports = Contract;
