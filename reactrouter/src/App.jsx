import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from 'react-router-dom'
import './App.css'
import Layout from './pages/layout'
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import User from './components/user/User'
import Github,{ githubLoaderData } from './components/github/Github'
// then in route use loader={githubLoaderData} but only works with createbrowserroute and routerprovider

const router=createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/github' element={<Github/>} loader={githubLoaderData}/>    
      <Route path='/user/:Id' element={<User/>}/>
    </Route>
  )
)

function App() {

  return (
    <>
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/github' element={<Github/>}/>    
            <Route path='/user/:Id' element={<User/>}/>
          </Route>
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router}/>
    </>
  )
}

export default App
