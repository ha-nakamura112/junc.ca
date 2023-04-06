import { useEffect, useState } from "react";
import style from "../../styles/Home.module.css";
import styles from "../../styles/Posts.module.css";
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/Ai';
import { type } from "os";
import { fetchPostsFromDatabase } from "../common/config.js";
import { useRouter } from "next/router";
import {serverUrl} from "../common/config";


export async function getStaticProps() {
  const posts = await fetchPostsFromDatabase();
  return {
    props: {
      posts,
    },
  };
}


export default function AllPost({ posts, loginuser }){
  const router = useRouter();
  const [allPosts, setAllPosts] = useState(posts);
  const [searchText, setSearchText] = useState("");
  const [ userinfo, setUserinfo ] = useState(loginuser);
  const [ flag, setFlag ] = useState('');


  useEffect(()=>{
    if(!userinfo){
      let info = sessionStorage.getItem('user');
      if(info){
        setUserinfo(JSON.parse(info));
      }
    }
    if(sessionStorage.getItem('mypost')){
      posts.map((post)=>{
        sessionStorage.getItem('mypost').split(',').forEach((val) => {
          if(post.id == val){
            post.flag = true;
          }
        });
      })
    }
    setAllPosts(posts);
  },[])

  const searchFunc = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);

  const filteredPosts = allPosts.filter((post)=>{
        const postLaws = JSON.stringify(post);
        return postLaws.toLowerCase().includes(searchText.toLowerCase())
      })
      setAllPosts(filteredPosts);
  }

  const handleLike = (e) => {
    const postId = e.target.id || e.target.parentNode.id;
    const updatedPosts = allPosts.map((post) => {
      if (post.id === Number(postId)) {
        return {
          ...post,
          rate: post.rate + 1,
        };
      }
      return post;
    });
    setAllPosts(updatedPosts);
    sessionStorage.setItem('posts', JSON.stringify(updatedPosts));
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
    const updatedPosts = allPosts.map((post)=>{
      if(post.id == postId){
        post.flag = !post.flag;
      }
      return post;
    })
    setAllPosts([...updatedPosts]);
  }
  const url = '/data/img/home/canada1.png'

  console.log(`${serverUrl}${url}`)
  
  

  return (
    <>
      <div className={style.homemain}>
        <div className={styles.posts_page}>
          <form className={styles.search_input}>
            <input type="text" onChange={(e) => setSearchText(e.target.value)} />
              <button type="button" onClick={searchFunc}>Search</button>
          </form>
          <div className={styles.posts}>
            { allPosts.map((allpost)=> (
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
                { userinfo ?
                  <button onClick={(e)=>handleMylist(e)} id={ allpost.id }>
                  < FaHeart className={allpost.flag ? styles.activeBtn : null} />
                  </button> : null 
                 }
                  <button id={allpost.id} onClick={(e)=>handleLike(e)}>
                    < AiOutlineStar/>
                    {allpost.rate}
                  </button>
                </div>
                <p className={styles.content}>{allpost.contents}</p>
                <Link href= {`/posts/${allpost.title}`}>
                <img  src={serverUrl+allpost.img}/>
              </Link>
              { userinfo ? 
                <button onClick={() => router.push("/posts/add")}>
                  記事を追加する
                </button> :null
                 }
              </div>
            )) }
          </div>
        </div>
      </div>
    </>
  )
}


