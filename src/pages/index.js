import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link';
// import Layout from '@/compnents/Layout';

const inter = Inter({ subsets: ['latin'] })


export default function Home(){
  return (
    <>
      <div  className={styles.homemain}>
        <div>
          <h1>What are you looking for?</h1>
        </div>
        <div className={styles.secmain}>
          <div className={styles.home_opt}>
            {/* working holiday */}
            <Link href="/wh">
              <div>
                <img src="../../../data/imgs/home/travel.png"/>
                <p>Working Holiday</p>
              </div>
            </Link>
          </div>
          {/* coop */}
          <div className={styles.home_opt}>
            <Link href="/coop">
              <div>
                <img src="../../../data/imgs/home/study-owl.png"/>
                <p>Coop</p>
              </div>
            </Link>
          </div>
          {/* not sure */}
          <div className={styles.home_opt}>
          <Link href="/tbd">
              <div>
                <img src="../../../data/imgs/home/question.png"/>
                <p>Not Sure</p>
              </div>
            </Link>
          </div>


        </div>
      </div> 
    </>
)
}
