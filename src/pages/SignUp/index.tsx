import { FC, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";

/* Styles */
import {
  SignupMain,
  SignupMainBottom,
  SignupMainTop,
  SignupSvg,
  StyledSignup,
} from "./style";

/* Images */
import loginsvg from "../../assets/svg/login.png";
import facebook from "../../assets/images/icons/facebook.png";
import google from "../../assets/images/icons/google.png";
import eye from "../../assets/images/icons/eye.png";
import Button from "../../components/ReusuableComponents/Button";

const SignUp: FC = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <StyledSignup>
      <Container>
        <SignupMain>
          <SignupMainTop>
            <h2>Qeydiyyat</h2>
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
          </SignupMainTop>
          <SignupMainBottom>
            <div>
              <label htmlFor="name">Ad, Soyad</label>
              <input
                type="text"
                id="name"
                placeholder="Ad və soyadınızı daxil edin"
              />
            </div>
            <div>
              <label htmlFor="email">E-mail</label>
              <input type="text" id="email" placeholder="nümunə@gmail.com" />
            </div>
            <div>
              <label htmlFor="number">Mobil nömrə</label>
              <input type="tel" id="number" placeholder="000-000-00-00" />
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
            <div className="checkbox">
              <input type="checkbox" />
              <Link to="/">İstifadəçi şərtləri?</Link>
              <span>ilə razıyam</span>
            </div>
            <Button title="Daxil ol" bg="#2dd06e" color="#ffffff" />
          </SignupMainBottom>
        </SignupMain>
        <SignupSvg>
          <img src={loginsvg} />
          <div>
            <p>Artıq hesabınız var?</p>
            <Link to="/login">Daxil olun</Link>
          </div>
        </SignupSvg>
      </Container>
    </StyledSignup>
  );
};

export default SignUp;
