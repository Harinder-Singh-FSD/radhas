import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CookingCourses from "./CookingCourses";
import ComingSoon from "./ComingSoon";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`nav-tabpanel-${index}`}
      aria-labelledby={`nav-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `nav-tab-${index}`,
    "aria-controls": `nav-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Services() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="sticky"
        style={{
          backgroundColor:"#00004d",
          boxShadow: "0 2px 2px gray",
          border: "2px sold black",
        }}
      >
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleChange}
          aria-label="nav tabs example"
          style={{ margin: 0, padding: 0 }}
        >
          <LinkTab
            label="Cooking Courses"
            href="/courses"
            {...a11yProps(0)}
            style={{
              lineStyle: "none",
              color: "white",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: "bold",
              
            }}
          />
          <LinkTab
            label="Catering Menu"
            href="/menu"
            {...a11yProps(1)}
            style={{
              lineStyle: "none",
              color: "white",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: "bold",
              margin: 0,
              padding: 0
            }}
          />
          <LinkTab
            label="Gallery"
            href="/gallery"
            {...a11yProps(2)}
            style={{
              lineStyle: "none",
              color: "white",
              textDecoration: "none",
              fontSize: "15px",
              fontWeight: "bold",
            }}
          />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <CookingCourses />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ComingSoon />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ComingSoon />
      </TabPanel>
    </div>
  );
}
