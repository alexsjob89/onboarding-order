import axios from "axios";
import React,{useState} from "react";
import './App.css';


function App({userId}) {
const [user, setUser] = useState(null)
const

useEffect(() => {
  const fetchUser = async () => {
    const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    setUser(response.data)
  }

  fetchUser();
}, [userId]);

if (!user) return null



return (
  <div>
    <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
  </div>
)

}

export default App;
