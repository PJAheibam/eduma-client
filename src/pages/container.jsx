import { Container as Wrapper } from "@mui/system";

const Container = ({ children }) => {
  return (
    <Wrapper
      component="main"
      sx={{
        minHeight: "400px",
        height: "calc(100vh - 64px)",
        width: "100%",
      }}
    >
      {children}
    </Wrapper>
  );
};

export default Container;
