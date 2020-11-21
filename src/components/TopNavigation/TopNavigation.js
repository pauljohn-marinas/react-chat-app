import React from "react";
import "./TopNavigation.css";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import PeopleOutlineIcon from "@material-ui/icons/PeopleOutline";
import { useStateValue } from "../../StateProvider";

function TopNavigation() {
  const [{ auth_user_name }] = useStateValue();
  // const [loginUser, setLoginUser] = useState(null);

  // useEffect(() => {
  //   if (auth_user_id) {
  //       db.collection("users")
  //       .where("uid", "==", auth_user_id)
  //       .get()
  //       .then((doc) =>{
  //         setLoginUser(doc.data())
  //       })
  //   }
  // }, [])

  // useEffect(() => {
  //   if (auth_user_id) {
  //     db.collection("users")
  //       .doc(user_id)
  //       .get()
  //       .then((doc) => {
  //         console.log(`doc ${doc.data()}`);
  //         setLoginUser(doc.data());
  //       });
  //   }
  // }, []);

  return (
    <div className="top-nav">
      <div className="nav-left">
        <SearchIcon style={{ margin: "0" }} />
        <input type="text" placeholder="Search....." />
      </div>
      <div className="nav-right">
        <NotificationsNoneIcon />
        <PeopleOutlineIcon />
        <div className="user-info">
          <div className="user-image-container">
            <img src="" alt="" />
          </div>
          <div className="user-name">{auth_user_name}</div>
        </div>
      </div>
    </div>
  );
}

export default TopNavigation;
