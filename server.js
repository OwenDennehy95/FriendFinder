var express = require("express"),
    
    // Set up express

    var app = express();
    var PORT = process.env.PORT || 3000;
    // Set up server to listen on port
    
    // Set up bodyParser
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`);
    });