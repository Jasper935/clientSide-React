import { Header } from "../../components/Header/Header";
import { HeadForm } from "../../components/HeadForm/HeadForm";
import { ReviewsList } from "../../components/ReviewsList/ReviewsList";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/auth/auth-selectors";
import css from "./Reviews.module.css";
import { useNavigate } from "react-router-dom";
export const Reviews = () => {
  const token = useSelector(getToken);
  const navigate =useNavigate()
  ;
  useEffect(() => {
    if(!token){
      navigate('/')
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  return (
    <>
      <Header />
      <div className={css.reviews}>
        <div className={css.left}>
          <HeadForm />
        </div>
        <div className={css.right}>
          <ReviewsList />
        </div>
      </div>
    </>
  );
};
