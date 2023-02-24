import { fetchUsersFromDatabase, fetchLoadMapsFromDatabase } from "../common/config.js";
import styles from "@/styles/Home.module.css";

export async function getStaticProps({ loginuser }) {
  const users = await fetchUsersFromDatabase();
  const maps = await fetchLoadMapsFromDatabase();


  return {
    props: {
      users: users,
      maps: maps
    },
  };
}

export default function MyPage({ maps, loginuser, setLoginUser }) {

      // const loginMap = maps.filter((map) =>{ 
      //     map.user_id == loginuser.id;
      // });

      const toJson = (txt) => {
        return txt.split(",");
      }

      const loginUserMap = ()=>{
        let mylists = loginuser.mylist.split(',')
        for(let i = 0; i < mylists.length; i++){
          maps.filter((map)=>{
            map.id === mylists[i]
          });
        }
      }
  return (
    <>
      <div className={styles.homemain}>
        <p>{loginuser && loginuser.name}</p>
        {maps ? (
          maps.map((map) => {
            if(map.user_id == loginuser.id){
              return (
                <div key={map.id}>
                  { 
                    toJson(map.todos).map((todo)=>{
                      return (
                        <div>
                          <ul key={todo}>
                            <li>{todo}</li>
                          </ul>
                        </div>
                      )
                    })
                   }
                  <form>
                    <input type="text" placeholder="今日の予定を追加"/>
                    <button type="submit">追加</button>
                  </form>
                  <h1>{map.todo}</h1>
                  <h1>{map.month}</h1>
                  <h1>{map.today}</h1>
                  <h1>{map.half}</h1>
                </div>
              )
            }
          })
        ) : (
        null)}
        { loginuser ?
          <div>
            <h1>{loginuser.name}</h1>
            <h2>{loginuser.dob}</h2>
            <h3>{loginuser.pass}</h3>
            {/* change password link or button */}
            <p>change password?</p>
            <img src={loginuser.img}/>

          </div> :null
        }
          <form>
            <input type="text" placeholder="今日の予定を追加"/>
            <button type="submit">追加</button>
          </form>
      </div>
    </>
  );
}

