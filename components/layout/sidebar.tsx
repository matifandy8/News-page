import React from "react";
import {Icon, Stack, StackProps, Text} from "@chakra-ui/react";
import {IconType} from "react-icons";
import {
  BsEnvelope,
  BsHouse,
  BsHash,
  BsBell,
  BsBookmark,
  BsList,
  BsPerson,
  BsThreeDots,
  BsHouseFill,
  BsBellFill,
  BsEnvelopeFill,
  BsBookmarkFill,
  BsPersonFill,
} from "react-icons/bs";
import { useRouter } from 'next/router'


interface ListLink {
  href: string;
  text: string;
  activeIcon: IconType;
  inactiveIcon: IconType;
}

const LINKS: ListLink[] = [
  {
    href: "/home",
    text: "Home",
    activeIcon: BsHouseFill,
    inactiveIcon: BsHouse,
  },
  {
    href: "/explore",
    text: "Explore",
    activeIcon: BsHash,
    inactiveIcon: BsHash,
  },
  {
    href: "/saved",
    text: "Saved",
    activeIcon: BsBookmarkFill,
    inactiveIcon: BsBookmark,
  },
  {
    href: "/subscriptions",
    text: "Subscriptions",
    activeIcon: BsList,
    inactiveIcon: BsList,
  },
  {
    href: "/messages",
    text: "Messages",
    activeIcon: BsEnvelopeFill,
    inactiveIcon: BsEnvelope,
  },
  {
    href: "/settings",
    text: "Settings",
    activeIcon: BsThreeDots,
    inactiveIcon: BsThreeDots,
  },
  {
    href: "/login",
    text: "Login",
    activeIcon: BsPersonFill,
    inactiveIcon: BsPerson,
  },
];

const Sidebar: React.FC<StackProps> = (props) => {
  const router = useRouter()

  return (
    <Stack borderRadius="5px" bg="white.100" fontSize="xl"  spacing={7} width="20%" {...props}>
      {LINKS.map((link) => (
        <a key={link.href} >
          <Stack
            alignItems="center"
            direction="row"
            spacing={5}
          >
            <Icon
              as={router.pathname === link.href ? link.activeIcon : link.inactiveIcon}
              height={6}
              width={6}
            />
            <Text>{link.text}</Text>
          </Stack>
        </a>
      ))}
    </Stack>
  );
};

export default Sidebar;