import { ReactElement, FC } from "react";
import './styles.scss';

type Props = {
  children: ReactElement,
}

const Header: FC<Props> = ({ children }) => <header className="header">{children}</header>;

export default Header;
