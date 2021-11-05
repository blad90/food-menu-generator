import React from "react";

class ComboItem extends React.Component {
    
    constructor(){
        super();
        this.state = {
            name: "",
            foodImage: ""
        }
    }
    componentDidMount(){
        fetch("https://foodish-api.herokuapp.com/api")
       
            .then(response => response.json() )
            .then((result) => {
                console.log(result.image);
                this.setState({
                    foodImage: result.image
                });
                
            }
            )
    }

    render(){
        let random = Math.floor(Math.random() * 10);
        return (
            <div className="grid-item">
            <div>
                <img 
                src={this.state.foodImage} 
                width="200" 
                height="140"
                alt="Combo"
                />
            </div>
            
            <div>Details
                <p>Main food: some dish</p>
                <p>Sides: some text</p>
                <p>Dessert: some text</p>
                <p>Price: ${random}.45</p>
            </div>
                
            </div>
        );
        }
    
}

export default ComboItem;