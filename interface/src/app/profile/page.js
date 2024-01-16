"use client";
import React from "react";
import Link from "next/link";
import {
  Container,
  Button,
  Grid,
  GridItem,
  Wrap,
  WrapItem,
  Divider,
  Image,
  Card,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  CardHeader,
  CardBody,
  CardFooter,
  Center,
} from "@chakra-ui/react";
import { items } from "../data";
import { navlinkshome } from "../data";

const navLink = [
  {
    name: "posts",
    link: "profile/",
  },
  {
    name: "applied",
    link: "profile/applied",
  },
  {
    name: "courses",
    link: "profile/courses",
  },
];

export default function Home() {
  return (
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
        <Center>
          <Container maxW="600px">
            <Card
              direction={{ base: "column", sm: "row" }}
              overflow="hidden"
              variant="outline"
              my="20px"
            >
              <Image
                objectFit="cover"
                maxW="200px"
                src="https://i.pinimg.com/564x/7d/34/d9/7d34d9d53640af5cfd2614c57dfa7f13.jpg"
                alt="Caffe Latte"
              />

              <Stack>
                <CardBody>
                  <Heading size="md">Mark</Heading>
                  <Text py="2">
                    Hello, I am a Software Developer, and I am looking for a
                    full-time job while working remotely!
                  </Text>
                </CardBody>

                <CardFooter>
                  <Button variant="solid" colorScheme="blue" mx="2">
                    Message
                  </Button>
                  <Button variant="solid" colorScheme="blue">
                    View Portfolio
                  </Button>
                </CardFooter>
              </Stack>
            </Card>
            <Card>
              <CardBody
                display="flex"
                justifyContent="space-around"
                // alignItems="space-around"
              >
                <Stack spacing={4} display="flex" direction="row">
                  {navLink.map(({ name, link }) => (
                    <Link key={name} href={link}>
                      <Button colorScheme="teal" size="sm">
                        {name}
                      </Button>
                    </Link>
                  ))}
                </Stack>
              </CardBody>
            </Card>
            <SimpleGrid
              spacing={4}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
              marginY="2"
            >
              {items.map((item) => (
                <Card key={item.id}>
                  <CardHeader>
                    <Heading size="md">{item.title}</Heading>
                  </CardHeader>
                  <CardBody>
                    <Text>{item.description}</Text>
                  </CardBody>
                  <CardFooter>
                    <Button>Go to Post</Button>
                  </CardFooter>
                </Card>
              ))}
            </SimpleGrid>
          </Container>
        </Center>
      </GridItem>
    </Grid>
  );
}
