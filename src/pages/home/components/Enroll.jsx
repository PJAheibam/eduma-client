import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const Enroll = () => {
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
        Why enrol in the Program?
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon color="success" />
          </ListItemIcon>
          <ListItemText>
            Complete understanding of frontend and backend development and the
            process of linking them
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon color="success" />
          </ListItemIcon>
          <ListItemText>
            Hands-on experience on software and technologies involved in full
            stack development The student can get employed as:
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon color="success" />
          </ListItemIcon>
          <ListItemText>Full-Stack Developer</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon color="success" />
          </ListItemIcon>
          <ListItemText>Back-End Developer</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon color="success" />
          </ListItemIcon>
          <ListItemText>Front-End Developer</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon color="success" />
          </ListItemIcon>
          <ListItemText>Back-End Developer</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <TaskAltIcon color="success" />
          </ListItemIcon>
          <ListItemText>Web Designer</ListItemText>
        </ListItem>
      </List>
    </Stack>
  );
};

export default Enroll;
