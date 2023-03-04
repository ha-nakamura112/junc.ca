import fs from "fs/promises";
import { existsSync } from "fs";

import { query } from "../../lib/db";
import path from 'path';

export default async function addPosts(req, res) {
  if(req.method === "POST"){
    const title = req.body.title;
    const user_id = req.body.id;
    const e_tag = req.body.e_tag;
    const j_tag = req.body.j_tag;
    const contents = req.body.contents;
    const type = req.body.type;
    const img = req.body.img; // just file name
      try {
        // const { dataUrl } = req.body;
        const base64Data =    img.replace(/^data:image\/\w+;base64,/, '');
        const dir = path.join(process.cwd(), 'public', 'data', 'imgs','posts');
        if(!existsSync(dir)){
          fs.mkdirSync(dir, { recursive: true });
        }
        fs.writeFileSync(path.join(dir, img), base64Data, "base64");

        const queryPosts = `INSERT INTO post_tb(user_id,title, contents,j_tag, e_tag, type, img) VALUES ('${user_id}','${title}','${contents}','${j_tag}','${e_tag}','${type}','${img}')`;
        const values = [];
        console.log(queryPosts)
        const Postsdata = await query({ query: queryPosts, values: [values] });
        console.log(Postsdata)
        if(Postsdata.insertId > 0){
          res.status(200).json({msg: true});
        }else{
          res.status(500).json({msg: false})
        }
  
      } catch (error) {
        res.status(500).json({ error: error.message });
  
    }

  }

}
