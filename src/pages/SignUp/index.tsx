import { FC } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "../../components/ReusuableComponents/styles/Container.styled";
import Button from "../../components/ReusuableComponents/Button";
import { ICreateUser } from "../../modules/types/user";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { alertError } from "../../modules/alert";
import api from "../../api/api";

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

/* Creating Scema For Form Validation */
interface IFormInputs {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
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
    phone: yup.string(),
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

  /* On Form Submit */
  const onSubmit = (data: IFormInputs) => {
    const user = {
      email: data.email,
      phone: data.phone,
      firstname: data.firstname,
      lastname: data.lastname,
    };
    createUser(user);
  };

  const createUser = async (user: ICreateUser) => {
    try {
      const response = await api.post("/customers", user);
      if (response.data.id) {
        reset();
        navigate("/login", {
          state: { signupMessage: "Siz uğurla qeydiyyatdan keçdiniz" },
        });
      }
    } catch (error: any) {
      const { email } = error?.response?.data?.error?.errors;
      email?.[0] && alertError("Email adresi isdifadə olunub");
    }
  };

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
              <input
                type="tel"
                id="phone"
                placeholder="000-000-00-00"
                {...register("phone")}
              />
              <span className="error">
                {errors.phone?.message?.slice(0, 30)}
              </span>
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
