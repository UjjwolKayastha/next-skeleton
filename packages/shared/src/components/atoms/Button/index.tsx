import React from "react";
import { Button as B, ButtonContentProps } from "semantic-ui-react";
import { ButtonWrapper } from "./Button.styles";

interface ButtonProps {
  name: string;
  onClick: () => any;
}

export const Button: React.FC<ButtonProps & ButtonContentProps> = ({
  name,
  onClick,
}) => {
  return (
    <ButtonWrapper>
      <B primary onClick={onClick}>
        {name}
      </B>
    </ButtonWrapper>
  );
};
