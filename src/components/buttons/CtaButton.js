import { styled, Button } from "@mui/material";

export default styled(Button)`
  position: relative;
  margin-inline: auto;
  margin-block: 1.5rem;
  padding: 8px 16px;
  border-radius: 20px;
  width: fit-content;
  text-align: center;
  text-transform: uppercase;
  color: white;
  display: flex;
  &::after,
  &::before {
    position: absolute;
    content: "";
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    border-radius: inherit;
    background-image: linear-gradient(
      to right,
      #4776e6 0%,
      #8e54e9 51%,
      #4776e6 100%
    );
    transition: 0.5s;
    background-size: 200% auto;
    z-index: -1;
  }
  &::before {
    opacity: 0;
    top: 5px;
  }
  &:hover::after {
    background-position: right center;
    color: #fff;
    text-decoration: none;
  }
  &:hover::before {
    opacity: 0.75;
    filter: blur(10px);
  }
`;
