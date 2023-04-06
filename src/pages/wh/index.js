import Link from 'next/link';
import style from "../../styles/Home.module.css";
import styles from "../../styles/Map.module.css";
// import RoundGraph from '../common/RoundGraph';

import {Line, Pie, Doughnut} from 'react-chartjs-2';
import Chart from 'chart.js/auto';


const data = {
	datasets: [{
		data: [23, 23, 23, 23],
		backgroundColor: [
      '#82E0AA',      //2
      '#ABEBC6',      //3
      '#D5F5E3',      //4
      '#10e16766', //1
		],
		hoverBackgroundColor: [
		'#00A56A'
		],
    cutout:[
      '30%'
    ],
    borderWidth: [
      '20'
    ]
	}]
};





export default function WH(){
  return (
    <div  className={style.homemain}>
      <div className={ styles.top}>
        <div className={styles.description}>
          <h1>ワーキングホリデビザとは？</h1>
          <p>ワーキングホリデーは、18歳以上30歳未満の日本人がカナダに1年間滞在しながら、現地での短期雇用を許可される制度です。ビザを取得して有効期間内に複数の職場で働き、カナダの文化・生活を体験することができます。海外経験や語学力の向上、異文化交流など、貴重な経験を得ることができます。</p>
        </div>
      </div>
        <div className={styles.pie}>
            <Doughnut
                data={data}
                width={500}
                height={500}
            />
             <div className={styles.first_period}>
            <figure>
              <img src="../../../data/imgs/home/question.png"/>
            </figure>
            <Link href="/wh/months/wh-six">
              <aside>6 ~ 12 か月前</aside>
            </Link>
            <div className={styles.first_column}>
              <h2>情報収集</h2>
              <ul>
                <li>都市</li>
                <li>目標・学校</li>
                <li>資金準備</li>
                <li>ビザ</li>
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
              <h3>手続きスタート</h3>
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
    </div>
  )
}