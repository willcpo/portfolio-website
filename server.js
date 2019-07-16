import config from "./config";
import sassMiddleware from "node-sass-middleware";
import path from "path";
import React from "react";
import App from "./src/components/App";

import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom";

import express from "express";
const server = express();

server.use(sassMiddleware({
	src: path.join(__dirname, "sass"),
	dest: path.join(__dirname, "public")
}));

server.set("view engine", "ejs");

server.use(express.static("public"));

server.get("*", (req, res)=>{
	res.render("index",{
		initialMarkup:ReactDOMServer.renderToString(
			(<StaticRouter location={req.url} context={{static:true}}>
				<App />
			</StaticRouter>)
		)
	});
});


server.listen(config.port, config.host, ()=>{
	console.info("Express listening on port ", config.port);
});

