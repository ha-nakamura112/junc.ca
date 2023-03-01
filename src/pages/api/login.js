import { query } from "../../lib/db";

export default async function loginHandler(req, res) {
  const name = req.body.name;
    try {
      const queryUsers = `SELECT * FROM user_tb WHERE name = '${name}'`;
      const values = [];
      console.log(queryUsers)
      const Userdata = await query({ query: queryUsers, values: [values] });

      if(Userdata.length !== 0){
          res.status(200).json({ user: Userdata });
      }else{
        res.status(500).json({
          msg:"pass / username is incorrect"
        })
      }

    } catch (error) {
      res.status(500).json({ error: error.message });

  }

}
