import styled from 'styled-components';

export const SearchBarStyle = styled.div`
  margin-top: 30px;
  margin-left: 30px;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  width: 100%;
  overflow: hidden;
`;

export const Input = styled.input`
  width: 200px;
  height: 40px;
  font-family: inherit;
  font-size: 20px;
  outline: none;
  padding: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  border-radius: 3px;

  ::placeholder {
    font-family: inherit;
    font-size: 18px;
  }

  @media screen and (min-width: 768px) {
    width: 500px;
    margin-bottom: 0;
  }
`;

export const Button = styled.button`
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  text-transform: uppercase;
  color: #fff;
  background-color: rgb(48, 21, 168);
  padding: 8px;
  height: 40px;
  border: 0;
  border-radius: 3px;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  :hover {
    opacity: 1;
    color:  #fff;
    background-color: rgb(48, 21, 168);
  }
`;