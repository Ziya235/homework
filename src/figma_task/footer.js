
import img from '../img/Logo.png'
// import './footer_responsive.css'
import './footer.css'
import './foot.css'
function Footer() {
    return(
        <>

    <div className="eightPart">
        <div>
            <p>Looking to go elsewhere?</p>

        </div>
        <div className='eightPart_alt'>
            <p>Our destination</p>
        </div>
    </div>
    
         <div className="footer_1">
            <h1>Join our travel revolution</h1> <br></br>
            <p>Sign up to stay in the know - hot new travel </p>
            <p> spots, how we strive to make the world a</p>  
            <p>better place, and all sorts of surprises.</p>      <br></br>
        <div className="footer_submit">
            <input type="text" placeholder="Email"></input>
            <button>Sign Up</button>
        </div> 
        </div>
       
        <div className="footer_2">
            <div className='footer_2_part1'>
            
            <div className='footer_tourista'>
                <img src={img} alt='asdfg'/>
                <p >Discover the world's wonders and let us be   
                    your trusted guide to extraordinary destinations.</p>  
                <p style={{fontSize :"12px" }} id = "footer_copy_tablet">© Copyright 2023 Tourista Ltd. All Rights Reserved.</p>
            </div>
            
                
            <div className='menu'>
                <h2>Menu</h2>  <br></br> 
                <ul>
                    <li>Destination</li>
                    <li>Private trips</li>
                    <li>Blog </li>
                    <li>About US</li>
                </ul>
            </div>
            
            <div className='support'> 
            <h2>Support</h2> <br></br> 
                <ul>

                <li>Contact US</li>
                <li>FAQ</li>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
                </ul>

            </div>
        
            <div className='follow'>
            <h2>Follow us</h2> <br></br> 
                <ul>

                <li>Instagram</li>
                <li>Facebook</li>
                <li>Linkedln</li>
                <li>TikTok</li>
                </ul>

            </div>
            <p style={{fontSize :"12px" }} id = "footer_copy_responsive">© Copyright 2023 Tourista Ltd. All Rights Reserved.</p>

        
        </div>
        </div> 

        </>
    )
}

export default Footer