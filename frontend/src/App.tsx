import { BrowserRouter, Route, Routes ,useNavigate  } from 'react-router-dom'

import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { Blog } from './pages/Blog'
import { Blogs } from "./pages/Blogs";
import { Publish } from './pages/Publish';
import RequireUser from './utils/RequireUser';
import { useEffect } from 'react';





// for user signin redirect 
const Auth = () => {
  const navigate = useNavigate();

  const isLoggedIn = () => {
      const token = localStorage.getItem('jwt'); // Adjust according to your storage method
      return token !== null;
  };

  useEffect(() => {
      if (!isLoggedIn()) {
          navigate('/signin'); // Redirect to sign-in if not logged in
      } else {
          navigate('/blogs'); // Redirect to blogs if logged in
      }
  }, [navigate]);

  return (
      <div>
          {/* Your application content goes here */}
      </div>
  );
};



function App() {


  return (
    <>
      <BrowserRouter>
       

        <Routes>
        <Route path="/" element={<Auth />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          <Route  element={<RequireUser/>} >
          <Route path="/blog/:id" element={<Blog />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/publish" element={<Publish />} />
        </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


