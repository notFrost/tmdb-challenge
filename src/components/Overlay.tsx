import playIcon from "../images/play-icon.svg";
import bookmarkIcon from "../images/bookmark-icon.svg";
import likeIcon from "../images/thumb_up-icon.svg";
import downloadIcon from "../images/download-icon.svg";
import shareIcon from "../images/share-icon.svg";

import {
  Box,
  Button,
  Divider,
  Flex,
  Grid,
  HStack,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function Overlay(props: any) {
  return (
    <Box
      height="648px"
      width="100%"
      backgroundImage={`url("https://image.tmdb.org/t/p/original${props.movie.backdrop}")`}
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Stack
        bg="linear-gradient(359deg, #0D0C0F 0.83%, rgba(13, 12, 15, 0.85) 28.55%, rgba(13, 12, 15, 0.00) 48.81%, rgba(13, 12, 15, 0.28) 70.66%, #0D0C0F 103.18%)"
        height="648px"
        width="100%"
        position="absolute"
        px={{ base: "16px", lg: "72px" }}
      >
        <Navbar alt="true" />
        <Flex
          display={{ base: "block", lg: "flex" }}
          py={{ base: "12", lg: "64px" }}
          mt="auto"
        >
          <Stack spacing="24px">
            <Text
              color="var(--grayscale-grayscale-10, #F9F9F9)"
              fontSize="12px"
              fontWeight="500"
              lineHeight="20px"
              letterSpacing="0.06px"
              padding="4px 16px"
              borderRadius="16px"
              background="var(--800-Black, #0D0C0F)"
              me="auto"
            >
              Movie
            </Text>
            <Stack>
              <Text
                color="var(--White, #FFF)"
                fontSize="32px"
                fontWeight="700"
                lineHeight="40px"
                letterSpacing="0.16px"
              >
                {props.movie.title}
              </Text>
              <Text
                color="var(--Grey, #9CA4AB)"
                fontSize="14px"
                lineHeight="22px"
                letterSpacing="0.07px"
              >
                {props.movie.runtime} Minutes •{" "}
                {props.movie.date && props.movie.date.slice(0, 4)} •{" "}
                {props.movie.genres &&
                  props.movie.genres
                    .map((genre: any) => genre.name)
                    .join(" • ")}
              </Text>
            </Stack>
            <Flex
              gap="24px"
              justifyContent={{ base: "center", lg: "flex-start" }}
              flexDirection={{ base: "column", sm: "row" }}
            >
              <OverlayButton type="Continue" />
              <OverlayButton type="Watchlist" />
            </Flex>
          </Stack>
          <Spacer />
          <HStack spacing="24px" mt="auto" justifyContent="center" pt="16px">
            <OverlayButton type="Download" />
            <OverlayButton type="Share" />
            <OverlayButton type="Like" />
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );

  function OverlayButton({ type }: { type: string }) {
    switch (type) {
      case "Continue":
        return (
          <Button
            leftIcon={<img src={playIcon} alt="Play Icon" />}
            padding="12px 24px"
            gap="10px"
            borderRadius="32px"
            background="#BE123C"
            color="#F9F9F9"
            fontSize="14px"
            fontWeight="700"
            lineHeight="22px"
            letterSpacing="0.07px"
            cursor="pointer"
            _hover={{
              background: "#BE123C",
              color: "#F9F9F9",
            }}
          >
            Continue Watching
          </Button>
        );
      case "Watchlist":
        return (
          <Button
            leftIcon={<img src={bookmarkIcon} alt="Bookmark Icon" />}
            padding="12px 24px"
            gap="10px"
            alignSelf="stretch"
            borderRadius="32px"
            background="none"
            border="1px solid var(--White, #FFF)"
            color="#F9F9F9"
            fontSize="14px"
            fontWeight="700"
            lineHeight="22px"
            letterSpacing="0.07px"
            cursor="pointer"
            _hover={{
              background: "#none",
              color: "#F9F9F9",
            }}
            _active={{
              background: "#none",
              color: "#F9F9F9",
            }}
          >
            Add Watchlist
          </Button>
        );
      case "Download":
        return (
          <Button
            leftIcon={<img src={downloadIcon} alt="Download Icon" />}
            padding="12px 24px"
            gap="10px"
            borderRadius="10px"
            border="1px solid var(--700-Black, #28262D)"
            background="none"
            color="var(--White, #FFF)"
            fontSize="14px"
            fontWeight="700"
            lineHeight="22px"
            letterSpacing="0.07px"
            cursor="pointer"
            _hover={{
              background: "#none",
              color: "#F9F9F9",
            }}
            _active={{
              background: "#none",
              color: "#F9F9F9",
            }}
          >
            Download
          </Button>
        );
      case "Share":
        return (
          <Button
            leftIcon={<img src={shareIcon} alt="Share Icon" />}
            padding="12px 24px"
            gap="10px"
            borderRadius="10px"
            border="1px solid var(--700-Black, #28262D)"
            background="none"
            color="var(--White, #FFF)"
            fontSize="14px"
            fontWeight="700"
            lineHeight="22px"
            letterSpacing="0.07px"
            cursor="pointer"
            _hover={{
              background: "#none",
              color: "#F9F9F9",
            }}
            _active={{
              background: "#none",
              color: "#F9F9F9",
            }}
          >
            Share
          </Button>
        );
      case "Like":
        return (
          <Button
            leftIcon={<img src={likeIcon} alt="Like Icon" />}
            padding="12px 24px"
            gap="10px"
            borderRadius="10px"
            border="1px solid var(--700-Black, #28262D)"
            background="none"
            color="var(--White, #FFF)"
            fontSize="14px"
            fontWeight="700"
            lineHeight="22px"
            letterSpacing="0.07px"
            cursor="pointer"
            _hover={{
              background: "#none",
              color: "#F9F9F9",
            }}
            _active={{
              background: "#none",
              color: "#F9F9F9",
            }}
          >
            Like
          </Button>
        );
    }
    return <Box />;
  }
}
