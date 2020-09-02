import React from 'react'
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
import 'react-sharingbuttons/dist/main.css'



export default function Support() {
    const url = 'https://github.com/caspg/react-sharingbuttons'
    const shareText = 'Guys i just found the perfect site to create a resume, very proffesional!'
    return (
        <div>

            
            <div id="support_a" style={{borderStyle:"solid",marginRight:20,marginLeft:20,padding:10,backgroundColor:'#c4e0e4' , borderRadius:10 , textAlign:"center"}}>
               <div >
             <h3 style={{color:"black"}}>KINDLY SUPPORT US</h3>
              <br></br>
          
              <span id="text" >
                  <p >This is a free application but is very expensive to maintain.
                    <p>We feel it was important to create this platform to help and  </p> 
               assist those who are unable to do Resumes for themselves.
              <p> To support this endavour by AFRICAN DEVELOPERS.</p> You 
              can DONATE via PAYPAL or SHARE our webiste on </p>
              <p>your social media.</p>
              </span>

              <br></br>
              <Facebook url={url} shareText={shareText} />
              <Twitter url={url} shareText={shareText} />
              <br></br><br></br>

              
              <a href="https://www.paypal.com/paypalme/ksekwamote" target="_blank" >Donate via Paypal</a>
              <br></br>
              <a href="https://www.paypal.com/paypalme/ksekwamote" target="_blank" class="btn"></a>

              </div>
              
              </div>
            
        </div>
    )
}
