import {
  Box,
  Text,
  IconButton,
  HStack,
  useNumberInput,
  Input,
  ButtonGroup,
} from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const TimerInput = (props) => {
  const { label, time } = props;
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: time,
      min: 1,
      max: 60,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();
  return (
    <Box
      display={["flex", "block"]}
      dir={["row", "none"]}
      justifyContent="space-between"
      alignItems="center"
      mt={[2, 0]}
    >
      <Text textStyle="body2">{label}</Text>
      <ButtonGroup
        mt={[0, 2]}
        size="sm"
        isAttached
        variant="outline"
        focusBorderColor="darkByzantineBlue"
      >
        <IconButton
          color="lavenderMist"
          aria-label="Add to friends"
          icon={<IoIosArrowBack />}
          {...dec}
        />
        <Input
          {...input}
          size="sm"
          w="44px"
          textStyle="body2"
          textAlign="center"
          focusBorderColor="lavenderMist"
          _focus={{ bgColor: "#FFFFFF20" }}
        />
        <IconButton
          color="lavenderMist"
          aria-label="Add to friends"
          icon={<IoIosArrowForward />}
          {...inc}
        />
      </ButtonGroup>
    </Box>
  );
};

export default TimerInput;
