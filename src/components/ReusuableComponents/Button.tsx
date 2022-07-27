import { StyledButton } from "./styles/Button.styled";

interface IProps {
  title: string;
  bg: string;
  color: string;
  icon?: string;
}

const Button = ({ title, bg, color, icon }: IProps) => {
  return (
    <StyledButton style={{ color: color, background: bg }}>
      {icon && <img src={icon} alt="edit" />} {title}
    </StyledButton>
  );
};

export default Button;
