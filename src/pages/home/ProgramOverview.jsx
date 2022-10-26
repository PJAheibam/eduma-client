import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const ProgramOverview = () => {
  return (
    <Stack
      spacing={3}
      sx={{
        padding: 3,
        paddingBlock: "calc((100vw - 1400px)/2)",
      }}
    >
      <Typography
        fontWeight="bold"
        textAlign="center"
        variant="h4"
        component="h2"
      >
        Program Overview
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon color="success" />
          </ListItemIcon>
          <ListItemText>
            The course provides a complete understanding of how a website is
            built from scratch.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon color="success" />
          </ListItemIcon>
          <ListItemText>
            This course also focuses on building a strong foundation in Java
            programming along with data structures and algorithm.
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon color="success" />
          </ListItemIcon>
          <ListItemText>
            Introduction to software tools such as HTML5, CSS, Bootstrap 4 and
            Spring MVC will be covered with examples to have hands-on
            experience.{" "}
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon color="success" />
          </ListItemIcon>
          <ListItemText>
            The course comes with projects that involve developing an e-commerce
            website to make the students industry-ready.
          </ListItemText>
        </ListItem>
      </List>
    </Stack>
  );
};

export default ProgramOverview;
