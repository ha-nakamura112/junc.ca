import { Link } from "react-router-dom";
import styles from "../../css/Home.module.css";

export default function Home(){
  return (
      <div  className={styles.homemain}>
        <div>
          <h1>What are you looking for?</h1>
        </div>
        <div className={styles.secmain}>
          <div className={styles.home_opt}>
            {/* working holiday */}
            <Link to="/coop">
              <div>
                <img src="../../../data/imgs/home/travel.png"/>
                <p>Working Holiday</p>
              </div>
            </Link>
          </div>
          {/* coop */}
          <div className={styles.home_opt}>
            <Link to="/coop">
              <div>
                <img src="../../../data/imgs/home/study-owl.png"/>
                <p>Coop</p>
              </div>
            </Link>
          </div>
          {/* not sure */}
          <div className={styles.home_opt}>
          <Link to="/tbd">
              <div>
                <img src="../../../data/imgs/home/question.png"/>
                <p>Not Sure</p>
              </div>
            </Link>
          </div>


        </div>
      </div> 
)
}