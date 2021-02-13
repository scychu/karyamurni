import React from 'react'
import Page from './Page';
export default class MainPage extends React.Component {
    state={
        color:[
            'red','green','yellow','blue','brown','black','red','purple',
            'blue','yellow','orange','red','purple','blue','yellow','orange',
            'black','red','purple','blue','yellow','orange','black','red','purple'
        ],
        valColor:this.toFour()        
    }
    color_div = document.getElementById("a");
    randomColor(){
        const choices = ['pink','red','yellow'];
        const randomNum = Math.floor(Math.random()*3);
        // console.log(choices[randomNum]);
        return choices[randomNum];
    }
    // randomColor();
    generateRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
      toFour(){
        let arr =[];
        for(let i=0;i<40;i++){
            let randomColor= this.generateRandomColor();
            arr.push(randomColor);
            this.setState({valColor:arr})
        }
        return arr
    }
    render() {
        console.log(this.state.valColor)
    return (
        <div className="main-page">
            <h3> Color Gallery</h3>
            <select id="select" className="aqua-select">
                <option className="yellow" value="red">Red</option>
                <option className="yellow" value="green">Green</option>
                <option className="yellow" value="yellow">Yellow</option>
                <option className="yellow" value="blue">Blue</option>
                <option className="yellow" value="brown">Brown</option>
                <option className="yellow" value="gray">Gray</option>
                <option className="yellow" value="purple">Purple</option>
                <option className="yellow" value="pink">Pink</option>
                <option className="yellow" value="other">Other</option>
            </select>
            <Page color={this.state.color} valColor={this.state.valColor}/>
        </div>  
    );
  }
}
