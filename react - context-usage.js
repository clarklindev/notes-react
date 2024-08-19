import { useContext } from "react";
//note: commented out irrelevant code..
// import classes from './notification.module.css';
import NotificationContext from "../../store/notification-context";
//note: NotificationContext is defined in the context...its the functions and variables to expose
// const NotificationContext = createContext({
//   showNotification: function (notificationData) {},
//   hideNotification: function () {},
//   addBlogPost: function (text) {},
// });

function Notification(props) {
  const notificationCtx = useContext(NotificationContext);

  // const { title, message, status } = props;

  // let statusClasses = "";

  // if (status === "success") {
  //   statusClasses = classes.success;
  // }

  // if (status === "error") {
  //   statusClasses = classes.error;
  // }

  // if (status === "pending") {
  //   statusClasses = classes.pending;
  // }

  // const activeClasses = `${classes.notification} ${statusClasses}`;

  return (
    <div className={activeClasses} onClick={notificationCtx.hideNotification}>
      {/* <h2>{title}</h2>
      <p>{message}</p> */}
    </div>
  );
}

export default Notification;
