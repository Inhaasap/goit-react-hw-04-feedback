import styled from '@emotion/styled';

export const FeedbackBtn = styled.button`
  aligh-items: center;
  cursor: pointer;
  padding: 5px 20px;
  text-transform: capitalize;
  background-color: #fff;
  outline: none;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 0px 5px teal;
  transition: color 250ms ease-in-out, background-color 250ms ease-in-out,
    box-shadow 250ms ease-in-out;
  :hover {
    color: #fff;
    background-color:  rgb(177, 200, 200);
    box-shadow: inset 0px 0px 5px #3c3c3c;
  }
  :not(:first-of-type) {
    margin-left: 20px;
  }
`;
