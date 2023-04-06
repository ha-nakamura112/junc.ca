import { useState } from "react";
import Link from 'next/link';
import styles from "../../styles/Modal.module.css";
import { useRouter } from "next/router.js";

export default function Signup({ setLoginUser, loginuser }){
  const server = 'http://localhost:3000';
  const[msg,setMsg] = useState('');
  const router = useRouter();
//   function makeid(){
//     console.log(process.env)
//       var result = '';
//       var characters = process.env.REACT_APP_CHARACTERS;
//       let length = process.env.REACT_APP_LENGTH;
//       var charactersLength = characters.length;
//       for ( var i = 0; i < length; i++ ) {
//           result += characters.charAt(Math.floor(Math.random() * 
//           charactersLength));
//       }
//      return result; //random token
//   }

//   const token = makeid();

  const loginSubmit = async(e)=>{
    e.preventDefault();
    if(e.target[0].value === '' && e.target[1].value === ""){
        setMsg('please fill in the blanks');
        console.log("wrong")
    }else{
      if(e.target[1].value !== e.target[2].value){
        setMsg('Password and Password Confirm is not same')
      }else{
        // const apiUrlEndpoint = `${server}/api/login`;
        // const postData = {
        //     method: "Post",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({
        //       name: e.target[0].value,
        //     }),
        //   };
        //   const response = await fetch(apiUrlEndpoint, postData);
        //   const res = await response.json();
        //   if(res.user[0]){
        //     setLoginUser(res.user[0]);
        //     // need to encrypt loginuser and key
        //     sessionStorage.setItem('user', JSON.stringify(res.user[0]));
        //     console.log(res)
        //     router.push('/mypage');
        //   }else{
        //     setMsg(res.msg);
        //   }
        setMsg('before sending msg')
      }
    }
    
  }
  
  return(
      <div className={styles.modalBg}>
                <img className={styles.login_bg} src="../../../data/imgs/home/IMG_0599.JPG"/>
          <div className={styles.modalLoginContent}>
              <div className={styles.closeBtn}>
                  <Link href="/">X</Link>
              </div>
              <div className={styles.modalContent_body}> 
                  <h1>Sign Up</h1>
                  <form  onSubmit={loginSubmit}>
                      {/* <input type='hidden' value={token} name="tokenCon"/> */}
                      {/* <input type="text" name="formChk" defaultValue="loginForm" hidden/> */}
                      <div>
                          <label htmlFor="user">Username: </label>
                          <input type="text" name="user" placeholder="ユーザーネーム" />
                      </div>
                      <div>
                          <label htmlFor="paseeword">Password: </label>
                          <input type="password" name="pass" placeholder="password" />
                      </div>
                      <div>
                          <label htmlFor="paseeword">Password Confirm: </label>
                          <input type="password" name="pass" placeholder="password Confirmation" />
                      </div>
                      <button type="submit">Sign Up</button>    
                      <p>
                        Are you a member? 
                        <Link href="/common/login">
                        Login
                        </Link>
                        </p>
                  </form>
                  <p>{msg}</p>
              </div>
          </div>
      </div>
  )
}