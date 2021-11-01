import React from "react";

//******** Assignment React 3 ********//

//***********  Write a new component called MediaCard that accepts 3 props: title, body, and imageUrl. Inside the component, 
//***********  render the title in an <h2> tag, the body in a <p> tag, and pass the imageUrl into an img tag like <img src={imageUrl}/>. 
//***********  Can you return all 3 of these things at once? Or do you need to wrap them in another element? 

export default function Mediacards(props) {
    return(
        <>
        <h1 className = "title">{props.title}</h1>
        <p className ="paragaph">{props.body}</p>
        <img className="car" src={props.img} height="30%" width="30%" />
        <p className ="paragaph">{<b>Car in Red</b>}</p>
        
        </>
    )
}