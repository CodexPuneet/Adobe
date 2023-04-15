import React from 'react'

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Avatar,
} from '@chakra-ui/react'
import Profile from './Profile'
import EditProfile from './EditProfile'
import DeleteAccount from './DeleteAccount'

function UserProfile() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()

  return (
    <>
        <Button>
            <Avatar
                ref={btnRef}
                onClick={onOpen}
                size={'sm'}
                src={'https://www.pngarts.com/files/11/Avatar-Transparent-Background-PNG.png'}
            />
        </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent height="70%  !important">
          <DrawerCloseButton />
          <DrawerHeader fontFamily={''} fontSize={'4xl'} color={'#429795'}>Adobebook</DrawerHeader>

          <DrawerBody>
              <Tabs size='md' variant='enclosed'>

                <TabList>
                  <Tab fontWeight="bold">Profile</Tab>
                  <Tab fontWeight="bold">Edit Profile</Tab>
                  <Tab fontWeight="bold">Delete Account</Tab>
                </TabList>

                <TabPanels>

                  <TabPanel>
                    <Profile />
                  </TabPanel>

                  <TabPanel>
                    <EditProfile />
                  </TabPanel>

                  <TabPanel>
                    <DeleteAccount />
                  </TabPanel>

                </TabPanels>

              </Tabs>
            </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default UserProfile;