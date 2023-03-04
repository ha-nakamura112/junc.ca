import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FaHeart } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/Ai';
import style from "../../styles/Home.module.css";
import Link from "next/link";
import { fetchPostsFromDatabase } from "../common/config.js";
// Fetch post by ID from the database

export async function getStaticProps() {
  const posts = await fetchPostsFromDatabase();
  return {
    props: {
      posts,
    },
  };
}

// Fetch post IDs from the database
export async function getStaticPaths() {
  const posts = await fetchPostsFromDatabase();
  const paths = await posts.map((post) => ({ 
    params: { title: post.title } 
  }));
  
  return { 
    paths, 
    fallback: false
  };
}


export default function PostDetail({ posts, loginuser }) {
  const router = useRouter();
  const { title } = router.query;

  const [likes, setLikes] = useState();
  const [post, setPost] = useState();
  const [ userinfo, setUserinfo ] = useState(loginuser);

  useEffect(() => {
    posts.map((post)=> {
      if(!userinfo){
        let info = sessionStorage.getItem('user');
        setUserinfo(JSON.parse(info));
      }
      if(post.title == title){
        //like function
        setLikes(post.likes);
        //set each post info to post
        setPost(post);
      }
    })
  }, [title]);

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
    sessionStorage.setItem('posts', JSON.stringify(updatedPosts))
  };

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className={style.homemain}>
        <div>
          <h1>{post.title}</h1>
          <p>{post.j_tag}</p>
          <p>{post.e_tag}</p>
          <h2>{post.contents}</h2>
          <div >
            { userinfo ?
                  <button onClick={(e)=> handleMylist(e)} id={post.id}>
              < FaHeart />
               Add to your favorite
              </button> : null 
            }
            <button id={post.id} onClick={(e)=>handleLike(e)}>
              < AiOutlineStar/>
              { post.rate }
            </button>
          </div>
          <img src={post.img} />
          <button onClick={()=>router.push("/posts")}>
            記事一覧に戻る
          </button>
        </div>
      </div>
    </>
  );
};



