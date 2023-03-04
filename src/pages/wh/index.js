import Link from 'next/link';
import style from "../../styles/Home.module.css";
import styles from "../../styles/Map.module.css";

export default function WH(){
  return (
    <div  className={style.homemain}>
        <div className={styles.map}>
          <div className={styles.first_period}>
            <figure>
              <img src="../../../data/imgs/home/question.png"/>
            </figure>
            <Link href="/wh/months/wh-six">
              <aside>6 ~ 12 か月前</aside>
            </Link>
            <div className={styles.first_column}>
              <h3>情報収集</h3>
              <ul>
                <li>生活費・職・都市・目標</li>
                {/*  */}
                <li>語学学校</li>
                <li>クレジットカード</li>
                <li>ビザ</li>
                <li>住む場所</li>
                {/* 学校と働き始めてから */}
                
              </ul>
            </div>
          </div>
          <div className={styles.second_period}>
            <figure>
              <img src="../../../data/imgs/home/question.png"/>
            </figure>
            <Link href="/wh/months/wh-four">
              <aside>3～6か月前</aside>
            </Link>
            <div className={styles.first_column}>
              <h3>Making basement</h3>
              <ul>
                <li>航空券</li>
                {/* 語学学校、ホームステイ、滞在先 */}
                <li>各種申し込み</li>
                <li>仕事探し</li>
              </ul>
            </div>
          </div>
          <div className={styles.third_period}>
            <figure>
              <img src="../../../data/imgs/home/question.png"/>
            </figure>
            <Link href="/wh/months/wh-two">
              <aside>１～２か月前</aside>
            </Link>
            <div className={styles.first_column}>
              <h3>抜け漏れ防止</h3>
              <ul>
                {/* Before taking off, after arriving */}
                <li>やるべきことリストづくり</li>
                <li>海外保険加入</li>
                <li>お金の準備</li>
                {/* wiseとかsonny銀行、キャッシュカードでおろせるところもある*/}
                <li>携帯のSIMカード</li>
                <li>運転免許証</li>
                {/* evoを */}
              </ul>
            </div>
          </div>
          <div className={styles.forth_period}>
            <figure>
              <img src="../../../data/imgs/home/question.png"/>
            </figure>
            <Link href="/wh/months/wh-one">
              <aside>直前～1か月</aside>
            </Link>
            <div className={styles.first_column}>
              <h3>直前準備</h3>
              <ul>
                <li>海外転出届</li>
                <li>荷物の準備</li>
              </ul>
            </div>
          </div>
      </div>
      <div>
        {/* link for the latest conditions of working holiday */}
        <p>
          Ckeck and Confirm here before applying
        </p>
      </div>
    </div>
  )
}