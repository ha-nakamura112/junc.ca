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
              <div className={style.que_opt}>
                {/* q1 */}
                  <button onClick={()=>calScores( +1 )}>
                    <img src={img1}/>
                    <p>{opt1}</p>
                  </button>
              </div>
              {/* q2 */}
              <div className={style.que_opt}>
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
                <p>ワーキングホリデーを取るためには様々な条件があります。詳しい内容は
                  <Link href='https://www.canada.ca/en/immigration-refugees-citizenship/services/work-canada/iec1.html?adobe_mc_sdid=SDID%3D04A952EAE80C2AF5-060A493156BC56EF%7CMCORGID%3DA90F2A0D55423F537F000101%40AdobeOrg%7CTS%3D1679514479&adobe_mc_ref=https%3A%2F%2Fwww.google.com%2F' target='_blank'>
                  こちら
                  </Link>
                から
                </p>
              </div> : null
          }
        </div>
          :
        <div className={style.ques_main}>
          <div className={styles.sec_wrapper}>
          <div className={style.que_opt}>
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
                    <img src='../../../data/imgs/tbd/que2-3.png'/>
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