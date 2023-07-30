import styled from 'styled-components';

export const Container = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  border: 1px solid ${p => p.theme.colors.lightGreen};
  border-radius: 4px;
  box-shadow: 0px 5px 10px 3px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: 768px) {
    width: 600px;
    flex-direction: row;
  }
`;

export const Wrapper = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;