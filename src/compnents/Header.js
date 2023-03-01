import Link from 'next/link';
import styles from "../styles/Nav.module.css";
import { useRouter } from 'next/router';
// import { CiLocationOn } from "react-icons/ci";
// import { BsEnvelopeOpen } from "react-icons/bs";
// import { FiPhone } from "react-icons/fi";


export default function Header({loginuser, setLoginUser}){
  const loginFlag = false;
  const router = useRouter();

  const Logout = () => {
    setLoginUser(null);
    
  }
  return (
    <>
    <header>
<div className={ styles.main_body }>
  <div className={ styles.main_header }>
    <ul className={styles.homenav}>
      <li><Link className={router.pathname == "/wh" ? "active" : ""} href='/wh'>Working Holiday</Link></li>
      <li><Link className={router.pathname == "/coop" ? "active" : ""} href='/coop'>Coop</Link></li>
      <li><Link className={router.pathname == "/" ? "active" : ""} href='/'>
        <img className={ styles.homelogo } src="../../../data/imgs/home/logo.jpeg"/>
      </Link></li>
      <li><Link className={router.pathname == "/posts" ? "active" : ""} href='/posts'>Post</Link></li>
      { loginuser ?  
        <>
          <li>
            <Link className={router.pathname == "/tbd" ? "active" : ""} href='/tbd'>Q & A</Link>
          </li>
          <li>
            <button onClick={()=>Logout()}>
              Log Out
            </button>
          </li>
        </>
        :
        <li><Link className={ router.pathname == "/common/login" ? "active" : ""} href='/common/login'>Login</Link></li>
      }
    </ul>
  </div>
</div>
</header>
    </>
  )
}