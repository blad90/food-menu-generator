
import ComboItem from "./ComboItem";

function Main() {

    return (
        <div>
                <div>
                <marquee 
                    style={{ color: 'red', fontSize: '1em', backgroundColor: 'black' }}> 
                    * Special Plate will have a 25% off for today! *
                    Next week we'll offer some free dishes (open to everyone) 
                </marquee>

                <h2><center>Combo offers</center></h2>

                <div>
                    <p>Please select your combo</p>
                    <p>User selections: </p>
                </div>

                <div className="grid-container">
                <ComboItem />
                <ComboItem />
                <ComboItem />
                <ComboItem />
                <ComboItem />
                <ComboItem />
                </div>
                <br/>
                </div>
                <br/>
        </div>
    );
}

export default Main;