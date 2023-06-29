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
import ColorSelector from "./color-selector";
import FontSelector from "./font-selector";

const Setting = () => {
  const themeCtx = useContext(ThemeContext);

  const changeThemeHandler = (color, font) => {
    themeCtx.changeThemeHandler(color, font);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [themeColor, setThemeColor] = useState(themeCtx.themeColor);
  const [themeFont, setThemeFont] = useState(themeCtx.themeFont);
  const [pomodoroDuration, setPomodoroDuration] = useState(
    themeCtx.pomodoroDuration
  );
  const [shortBreakDuration, setShortBreakDuration] = useState(
    themeCtx.shortBreakDuration
  );
  const [longBreakDuration, setLongBreakDuration] = useState(
    themeCtx.longBreakDuration
  );

  const setColorHandler = (color) => {
    setThemeColor(color);
  };

  const setFontHandler = (font) => {
    setThemeFont(font);
  };

  const changePomodoroDurationHandler = (time) => {
    console.log(time);
    // setPomodoroDuration(time);
  };
  const changeShortBreakDurationHandler = (time) => {
    // setShortBreakDuration(time);
  };
  const changeLongBreakDurationHandler = (time) => {
    // setLongBreakDuration(time);
  };

  const applySettingHandler = () => {
    changeThemeHandler(themeColor, themeFont);
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
        mt={["79px", "144px", "63px"]}
        mb={["79px", "144px", "50px"]}
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
              <TimerInput
                key="pomodoro"
                label="pomodoro"
                time={pomodoroDuration}
                changeDurationHandler={changePomodoroDurationHandler}
              />
              <TimerInput
                key="shortBreak"
                label="short break"
                time={shortBreakDuration}
                changeDurationHandler={changeShortBreakDurationHandler}
              />
              <TimerInput
                key="longBreak"
                label="long break"
                time={longBreakDuration}
                changeDurationHandler={changeLongBreakDurationHandler}
              />
            </Flex>
            <Divider />
            <FontSelector setFontHandler={setFontHandler} font={themeFont} />
            <Divider />
            <ColorSelector
              setColorHandler={setColorHandler}
              color={themeColor}
            />
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
