import { Container, Flex } from '@chakra-ui/react';
import { Cart, Details } from './src/sections';

const IndexPage = () => {
  // The array syntax map through default theme / breakpoints

  // there are 3 ways to achieve responsive design in chakra ui,
  // 1- Array syntax
  // 2- Object syntax
  // 3- useBreakpointValue hook
  return (
  <Container maxW="container.xl" padding={0}>
    <Flex
      h={{base: 'auto', md: '100vh'}}
      py={[0, 10, 20]}
      direction={{base: 'column-reverse', md: 'row'}}
    >
      <Details />
      <Cart />
    </Flex>
  </Container>)
};

export default IndexPage;
