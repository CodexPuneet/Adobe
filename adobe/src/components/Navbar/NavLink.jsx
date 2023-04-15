// import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Link,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
  Image,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IoMdAnalytics } from 'react-icons/io';
import { useContext, useState } from 'react';
import CreateAcount from '../Account/CreateAcount';
import { AccountContext } from '../../App';
import UserProfile from '../Account/UserProfile';
import Analytics from '../Analytics/Analytics';

export const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'#'}>
    {children}
  </Link>
);

export default function Nav() {
  const { colorMode, toggleColorMode } = useColorMode();
  const {haveUser, toggleHaveUser} = useContext(AccountContext);


  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} zIndex={4} w={'100%'} top={0}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
<Image w={'150px'} src="https://www.pngmart.com/files/22/Adobe-Systems-Logo-Transparent-PNG.png"/>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
            <Analytics />

            {
              haveUser ? <UserProfile /> : <CreateAcount />
            }

          
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}