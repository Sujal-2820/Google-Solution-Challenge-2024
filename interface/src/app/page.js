// Home page content will go here
// It will show random Job openings, internships, contests

import { Container, Box, Image, Text, Button } from "@chakra-ui/react";
import { items } from "./data";
import './homeStyles.css';

export default function Home() {
  return (
    <>
      {items.map((item) => (
        <Container key={item.id} className='container'>
          <Image src={item.image} alt={item.title} className='image' />
          <Box className='content'>
            <Text fontSize="2xl" fontWeight="bold">
              {item.title}
            </Text>
            <Text>{item.description}</Text>
            <Button className='Buttons' colorScheme="teal" variant="outline">
              Apply
            </Button>
            <span>   </span>
            <Button className='Buttons' colorScheme="teal" ml={2}>
              View Details
            </Button>
          </Box>
        </Container>
      ))}
    </>
  );
}
