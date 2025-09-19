import styled from "styled-components";

const StyledButton = styled.button`
    background: var(--primary);
    color: white;
    border: none;
    padding: 10px 16px;
    border-radius: 6px;
    font-weight: 500;
    cursor: pointer;

    &:hover {
    opacity: 0.9;
    }

    &:disabled {
    background: #94a3b8;
    cursor: not-allowed;
    }
`;

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode;
};

export default function Button({ children, ...props }: ButtonProps) {
    return <StyledButton {...props}>{children}</StyledButton>;
}
