'use client';

import React from 'react';

import { Button } from '@radix-ui/themes';
// import { Button, Menu, MenuItem, MenuTrigger, Popover } from 'react-aria-components';
import styled from 'styled-components';
import MenubarDemo from '@/components/common/menu/MenuBar';

type Props = {};
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #302d2d;
  color: #000000;
  height: 40px;
`;

const Navbar = (props: Props) => {
  return (
    <Header>
      <MenubarDemo/>
    </Header>
  );
};

export default Navbar;
