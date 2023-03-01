import {query} from "../../lib/db";

export default async function handler(req, res) {
    try {
      const queryUsers = "SELECT * FROM user_tb";
      const queryPosts = "SELECT * FROM post_tb";
      const queryMaps = "SELECT * FROM loadmap_tb";
      const values = [];
  
      const Userdata = await query({ query: queryUsers, values: [values] });
      const Postdata = await query({ query: queryPosts, values: [values] });
      const Mapdata = await query({ query: queryMaps, values: [values] });
  
  
      res.status(200).json({ users: Userdata, posts: Postdata, map: Mapdata 
    });
    } catch (error) {
      // unhide to check error
      res.status(500).json({ error: error.message });

  }

}
