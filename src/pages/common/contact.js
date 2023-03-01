import { Link } from "react-router-dom";
// import emailjs from '@next/font/emailjs/browser';
// import emailjs from '../../../node_modules/next/  next/font/emailjs/browser';
import styles from "../../css/Home.module.css";


export default function Contact(){

// let sendEmail = (e) => {
//   e.preventDefault();
//   emailjs.sendForm('service_d9d639i', 'template_iuex2i2', e.target, 'KFsWDbU1ReyaAMxLw')
//     .then((response) => {
//        console.log('SUCCESS!', response.status, response.text);
//     }, (error)=> {
//        console.log('FAILED...', error);
//     });
// }


  return (
    <div  className={styles.homemain}>
      <div>
        {/* contact header */}
          <div>
            <h2>Contact <span>me</span>
  </h2>
          </div>
          <div>
            {/* left section */}
              <div>
                <div>
                  <p>
                    Contact me
                  </p>
                  <div>
                    <div>
                      <div>
                        {/* <i class="fa-solid fa-location-dot"></i> */}
                        <span>Location</span> 
                      </div>
                      <p>
                      : Vancouver, Canada 
                      </p>
                      {/* click show map */}
                    </div>
                    <div>
                      <a href="mailto:bknb1102@icloud.com">
                        {/* <i class="fa-solid fa-envelope"></i> */}
                        <span>email</span> 
                      </a>
                      <p>
                      : bknb1102@icloud.com
                      </p>
                    </div>
                    <div>
                      <a href="tel:2368333299">
                        {/* <i class="fa-solid fa-phone"></i> */}
                        <span>Phone number</span> 
                      </a>
                      <p>
                      : +1 236 833 3299
                      </p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <Link to="https://www.linkedin.com/in/nakamura-haruka-70371b240/" target="_blank">
                      {/* <i class="fa-brands fa-linkedin" ></i> */}
                      </Link>
                      <Link to="#" target="_blank">
                      {/* <i class="fa-brands fa-facebook" ></i> */}
                      </Link>
                      <Link target="_blank" to="https://wa.me/2368333299">
                        {/* <i class="fa-brands fa-whatsapp"></i> */}
                        </Link>
                    </div>
                  </div>
                </div>
              </div>
            {/* right section */}
              <div>
                  <form onSubmit={sendEmail}>
                    <div>
                      <input name="name" type="text" placeholder="Write your name"/>
                      <input name="reply_to" type="email" placeholder="Write your email"/>
                    </div>
                    <div>
                      <input name="subject" type="text" placeholder="Enter subject"/>
                    </div>
                    <div>
                      <textarea name="msg" cols="15" rows="8" placeholder="Message..."></textarea>
                    </div>
                    <div>
                      <button type="submit">Send</button>
                      {/* <i class="fa-solid fa-paper-plane"></i> */}
                    </div>
                  </form>
              </div>
          </div>
      </div>
    </div>
  )
}