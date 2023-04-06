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
		'#FFFBAC',
		'#FFDE7D',
		'#FFE88E',
    '#FFF19D'
		],
		hoverBackgroundColor: [
		'#E8D575'
		],
    cutout:[
      '30%'
    ],
    borderWidth: [
      '20'
    ]
	}]
};





export default function CoopMap(){
  return (
    <div  className={style.homemain}>
      <div className={ styles.top}>
        <div className={styles.description}>
          <h1>ワーキングホリデビザとは？</h1>
          <p>コープ留学は、日本の農林漁業や地域社会の課題解決に貢献するため、海外の農村地域での活動を通じて自己成長や国際交流を図る留学プログラムです。留学期間は最大1年間で、現地での宿泊先や食事は提供されます。農業や畜産、漁業、地域振興などの分野で現地の人々と協力しながら、自分自身のスキルアップや社会貢献を目指します。また、帰国後は、自分が学んだことを地域や社会に還元することを期待されています。</p>
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
              <Link href="/coop/months/coop-six">
                5 ~ 12 months
              </Link>
              <div className={styles.first_column}>
                <h3>基礎固め</h3>
                <ul>
                  <li>Study abroad preparation</li>
                  <li>Study abroad consultation</li>
                  <li>英語勉強</li>
                  <li>学校・コース決め</li>
                  <li>書類準備</li>
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