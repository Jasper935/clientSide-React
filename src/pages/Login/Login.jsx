import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../redux/auth/auth-operations";
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";

import { getToken, getStatus } from "../../redux/auth/auth-selectors";
import { Notification } from "../../components/Notification/Notification";
import css from "./Login.module.css";
import { setMessage } from "../../redux/auth/auth-slice";
export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const dispatch = useDispatch();
 
  const status = useSelector(getStatus);
  
  const token = useSelector(getToken);

 

  //   const email = useSelector(getUsername);
  const theme = createTheme();
  useEffect(() => {
    console.log(token);
    if (token) {
      navigate("/reviews");
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);
  const onInput = (evt) => {
    const { name, value } = evt.target;
    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const onSubmit = async (evt) => {
    evt.preventDefault();

    await dispatch(logIn({ email, password }));
    setEmail("");
    setPassword("");
    if (status === 200) {
      navigate("/reviews");
      return
    }
    // } else {
      
      
    //    return
    // }
    // await status !== 200?Notiflix.Notify.failure(errMessage): navigate("/reviews");
    
  };

  const OnClick = () => {};

  return (
    <>
      <ThemeProvider theme={theme}>
        <Grid
          className={css.login}
          container
          component="main"
          sx={{ height: "100vh" }}
        >
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: "url(https://source.unsplash.com/random)",
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light"
                  ? t.palette.grey[50]
                  : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid
            className={css.form}
            item
            xs={12}
            sm={8}
            md={5}
            component={Paper}
            elevation={6}
            square
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}></Avatar>
              <Typography component="h1" variant="h5">
                Log in
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={onSubmit}
                sx={{ mt: 1 }}
              >
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  // autoComplete="email"
                  autoFocus
                  onInput={onInput}
                />
                <TextField
                  onInput={onInput}
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  // autoComplete="current-password"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign In
                </Button>
                <Grid container>
                  <Grid item>
                    <Link onClick={OnClick} href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
      <Notification />
    </>
  );
};
