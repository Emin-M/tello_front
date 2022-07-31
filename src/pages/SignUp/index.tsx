import { FC, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import Button from "../../components/ReusuableComponents/Button";
import { ICreateUser } from "../../modules/types/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { alertError, alertSuccess } from "../../modules/alert";
import api from "../../api/api";
import PhoneInput from "react-phone-input-2";
import jwt_decode from "jwt-decode";

/* Styles */
import {
  SignupMain,
  SignupMainBottom,
  SignupMainTop,
  SignupSvg,
  StyledSignup,
} from "./style";
import "react-phone-input-2/lib/style.css";

/* Images */
import loginsvg from "../../assets/svg/login.png";
import facebook from "../../assets/images/icons/facebook.png";

/* Creating Scema For Form Validation */
interface IFormInputs {
  firstname: string;
  lastname: string;
  email: string;
  checkbox: boolean;
}

const schema = yup
  .object({
    firstname: yup.string().required("Ad tələb olunur"),
    lastname: yup.string().required("Soyad tələb olunur"),
    email: yup
      .string()
      .email("Email nümunədə göstərilən formatda olmalıdır")
      .required("Email tələb olunur"),
    checkbox: yup
      .boolean()
      .isTrue("Istifadəçi şərtləri qəbul edilməlidir")
      .required("Istifadəçi şərtləri qəbul edilməlidir"),
  })
  .required();

const SignUp: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });
  const [phone, setPhone] = useState<string>();

  /* On Form Submit */
  const onSubmit = (data: IFormInputs) => {
    const basketId = localStorage.getItem("cartId");
    const user = {
      email: data.email,
      phone: phone || undefined,
      firstname: data.firstname,
      lastname: data.lastname,
      external_id: basketId || undefined,
    };
    createUser(user);
  };

  const createUser = async (user: ICreateUser) => {
    try {
      const response = await api.post("/customers", user);
      if (response.data.id) {
        reset();
        navigate("/login", {
          state: {
            message: "Siz uğurla qeydiyyatdan keçdiniz",
            email: response?.data?.email,
          },
        });
      }
    } catch (error: any) {
      const { email } = error?.response?.data?.error?.errors;
      email?.[0] && alertError("Email adresi isdifadə olunub");
    }
  };

  /* Alert About Deleting User */
  const location: any = useLocation();
  useEffect(() => {
    alertSuccess(location?.state?.message, "top-center");
  }, []);

  /* Google Auth */
  const handleCallBackResponse = (response: any) => {
    let decoded: any = jwt_decode(response.credential);

    /* defining user */
    const basketId = localStorage.getItem("cartId");
    const user = {
      email: decoded.email,
      phone: phone || undefined,
      firstname: decoded.given_name,
      lastname: decoded.family_name,
      external_id: basketId || undefined,
    };
    createUser(user);
  };

  /* window Width */
  let width = window.innerWidth;

  useEffect(() => {
    // global google
    google.accounts.id.initialize({
      client_id:
        "803936656001-higbj76a4sarpaionf3ac2lvjp7dj2l6.apps.googleusercontent.com",
      callback: handleCallBackResponse,
    });
    google.accounts.id.renderButton(document.getElementById("signUpDiv")!, {
      text: width > 700 ? "signin_with" : "signin",
      theme: "outline",
      size: "large",
      width: width > 700 ? 200 : 150,
    });
  }, []);

  return (
    <StyledSignup>
      <Container>
        <SignupMain>
          <SignupMainTop>
            <h2>Qeydiyyat</h2>
            <div>
              <div>
                <img src={facebook} alt="facebook" />
                <button>Facebook</button>
              </div>
              <div id="signUpDiv"></div>
            </div>
            <p>və ya</p>
          </SignupMainTop>
          <SignupMainBottom onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="firstname">Ad*</label>
              <input
                type="text"
                id="firstname"
                placeholder="Adınızı daxil edin"
                {...register("firstname")}
              />
              <span className="error">{errors.firstname?.message}</span>
            </div>
            <div>
              <label htmlFor="lastname">Soyad*</label>
              <input
                type="text"
                id="lastname"
                placeholder="Soyadınızı daxil edin"
                {...register("lastname")}
              />
              <span className="error">{errors.lastname?.message}</span>
            </div>
            <div>
              <label htmlFor="email">E-mail*</label>
              <input
                type="text"
                id="email"
                placeholder="nümunə@gmail.com"
                {...register("email")}
              />
              <span className="error">{errors.email?.message}</span>
            </div>
            <div>
              <label htmlFor="phone">Mobil nömrə</label>
              <PhoneInput
                country={"az"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" {...register("checkbox")} />
              <Link to="/">İstifadəçi şərtləri?</Link>
              <span>ilə razıyam*</span>
              <p className="error">{errors.checkbox?.message}</p>
            </div>
            <Button title="Qeydiyyat" bg="#2dd06e" color="#ffffff" />
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
