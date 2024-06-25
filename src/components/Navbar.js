 import './Navbar.css';
 import Logo from '../img/Kalungi Logo.svg';
 const Navbar = () => {
    return (  
        <>
       <div className="headernav">
           <nav className="navbar">
            <div className='logo'>
            <img src={Logo} alt='Kalungi Logo' />
            </div>
            <div className="links">
                <a href="/">Marketing Services</a>
                <a href="/">Product</a>
                <a href="/">Company</a>
                <a href="/">Learn</a>
                <a href="/">Blog</a>
            </div>
            <div className='button'>
                <a href="/">Start your growth</a>
            </div>
         </nav>
       </div>
       </>
     );
 }

 
  
 export default Navbar;