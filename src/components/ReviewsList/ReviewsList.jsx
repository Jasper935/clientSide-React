import css from "./ReviewsList.module.css";
import { useEffect } from "react";
import axios from "axios";

import {
  deleteReview,
  getReviews,
} from "../../redux/reviews/reviews-operations";
import Notiflix from "notiflix";
import { useDispatch, useSelector } from "react-redux";
import { getMessage, getToken, getStatus, getUserEmail } from "../../redux/auth/auth-selectors";

import { getReviewsList } from "../../redux/reviews/reviews-selectors";
// import axios from "axios";
//==========================================
export const ReviewsList = ({ reload }) => {
  const dispatch = useDispatch();
  const rewiews = useSelector(getReviewsList);
  const message = useSelector(getMessage);
  const token = useSelector(getToken);
  const email = useSelector(getUserEmail);

  useEffect(() => {
    axios.defaults.headers.common.Authorization = token;
    dispatch(getReviews());
console.log(email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reload]);

  return (
    <ul className={css.list}>
      <div className={css.head}>
        <p className={css.text}>Iм'я</p>
        <p className={css.text}>Вид робіт</p>
        <p className={css.text}>Повідомлення</p>
      </div>
      {rewiews &&
        rewiews.map(({ ID, name, work, text }) => {
          return (
            <li key={ID} className={css.item}>
              <p className={css.text}>{name}</p>
              <p className={css.text}>{work}</p>
              <p className={css.text}>{text}</p>
              <div
                className={css.icon}
                onClick={() => {
                  dispatch(deleteReview(ID));
                  dispatch(getReviews());
                  Notiflix.Notify.success(message);
                 
                }}
              ></div>
            </li>
          );
        })}
    </ul>
  );
};
