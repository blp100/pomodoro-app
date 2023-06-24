import { Box, Heading } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box textAlign="center" pt={["32px", "80px", "48px"]}>
      <Heading fontFamily="Kumbh_Sans" textColor="#D7E0FF" fontSize={32}>
        pomodoro
      </Heading>
    </Box>
  );
};

export default Header;
