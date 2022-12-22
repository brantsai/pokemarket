import NavBar from "../comps/NavBar";
import Footer from "../comps/Footer";
import { useAuth } from "../comps/AuthContext";

const Profile = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Profile</h1>
      <div>User: {currentUser.email}</div>
    </div>
  );
}
 
export default Profile;