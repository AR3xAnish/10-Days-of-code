import {useDispatch} from 'react-redux'
import { useEffect, useState } from 'react'
import authServices from "./appwrite/auth"
import {login,logout} from "./store/authSlice"
import {Header,Footer} from "./components/index"
import { Outlet } from 'react-router-dom'


function App() {
  const [loading,setLoading]=useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authServices.getCurrentUser()
    .then((userData)=>{
      if(userData) {
        dispatch(login({userData}))
      }
      else{
        dispatch(logout(userData))
      }
    })
    .finally(()=>{setLoading(false)})
  }, [])
  

  return (
    <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full block'>
        <Header />
        <main>
          {/* <Outlet /> */}
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
