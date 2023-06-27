import {
  Icon,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Divider,
  HStack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { IoIosSettings } from "react-icons/io";
import { useContext, useState } from "react";
import ThemeContext from "../components/color-theme";
import TimerInput from "./timer-input";
import ThemeSelector from "./theme-selector";

const Setting = () => {
  const themeCtx = useContext(ThemeContext);

  const changeThemeColorHandler = (color) => {
    themeCtx.changeThemeHandler(color);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [themeColor, setThemeColor] = useState();

  const setColorHandler = (color) => {
    setThemeColor(color);
    console.log(themeColor);
  };

  const applySettingHandler = () => {
    changeThemeColorHandler(themeColor);
    onClose();
  };

  return (
    <>
      <Icon
        as={IoIosSettings}
        color="lavenderMist"
        w="38px"
        h="38px"
        mx="auto"
        my={["79px", "144px", "63px"]}
        display="block"
        opacity={0.5}
        cursor="pointer"
        _hover={{
          opacity: 0.8,
        }}
        onClick={onOpen}
      />
      <Modal isOpen={isOpen} onClose={onClose} trapFocus={false}>
        <ModalOverlay />
        <ModalContent
          borderRadius={16}
          bgColor="darkByzantineBlue"
          w={["327px", "540px"]}
        >
          <ModalHeader as="h2" textStyle="h2">
            Settings
          </ModalHeader>
          <ModalCloseButton
            color="lavenderMist"
            mt={2}
            _hover={{ opacity: 0.8, backgroundColor: "whiteAlpha.50" }}
            borderRadius={12}
          />
          <Divider />
          <ModalBody bgColor="darkBlueBlack">
            <Text textStyle="h4" as="h4">
              TIME(MINUTES)
            </Text>
            <Flex
              direction={["column", "row"]}
              my={5}
              justifyContent="space-between"
              color="lavenderMist"
            >
              <TimerInput key="pomodoro" label="pomodoro" time="25" />
              <TimerInput key="shortBreak" label="short break" time="5" />
              <TimerInput key="longBreak" label="long break" time="15" />
            </Flex>
            <Divider />
            <HStack justifyContent="space-between" my={4}>
              <Text textStyle="h4" as="h4">
                FONT
              </Text>
              <HStack width="200px" justifyContent="space-evenly">
                <Button
                  width={12}
                  height={12}
                  borderRadius="50%"
                  fontFamily="Kumbh_Sans"
                  onClick={(e) => changeThemeColorHandler(themeColorData.red)}
                >
                  Aa
                </Button>
                <Button
                  width={12}
                  height={12}
                  borderRadius="50%"
                  fontFamily="Roboto_Slab"
                  onClick={(e) => changeThemeColorHandler(themeColorData.red)}
                >
                  Aa
                </Button>
                <Button
                  width={12}
                  height={12}
                  borderRadius="50%"
                  fontFamily="Space_Mono"
                  onClick={(e) => changeThemeColorHandler(themeColorData.red)}
                >
                  Aa
                </Button>
              </HStack>
            </HStack>
            <Divider />
            <ThemeSelector setColorHandler={setColorHandler} />
          </ModalBody>
          <Divider />
          <ModalFooter>
            <Button
              colorScheme="blue"
              borderRadius="full"
              onClick={applySettingHandler}
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Setting;
