import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import Overlay from "../components/Overlay";
import CastCard from "../components/CastCard";

import {
  getMovieById,
  getCastByMovieId,
  Movie,
  Cast,
  getVideoByMovieId,
  getSimliarById,
} from "../services/tmdb.service";
import SimilarCard from "../components/SimilarCard";
import {
  AspectRatio,
  Box,
  SimpleGrid,
  Stack,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Image,
} from "@chakra-ui/react";

export default function MoviePage(props: any) {
  const [currentMovie, setCurrentMovie] = useState<Movie>({} as Movie);
  const [similarMovies, setSimliarMovies] = useState<Movie[]>([]);
  const [cast, setCast] = useState<Cast[]>([]);
  const [video, setVideo] = useState<String>("");
  const { movieId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getMovieById(Number(movieId)).then((movie: Movie) => {
      setCurrentMovie(movie);
    });

    getCastByMovieId(Number(movieId)).then((cast: Cast[]) => {
      setCast(cast);
    });
    getVideoByMovieId(Number(movieId)).then((url: String) => {
      setVideo(url);
    });
    getSimliarById(Number(movieId)).then((movies: Movie[]) => {
      setSimliarMovies(movies);
    });
  }, [movieId]);

  function handleChange(movieId: Number) {
    getMovieById(Number(movieId)).then((movie: Movie) => {
      setCurrentMovie(movie);
    });
  }

  return (
    <Box>
      <Overlay movie={currentMovie} />
      <Box px={{ base: "32px", lg: "72px" }}>
        <Stack spacing="24px" py="40px">
          <Stack spacing={"16px"}>
            <Text
              fontSize="18px"
              fontWeight="700"
              lineHeight="26px"
              letterSpacing="0.12px"
            >
              Story Line
            </Text>
            <Text
              fontSize="16px"
              fontWeight="500"
              lineHeight="24px"
              letterSpacing="0.08px"
            >
              {currentMovie.overview}
            </Text>
          </Stack>
          <Stack spacing={"16px"}>
            <Text
              fontSize="18px"
              fontWeight="700"
              lineHeight="26px"
              letterSpacing="0.12px"
            >
              Top Cast
            </Text>
            <SimpleGrid minChildWidth="200px" gap="24px">
              {cast
                .sort((a, b) => a.order - b.order)
                .slice(0, 6)
                .map((castMember) => (
                  <Box me="auto">
                    <CastCard
                      url={castMember.photo}
                      name={castMember.name}
                      character={castMember.character}
                    />
                  </Box>
                ))}
            </SimpleGrid>
          </Stack>
        </Stack>
        <Stack py="32px" spacing="32px">
          <Text
            fontSize="18px"
            fontWeight="700"
            lineHeight="26px"
            letterSpacing="0.12px"
          >
            Media
          </Text>

          <Tabs position="relative" variant="unstyled">
            <TabList gap={{ base: "20px", sm: "24px" }}>
              <Tab
                fontSize={{ base: "16px", sm: "18px" }}
                fontWeight="400"
                lineHeight="normal"
                padding="0px 0px 10px"
                cursor="pointer"
              >
                Most Popular
              </Tab>
              <Tab
                fontSize={{ base: "16px", sm: "18px" }}
                fontWeight="400"
                lineHeight="normal"
                padding="0px 0px 10px"
              >
                Videos
              </Tab>
              <Tab
                fontSize={{ base: "16px", sm: "18px" }}
                fontWeight="400"
                lineHeight="normal"
                padding="0px 0px 10px"
              >
                Backdrops
              </Tab>
              <Tab
                fontSize={{ base: "16px", sm: "18px" }}
                fontWeight="400"
                lineHeight="normal"
                padding="0px 0px 10px"
              >
                Posters
              </Tab>
            </TabList>
            <TabIndicator
              height="3px"
              bg="#BE123C"
              fontWeight="700"
              width="32px"
            />
            <TabPanels>
              <TabPanel padding="32px 0px">
                <AspectRatio ratio={27 / 10}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video}`}
                    title="YouTube video player"
                  ></iframe>
                </AspectRatio>
              </TabPanel>
              <TabPanel padding="32px 0px">
                <AspectRatio ratio={16 / 9}>
                  <iframe
                    src={`https://www.youtube.com/embed/${video}`}
                    title="YouTube video player"
                  ></iframe>
                </AspectRatio>
              </TabPanel>
              <TabPanel padding="32px 0px">
                <Image
                  src={`https://image.tmdb.org/t/p/original${currentMovie.backdrop}`}
                ></Image>
              </TabPanel>
              <TabPanel padding="32px 0px">
                <Image
                  src={`https://image.tmdb.org/t/p/original${currentMovie.poster}`}
                ></Image>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Stack>
        <Stack py="40px" spacing="24px">
          <Text
            fontSize="24px"
            fontWeight="700"
            lineHeight="32px"
            letterSpacing="0.12px"
          >
            Similar Movies for you
          </Text>
          <SimpleGrid minChildWidth="280px" gap="10px">
            {similarMovies.splice(0, 5).map((movie) => (
              <Box
                key={movie.id}
                onClick={() => navigate(`/movie/${movie.id}`)}
                cursor="pointer"
                mx="auto"
                mb="24px"
              >
                {" "}
                <SimilarCard
                  url={movie.backdrop}
                  title={movie.title}
                  rating={movie.rating}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Box>
  );
}
