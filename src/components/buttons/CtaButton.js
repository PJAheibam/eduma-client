import { styled, Button } from "@mui/material";

export default styled(Button)`
  background-image: linear-gradient(
    to right,
    #4776e6 0%,
    #8e54e9 51%,
    #4776e6 100%
  );
  margin-top: auto;
  padding: 8px 16px;
  border-radius: 20px;
  width: fit-content;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  display: flex;
  &:hover {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
`;
