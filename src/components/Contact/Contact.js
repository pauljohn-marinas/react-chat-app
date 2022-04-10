import React from "react";
import "./Contact.css";
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles, withStyles } from "@material-ui/core/styles";
// import { useHistory } from "react-router-dom";

const StyledBadge = withStyles((theme) => ({
  badge: {
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));
function Contact() {
  const classes = useStyles();
  // const history = useHistory();

  // const selectContact = () => {
  //   if (id) {
  //     history.push(`/chat/${id}`);
  //   }
  // };
  return (
    <div className="contact">
      <StyledBadge
        overlap="circle"
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        variant="dot"
        // className={!status ? "offline" : ""}
      >
        <Avatar alt="" src="" />
      </StyledBadge>
      <div className="message-data">
        <h4>test</h4>
        <p>Lorem ipsum dolor sit amet..</p>
        <span>12:00 am</span>
      </div>
    </div>
  );
}

export default Contact;
