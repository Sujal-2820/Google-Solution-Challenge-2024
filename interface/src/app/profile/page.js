"use client";
import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Stack,
  Container,
  Center,
  Heading,
  Text,
  Image,
  SimpleGrid,
  CardHeader,
} from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

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

const Page = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = `${pathname}?${searchParams}`;
    console.log(url);
    console.log("Hey");
  }, [pathname, searchParams]);

  return (
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
          <CardBody display="flex" justifyContent="center" alignItems="center">
            <Stack spacing={4} direction="row" align="center">
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
          <Card>
            <CardHeader>
              <Heading size="md"> Made a Full stack project</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your project over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>Go to Post</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md"> Made a Full stack project</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your project over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>Go to Post</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md"> Made a Full stack project</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your project over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>Go to Post</Button>
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <Heading size="md"> Made a Full stack project</Heading>
            </CardHeader>
            <CardBody>
              <Text>
                View a summary of all your project over the last month.
              </Text>
            </CardBody>
            <CardFooter>
              <Button>Go to Post</Button>
            </CardFooter>
          </Card>
        </SimpleGrid>
      </Container>
    </Center>
  );
};

export default Page;
