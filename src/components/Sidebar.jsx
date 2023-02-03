import {
  Home,
  Timeline,
  Person,
  Storefront,
  Mail,
  Chat,
  DynamicFeed,
  Work,
  BarChart,
} from "@mui/icons-material";
import SidebarStyle from "../styles/Sidebar.styled";
import { NavLink } from "react-router-dom";

const NavItem = ({ name, icon }) => {
  const link = name === "Home" ? "/" : `/${name}`;
  return (
    <li>
      <NavLink to={link}>
        {icon}
        {name}
      </NavLink>
    </li>
  );
};

const Menu = ({ menuArray }) => {
  const { title, items } = menuArray;

  return (
    <div className="navMenu">
      <h3 className="navTitle">{title}</h3>
      <ul className="navLinks">
        {Array.from(Object.keys(items)).map((key) => (
          <NavItem key={key} name={key} icon={items[key]} />
        ))}
      </ul>
    </div>
  );
};

const quickMenu = {
  title: "Quick Menu",
  items: {
    Home: <Home />,
    Users: <Person />,
    Products: <Storefront />,
  },
};

const notificationsMenu = {
  title: "Notifications",
  items: { Mail: <Mail />, Feedback: <DynamicFeed />, Messages: <Chat /> },
};

const staffMenu = {
  title: "Staff",
  items: { Manage: <Work />, Analytics: <Timeline />, Reports: <BarChart /> },
};

export default function Sidebar() {
  return (
    <SidebarStyle className="sidebar">
      <nav>
        <Menu menuArray={quickMenu} />
        <Menu menuArray={notificationsMenu} />
        <Menu menuArray={staffMenu} />
      </nav>
    </SidebarStyle>
  );
}
