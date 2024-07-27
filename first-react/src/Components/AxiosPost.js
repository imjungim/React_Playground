import axios from 'axios'
import {useEffect, useState} from 'react'

const AxiosPost = () => {
  const [data, setData] = useState([]);
  const [postData, setPostData] = useState({
    userId :11,
    id:101,
    body:'test body',
    title:'test title'
  })

  const getClick = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(res => setData(res.data))
  }
  const postClick = () => {
    const formData = new FormData();
    formData.append("userId", 11);
    formData.append("id", 101);
    formData.append("body", 'test body');
    formData.append("title", 'test title');

    for (let key of formData.keys()) {
        console.log(key, ":", formData.get(key));
    }
    axios.post('https://jsonplaceholder.typicode.com/posts', postData)
      .then(res => console.log(res.data))
  }

  useEffect(()=>{
    console.log("data", data)
  },[data])
  return (
    <div>
      <h2>API 연습</h2>
      <div>
        <button onClick={getClick}>Get</button>
        <button onClick={postClick}>Post</button>
      </div>
      {data.map((v,i) => {
        return (
          <div key={i}>
            <h3>{v.title}</h3>
            <div>userId = {v.userId}, id = {v.id}</div>
            <div>{v.body}</div>
          </div>
        )
      })}
    </div>
  )
}
export default AxiosPost