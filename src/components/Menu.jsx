import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import { useNavigate } from "react-router-dom";

export default function Menu({ open, setOpen, toggleDrawer }) {
  const navigate = useNavigate();
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {["Shipment", "Dropship", "BOL"].map(
          (text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton href={`/${text.toLowerCase()}`}>
                <ListItemIcon>
                  {index % 2 === 0 ? <FeedRoundedIcon /> : <FeedRoundedIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}
