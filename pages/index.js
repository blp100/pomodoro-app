import { Button, HStack, Text } from "@chakra-ui/react";
import Header from "../components/header";
import StatusBar from "../components/status-bar";
import ThemeContext from "../components/color-theme";
import { useContext } from "react";
import { themeColorData } from "../lib/constants";
import Timer from "../components/timer";

const Page = () => {

  const themeCtx = useContext(ThemeContext);

  const changeThemeColorHandler = (color)=>{
    themeCtx.changeThemeHandler(color);
  }

  return (
    <>
      <Header />
      <StatusBar />
      {/* <Timer /> */}
      <Text fontFamily="Roboto_Slab" textStyle="h1" as="h1" textAlign="center">
        Hello, World.
      </Text>
      <HStack mx="auto" width="200px" justifyContent="space-evenly">
        <Button bgColor="pastelRed" width={12} height={12} borderRadius="50%" onClick={e=>changeThemeColorHandler(themeColorData.red)}/>
        <Button bgColor="electricBlue" width={12} height={12} borderRadius="50%" onClick={e=>changeThemeColorHandler(themeColorData.blue)}/>
        <Button bgColor="heliotrope" width={12} height={12} borderRadius="50%" onClick={e=>changeThemeColorHandler(themeColorData.purple)}/>
      </HStack>
    </>
  );
};

export default Page;
