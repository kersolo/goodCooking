import { ListItem } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

export default function NavBarItem({ pathName, name, onclick }: any) {
  const location = useLocation();
  return (
    <ListItem className="flex items-center gap-x-2 p-1">
      <Link
        onClick={onclick}
        className={`link ${location.pathname === pathName && "text-blue-600"}`}
        to={pathName}
      >
        {name}
      </Link>
    </ListItem>
  );
}
