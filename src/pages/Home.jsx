import React from "react";  
import Discalimer from "../components/Disclaimer";
import Navigation from "../components/Navigation";
import Herosection from "../components/Herosection";    

function Home(){
    return(
        <div>
            <Discalimer/>
            <Navigation/> 
            <Herosection/>
        </div>
    )
}

export default Home; 