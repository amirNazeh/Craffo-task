import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { useState } from "react";
const Header = () => {
  const navItems = [
    "Shop by Category",
    "Shop by Device",
    "Collections",
    "Blog",
  ];
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  return (
    <>
      <header className="flex justify-between items-center p-4 bg-gray-900">
        <div className=" flex md:hidden" onClick={handleDrawerToggle}>
          <MenuOutlinedIcon className="text-white  hidden cursor-pointer" />{" "}
        </div>

        <div className="text-2xl font-bold text-white flex-auto md:flex-none ">
          FOCAL
        </div>
        <nav className="space-x-5  hidden md:flex">
          {navItems.map((item, index) => (
            <>
              <a
                key={index}
                className=" text-white font-bold cursor-pointer border-b-2 border-transparent hover:border-white"
              >
                {item}
              </a>
            </>
          ))}
        </nav>
        <div className="space-x-3 ">
          <MailOutlineOutlinedIcon className="text-white cursor-pointer" />
          <SearchOutlinedIcon className="text-white cursor-pointer" />
          <PersonOutlineOutlinedIcon className="text-white cursor-pointer" />
          <LocalMallOutlinedIcon className="text-white cursor-pointer" />
        </div>
      </header>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "250px" },
          }}
        >
          <Box onClick={handleDrawerToggle} sx={{ marginTop: "10px" }}>
            <CloseOutlinedIcon sx={{ margin: "10px", cursor: "pointer" }} />

            <List>
              {navItems.map((item) => (
                <>
                  <ListItem key={item} disablePadding>
                    <ListItemButton>
                      <ListItemText primary={item} sx={{ cursor: "pointer" }} />
                    </ListItemButton>
                  </ListItem>
                  <Divider />
                </>
              ))}
            </List>
          </Box>
        </Drawer>
      </nav>
    </>
  );
};

export default Header;
