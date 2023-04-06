import { query } from "../../lib/db";

export default async function handler(req, res) {
  const id = req.body.id;
    try {
      const queryUsers = `SELECT * FROM user_tb WHERE id = '${id}'`;
      // const queryPosts = `SELECT * FROM post_tb`;
      const queryMaps = `SELECT * FROM loadmap_tb WHERE user_id = '${id}'`;

      const values = [];
  
      const Userdata = await query({ query: queryUsers, values: [values] });
      const Mapdata = await query({ query: queryMaps, values: [values] });
      // const Postsdata = await query({ query: queryPosts, values: [values] });

      if(Userdata){
        if(Mapdata){

          res.status(200).json({ user: Userdata, map: Mapdata 
        });
        }else{
          res.status(200).json({ user: Userdata, map: null 
          }); 
        }
      }else{
        res.status(500).json({
          msg:"you should login"
        })
      }
  
    } catch (error) {
      res.status(500).json({ error: error.message });

  }

}
