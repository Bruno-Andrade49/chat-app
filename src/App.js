import { useEffect, useState } from 'react';
import * as C from "./styles/app";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "./services/firebase";
import Loading from './components/loading';
import Login from './components/login';
import Sidebar from './components/sidebar';
import Chat from './components/chat';



function App() {

  const [user, loading] = useAuthState(auth);
  const [userChat, setUserChat] = useState(null);

  useEffect(() => {
    if (user) {
      db.collection("users").doc(user.uid).set({
        email: user.email,
        photoURL: user.photoURL,
      });
    }
  }, [user]);

  if (loading) return <Loading />;

  if (!user) return <Login />;


  return (
    <>
      <C.Container>
        <Sidebar setUserChat={setUserChat} userChat={userChat} />
        <Chat userChat={userChat} />
      </C.Container>
    </>
  );
}

export default App;