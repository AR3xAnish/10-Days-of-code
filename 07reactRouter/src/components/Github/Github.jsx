import React, { useEffect, useState } from 'react'

function Github() {
    const [data,setdata]=useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/hiteshchoudhary')
        .then((res)=>res.json())
        .then((data)=>{
            setdata(data)

        })
    },[])
  return (
    <div className='text-center m-4 p-4 bg-gray-600 text-white text-3xl '>Github followers:{data.followers}
    <img src={data.avatar_url} alt="too many req" width={300}/>
    </div>
  )
}

export default Github