import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {

const [data, setData]=useState([]);
const [rangeValue, setRangeValue]=useState(36);
const [selectedRadio, setSelectedRadio]=useState("");
const radios=["Africa","America","Asia","Europe","Oceania"];

useEffect(() => {
axios.get("https://restcountries.com/v3.1/all").then((res)=>setData(res.data)); /*Importe les données du site internet.*/
},[])

return (
<div className='countries'>
    <ul className='radio-container'>
        <input type="range" min="1" max="250" defaultValue={rangeValue} onChange={(e)=>setRangeValue(e.target.value)}/>
        {radios.map((continent)=>(
            <li>
                <input type="radio" id={continent} name="continentRadio" checked={continent === selectedRadio} onChange={(e)=> setSelectedRadio(e.target.id)}/>
                <label htmlFor={continent}>{continent}</label>
            </li>
        ))}
    </ul>
    {selectedRadio && <button onClick={()=>setSelectedRadio("")}>Annuler la recherche</button>} { /*Si l'input radio = true affiche le boutton et input=false si on appuie sur le boutton*/ }
    <ul>
        {data
        .filter((country)=>country.continents[0].includes(selectedRadio)) /* Permet de filtrer les éléments suivant le type radio sélectionner */
        .sort((a,b)=>b.population-a.population)
        .slice(0,rangeValue).map((country,index)=>(<Card key={index} country={country}/>))} {/* Mets les données dans la balise, l'index permet de donner une id de chaque élément, map parcourt un tableau.*/}
    </ul>        
</div>
);
};

export default Countries;