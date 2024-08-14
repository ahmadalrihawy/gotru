import { Link as ScrollLink } from "react-scroll";

function NavLink({ into }) {
  return (
    <ScrollLink to={into} smooth={true} duration={100}>
      <span>{into}</span>
    </ScrollLink>
  );
}

export default NavLink;
