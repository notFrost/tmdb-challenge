import playIcon from "../images/play-icon.svg";
import bookmarkIcon from "../images/bookmark-icon.svg";
import likeIcon from "../images/thumb_up-icon.svg";
import downloadIcon from "../images/download-icon.svg";
import shareIcon from "../images/share-icon.svg";

import {
  Box,
  Button,
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
    <Flex height="648px" width="100%">
      <Box
        backgroundImage={`url("https://image.tmdb.org/t/p/original${props.movie.backdrop}")`}
        height="648px"
        width="100%"
        backgroundSize="cover"
        backgroundPosition="center"
      ></Box>
      <Box
        bg="linear-gradient(359deg, #0D0C0F 0.83%, rgba(13, 12, 15, 0.85) 28.55%, rgba(13, 12, 15, 0.00) 48.81%, rgba(13, 12, 15, 0.28) 70.66%, #0D0C0F 103.18%)"
        height="648px"
        width="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="1"
      ></Box>
      <Grid
        height="648px"
        width="100%"
        position="absolute"
        top="0"
        left="0"
        zIndex="2"
      >
        <Stack padding="64px" mt="auto" px={{ base: "32px", lg: "72px" }}>
          <Flex display={{ base: "block", lg: "flex" }}>
            <Box
              height="648px"
              width="100%"
              position="absolute"
              top="0"
              left="0"
              zIndex="2"
              px={{ base: "32px", lg: "72px" }}
            >
              <Navbar alt="true" />
            </Box>
            <Stack spacing="24px">
              <Text
                color="var(--grayscale-grayscale-10, #F9F9F9)"
                fontFamily="DM Sans"
                fontSize="12px"
                fontStyle="normal"
                fontWeight="500"
                lineHeight="20px"
                letterSpacing="0.06px"
                display="flex"
                padding="4px 16px"
                justifyContent="center"
                alignItems="center"
                gap="8px"
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
              <HStack
                spacing="24px"
                justifyContent={{ base: "center", lg: "flex-start" }}
              >
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
                >
                  Continue Watching
                </Button>
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
                >
                  Add Watchlist
                </Button>
              </HStack>
            </Stack>
            <Spacer />
            <Stack mt="auto" mb={{ base: "-32px", lg: "0px" }} pt="16px">
              <HStack
                spacing="24px"
                justifyContent={{ base: "center", lg: "flex-start" }}
              >
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
                >
                  Download
                </Button>
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
                >
                  Share
                </Button>
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
                >
                  Like
                </Button>
              </HStack>
            </Stack>
          </Flex>
        </Stack>
      </Grid>
    </Flex>
  );
}
