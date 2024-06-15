 import './Header.css';
 import logo from './img/logo.svg'
const Header = () =>{
    return (
        <header className="header">
            <div className="imag">
             <img src={logo} alt="image" />
            </div>
            <div className="words">
             <h1>words</h1>
            </div>
        </header>
    )
}
export default Header;  