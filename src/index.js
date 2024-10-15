const config = require('./config')
const mongoose = require("mongoose");
const app = require('./app');


const port = config.PORT;

mongoose.Promise = global.Promise;

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Mongo db connect");
    app.listen(port, () => {
      console.log("server running at port 5000");
    });
    
  })
  .catch((error) => console.log(error));


 
  
