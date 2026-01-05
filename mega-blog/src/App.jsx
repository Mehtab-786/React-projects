import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/AuthService";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userdata) => {
        if (userdata) {
          dispatch(login({ userdata }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);
  return loading ? (
    <div className="text-2xl text-black font-bold">Loading...</div>
  ) : (
    <div className="min-h-screen w-full bg-neutral-800 text-white ">
      <Header />

      <main>{/* <outlet?> */}</main>
      <Footer />
    </div>
  );
}

export default App;
