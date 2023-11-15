import rottenTomatoesLogo from "../images/rotten_tomatoes-logo.png";
import imdbLogo from "../images/imdb-logo.png";
import heartIcon from "../images/heart-icon.svg";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Heading,
  Text,
  Flex,
  Spacer,
  Box,
} from "@chakra-ui/react";

export default function MovieCard(props: any) {
  return (
    <Card width="250px" shadow="none" borderRadius="0">
      <CardBody p="0" width="250px">
        <Image
          src={`https://image.tmdb.org/t/p/w500${props.url}`}
          alt="Movie Poster"
          height={"100%"}
        />
        <Stack py="3" spacing="3">
          <Text
            color="var(--gray-400, #9CA3AF)"
            fontSize="12px"
            fontWeight="700"
            lineHeight="normal"
          >
            USA, {props.date && props.date.slice(0, 4)} - Current
          </Text>
          <Heading
            color="var(--gray-900, #111827)"
            fontSize="18px"
            fontWeight="700"
            lineHeight="normal"
          >
            {props.title}
          </Heading>
          <Flex alignItems="center">
            <Image height="17px" width="35px" me="10px" src={imdbLogo} />
            <Text
              color="var(--gray-900, #111827)"
              fontSize="12px"
              fontWeight="400"
              lineHeight="1"
            >
              {(props.rating * 10).toFixed(1)}/100
            </Text>
            <Spacer />
            <Image
              height="17px"
              width="16px"
              me="10px"
              src={rottenTomatoesLogo}
            />
            <Text
              color="var(--gray-900, #111827)"
              fontSize="12px"
              fontWeight="400"
              lineHeight="1"
            >
              {(props.rating * 10 + (Math.random() * 10 - 5)).toFixed(0)}%
            </Text>
          </Flex>
          <Text
            color="var(--gray-400, #9CA3AF)"
            fontSize="12px"
            fontWeight="700"
            lineHeight="normal"
          >
            Action, Adventure, Horror
          </Text>
        </Stack>
        <Image
          width="30px"
          height="30px"
          src={heartIcon}
          backgroundColor="rgba(243, 244, 246, 0.50)"
          backdropFilter="blur(1px)"
          padding="5px"
          borderRadius="50%"
          position="absolute"
          top="16px"
          right="16px"
        ></Image>
      </CardBody>
    </Card>
  );
}
