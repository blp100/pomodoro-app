import { Heading, Text } from "@chakra-ui/react";
import Header from "../components/Header";
import StatusBar from "../components/status-bar";

const Page = () => {
  return (
    <>
      <Header />
      <StatusBar />
      <Text fontFamily="Roboto_Slab" textStyle="h1" as="h1" textAlign="center">
        Hello, World.
      </Text>
    </>
  );
};

export default Page;
