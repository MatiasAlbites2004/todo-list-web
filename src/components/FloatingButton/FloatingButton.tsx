import React from "react";
import * as S from "./FloatingButton.styled";
import { Plus } from "lucide-react";

interface FloatingButtonProps {
  onClick: () => void;
  icon?: React.ReactNode;
  label?: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({
  onClick,
  icon = <Plus size={24} />,
  label,
}) => {
  return (
    <S.Button onClick={onClick}>
      {icon}
      {label && <span>{label}</span>}
    </S.Button>
  );
};

export default FloatingButton;
