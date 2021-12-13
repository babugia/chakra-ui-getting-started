import { Container, Flex } from '@chakra-ui/react';
import { Cart, Details } from './src/sections';

const IndexPage = () => {
  return (
  <Container maxW="container.xl" padding={0}>
    <Flex h="100vh" py={20}>
      <Details />
      <Cart />
    </Flex>
  </Container>)
};

export default IndexPage;
