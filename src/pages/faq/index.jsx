import React from "react";
import { styled, Stack, Typography } from "@mui/material";

const Container = styled(Stack)`
  padding: 40px;
  padding-inline: "max(40px, calc((100vw - 1400px)/2))";
`;

const Title = ({ children, ...rest }) => (
  <Typography variant="h5" component="h1">
    {" "}
    {children}{" "}
  </Typography>
);

const Text = ({ children, ...rest }) => (
  <Typography fontSize="large">{children}</Typography>
);

const Faq = () => {
  return (
    <Container spacing={5}>
      <Stack spacing={2}>
        <Title>
          1. Is there a placement for learners at the end of the course?
        </Title>
        <Text>
          There are abundant opportunities offered after completing the course,
          but there is no guarantee of placement. Services and several chances
          are made available to you looking for a way to get into tech biggies.
        </Text>
      </Stack>
      <Stack spacing={2}>
        <Title>
          2. While completing the Post Graduate Program in Full Stack Web
          Development by Skill-Lync, what are the different career support
          services that the learners will get?
        </Title>
        <Text>
          You will get several career support services like:
          <ul>
            <li>Enhancement of technical skills</li>
            <li>Mock interviews</li>
            <li>Resume building</li>
            <li>LinkedIn support</li>
          </ul>
        </Text>
      </Stack>
      <Stack spacing={2}>
        <Title>
          3. How many modules are there in the Post Graduate Program in Full
          Stack Web Development?
        </Title>
        <Text>
          There are six modules to complete in the full-stack web development
          course.
        </Text>
      </Stack>
      <Stack spacing={2}>
        <Title>
          4. What is the approximate salary range that can be expected after
          completing the Post Graduate Program in Full Stack Web Development?
        </Title>
        <Text>
          After completing the Java full stack developer course, you can expect
          a salary ranging from tk. 2.5 - 6LPA
        </Text>
      </Stack>
      <Stack spacing={2}>
        <Title>5 What kind of companies can the learners get a job in?</Title>
        <Text>
          You can get a job in various services ranging from consultancy to
          Y-Combinator start-ups.
        </Text>
      </Stack>
      <Stack spacing={2}>
        <Title>
          6. Is there placement support for this full-stack developer course?
        </Title>
        <Text>
          Yes, as one of the best full-stack developer courses it offers career
          guidance and placement support.
        </Text>
      </Stack>
    </Container>
  );
};

export default Faq;
