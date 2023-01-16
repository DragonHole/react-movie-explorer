import Link from "next/link";
import {Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import {FcHome, FcMenu} from "react-icons/fc"
import { MdMovie } from "react-icons/md";

const NavigationBar = () => (
    <Flex p={2} border="1px" flexDirection="row">
        <Box fontSize="2xs" color="green.200" fontWeight="normal">
            <Link href="/"> Viewer </Link>
        </Box>
        <Spacer />
        <Menu>
            <MenuButton as={FcMenu}></MenuButton>
            <MenuList>
                <Link href="/" passHref>
                    <MenuItem icon={<FcHome />}>HOME</MenuItem>
                </Link>
                <Link href="/searchdisplay?by=id" passHref>
                    <MenuItem icon={<FcHome />}>SEARCH ID</MenuItem>
                </Link>
                <Link href="/searchdisplay?by=genre" passHref>
                    <MenuItem icon={<FcHome />}>SEARCH GENRE</MenuItem>
                </Link>
            </MenuList>
        </Menu>
    </Flex>
)

export default NavigationBar;