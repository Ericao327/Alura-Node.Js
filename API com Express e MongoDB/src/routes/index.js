import express from "express";
import livros from "./livrosRoutes.js";
import autoresRoutes from "./autoresRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.Js"));
    app.use(express.json(), livros, autoresRoutes);
}

export default routes;