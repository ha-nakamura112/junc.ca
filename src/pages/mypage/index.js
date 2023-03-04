import { useEffect, useState } from "react";
import style from "../../styles/myPage.module.css";
import { fetchPostsFromDatabase } from "../common/config.js";
import styles from "../../styles/Home.module.css";
import Link from 'next/link';
import { useRouter } from "next/router.js";
import { FaHeart } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/Ai';

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

  
  
  const makeMap = async () => {
    const apiUrlEndpoint = `http://localhost:3000/api/myPage`;
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
      if(!newMap) setNewMap(res.map[0].todo);
      const posting = await loginUserPost();
      setLoginMyPosts(posting);
      // sessionStorage.setItem('mypost', JSON.stringify(posting));
    } else {
      console.log("not login");
    }
  };
  
  useEffect(() => {
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
    <div className={styles.homemain}>
      { loginuser &&
      <div>
        { maps ? 
              <div>
                { newMap.length > 0 &&
                  toJson(newMap).map((todo,idx) => (
                    <div key={idx}>
                      <ul>
                        <li id={idx}>
                          {todo}
                          <input type="checkbox" onChange={(e) => delTodo(e)} />
                        </li>
                      </ul>
                    </div>
                  ))}
                <form onSubmit={addTasks}>
                  <input type="text" placeholder="今日の予定を追加" />
                  <button type="submit">追加</button>
                  {msg}
                </form>
                <h1>{maps.month}</h1>
                <h1>{maps.today}</h1>
                <h1>{maps.year}</h1>
              </div>
        : null } 
          <div>
            { loginMyPosts.length > 0 ? loginMyPosts.map((post) => (
              <div key={post.id}>
                <h1>{post.title}</h1>
                <p>{post.e_tag}</p>
                <p>{post.j_tag}</p>
                <button onClick={(e)=>handleMylist(e)} id={ post.id }>
                  < FaHeart className={post.flag ? style.activeBtn : null} />
                  </button>
                  <button id={post.id} onClick={(e)=>handleLike(e)}>
                    < AiOutlineStar/>
                    {post.rate}
                  </button>
                <h2>{post.contents}</h2>
                <img src={post.img} alt="" />
                <button onClick={() => router.push("/posts")}>
                  記事一覧に戻る
                </button>
                <button onClick={() => router.push("/posts/add")}>
                  記事を追加する
                </button>
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
