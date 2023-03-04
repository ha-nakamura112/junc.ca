import { addPostsFunc } from "../../utils/addPosts"
import styles from "../../styles/addPosts.module.css"
import { useEffect, useState } from 'react';


export default function addPostPage(){
  const [image, setImage] = useState(null);
  const [msg, setMsg] = useState('');

  const uploadPosts = async(e) => {
    e.preventDefault();
    console.log(image);
    const tg = e.target;
    if(tg[0].value !== "" && tg[1].value !== "" && tg[5].value !== ""){
      const id = JSON.parse(sessionStorage.getItem('user')).id;
      const uploadRlt = await addPostsFunc(tg[0].value,tg[1].value,tg[2].value,tg[3].value,tg[5].value,image,id); // fix here
      if(uploadRlt?.msg === true){
        setMsg('投稿完了');
      }else{
        setMsg('something happens')
      }
    }else{
      setMsg('タイトル・投稿内容；タイプの選択は必須です')
    }
  }


  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setImage(reader.result);
    };
  };

  return (
    <div>
      <form className={styles.form} onSubmit={(e)=> uploadPosts(e)}>
        <label htmlFor="title">タイトル:</label><br/>
        <input type="text" id="title" name="title"/><br/>

        <label htmlFor="content">コンテンツ:</label><br/>
        <textarea id="content" name="content" rows="4" cols="50"></textarea><br/>

        <label htmlFor="tag-jp">タグ（日本語）:</label><br/>
        <input type="text" id="tag-jp" name="tag-jp"/><br/>

        <label htmlFor="tag-en">タグ（英語）:</label><br/>
        <input type="text" id="tag-en" name="tag-en"/><br/>

        <label htmlFor="image-upload">Choose an image:</label><br/>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleFileInputChange}
        /><br/>

        <label>選択してください:</label><br/>
        <input type="radio" id="coop" name="selection" value="0"/>
        <label htmlFor="coop">コープ</label><br/>
        <input type="radio" id="working-holiday" name="selection" value="1"/>
        <label htmlFor="working-holiday">ワーホリ</label><br/>
        <input type="radio" id="canada" name="selection" value="2"/>
        <label htmlFor="canada">カナダ</label><br/>

        <input type="submit" value="Submit"/>
      <h1>{msg}</h1>
      </form>

    </div>
  )
}