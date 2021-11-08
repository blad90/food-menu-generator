import axios from "axios";
import React from "react";

class ComboItem extends React.Component {
    
    constructor(){
        super();
        this.state = {
            foodImage: ""
        }
    }
    componentDidMount(){
        let baseURL = "https://foodish-api.herokuapp.com/api/";
        axios.get(baseURL).then((res) => {
            this.setState({
                foodImage: res.data.image
            })
        }).catch(error => {
            this.setState({
                foodImage: `${process.env.PUBLIC_URL}/images/default-img.png`
            })
        })
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