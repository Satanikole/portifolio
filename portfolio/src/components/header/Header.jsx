import './Header.css'

function Header() {
    return ( 
        <body>
        <header>
            <a href="#" className="logo">Logo</a>
            <ul>
                <li><a href="#" className="active" >Home</a></li>
                <li><a href="#" >About</a></li>
                <li><a href="#" >Projects</a></li>
                <li><a href="#" >Contact</a></li>
            </ul>
        </header>
        </body>
     );
}

export default Header;