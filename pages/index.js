
import { Button, HStack, Text } from "@chakra-ui/react";
import Header from "../components/header";
import StatusBar from "../components/status-bar";
import Timer from "../components/timer";
import Setting from "../components/setting";

const Page = () => {

  return (
    <>
      <Header />
      <StatusBar />
      <Timer />
      <Setting />
    </>
  );
};

export default Page;
