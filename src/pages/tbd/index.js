import { useEffect, useState } from "react"
import home from "../../styles/Home.module.css";
import Ques from "./ques";
import { fetchPostsFromDatabase } from "../common/config.js";
import { useRouter } from "next/router";
import style from "../../styles/Ques.module.css"
import styles from '../../styles/Posts.module.css';
import { FaHeart } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/Ai';
import Link from "next/link";


export async function getStaticProps() {
  const posts = await fetchPostsFromDatabase();
  return {
    props: {
      posts: posts
    },
  };
}


export default function Tbd({ posts }){
  const router = useRouter();
  let [goal, setGoal] = useState('');
  let [score, setScore] = useState(0);
  let [sect, setSect] = useState(0);
  let [opt1, setOpt1] = useState('何か勉強したいことがある');
  let [opt2, setOpt2] = useState("特に勉強したいことはない・英語を極めたい");
  let [img1, setImg1] = useState('../../../data/imgs/tbd/que1-1.png');
  let [img2, setImg2] = useState('../../../data/imgs/tbd/que1-2.png');
  let [ myposts, setMyPosts ] = useState(null)

  
  const handleLike = (e) => {
    const postId = e.target.id || e.target.parentNode.id;
    const updatedPosts = myposts.map((post) => {
      if (post.id === Number(postId)) {
        return {
          ...post,
          rate: post.rate + 1,
        };
      }
      return post;
    });
    setMyPosts(updatedPosts);
    sessionStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  
  let calScores = (val) => {
    setSect( sect + 1);
    setScore( score + val );
      switch(sect){
        case 0 :
          setOpt1("学びたいことに関連した職歴がある");
          setOpt2("職歴はあるが、関連はしてない");
          setImg1('../../../data/imgs/tbd/que2-1.png');
          setImg2('../../../data/imgs/tbd/que2-2.png');
        break;

        case 1 :
          setOpt1("英語に自信がある");
          setOpt2("英語にはあまり自信がない");
          setImg1('../../../data/imgs/tbd/que3-1.png');
          setImg2('../../../data/imgs/tbd/que3-2.png');
        break;

      }
  }

  let setScoreFun = () => {
    //flag 0 = wh, 1 = coop, 2 = both(canada)
    let flag = '';
    let postList = [];
    switch(score){
      case -3 :
        setGoal('ワーキングホリデーがおすすめ！カナダで日本では出来ない様々な体験をしよう！');
        flag = 0;
        break;
      case -1 :
        //wh is better
        setGoal('少しコープが難しいかもしれないかもしれないので学びたい分野を変えるかもしくは、ワーキングホリデーも考えてみましょう');
        flag = 2;
        break;
      case 1 || 5 || 3 :
        // hospitality寄り
        setGoal('ホスピタリティなどの経験が無くても比較的簡単にチャレンジできる分野がおすすめ！カナダで経験を得てから新しい自分にステップアップしよう！');
        flag = 1;
        break;
      case 4 :
        //degital marketing or IBM
        setGoal('デジタルマーケティングやIBMなどのコースがおすすめ！');
        flag = 1;
        break;
      case 6 :
        setGoal("コープがぴったり！自分の学びたい分野ではどんな学校が有名なのかどんな違いがあるのかを具体的に探してみましょう！");
        flag = 1;
        break;
    }

    posts.map((post) => {
      if(post.type == flag){
        postList.push(post);
      }
    })
    setMyPosts(postList);

  }

  useEffect(()=>setScoreFun(), [sect]);

  return (
    <div className={home.homemain}>
      { sect < 3 && score > -3 ?
      <Ques opt1 = {opt1} opt2 = {opt2} img1 = {img1} img2 = {img2} setSect = { setSect } sect = {sect} calScores = { calScores } score = { score }/>
      :
      <div className={home.homemain}>
        <div className={style.goal_msg}>
          { goal }
        </div>
        {/* related articles */}
        <div className={ styles.posts }>
          { myposts !== null ? 
            myposts.map((allpost)=> {
              return (
                <div key={allpost.id} className={styles.post}>
                <h3>{allpost.title}</h3>
                <p className={styles.tag}>
                  {allpost.e_tag}
                  {allpost.j_tag}
                </p>
                <div>
                {/* { userinfo ?
                  <button onClick={(e)=>handleMylist(e)} id={ allpost.id }>
                  < FaHeart className={allpost.flag ? styles.activeBtn : null} />
                  </button> : null 
                 } */}
                  <button id={allpost.id} onClick={(e)=>handleLike(e)}>
                    < AiOutlineStar/>
                    {allpost.rate}
                  </button>
                </div>
                <p className={styles.content}>{allpost.contents}</p>
                <Link href= {`/posts/${allpost.title}`}>
                <img  src={allpost.img}/>
              </Link>
              {/* { userinfo ? 
                <button onClick={() => router.push("/posts/add")}>
                  記事を追加する
                </button> :null
                 } */}
              </div>
              )
            }) : null
           }
        </div>
      </div>
      }
    </div>
  )
}