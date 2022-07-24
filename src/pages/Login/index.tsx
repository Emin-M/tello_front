import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";

/* Styles */
import {
  LoginMain,
  LoginMainBottom,
  LoginMainTop,
  LoginSvg,
  StyledLogin,
} from "./style";

/* Images */
import loginsvg from "../../assets/svg/login.png";
import facebook from "../../assets/images/icons/facebook.png";
import google from "../../assets/images/icons/google.png";
import eye from "../../assets/images/icons/eye.png";
import Button from "../../components/ReusuableComponents/Button";

const Login: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <StyledLogin>
      <Container>
        <LoginMain>
          <LoginMainTop>
            <h2>Daxil ol</h2>
            <div>
              <p>
                <img src={facebook} alt="facebook" />
                <span>Facebook ilə</span>
              </p>
              <p>
                <img src={google} alt="google" />
                <span>Google ilə</span>
              </p>
            </div>
            <p>və ya</p>
          </LoginMainTop>
          <LoginMainBottom>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="email" id="email" placeholder="nümunə@gmail.com" />
            </div>
            <div>
              <label htmlFor="password">Şifrə</label>
              <input
                type={`${showPassword ? "text" : "password"}`}
                id="password"
                placeholder="Şifrənizi daxil edin"
              />
              <div onClick={() => setShowPassword(!showPassword)}>
                <img src={eye} alt="eye" />
              </div>
            </div>
            <Link to="/">Şifrəni unutmusunuz?</Link>
            <Button title="Daxil ol" bg="#2dd06e" color="#ffffff" />
          </LoginMainBottom>
        </LoginMain>
        <LoginSvg>
          <img src={loginsvg} />
          <div>
            <p>Hesabınız yoxdur? </p>
            <Link to="/signup">Qeydiyyatdan keçin</Link>
          </div>
        </LoginSvg>
      </Container>
    </StyledLogin>
  );
};

export default Login;
