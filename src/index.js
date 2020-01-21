// Import modules
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const mongoURI = require('./config/keys').mongoURI;
const userRoutes = require('./routes/users');
const tenantRoutes = require('./routes/tenants');
const sessionSecret = require('./config/keys').sessionSecret;
const Tenant = require('./models/Tenant');
const Home = require('./models/Home');
const tempHomes = require('./data/homeData');
const tempTenants = require('./data/tenantData');

// Passport config
require('./config/passport')(passport)

// BodyParser config
app.use(express.urlencoded({extended: false}));

// Express session config
app.use(session(sessionSecret));

// Passport config
app.use(passport.initialize());
app.use(passport.session());

// Use Routes
app.use(userRoutes);
app.use(tenantRoutes);

// Connect to mongoDB
mongoose.connect(
  mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  }
)
  .then(()=>{console.log("MongoDB Connected...")})
  .catch((err) => {console.log(err)})

Tenant.remove({}, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("All tenants removed from DB");
  }
});

Home.remove({}, (err) => {
  if(err) {
    console.log(err)
  } else {
    console.log("All homes removed from DB");
  }
});

// Create temp data
Tenant.create(tempTenants, (err, data) => {
  if(err) console.log(err);
  else console.log("Temp tenants created");
})

Home.create(tempHomes, (err, data) => {
  if(err) console.log(err);
  else console.log("Temp homes created");
});

// Server config
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
})
