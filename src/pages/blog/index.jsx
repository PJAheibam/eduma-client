import React from "react";
import { Container } from "../../components";
import { Typography, Stack } from "@mui/material";

const Title = ({ children, ...rest }) => (
  <Typography variant="h5" component="h2" px={3} {...rest}>
    {children}
  </Typography>
);

const Details = ({ children, ...rest }) => (
  <Typography {...rest} fontSize="large" px={5}>
    {" "}
    {children}{" "}
  </Typography>
);

const Blog = () => {
  return (
    <Container
      spacing={4}
      sx={{
        py: 3,
        maxWidth: "700px",
      }}
    >
      <Stack spacing={1}>
        <Title>What is cors?</Title>
        <Details>
          Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism
          that allows a server to indicate any origins (domain, scheme, or port)
          other than its own from which a browser should permit loading
          resources. CORS also relies on a mechanism by which browsers make a
          "preflight" request to the server hosting the cross-origin resource,
          in order to check that the server will permit the actual request. In
          that preflight, the browser sends headers that indicate the HTTP
          method and headers that will be used in the actual request.
        </Details>
      </Stack>
      <Stack spacing={1}>
        <Title>
          Why are you using firebase? What other options do you have, to
          implement authentication?
        </Title>
        <Details>
          Firebase Authentication provides backend services, easy-to-use SDKs,
          and ready-made UI libraries to authenticate users to your app. It
          supports authentication using passwords, phone numbers, popular
          federated identity providers like Google, Facebook and Twitter, and
          more. That's why I use firebase for authentication.
        </Details>
        <Details>Firebase some alternatives are</Details>
        <ul style={{ paddingLeft: "4.5rem", fontSize: 18 }}>
          <li>Back4App</li>
          <li>Backendless</li>
          <li>Kuzzle</li>
          <li>Pubnub</li>
          <li>Kumulos</li>
          <li>Appwrite</li>
          <li>Deployd</li>
          <li>NHost</li>
          <li>AWS Amplify</li>
          <li>Heroku</li>
        </ul>
      </Stack>
      <Stack spacing={1}>
        <Title>How does the private route work?</Title>
        <Details>
          The private route component is used to protect selected pages in a
          React app from unauthenticated users.It is the blueprint for all
          private routes in the application. If the user is logged in, go on and
          display the component; otherwise, the user is redirected to the
          "/login" page with the return url passed in the location state
          property.
        </Details>
      </Stack>
      <Stack spacing={1}>
        <Title>What is Node? How does Node work?</Title>
        <Details>
          Node.js is an open-source, cross-platform JavaScript runtime
          environment and library for running web applications outside the
          client's browser. Ryan Dahl developed it in 2009, and its latest
          iteration, version 15.14, was released in April 2021. Developers use
          Node.js to create server-side web applications, and it is perfect for
          data-intensive applications since it uses an asynchronous,
          event-driven model.
        </Details>
        <Details>
          Node.js accepts the request from the clients and sends the response,
          while working with the request node.js handles them with a single
          thread. To operate I/O operations or requests node.js use the concept
          of threads. Thread is a sequence of instructions that the server needs
          to perform. It runs parallel on the server to provide the information
          to multiple clients. Node.js is an event loop single-threaded
          language. It can handle concurrent requests with a single thread
          without blocking it for one request.
        </Details>
        <Details>Node.js basically works on two concept</Details>
        <ol style={{ paddingLeft: "4.5rem", fontSize: 18 }}>
          <li>Asynchronous</li>
          <li>Non-blocking I/O</li>
        </ol>
      </Stack>
    </Container>
  );
};

export default Blog;
