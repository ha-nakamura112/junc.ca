import { useEffect, useState } from "react"
import styles from "../../styles/Home.module.css";
import Ques from "./ques";
import { fetchPostsFromDatabase } from "../common/config.js";
import { useRouter } from "next/router";


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
  let [img1, setImg1] = useState('../../../data/imgs/home/study-owl.png');
  let [img2, setImg2] = useState('../../../data/imgs/home/question.png');
  let [ myposts, setMyPosts ] = useState(null)

  let calScores = (val) => {
    setSect( sect + 1);
    setScore( score + val );
      switch(sect){
        case 0 :
          setOpt1("学びたいことに関連した職歴がある");
          setOpt2("職歴はあるが、関連はしてない");
          setImg1('../../../data/imgs/home/question.png');
          setImg2('../../../data/imgs/home/question.png');
        break;

        case 1 :
          setOpt1("英語に自信がある");
          setOpt2("英語にはあまり自信がない");
          setImg1('../../../data/imgs/home/travel.png');
          setImg2('../../../data/imgs/home/travel.png');
        break;

      }
  }

  let setScoreFun = () => {
    //flag 0 = wh, 1 = coop, 2 = both(canada)
    let flag = '';
    let postList = [];
    switch(score){
      case -3 :
        setGoal('ワーキングホリデーがおすすめ');
        flag = 0;
        break;
      case -1 :
        //wh is better
        setGoal('少しコープが難しいかもしれないかもしれないので学びたい分野を変えるかもしくは、ワーキングホリデーも考えてみましょう');
        flag = 2;
        break;
      case 1 || 5 || 3 :
        // hospitality寄り
        setGoal('分野によります、経験なしでコープのインターンを手に入れるのは難しいので経験を得てから学ぶもしくは学ぶ分野を変えてみるのもいいでしょう');
        flag = 1;
        break;
      case 4 :
        //degima yori
        setGoal('coop is good for you, make sure your school peogram in detail');
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
    <div className={styles.homemain}>
      { sect < 3 && score > -3 ?
      <Ques opt1 = {opt1} opt2 = {opt2} img1 = {img1} img2 = {img2} setSect = { setSect } sect = {sect} calScores = { calScores } score = { score }/>
      :
      <div>
        <div>
          <h1>{ goal }</h1>
        </div>
        {/* related articles */}
        <div>
          { myposts !== null ? 
            myposts.map((mypost)=> {
              return (
                <div>
                  <h1>{mypost.title}</h1>
                  <p>{mypost.j_tag}</p>
                  <p>{mypost.e_tag}</p>
                  <h2>{mypost.contents}</h2>
                  <button>
                  {/* <button onClick={handleLike}> */}
                    {mypost.rate} Likes
                    </button>
                  <img src={mypost.img} />
                  <button onClick={()=>router.push("/posts")}>
                    記事一覧
                  </button>
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