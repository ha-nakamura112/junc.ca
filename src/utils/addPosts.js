export async function addPostsFunc(title,contents,j_tag = null,e_tag = null,type,img = null,id){
    try {
      const apiUrlEndpoint = `http://localhost:3000/api/addPosts`;
    const postData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        contents: contents,
        e_tag: e_tag,
        j_tag: j_tag,
        type: type,
        img: img,
        id: id
      }),
    };
    const response = await fetch(apiUrlEndpoint, postData);
    const res = await response.json();
    console.log(res);
    return res;
    } catch(err) {
      console.error('Error:', err)
    }
}