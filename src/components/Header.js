import Link from 'next/link';
import styles from "../styles/Nav.module.css";
import { useRouter } from 'next/router';
import { use, useEffect } from 'react';

export default function Header({ loginuser, setLoginUser }){
  const router = useRouter();

  useEffect(()=> {
    let userinfo =  sessionStorage.getItem('user')
    if(userinfo){
      setLoginUser(JSON.parse(userinfo));
    }
  },[])

  const Logout = () => {
    setLoginUser(null);
    sessionStorage.clear();
    router.push('/');
  }

  return (
    <header>
      <div className={styles.main_body}>
        <div
        className={router.pathname === "/common/login" || router.pathname === "/common/signup" ? styles.main_header_login : router.pathname === "/" ? styles.main_header : styles.main_header_color}>
          <ul className={styles.homenav}>
            <li><Link className={router.pathname === "/wh" ? styles.active : ""} href='/wh'>ワーキングホリデー</Link></li>
            <li><Link className={router.pathname === "/coop" ? styles.active : ""} href='/coop'>Coop</Link></li>
            <li className={styles.homelogo}><Link href='/'><img src="/data/imgs/home/logo2.jpeg" /></Link></li>
            <li><Link className={router.pathname === "/posts" ? styles.active : ""} href='/posts'>Post</Link></li>
            { loginuser ?  
              <>
                <li>
                  <Link className={router.pathname === "/mypage" ? styles.active : ""} href='/mypage'>My Page</Link>
                </li>
                <li>
                  <button onClick={()=>Logout()}>
                    Log Out
                  </button>
                </li>
              </>
              :
              <li><Link className={router.pathname === "/common/login" ? styles.active : ""} href='/common/login'>Login</Link></li>
            }
          </ul>
        </div>
      </div>
    </header>
  )
}
