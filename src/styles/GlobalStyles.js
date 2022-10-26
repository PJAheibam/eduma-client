import { GlobalStyles, css } from "@mui/material";

export default function Global({ theme }) {
  return (
    <GlobalStyles
      styles={css`
        :root {
          color-scheme: ${theme.palette.mode};
        }
        body {
          margin: 0;
          color: ${theme.palette.text.primary};
          background-color: ${theme.palette.background.default};
          font-family: "Roboto", "Helvetica", "Arial", sans-serif;
        }
        .MuiTabs-indicator {
          left: 0;
        }
        .MuiCardMedia-root {
          object-fit: contain;
        }
      `}
    />
  );
}
