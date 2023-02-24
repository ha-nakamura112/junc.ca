import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import style from "@/styles/Home.module.css";
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
  const paths = posts.map((post) => ({ 
    params: { title: post.title } 
  }));

  return { 
    paths, 
    fallback: false
  };
}


export default function PostDetail({posts}) {
  const router = useRouter();
  const { title } = router.query;

  const [likes, setLikes] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    posts.map((post)=> {
      if(post.title == title){
        //like function
        setLikes(post.likes);
        //set each post info to post
        setPost(post);
      }
    })
  }, [title]);

  if (!post) {
    return <div>Loading...</div>;
  }

  // const handleLike = async () => {
  //   const response = await fetch(`/api/posts/${post.id}/like`, {
  //     method: 'POST'
  //   });

  //   console.log(response);
  //   if (!response.ok) {
  //     console.error('Failed to like the post');
  //     return;
  //   }
  //   const { likes: newLikes } = await response.json();
  //   setLikes(newLikes);
  // };
  // }

  return (
    <>
      <div className={style.homemain}>
        <div>
          <h1>{post.title}</h1>
          <p>{post.tag}</p>
          <h2>{post.contents}</h2>
          <button>
          {/* <button onClick={handleLike}> */}
            {post.like} Likes
            </button>
          <img src={post.img} />
          <button onClick={()=>router.push("/posts")}>
            記事一覧に戻る
          </button>
        </div>
      </div>
    </>
  );
};



