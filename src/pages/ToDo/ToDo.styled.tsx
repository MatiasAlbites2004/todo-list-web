import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  padding: 2rem;
  background: var(--color-secondary);
`;

export const Container = styled.div`
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--color-text);
`;

export const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background: var(--color-background);
  border: 1px solid var(--color-border);
  border-radius: 8px;
  padding: 1rem;
`;

export const TaskInfo = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

export const TaskTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
  margin: 0;
  color: var(--color-text);
`;

export const TaskDesc = styled.p`
  font-size: 0.95rem;
  color: var(--color-text-light);
  margin-top: 0.25rem;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  button {
    font-size: 0.9rem;
  }
`;

export const EmptyText = styled.p`
  text-align: center;
  color: var(--color-text-light);
  margin-top: 2rem;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
`;

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;
