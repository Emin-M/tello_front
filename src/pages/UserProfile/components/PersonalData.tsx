import { useEffect, useState } from "react";
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
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

/* Images */
import edit from "../../../assets/images/icons/edit.png";

/* Creating Scema For Form Validation */
interface IFormInputs {
  firstname: string;
  lastname: string;
  email: string;
}

const schema = yup
  .object({
    firstname: yup.string().required("Ad tələb olunur"),
    lastname: yup.string().required("Soyad tələb olunur"),
    email: yup
      .string()
      .email("Email nümunədə göstərilən formatda olmalıdır")
      .required("Email tələb olunur"),
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
  const [phone, setPhone] = useState<string>();
  const [dirty, setDirty] = useState<boolean>(false);

  /* On Form Submit */
  const onSubmit = (data: IFormInputs) => {
    const user = {
      email: data.email || undefined,
      phone: phone || undefined,
      firstname: data.firstname || undefined,
      lastname: data.lastname || undefined,
    };
    dispatch(updateUser(user));
  };

  useEffect(() => {
    reset({
      firstname: user?.firstname,
      lastname: user?.lastname,
      email: user?.email,
    });
    setPhone(user?.phone);
  }, [user]);

  useEffect(() => {
    phone === user?.phone ? setDirty(false) : setDirty(true);
  }, [phone, user]);

  return (
    <StyledPersonalData>
      <Top>
        <h2>Şəxsi məlumatlar</h2>
      </Top>
      {loading === "pending" ? (
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
              <span className="error">{errors.firstname?.message}</span>
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
                defaultValue={user?.email}
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
          </div>
          <button type="submit" disabled={!isDirty && !dirty}>
            <img src={edit} alt="edit" /> Məlumatları yenilə
          </button>
        </StyledPersonalDataForm>
      )}
    </StyledPersonalData>
  );
};

export default PersonalData;
