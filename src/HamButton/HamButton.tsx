
import { slide as Menu } from 'react-burger-menu';
import { bubble as Menu } from 'react-burger-menu';

const CustomBurgerIcon = () => <img src="path/to/your/icon.png" />;

export function Sidebar() {
  return (
    <Menu customBurgerIcon={<img src="path/to/burger/icon.png" />} customCrossIcon={<img src="path/to/cross/icon.png" />}>
      <a id="home" className="menu-item" href="/">Home</a>
      <a id="about" className="menu-item" href="/about">About</a>
      <a id="contact" className="menu-item" href="/contact">Contact</a>
      </Menu>
  );
};
