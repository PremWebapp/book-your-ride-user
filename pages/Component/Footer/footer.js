


function Footer() {
  return (
    <>

    {/* <!-Ffooter start here--> */}
 
    <footer  className="footer">
      <div  className="container">
        <div  className="row d-flex justify-content-center">
          <div  className="col-md-4">
            <div  className="foot-logo">
              <img src="../image/sw4.jpg"  className="ft-lg mb-3" alt='balck'/>
              <div  className="contact-info01">
                  <p  className="mb-1"><i  className="fa fa-map-marker me-2" aria-hidden="true"></i>lorem ipsum is simply dummy text</p>
                  <p  className="mb-1"><i  className="fa fa-mobile me-2" aria-hidden="true"></i>+91123456789</p>
                  <p  className="mb-1"><i  className="fa-solid fa-envelope me-2"></i>lorem ipsum@dummy.text</p>
              </div>
            </div>
          </div>
          <div  className="col-md-3">
            <div  className="cnt-foot">
              <h4  className="cnt-hd mb-3">
                Information
              </h4>
              {/* <!--<p  className="cnt-dt">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy
              </p>--> */}
              <ul  className="mn-ft">
                <li><a href="#">about us</a></li>
                <li><a href="#">privacy Policy</a></li>
                <li><a href="#">Tems & Condition</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>
          </div>
          <div  className="col-md-3">
            <div  className="ft-menu">
              <h4  className="cnt-hd">Contact Info</h4>
              <ul  className="mn-ft">
                <li><a href="#">Suite no-206 H,Bsi.pvt.let</a></li>
                <li><a href="#">Cancellation and Return</a></li>
                <li><a href="#">9788869588</a></li>
                
              </ul>
            </div>
            <div  className="col-md-4">
            <div  className="row">
             
              <div  className="col-md-9 p-2">
                <ul  className="social-media-icn001">
                  <li><a href="#"  className="sc-f100"><img src="image/facebook.png" alt="fb"  className="fb-img01"/>
                  {/* <!--<i  className="fa-brands fa-facebook-f"></i>-->  */}
                  </a></li>
                  <li><a href="#"  className="sc-f100"><img src="image/twitter1.png" alt="twitter"  className="fb-img01"/>
                  {/* <!--<i  className="fa-brands fa-twitter"></i>--> */}
                  </a></li>
                  <li><a href="#"  className="sc-f100"><img src="image/instagram1.png" alt="instagram"  className="fb-img01"/>
                  {/* <!--<i  className="fa-brands fa-instagram"></i>--> */}
                  </a></li>
                  <li><a href="#"  className="sc-f100"><img src="image/youtube.png" alt="youtube"  className="fb-img01"/>
                  {/* <!--<i  className="fa-brands fa-youtube"></i>--> */}
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
          </div>
      
        </div>
      </div>
    </footer>
  
    {/* <div  className="sub-footer py-5">
      <div  className="container">
        <div  className="row">
     
  
 
        
  
        </div>
      </div>
    </div> */}
  
  
  
  
    <div  className="copy-right-foot py-2">
      <p  className="text-center copy-rgt-txt mb-0 py-2">Copyright © 2022, Travel. All Rights Reserved</p>
    </div>
    {/* <!--footer end here--> */}
      </>
  )
}

export default Footer;