import { Stack, styled, Button, css } from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const activeNavStyle = (theme) => css`
  border-bottom: 2px solid ${theme.palette.primary.dark};
`;

const NavButton = styled(Button)`
  border-radius: 0;
  ${(p) => (p.active === "true" ? activeNavStyle(p.theme) : null)};
`;

const NavTabs = () => {
  const { pathname } = useLocation();

  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <NavButton active={(pathname === "/").toString()} component={Link} to="/">
        Home
      </NavButton>
      <NavButton
        active={pathname.includes("/courses").toString()}
        component={Link}
        to="/courses/all"
      >
        Courses
      </NavButton>
      <NavButton
        active={(pathname === "/blog").toString()}
        component={Link}
        to="/blog"
      >
        Blog
      </NavButton>
      <NavButton
        active={(pathname === "/faq").toString()}
        component={Link}
        to="/faq"
      >
        FAQ
      </NavButton>
    </Stack>
  );
};

export default NavTabs;
