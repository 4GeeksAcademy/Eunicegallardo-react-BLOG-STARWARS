import React, { useContext } from "react"
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Planets from "./Planets";
import Characters from "./Characters";

export const Home = () => {
	const {store, actions} = useContext(Context);
return (
	<div className="container ms-5 mt-5">
		<h1 className="text-danger text-center m-2">Characters</h1>
		<Characters></Characters>
		<h1 className="text-danger text-center m-2">Planets</h1>
		<Planets></Planets>
	</div>
)
};
