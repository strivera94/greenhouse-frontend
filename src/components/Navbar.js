import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Icon } from 'semantic-ui-react';

const Navbar = () => {

  // const handleDropdown = () => {
  //   //   <Link to="/products">Products</Link>
  // }

    return (
        <Menu inverted color='olive' >
          <Menu.Item>
            <Link to="/"><Icon size='large' name='home' /></Link>
          </Menu.Item>
          {/* <Dropdown item text='Products' >
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleDropdown} >Wellness</Dropdown.Item>
              <Dropdown.Item>Herbs</Dropdown.Item>
              <Dropdown.Item>Cleaning/Hygiene</Dropdown.Item>
              <Dropdown.Item>Clothing/Accessories</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown> */}
          <Menu.Item>
            <Link to="/products">Products</Link>
          </Menu.Item>
          <Menu.Menu position='right'>
            <Menu.Item>
              <Link to='/cart'><Icon size='large' name='shopping cart' /></Link>
            </Menu.Item>
            <Menu.Item>
              <Link to="/auth">Login/Signup</Link>
            </Menu.Item>
          </Menu.Menu>
        </Menu>
    );
};

export default Navbar;
