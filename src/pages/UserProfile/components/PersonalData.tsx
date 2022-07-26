import {
  StyledPersonalData,
  StyledPersonalDataForm,
} from "./styles/PersonalData.styled";
import { Top } from "./styles/Top.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "../../../components/ReusuableComponents/Button";
import { Link } from "react-router-dom";

/* Creating Scema For Form Validation */
interface IFormInputs {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
}

const schema = yup
  .object({
    firstname: yup.string().required("Ad tələb olunur"),
    lastname: yup.string().required("Soyad tələb olunur"),
    email: yup.string().email().required("Email tələb olunur"),
    phone: yup.string(),
  })
  .required();

const PersonalData = () => {
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
  };

  return (
    <StyledPersonalData>
      <Top>
        <h2>Şəxsi məlumatlar</h2>
      </Top>
      <StyledPersonalDataForm onSubmit={handleSubmit(onSubmit)}>
        <div className="group">
          <div>
            <label htmlFor="firstname">Ad</label>
            <input
              type="text"
              id="firstname"
              placeholder="Adınızı daxil edin"
              {...register("firstname")}
            />
            <span className="error">{errors.firstname?.message}</span>
          </div>
          <div>
            <label htmlFor="lastname">Soyad</label>
            <input
              type="text"
              id="lastname"
              placeholder="Soyadınızı daxil edin"
              {...register("lastname")}
            />
            <span className="error">{errors.lastname?.message}</span>
          </div>
        </div>
        <div className="group">
          <div>
            <label htmlFor="email">E-mail</label>
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
            <span className="error">{errors.phone?.message?.slice(0, 30)}</span>
          </div>
        </div>
        <Button title="Məlumatları yenilə" bg="#2dd06e" color="#ffffff" />
      </StyledPersonalDataForm>
    </StyledPersonalData>
  );
};

export default PersonalData;
