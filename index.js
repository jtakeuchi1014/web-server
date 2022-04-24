const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", function (req, res) {
//   res.send('<h1>Hello World!!!!</h1>')
// })

app.post("/api/v1/quiz", function (req, res) {
    const answer = req.body.answer;
    if(answer === "2"){
        res.redirect("/correct.html");
        // res.send("<h1>correct!</h1>");
    }else{
        res.redirect("/wrong.html");
        // res.send("<h1>incorrect!</h1>");
    }
});

app.get("/api/v1/users", function (req, res) {
    console.log(req);
    res.send({
        name: "Mike",
        age: 30
    });
  });

  const PORT = process.env.PORT || 3000;
app.listen(PORT,function(){
    console.log("running");
});

