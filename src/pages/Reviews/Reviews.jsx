import { Header } from "../../components/Header/Header";
import { HeadForm } from "../../components/HeadForm/HeadForm";
import { ReviewsList } from "../../components/ReviewsList/ReviewsList";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getToken } from "../../redux/auth/auth-selectors";
import css from "./Reviews.module.css";
import svg from "../../images/symbol-defs.svg";
import { useNavigate } from "react-router-dom";
export const Reviews = () => {
  const [isFormOpen, setIsFormOpen]=useState(false)
  const token = useSelector(getToken);
  const navigate = useNavigate();
  useEffect(() => {
    if (!token) {
      navigate("/clientSide-React");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  const toggleForm=()=>{
    setIsFormOpen(!isFormOpen)
  }
  return (
    <>
      <Header />
      <div className={css.reviews}>
        <div className={css.left}>
          <div className={css.add} onClick={()=>toggleForm()}>
            <h3 className={css.addTitle}>Add item</h3>
            <svg className={isFormOpen?css.iconRed: css.icon}>
              <use href={`${svg}#icon-x`} />
            </svg>
          </div>
          <div className={isFormOpen?css.formWrapOpen: css.formWrap}>
          <HeadForm />
          </div>
          
        </div>
        <div className={css.right}>
          <ReviewsList />
        </div>
      </div>
    </>
  );
};
