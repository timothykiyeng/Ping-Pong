import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import styled from "styled-components";
//import { Button }  from "./styles";

function Login({ onLogin }) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div className="login-form">
      <Wrapper>
        <Logo>Home of Ping Pong</Logo>
        <h2 className="tagline">
          Welcome to Home of Ping Pong. Learn to play table tennis and level up
          your game 🏓 🏓 .
        </h2>
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} />
            <Divider />
            <p className="accountquestion">Don't have an account?</p> &nbsp;
            <Button onClick={() => setShowLogin(false)}>Sign Up</Button>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <Divider />
            <p className="accountquestion">Already have an account?</p> &nbsp;
            <Button onClick={() => setShowLogin(true)}>Log In</Button>
          </>
        )}
      </Wrapper>
    </div>
  );
}

const COLORS = {
  primary: {
    "--main": "deepskyblue",
    "--accent": "white",
  },
  secondary: {
    "--main": "white",
    "--accent": "lightblue",
  },
};

function Button({ variant = "fill", color = "primary", ...props }) {
  let Component;
  if (variant === "fill") {
    Component = FillButton;
  } else if (variant === "outline") {
    Component = OutlineButton;
  }

  return <Component style={COLORS[color]} {...props} />;
}

const ButtonBase = styled.button`
  cursor: pointer;
  font-size: 1rem;
  border: 1px solid transparent;
  border-radius: 20px;
  padding: 8px 16px;
  margin-left: 40%;
  margin-right: 40%;
  margin-bottom: 10%;
  text-decoration: none;
`;

const FillButton = styled(ButtonBase)`
  background-color: white;
  color: darkblue;

  &:hover {
    opacity: 0.9;
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: white;
  color: darkblue;
  border: 2px solid var(--main);

  &:hover {
    background: hsl(235deg 85% 97%);
  }
`;


const Logo = styled.h1`
  font-family: "Cookie", cursive;
  color: white;
  text-shadow: 1px 1px 10px #03045e;
  font-size: 100px;
  margin: 8px 0 16px;
  text-align: center;
`;

const Wrapper = styled.section`
  max-width: 500px;
  margin: 40px auto;
  padding: 16px;
`;

const Divider = styled.hr`
  border: none;
  border-bottom: 1px solid #ccc;
  margin: 16px 0;
`;
export default Login;
