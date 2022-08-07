import express from "express";

const app = express();

app.get("/users", (request, response) => {
  console.log("listagem de usuario");

  response.json(["Isaias", "Batista", "França"]);
});

app.post("/users", (request, response) => {
  const user = {
    name: "Isaias",
    email: "isaiasbatista96@gmail.com",
  };

  return response.json(user);
});

app.listen(3333);
