

function Main() {
    let mainFood = ["Burger", "Veggie Burger", "Salad plate"];
    let sides = ["French fries", ""];
    let drink = ["Lemonade", "Pepsi", "Coca-Cola", "Sprite", "Iced-tea"]; 
    let desserts = ["Ice cream", "Sweet candy"];

    return (
        <div>
            <body>
                <div>
                <h2>Combo offers</h2>
                <div class="grid-container">
                    <div class="grid-item">Combo #1: </div>
                    <div class="grid-item">Combo #2</div>
                    <div class="grid-item">Combo #3</div>  
                    <div class="grid-item">Combo #4</div>
                    <div class="grid-item">Combo #5</div>
                    <div class="grid-item">Combo #6</div>  
                    <div class="grid-item">Combo #7</div>
                    <div class="grid-item">Combo #8</div>
                    <div class="grid-item">Combo #9</div>  
                </div>
                <br/>

                <div>
                    <p>Please select your combo</p>
                    <p>User selections: </p>
                </div>

                </div>
                <br/>
            </body>
        </div>
    );
}

export default Main;