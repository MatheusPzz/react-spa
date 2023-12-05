import { Link } from 'react-router-dom';
const Footer = () => {
    
    return (
        <footer className="theme-dark footer-0 text-center-desktop text-center-mobile">
    
            <h2>ABC Limited</h2>
            <h3>Awesome and affordable products</h3>
    
            <ul className="footer-links">
                <li><Link to ="/">Home</Link></li>
                <li><Link to ="/products">Products</Link></li>
                <li><Link to ="/services">Services</Link></li>
            </ul>
    
    
            <div className="copyright">
                <p>Copyright © 2023 ABC Limited. All rights reserved.</p>
            </div>
        </footer>
   
    )
}

export default Footer;