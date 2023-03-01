import Link from 'next/link';
import styles from "../../styles/Home.module.css";
import style from "../../styles/Ques.module.css";

export default function Ques(props){
  let val = 0;
  let sect = props.sect;
  let calScores = props.calScores;
  let opt1 = props.opt1;
  let opt2 = props.opt2;
  let img1 = props.img1;
  let img2 = props.img2;
  

  if(sect == 0) val = -3
  else val = -1;
  return (
    <div >
      { sect == 0 || sect == 2 ?
        <div className={style.ques_main}>
          <div className={styles.sec_wrapper}>
              <div className={styles.home_opt}>
                {/* q1 */}
                <div>
                  <button onClick={()=>calScores( +1 )}>
                    <img src={img1}/>
                    <p>{opt1}</p>
                  </button>
                </div>
              </div>
              {/* q2 */}
              <div className={styles.home_opt}>
                <div>
                  <button onClick={()=>calScores( val )}>
                    <img src={img2}/>
                    <p>{opt2}</p>
                  </button>
                </div>
              </div>

          </div>
          { sect == 0 ? 
              <div>
                <p>You should be from 18 to 30, if you want to get working holiday visa.</p>
              </div> : null
          }
        </div>
          :
        <div className={style.ques_main}>
          <div className={styles.sec_wrapper}>
              <div className={styles.home_opt}>
                {/* q1 */}
                <div>
                  <button onClick={()=>calScores( 4 )}>
                    <img src={img1}/>
                    <p>{opt1}</p>
                  </button>
                </div>
              </div>
              {/* q2 */}
              <div className={styles.home_opt}>
                <div>
                  <button onClick={()=>calScores( 3 )}>
                    <img src={img2}/>
                    <p>{opt2}</p>
                  </button>
                </div>
              </div>
              {/* q2 */}
              <div className={styles.home_opt}>
                <div>
                  <button onClick={()=>calScores( -1 )}>
                    <img src='../../../data/imgs/home/question.png'/>
                    <p>職歴や経験はない</p>
                  </button>
                </div>
              </div>
              
          </div>
        </div>
       }
    </div>
  )
}