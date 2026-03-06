import React from "react";
import ReactDOM from "react-dom/client"
import Header from "./Components/Header";
import FoodOption from "./Components/FoodOption";
import GroceryOption from "./Components/GroceryOption";
import DineOptions from "./Components/DineOptions";
 

function App(){
    return (
        <>
         <Header></Header>
         <FoodOption></FoodOption>
         <GroceryOption></GroceryOption>
         <DineOptions></DineOptions>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);