import { useEffect, useState } from "react";
import { fetchPostsFromDatabase } from "../common/config.js";
import style from "../../styles/myPage.module.css";
import Home from "../../styles/Home.module.css";
import Link from 'next/link';
import { useRouter } from "next/router.js";
import { FaHeart } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/Ai';
import { RxCross2 } from 'react-icons/Rx';
import styles from '../../styles/Posts.module.css';
import { serverUrl } from "../common/config.js";

export async function getStaticProps() {
  const posts = await fetchPostsFromDatabase();
  return {
    props: {
      posts,
    },
  };
}

export default function MyPage({ posts }) { 
  const [maps, setMaps] = useState([]);
  const [newMap, setNewMap] = useState(null);
  const [msg, setMsg] = useState("");
  const [ loginuser, setLoginuser] = useState('')
  const [ loginMyPosts, setLoginMyPosts ] = useState([])
  const router = useRouter();
  let [ newfilteredPosts, setnewfilteredPosts ] = useState([])
  const [ delFlag, setDelFlag ] = useState(true)
  const [ dob, setDob ] = useState('')

  
  
  const makeMap = async () => {
    const apiUrlEndpoint = `${serverUrl}/api/myPage`;
    const postData = {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: JSON.parse(sessionStorage.getItem("user")).id,
      }),
    };
    const response = await fetch(apiUrlEndpoint, postData);
    const res = await response.json();
    if (res.user[0]) {
      setMaps(res.map[0]);
      setLoginuser(res.user[0]);
      const date = new Date(res.user[0].dob);
const formattedDate = date.toISOString().substring(0, 10);
      setDob(formattedDate);

      if(!newMap) setNewMap(res.map[0].todo);
      const posting = await loginUserPost();
      setLoginMyPosts(posting);
      // sessionStorage.setItem('mypost', JSON.stringify(posting));
    } else {
      console.log("not login");
    }
  };
  
  useEffect(() => {
    console.log(!newMap)
    console.log(typeof newMap)
    if (sessionStorage.getItem("user")) {
      makeMap();
    }
  }, [posts, newMap]);
  
  const loginUserPost = async() => {
    let filteredPosts = [];
    if (loginuser && loginuser.mylist) { 
      const length = loginuser.mylist.length;
      const myListObj = await loginuser.mylist.split(',')
      for (let i = 0; i < length; i++) {
        const filtered = await posts.filter((post) => {
          return post.id ==  myListObj[i];
        });
        filteredPosts = filteredPosts.concat(filtered);
        sessionStorage.setItem('mypost', loginuser.mylist)
      }
    }
    return filteredPosts;
  };
   

  const handleMylist = (e) => {
    let postId = e.target.parentNode.parentNode.id || e.target.parentNode.id;
    let mypost = sessionStorage.getItem('mypost');
    if(mypost == null){
      mypost = postId;
    } else {
      let jsonMylist = mypost.split(',');
      if (jsonMylist.includes(postId)) { 
        jsonMylist = jsonMylist.filter((val) => val !== postId);
        mypost = jsonMylist.toString();
      } else { 
        mypost += ","+ postId;  
      }
    }
    sessionStorage.setItem('mypost', mypost);
    const updatedPosts = loginMyPosts.map((post)=>{
      if(post.id == postId){
        post.flag = !post.flag;
      }
      return post;
    })
    setLoginMyPosts([...updatedPosts]);
  }


  const addTasks = (e) => { 
    e.preventDefault();
    if(e.target[0].value !== ""){
      const newTasks = e.target[0].value + "," + newMap;
      sessionStorage.setItem('todo',newTasks);
      setNewMap(newTasks);  
      setMsg(null)
    }else{
      setMsg('今日のやることを入力してください')
    }

    e.target[0].value = '';
  };

  const delTodo = (e) => { 
    if(e.target.checked === false){
      const id = e.target.parentNode.id;
      const arr = newMap.split(',');
      const newArr = arr.slice(0,id).concat(arr.slice(parseInt(id)+1))
      console.log(newArr.toString()); 
      setNewMap(newArr.toString());
      // console.log(newMap)
      e.target.checked = false;
    }else if(e.target.checked === true){
      setDelFlag(false)
    }
    sessionStorage.setItem('todo', newMap)
  };

  const toJson = (txt) => {
    return txt.split(',');
  };

  const handleLike = (e) => {
    const postId = e.target.id || e.target.parentNode.id;
    const updatedPosts = loginMyPosts.map((post) => {
      if (post.id === Number(postId)) {
        return {
          ...post,
          rate: post.rate + 1,
        };
      }
      return post;
    });
    setLoginMyPosts(updatedPosts);
    sessionStorage.setItem('posts', JSON.stringify(updatedPosts));
  };

  return (
    <div className={Home.homemain}>
      { loginuser &&
      <div>
        <div>
          <h3>{ loginuser.name }</h3>
          <h5>{ dob }</h5>
        </div>
        { maps ? 
              <div className={style.todaylist}>
                { newMap &&  
                <h1>Today <span>{newMap.split(',').length}</span></h1> }
                <form className={style.add_form} onSubmit={addTasks}>
                  <input type="text" placeholder="今日のタスクを追加" />
                  <button type="submit">＋</button>
                </form>
                <p>{msg}</p>
                { newMap?.length > 0 &&
                  toJson(newMap).map((todo,idx) => (
                      <ul className={style.todo} key={idx}>
                        <li id={idx}>
                        <input type="checkbox" onChange={(e) => delTodo(e)} />
                          {/* { delFlag ? 
                          <input type="checkbox" onChange={(e) => delTodo(e)} /> :
                          < RxCross2 /> } */}
                          {todo}
                        </li>
                      </ul>
                  ))}
                <div className={style.goals}>
                  <div className={style.goal}>
                    <p>今日の目標: </p>
                    <h2>{maps.today}</h2>
                  </div>
                  <div className={style.goal}>
                    <p>1か月の目標: </p>
                    <h2>{maps.month}</h2>
                  </div>
                  <div className={style.goal}>
                    <p>1年の目標: </p>
                    <h2>{maps.year}</h2>
                  </div>
                  <button >目標を編集する</button>
                </div>
              </div>
        : null } 
          <div className={styles.posts}>
            { loginMyPosts.length > 0 ? loginMyPosts.map((allpost) => (
                   <div key={allpost.id} className={styles.post}>
                     <h3>{allpost.title}</h3>
                     <span className={styles.tag}>
                     <p>
                       {allpost.j_tag}
                     </p>
                     <p >
                       {allpost.e_tag}
                     </p>
                       </span>
                     <div>
                       <button onClick={(e)=>handleMylist(e)} id={ allpost.id }>
                       < FaHeart className={allpost.flag ? styles.activeBtn : null} />
                       </button>
                       <button id={allpost.id} onClick={(e)=>handleLike(e)}>
                         < AiOutlineStar/>
                         {allpost.rate}
                       </button>
                     </div>
                     <p className={styles.content}>{allpost.contents}</p>
                     <Link href= {`/posts/${allpost.title}`}>
                     <img  src={allpost.img}/>
                   </Link>
                   </div>
            )) : null}
            <div key={loginuser.id}>
              <h1>{loginuser.name}</h1>
              <h2>{loginuser.dob}</h2>
              <h3>{loginuser.pass}</h3>
              <p>change password?</p>
              <img src={loginuser.img} alt="" />
            </div>
          </div>
      </div>
        // :
        // <div>
        //   <Link href='/common/login'>ログインが必要です</Link>
        //   <Link href='/common/login'>Sign Up</Link>
        // </div>
    }
    </div>
  )
}
