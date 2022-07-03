import { StyledButton } from "./styles/Button.styled";

interface IProps {
  title: string;
  bg: string;
  color: string;
}

const Button = ({ title, bg, color }: IProps) => {
  return (
    <StyledButton style={{ color: color, background: bg }}>
      {title}
    </StyledButton>
  );
};

export default Button;
