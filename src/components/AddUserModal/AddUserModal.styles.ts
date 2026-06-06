import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-top: 0;
  }

  form {
    display: flex;
    flex-direction: column;

    label {
      margin-bottom: 10px;
    }

    input {
      margin-top: 5px;
      padding: 8px;
      font-size: 14px;
    }

    button {
      margin-top: 10px;
      padding: 10px;
      font-size: 14px;
      cursor: pointer;

      &[type="button"] {
        background: #ccc;
        border: none;
      }

      &[type="submit"] {
        background: #007bff;
        color: white;
        border: none;
      }
    }
  }
`;
