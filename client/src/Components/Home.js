import React from 'react'
import axios from "axios";
const Home = () => {


    const clickHandler = async () => {
        try {
            const { data } = await axios.get("/getAuthURL")
            console.log(data);
            window.location.href = data
        } catch (error) {
            console.log(error);
        }

    }
  return (
      <div>
          <button onClick={clickHandler}> Scan my Google Drive</button>

      </div>
  )
}

export default Home