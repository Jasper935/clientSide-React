import css from "./Header.module.css";
import svg from "../../images/symbol-defs.svg";
import { logOut } from "../../redux/auth/auth-operations";
import { useDispatch, useSelector } from "react-redux";
import { getUserEmail } from "../../redux/auth/auth-selectors";
export const Header = () => {
  const email = useSelector(getUserEmail);
  console.log(email);
  const dispatch = useDispatch();
  return (
    <header className={css.header}>
      <div className={css.wrap}>
        <svg className={css.logo}>
          <use href={`${svg}#icon-tree`} />
        </svg>

        <svg onClick={() => dispatch(logOut())} className={css.exit}>
          <use href={`${svg}#icon-logout`} />
        </svg>
      </div>
    </header>
  );
};
