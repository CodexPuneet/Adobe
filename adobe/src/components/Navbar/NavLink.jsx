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
    // useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    Image,
  } from '@chakra-ui/react';
  import { MoonIcon, SunIcon } from '@chakra-ui/icons';
  import { IoMdAnalytics } from 'react-icons/io';
  
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
    // const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position={'fixed'} zIndex={4} w={'100%'} top={0}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <Box w={'130px'}><Image src="https://www.pngmart.com/files/22/Adobe-Systems-Logo-Transparent-PNG.png" /></Box>
  
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
  
              <Button>
                  {<IoMdAnalytics size={30}/>}
                </Button>
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
  
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg'}
                    />
                  </MenuButton>
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'md'}
                        src={'https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Your Servers</MenuItem>
                    <MenuItem>Account Settings</MenuItem>
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
                </Menu>
  
          
              </Stack>
            </Flex>
          </Flex>
        </Box>
      </>
    );
  }