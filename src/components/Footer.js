import Link from 'next/link';
import styles from "../styles/Nav.module.css";
import { CiLocationOn } from "react-icons/ci";
import { BsEnvelopeOpen } from "react-icons/bs";
import { FiPhone } from "react-icons/fi";
import { useRouter } from 'next/router';


export default function Footer(){
  const router = useRouter();
  const loginFlag = false;
  
  return (
    <>
    <footer className={router.pathname === "/common/login" || router.pathname === "/common/signup"  ? styles.main_footer_fix : router.pathname === "/common/login" ? styles.main_footer : styles.main_footer_color}>
        <div className={ styles.footer_about }>
          <figure>
            <img src="../../../data/imgs/home/logo2.jpeg"/>
            <figcaption>
              <h1>Junc.ca</h1>
            </figcaption>
          </figure>
          <span>
              <p>
              "カナダについて"が全てわかる!</p>
              <p>
              未来の自分に会いに行こう !</p>
          </span>
        </div>
        <div className={styles.nav_bottom}>
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
                <CiLocationOn style={{ fontSize: '30' }}/>
                <p>:</p>
                <p>
                Vancouver, Canada 
                </p>
              </li>
              <li>
        
                <Link href="mailto:bknb1102@icloud.com">
                  <BsEnvelopeOpen style={{ fontSize: '24' }} />
                  <p>:</p>
                  <p>
                   bknb1102@icloud.com
                  </p>
                </Link>
              </li>
              <li>
                <Link href="tel:2368333299">
                <FiPhone style={{ fontSize: '23' }} />
                <p>:</p>
                  <p>
                    (236)-833-3299
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