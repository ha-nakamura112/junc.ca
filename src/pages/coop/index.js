import Link from 'next/link';
import style from "../../styles/Home.module.css";
import styles from "../../styles/Map.module.css";

export default function CoopMap(){
  return (
    <div  className={style.homemain}>
        <div className={styles.map}>
          <div className={styles.first_period}>
            <figure>
              <img src="../../../data/imgs/home/question.png"/>
            </figure>
            <Link href="/coop/months/coop-six">
              <aside>5 ~ 12 months</aside>
            </Link>
            <div className={styles.first_column}>
              <h3>Making basement</h3>
              <ul>
                <li>Study abroad preparation</li>
                <li>Study abroad consultation</li>
                <li>Online Test</li>
                <li>Enrollment procedures</li>
                <li>Document preparation</li>
                <li>Resignation procedures</li>
              </ul>
            </div>
          </div>
          <div className={styles.second_period}>
            <figure>
              <img src="../../../data/imgs/home/question.png"/>
            </figure>
            <Link href="/coop/months/coop-four">
              <aside>3 ~ 6 months</aside>
            </Link>
            <div className={styles.first_column}>
              <h3>Making basement</h3>
              <ul>
                <li>Obtaining a bank balance certificate</li>
                <li>Visa application</li>
                <li>Biometric registration</li>
              </ul>
            </div>
          </div>
          <div className={styles.third_period}>
            <figure>
              <img src="../../../data/imgs/home/question.png"/>
            </figure>
            <Link href="/coop/months/coop-two">
              <aside>1 ~ 3 months</aside>
            </Link>
            <div className={styles.first_column}>
              <h3>Making basement</h3>
              <ul>
                <li>Purchase of plane tickets</li>
                <li>Purchase of travel insurance</li>
                <li>Receipt of informational materials</li>
              </ul>
            </div>
          </div>
          <div className={styles.forth_period}>
            <figure>
              <img src="../../../data/imgs/home/question.png"/>
            </figure>
            <Link href="/coop/months/coop-one">
              <aside>Just before</aside>
            </Link>
            <div className={styles.first_column}>
              <h3>Making basement</h3>
              <ul>
                <li> Submission of an overseas moving notification</li>
                <li>vaccination certificate</li>
                <li>Baggage preparation</li>
              </ul>
            </div>
          </div>
      </div>
    </div>
  )
}