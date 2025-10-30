import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <p>You’re logged in!</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Dashboard;