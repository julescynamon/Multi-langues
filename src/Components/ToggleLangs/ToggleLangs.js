import React from "react";
import "./ToggleLangs.css";
import frenchFlags from "../../assets/france.svg";
import englishFlags from "../../assets/united-kingdom.svg";
import spainFlags from "../../assets/spain.svg";
import { Context } from "../../context/LangContext";
import { useContext } from "react";

export default function ToggleLangs() {

	const { toggleLang } = useContext(Context);

	return (
		<div className='container-langs'>
			<img
				onClick={() => toggleLang("FR")}
				src={frenchFlags}
				alt='drapeau-francais'
			/>
			<img
				onClick={() => toggleLang("EN")}
				src={englishFlags}
				alt='drapeau-anglais'
			/>
			<img
				onClick={() => toggleLang("ES")}
				src={spainFlags}
				alt='drapeau-espagnole'
			/>
		</div>
	);
}
