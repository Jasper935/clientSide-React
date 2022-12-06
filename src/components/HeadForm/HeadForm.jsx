import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import css from "./HeadForm.module.css";
import {addReview, getReviews} from '../../redux/reviews/reviews-operations.js'
import Notiflix from 'notiflix';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getToken} from '../../redux/auth/auth-selectors.js'
export const HeadForm = () => {
const [name, setName]=useState('')
const [work, setWork]=useState('')
const [text, setText]=useState('')
const dispatch =useDispatch()
const token = useSelector(getToken)
  const date = new Date();
  const currentDate = `${
    date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  }.${
    date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth()
  }.${date.getFullYear()} ${
    date.getHours() < 10 ? "0" + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes()}`;

  const onChange = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "name":
        setName(e.target.value)
        break;
      case "work":
        setWork(e.target.value)
        break;

      case "text":
        setText(e.target.value)
        break;

      default:
        break;
    }
  };

  return (
    <>
      <h2 style={{ marginBottom: "50px" }}>Заповніть дані</h2>
      <Form
        className={css.form}
        onSubmit={async (e) => {
          e.preventDefault();
          const obj ={name, work, text, date:currentDate}
          dispatch(addReview({ obj,token}))
          dispatch(getReviews())
          setName('')
          setWork('')
          setText('')
          Notiflix.Notify.success(`Додано успішно.`)
         
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label>Імя</Form.Label>
          <Form.Control
            name="name"
            value={name}
            placeholder="Enter name"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label>Тип послуги</Form.Label>
          <Form.Control
            name="work"
            value={work}
            placeholder="Enter type"
            onChange={onChange}
          />
        </Form.Group>

        <Form.Group className="mb-3 ">
          <Form.Label>Текст</Form.Label>
          <Form.Control
            name="text"
            value={text}
            placeholder="Enter text"
            onChange={onChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};
