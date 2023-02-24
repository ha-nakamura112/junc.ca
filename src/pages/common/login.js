import { useState } from "react";
import Link from 'next/link';
import { fetchUsersFromDatabase } from "../common/config.js";
import styles from "@/styles/Modal.module.css";
import { useRouter } from "next/router.js";

export async function getStaticProps() {
    const users = await fetchUsersFromDatabase();
    return {
      props: {
        users     
     },
    };
  }

export default function Login({ users, setLoginUser, loginuser }){
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

  const loginSubmit = (e)=>{
      e.preventDefault();
    //   let loginFormData = new FormData(event.target);
    //   loginFormData.append('token',token)
    //   dbService.loginUser(loginFormData)
    //   .then(res=>{
    //       if(res.data.length <= 0){
    //           setMsg("Email/Password is not correct");
    //           loginFlag(false);
    //           adminFlag(false);
    //       }
    //       else{
    //           closeModal(false);
    //           setMsg('');
    //           loginFlag(true);
    //           loginFun(res.data[0]);
    //           if(res.data[0].role === 'admin'){
    //               adminFlag(true);
    //           }
    //           else{
    //               adminFlag(false);
    //           }
    //           sessionStorage.setItem("sid",res.data[0].email);
    //           sessionStorage.setItem("srole",res.data[0].role);
    //       }
    //   })
    //   .catch(err=>{console.log(err)});
    users.map((user) => {
        if(user.name == e.target[1].value){
            if( user.pass === e.target[2].value){
                setLoginUser(user);
                router.push('/mypage');
            }else{
                console.log('pass is not correct')
            }
        }else{
            console.log('name is not correct')
        }
    })
  }
  
  return(
      <div className={styles.modalBg}>
          <div className={styles.modalLoginContent}>
              <div className={styles.closeBtn}>
                  {/* <button onClick={()=>{closeModal(false)}}>X</button> */}
                  <Link href="/">X</Link>
              </div>
              <div className={styles.modalContent_body}> 
                  <h1>Login</h1>
                  <form onSubmit={loginSubmit}>
                  {/* <form onSubmit={(event)=>loginSubmit(event)}> */}
                      {/* <input type='hidden' value={token} name="tokenCon"/> */}
                      <input type="text" name="formChk" defaultValue="loginForm" hidden/>
                      <div>
                          <label htmlFor="user">Email: </label>
                          <input type="text" name="user" placeholder="ユーザーネーム" />
                      </div>
                      <div>
                          <label htmlFor="paseeword">Password: </label>
                          <input type="password" name="pass" placeholder="password" />
                      </div>
                      <button type="submit">Login</button>
                      <Link href="/common/email">Forgot your password?</Link>
                  
                      <p>
                        Not a member? 
                        <Link href="/common/signup">
                        Sign Up
                        </Link>
                        </p>
                  </form>
                  <p>{msg}</p>
              </div>
          </div>
      </div>
  )
}