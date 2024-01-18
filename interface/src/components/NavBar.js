"use client";

import React from "react";
import {
  Container,
  Image,
  Button,
  Wrap,
  WrapItem,
  Link
} from "@chakra-ui/react";
import { items } from "@/app/data";
import { navlinkshome } from "@/app/data";

const NavBar = () => {
  return (
    <>
        <Image
            objectFit="cover"
            borderRadius="full"
            boxSize="150px"
            src="https://i.pinimg.com/564x/49/6b/c9/496bc9401902c64c7ee7afced3c1bf1e.jpg"
            alt="pp"
          />
          {navlinkshome.map((item) => (
            <Container key={item.id} textAlign="center" my={2}>
              <Link key={item.name} href={item.link}>
                <Button colorScheme="teal" variant="ghost">
                  {item.name}
                </Button>
              </Link>
            </Container>
          ))}
          <Wrap>
            <WrapItem>
              <Button colorScheme="twitter" width="150px" my="30px">
                Post
              </Button>
            </WrapItem>
          </Wrap>
    </>
  )
}

export default NavBar