import { Notifications, Settings, Language } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import Toolbar from "../styles/Tobbar.styled";
import { Badge } from "@mui/material";

export default function Topbar() {
  return (
    <Toolbar>
      <div className="topbarWrapper">
        <div className="topLeft">
          <a className="logo" href="/">
            <span>AdminDash</span>
          </a>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <Badge badgeContent={4} color="primary">
              <Notifications />
            </Badge>
            <Language />
            <Settings />
            <Avatar className="avatar" sx={{ width: 24, height: 24 }}>
              HL
            </Avatar>
          </div>
        </div>
      </div>
    </Toolbar>
  );
}
