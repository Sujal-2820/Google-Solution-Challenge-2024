"use client"

import React from "react";
import {
  Container,
  Box,
  Image,
  Text,
  Button,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
  Divider,
  ChakraProvider,
  Card,
  CardHeader,
  Flex,
  Avatar,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { items } from "./data";
import { navlinkshome } from "./data";
import "./homeStyles.css";

export default function Home() {
  return (
    <ChakraProvider>
      <Grid
        h="auto"
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(5, 1fr)"
        gap={5}
      >
        <GridItem
          colSpan={1}
          marginTop="4"
          display="flex"
          flexDirection="column"
          alignItems="center"
        >
          <Image
            objectFit="cover"
            borderRadius="full"
            boxSize="150px"
            src="https://i.pinimg.com/564x/49/6b/c9/496bc9401902c64c7ee7afced3c1bf1e.jpg"
            alt="pp"
          />
          {navlinkshome.map((item) => (
            <Container key={item.id} textAlign="center" my={2}>
              <Button colorScheme="teal" variant="ghost">
                {item.name}
              </Button>
            </Container>
          ))}
          <Wrap>
            <WrapItem>
              <Button colorScheme="twitter" width="150px" my="30px">
                Post
              </Button>
            </WrapItem>
          </Wrap>
        </GridItem>
        <Divider orientation="vertical" />
        <GridItem colSpan={2}>
          {items.map((item) => (
            <Card key={item.id} maxW="l" my="15px">
              <CardHeader>
                <Flex spacing="4">
                  <Flex
                    flex="1"
                    gap="4"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <Avatar
                      name="Mark"
                      src={item.image}
                    />

                    <Box>
                      <Heading size="sm">Sam</Heading>
                      <Text>Software Engineer</Text>
                    </Box>
                  </Flex>
                  <IconButton
                    variant="ghost"
                    colorScheme="gray"
                    aria-label="See menu"
                    icon={<BiLike />}
                  />
                </Flex>
              </CardHeader>
              <Box>
                <Text mx="10px">
                  Thrilled to announce that i have been selected for an MNC new CEO from upcoming session
                </Text>
              </Box>
              <Image
                objectFit="cover"
                src={item.image}
                height="400px"
                width="550px"
                alt="Chakra UI"
              />

              <Flex
                justify="space-between"
                flexWrap="wrap"
                style={{ '& > button': { minW: '136px' } }}
              >
                <Button flex="1" variant="ghost" leftIcon={<BiLike />}>
                  Like
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiChat />}>
                  Comment
                </Button>
                <Button flex="1" variant="ghost" leftIcon={<BiShare />}>
                  Share
                </Button>
              </Flex>
            </Card>
          ))}
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}
