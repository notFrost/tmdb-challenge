import companyLogo from "../images/company-logo.png";
import burgerIcon from "../images/burger-icon.png";
import { useNavigate } from "react-router-dom";

import { Flex, Image, Text, Input, Box } from "@chakra-ui/react";

export default function Navbar(props: any) {
  const navigate = useNavigate();
  return (
    <Flex align="center" justifyContent="space-between" py="15px">
      <Flex
        align="center"
        mx={{ base: "auto", md: "0" }}
        onClick={() => navigate(`/home`)}
        cursor="pointer"
      >
        <Image
          boxSize="100px"
          objectFit="cover"
          width="50px"
          height="50px"
          src={companyLogo}
          alt="Company Logo"
          me="24px"
        />
        <Image />
        <Text
          fontSize="24px"
          fontWeight="700"
          lineHeight="24px"
          color={props.alt ? "white" : "black"}
        >
          MovieBox
        </Text>
      </Flex>
      <Box display={{ base: "none", xl: "block" }}>
        <Input
          placeholder="What do you want to watch?"
          width="525px"
          _placeholder={props.alt ? { color: "white" } : { color: "black" }}
        ></Input>
      </Box>
      <Flex
        align="center"
        cursor="pointer"
        display={{ base: "none", md: "flex" }}
      >
        <Text color={props.alt ? "white" : "black"}>Sign in</Text>
        <Image
          src={burgerIcon}
          width="36px"
          height="36px"
          backgroundColor="#be123c"
          borderRadius="50%"
          padding="6px"
          ms="26px"
        ></Image>
      </Flex>
    </Flex>
  );
}
