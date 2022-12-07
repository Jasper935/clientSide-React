import css from "./Notification.module.css";
import svg from "../../images/symbol-defs.svg";
import { useEffect, useState } from "react";

import {  useSelector } from "react-redux";
import { getMessage } from "../../redux/auth/auth-selectors";
// import { setMessage } from "../../redux/auth/auth-slice";
export const Notification = () => {
  // const dispatch = useDispatch();

  const [currentclass, setCurrentClass] = useState(css.notification);

  let message = useSelector(getMessage);
  const getClassName = () => {
    setCurrentClass(css.notificationActive);
    setTimeout(() => {
      setCurrentClass(css.notification);
      message = "";
    }, 3000);
  };
  useEffect(() => {
    if (message) {
      getClassName();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);
  return (
    <div className={currentclass}>
      <svg className={css.icon}>
        <use href={`${svg}#icon-message`} />
      </svg>
      <p className={css.text}>{message}</p>
    </div>
  );
};
