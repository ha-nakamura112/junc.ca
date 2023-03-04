import Link from 'next/link';
import styles from "../styles/Nav.module.css";
// import { CiLocationOn } from "react-icons/ci";
// import { BsEnvelopeOpen } from "react-icons/bs";
// import { FiPhone } from "react-icons/fi";


export default function Footer(){
  const loginFlag = false;
  return (
    <>
    <footer>
      <div className={styles.main_footer}>
        <div className={ styles.footer_about }>
          <figure>
            <img src="../../../data/imgs/home/logo.jpeg"/>
            <figcaption>
              <h1>Junc.ca</h1>
            </figcaption>
          </figure>
              <p>
                Are you looking for the way to stay in Canada?
                Do not miss Junc.ca
                You can find suitable way to archieve your dreams and make ideal life in Canada!
                If you have any questions, please let us know!
              </p>
        </div>
        {/* explore part */}
        <div className={ styles.footer_nav }>
          <ul>
            <li>Explore</li>
            <li><Link href='/'>Home</Link></li>
            <li><Link href='/coop'>Coop</Link></li>
            <li><Link href='/wh'>Working Holiday</Link></li>
            { loginFlag === true ?  
              <>
                <li><Link href='/qa'>Q & A</Link></li>
              </>
              : null           
             }
            <li><Link href='/contact'>Contact</Link></li>
          </ul>
        </div>
      {/* contact */}
      <div className={ styles.footer_contact }>
          <p>
            Contact Us
          </p>
            <ul>
              <li>
                {/* <CiLocationOn/> */}
                <p>
                : Vancouver, Canada 
                </p>
              </li>
              <li>
                <Link href="mailto:bknb1102@icloud.com">
                  {/* <BsEnvelopeOpen /> */}
                  <p>
                    : bknb1102@icloud.com
                  </p>
                </Link>
              </li>
              <li>
                <Link href="tel:2368333299">
                {/* <FiPhone /> */}
                  <p>
                    : (236)-833-3299
                  </p>
                </Link>
              </li>
            </ul>
        </div>
      </div>
    </footer>
    </>
  )
}