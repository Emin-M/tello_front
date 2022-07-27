import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import {
  StyledPersonalData,
  StyledPersonalDataForm,
} from "./styles/PersonalData.styled";
import { Top } from "./styles/Top.styled";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { updateUser } from "../../../redux/actions/userActions";
import Loading from "../../../components/ReusuableComponents/Loading";

/* Images */
import edit from "../../../assets/images/icons/edit.png";

/* Creating Scema For Form Validation */
interface IFormInputs {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
}

const schema = yup
  .object({
    firstname: yup.string(),
    lastname: yup.string(),
    email: yup.string().email("Email nümunədə göstərilən formatda olmalıdır"),
    phone: yup.string(),
  })
  .required();

const PersonalData = () => {
  const { user, loading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schema),
  });

  /* On Form Submit */
  const onSubmit = (data: IFormInputs) => {
    const user = {
      email: data.email.length > 0 ? data.email : undefined,
      phone: data.phone.toString().length > 0 ? data.phone : undefined,
      firstname: data.firstname.length > 0 ? data.firstname : undefined,
      lastname: data.lastname.length > 0 ? data.lastname : undefined,
    };
    dispatch(updateUser(user));
  };

  useEffect(() => {
    if (user?.email && user.firstname && user.lastname && user.phone) {
      reset({
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
      });
    }
  }, [user]);

  return (
    <StyledPersonalData>
      <Top>
        <h2>Şəxsi məlumatlar</h2>
      </Top>
      {loading ? (
        <Loading />
      ) : (
        <StyledPersonalDataForm onSubmit={handleSubmit(onSubmit)}>
          <div className="group">
            <div>
              <label htmlFor="firstname">Ad</label>
              <input
                type="text"
                id="firstname"
                placeholder="Adınızı daxil edin"
                defaultValue={user?.firstname}
                {...register("firstname")}
              />
            </div>
            <div>
              <label htmlFor="lastname">Soyad</label>
              <input
                type="text"
                id="lastname"
                placeholder="Soyadınızı daxil edin"
                defaultValue={user?.lastname}
                {...register("lastname")}
              />
            </div>
          </div>
          <div className="group">
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                type="text"
                id="email"
                placeholder="nümunə@gmail.com"
                defaultValue={user?.email}
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
                defaultValue={user?.phone}
                {...register("phone")}
              />
            </div>
          </div>
          <button type="submit" disabled={!isDirty}>
            <img src={edit} alt="edit" /> Məlumatları yenilə
          </button>
        </StyledPersonalDataForm>
      )}
    </StyledPersonalData>
  );
};

export default PersonalData;
