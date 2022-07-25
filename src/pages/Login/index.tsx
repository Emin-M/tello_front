import { FC, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../../components/ReusuableComponents/Button";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import api from "../../api/api";

/* Styles */
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import {
  LoginMain,
  LoginMainBottom,
  LoginMainTop,
  LoginSvg,
  StyledLogin,
  LoggedIn,
} from "./style";

/* Images */
import loginsvg from "../../assets/svg/login.png";
import facebook from "../../assets/images/icons/facebook.png";
import google from "../../assets/images/icons/google.png";
import password_forget from "../../assets/images/password_forget.png";

/* Creating Scema For Form Validation */
interface IFormInputs {
  email: string;
}

const schema = yup
  .object({
    email: yup
      .string()
      .email("Email nümunədə göstərilən formatda olmalıdır")
      .required("Email tələb olunur"),
  })
  .required();

const Login: FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  /* On Form Submit */
  const onSubmit = (data: IFormInputs) => {
    const user = {
      email: data.email,
      base_url: `http://${window.location.host}/userprofile`,
    };
    loginUser(user);
  };

  /* Login User Function */
  const loginUser = async (user: { email: string; base_url: string }) => {
    try {
      await api.post("/customers/email-token", user);
      reset();
      setIsLogin(true);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledLogin>
      {isLogin ? (
        <Container>
          <LoggedIn>
            <img src={password_forget} alt="password_forget" />
            <h2>
              E - poçt ünvanınızı yoxlayın. Göndərilmiş linkə keçid edib
              şifrənizi yeniləyin!
            </h2>
          </LoggedIn>
        </Container>
      ) : (
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
            <LoginMainBottom onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  placeholder="nümunə@gmail.com"
                  {...register("email")}
                />
                <span className="error">{errors.email?.message}</span>
              </div>
              <Button title="Daxil ol" bg="#2dd06e" color="#ffffff" />
            </LoginMainBottom>
          </LoginMain>
          <LoginSvg>
            <img src={loginsvg} />
            <div>
              <p>Hesabınız yoxdur? </p>
              <Link to="/signup">Qeydiyyat dan keçin</Link>
            </div>
          </LoginSvg>
        </Container>
      )}
    </StyledLogin>
  );
};

export default Login;
