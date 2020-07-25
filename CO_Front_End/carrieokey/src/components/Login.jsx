import React from "react";
import "../App.css";
import { Redirect } from "react-router-dom";
import SongList from "./SongList";
import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/button'

export default function Login(props) {
  if (props.isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <div className="log-in mt-5">
        <h2>Log in, see what's Poppin'!</h2>
        <form className="login-form" onSubmit={(evt) => props.handleLogin(evt)}>
          <input
            type="text"
            id="logEmail"
            name="email"
            placeholder="Email"
            onChange={(evt) => props.handleChange(evt)}
            value={props.logEmail}
          ></input>
          <br />
          <input
            type="password"
            id="logPassword"
            name="password"
            placeholder="Password"
            onChange={(evt) => props.handleChange(evt)}
            value={props.logPassword}
          ></input>
          <br />
          <a href="/signup"><Button>Not on Carrie O'Key yet? Sign up!</Button></a>
          <br />

          <Button type="submit">I'm in!</Button>
        </form>
      </div>
      <br />
      <SongList />
    </Container>
  );
}
