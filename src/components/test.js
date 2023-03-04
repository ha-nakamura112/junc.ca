import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const PostPage = ({ post }) => {
  const router = useRouter();
  const [likes, setLikes] = useState(post.likes);

  useEffect(() => {
    setLikes(post.likes);
  }, [post]);

  const handleLike = async () => {
    const response = await fetch(`/api/posts/${post.id}/like`, {
      method: 'POST'
    });

    if (!response.ok) {
      console.error('Failed to like the post');
      return;
    }

    const { likes: newLikes } = await response.json();
    setLikes(newLikes);
  };

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={handleLike}>{likes} Likes</button>
      <button onClick={() => router.back()}>Go back</button>
    </div>
  );
};

export async function getStaticPaths() {
  // Fetch post IDs from the database
  const posts = await fetchPostsFromDatabase();
  const paths = posts.map((post) => ({ params: { id: post.id } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch post by ID from the database
  const post = await fetchPostFromDatabase(params.id);
  return { props: { post } };
}

export default PostPage;
