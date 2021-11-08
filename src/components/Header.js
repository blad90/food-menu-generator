function Header() {
    return (
        <header>
            <h1>Local Restaurant</h1>
            <h2><center>Combo offers</center></h2>
            <marquee 
                    style={{ color: 'red', fontSize: '1em', backgroundColor: 'black' }}> 
                    * Special Plate will have a 25% off for today! *
                    Next week we'll offer some free dishes (open to everyone) 
                </marquee>
            <p>Please select your combo</p>
        </header>
    );
}

export default Header;