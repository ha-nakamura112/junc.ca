import { useEffect, useState } from "react";
import style from "@/styles/Home.module.css";
import styles from "@/styles/Posts.module.css";
import Link from 'next/link';
import { FaHeart } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/Ai';
const server = 'http://localhost:3000/'

export const getStaticProps = async()=> {
  const res = await fetch(`${server}/data/json/posts.json`);
  const data = await res.json();
  return {
    props: {
      posts : data
    }
  }
}


export default function AllPost({ posts }){
  const [allPosts, setAllPosts] = useState(posts);
  const [searchText, setSearchText] = useState("");

  const searchFunc = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);

  const filteredPosts = allPosts.filter((post)=>{
        const postLaws = JSON.stringify(post);
        return postLaws.toLowerCase().includes(searchText.toLowerCase())
      })
      setAllPosts(filteredPosts);
  }

  return (
    <>
      <div className={style.homemain}>
        <div className={styles.posts_page}>
          <form>
          <input type="text" onChange={(e) => setSearchText(e.target.value)} />
            <button type="button" onClick={searchFunc}>Search</button>
          </form>
          <div className={styles.posts}>
            { allPosts.map((allpost)=> (
              <div key={allpost.id} className={styles.post}>
                <h3>{allpost.title}</h3>
                <p>
                  {allpost.e_tag}
                  {allpost.j_tag}
                </p>
                <div>
                  <button>
                  < FaHeart />
                    Add to your favorite
                  </button>
                  <button>
                    < AiOutlineStar/>
                    {allpost.rate}
                  </button>
                </div>

                <p>{allpost.contents}</p>
                <Link href= {`/posts/${allpost.title}`}>
                <img  src={allpost.img}/>
              </Link>
              </div>
            )) }
          </div>
        </div>
      </div>
    </>
  )
}


