import React from 'react';

const Page=(props)=> {
    let boolean = true;
    let val = props.valColor.map((item,index)=>
        <div className="color" key={index} id={item} style={{backgroundColor:item}}>{item}</div>)
    return (

        <div className="container">
            {val}
        </div>
    )
}
export default Page;