import { Link } from "react-router-dom";
import styles from "../../css/Home.module.css";

export default function Home(){
  return (
      <div  className={styles.homemain}>
        <div>
          <h1>なりたい自分になりに行こう！</h1>
        </div>
        <div className={styles.secmain}>
          <div className={styles.home_opt}>
            {/* working holiday */}
            <Link to="/coop">
              <div>
                <img src="../../../data/imgs/home/travel.png"/>
                <p>ワーキングホリデー</p>
              </div>
            </Link>
          </div>
          {/* coop */}
          <div className={styles.home_opt}>
            <Link to="/coop">
              <div>
                <img src="../../../data/imgs/home/study-owl.png"/>
                <p>コープ留学</p>
              </div>
            </Link>
          </div>
          {/* not sure */}
          <div className={styles.home_opt}>
          <Link to="/tbd">
              <div>
                <img src="../../../data/imgs/home/question.png"/>
                <p>迷い中...</p>
              </div>
            </Link>
          </div>


        </div>
      </div> 
)
}