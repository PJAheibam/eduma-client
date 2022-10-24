import { GlobalStyles, css } from "@mui/material";

export default function Global({ theme }) {
  return (
    <GlobalStyles
      styles={css`
        body {
          margin: 0;
          color: ${theme.palette.text.primary};
          background-color: ${theme.palette.background.default};
        }
      `}
    />
  );
}
