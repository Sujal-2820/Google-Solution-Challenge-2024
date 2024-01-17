"use client";

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
  SimpleGrid,
  CardHeader,
  Flex,
  Avatar,
  Heading,
  IconButton,
} from "@chakra-ui/react";
import { BiLike, BiChat, BiShare } from "react-icons/bi";
import { companies, items, navlinkshome } from "../data";
import "./courses.css";

export default function Courses() {
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

        <GridItem colSpan={2} p={4}>
            {companies.map((company) => (
            <Card
                key={company.id}
                p="4"
                borderWidth="1px"
                borderRadius="md"
                mb="4"
                _hover={{
                shadow: "lg",
                bg: "teal.100",
                }}
            >
                {/* Company Name Heading */}
                <Box
                bg="blue.200"
                p="2"
                border="2px solid"
                borderRadius="md"
                mb="3"
                textAlign="center"
                >
                <Text fontSize="xl" fontWeight="bold" color="black">
                    {company.name}
                </Text>
                </Box>

                {/* Display Cards for Each Course */}
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                {company.courses.map((course) => (
                    <Card
                    key={course}
                    p="4"
                    borderWidth="1px"
                    borderRadius="md"
                    position="relative"
                    _hover={{
                        bg: "teal.300",
                        color: "white",
                        boxShadow: "md",
                    }}
                    >
                    <Box>
                        {/* Course Title */}
                        <Text fontSize="lg" fontWeight="semibold">
                        {course}
                        </Text>
                        {/* Additional Course Details can be added here */}
                    </Box>
                    </Card>
                ))}
                </SimpleGrid>
            </Card>
            ))}
        </GridItem>  
      </Grid>
    </ChakraProvider>
  );
}
