import "./topbar.css";
import { Search, } from "@material-ui/icons";
import { Link,  useHistory} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
//import GenericAvatar from '../../../assets/person/noAvatar.png'

export default function Topbar() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const history = useHistory();
  const logOut = () => {
    localStorage.removeItem('user');
   //history.push('/login')
  };

  return (
    <div className="topbarContainer ">
      <div className="topbarLeft">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Chat App</span>
        </Link>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
      </div>
      <div className="topbarRight">
        
        <div className="topbarIcons">
        Welcome {user.username}.
        </div>
        <Link to='/messenger'>
          Messenger
        </Link>
        <Link to='/profile'>
          Profile
        </Link>
        <Link to={`/profile/${user.username}`}>
          <img
            src={
              user.profilePicture
              ? PF + user.profilePicture
              : PF + "person/noAvatar.png"
            }
            
            alt=""
            className="topbarImg"
          />
        </Link>
        <Link to='/register' onClick={logOut}>
        Logout
        </Link>
      </div>
    </div>
  );
}
