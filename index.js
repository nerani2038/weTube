import express from "express";
// 위는 다음과 같다  const express = require("express");
import morgan from "morgan";
import helmet from "helmet";
import cookieparser from "cookie-parser";
import bodyparser from "body-parser";
const app = express();

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on : http://localhost:${PORT}`);

const handleHome = (req, res) =>
  // console.log(req);
  res.send("hi from home");

const handleFrofile = (req, res) => res.send("you are on my profile");
/* ES6에서 적용된 새로운 기술  위의 변수 handelFrofile은
function handleFrofile(req, res){
  res.send("you are on my profile");
} 
과 같다 */

// const betweenHome = (req, res, next) => {
//   console.log("Between");
//   next();
// };

// app.use(betweenHome);

app.use(cookieparser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended :true}));
app.use(helmet());
app.use(morgan("dev"));

app.get("/", handleHome);

app.get("/profile", handleFrofile);

app.listen(PORT, handleListening);
