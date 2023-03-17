import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
// import Layout from '@/compnents/Layout';

const inter = Inter({ subsets: ['latin'] })


export default function Home(){
  return (
    <>
      <div  className="font-851">
        <div className={styles.sky}>
          <div className={styles.cloud}></div>
          <div className={styles.cloud2}></div>
          <div className={styles.cloud3}></div>
          <div className={styles.cloud_bottom}></div>
          <div className={styles.plane}>
            <img src='../../data/imgs/home/plane.png'></img>
          </div>
          <div className={styles.airplanetrail}></div>
          <div className={styles.hometxt}>
            <h1>Select choices to go beyond your future self</h1>
          </div>
        </div>
        <div  className={styles.homemain}>
          <div className={styles.secmain}>
            {/* coop */}
            <div className={styles.home_opt}>
              <figure >
                  <img className={styles.coop1} src="../../../data/imgs/home/coop1.png"/>
                  <img className={styles.coop2}  src="../../../data/imgs/home/coop2.png"/>
              </figure>
              <div>
              <Link href="/coop">
                  <h2>コープ留学</h2>
                  <div className={styles.border}></div>
                  <p>"働きたい"と"勉強したい"</p>
              </Link>
              </div>
            </div>
              {/* working holiday */}
              <div className={styles.home_opt}>
                <figure className={styles.wh}>
                    <img className={styles.wh1} src="../../../data/imgs/home/wh1.png"/>
                    <img className={styles.wh2} src="../../../data/imgs/home/wh2.png"/>
                </figure>
                <div>
                  <Link href="/wh">
                      <h2>ワーキングホリデー</h2>
                      <div className={styles.border}></div>
                      <p>知らない土地で初めての体験をしよう</p>
                  </Link>
                </div>
            </div>
            {/* not sure */}
            <div className={styles.home_opt}>
                <figure>
                    <img className={styles.canada1} src="../../../data/imgs/home/canada2.png"/>
                    <img className={styles.canada2} src="../../../data/imgs/home/canada3.png"/>
                </figure>
              <div>
              <Link href="/tbd">
                  <h2>検討中</h2>
                  <div className={styles.border}></div>
                  <p>何が良いのか分からない...</p>
              </Link>
              </div>
            </div>

          </div>
        </div> 
      </div>
    </>
)
}
