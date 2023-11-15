import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SimpleGrid,
  Box,
  Text,
  Button,
  Center,
  Tabs,
  TabList,
  Tab,
  TabIndicator,
  TabPanels,
  TabPanel,
  Flex,
} from "@chakra-ui/react";

import {
  getPopularMoviesDB,
  getTopRatedMovies,
  getUpcomingMovies,
  Movie,
} from "../services/tmdb.service";

import MovieCard from "../components/MovieCard";
import Navbar from "../components/Navbar";

import cinemaIcon from "../images/iconoir_cinema-old.svg";

export default function Home() {
  const [popularMoviesDB, setPopularMoviesDB] = useState<Movie[]>([]);
  const [upcomingMovies, setUpcomingMovies] = useState<Movie[]>([]);
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);

  useEffect(() => {
    getPopularMoviesDB(pageCount).then((movies: Movie[]) => {
      setPopularMoviesDB((prevState) => [...prevState, ...movies]);
    });

    getUpcomingMovies(pageCount).then((movies: Movie[]) => {
      setUpcomingMovies((prevState) => [...prevState, ...movies]);
    });

    getTopRatedMovies(pageCount).then((movies: Movie[]) => {
      setTopRatedMovies((prevState) => [...prevState, ...movies]);
    });
  }, [pageCount]);

  function handleViewMore() {
    setPageCount((prevState) => prevState + 1);
  }

  return (
    <Box mx={{ base: "32px", md: "96px" }}>
      <Navbar />
      <Tabs
        position="relative"
        variant="unstyled"
        mt={{ base: "32px", md: "56px" }}
      >
        <Box display={{ base: "block", lg: "flex" }}>
          <Text fontSize="36px" fontWeight="700" lineHeight="normal" me="72px">
            Movie listings
          </Text>
          <TabList gap="32px" mt={{ base: "16px", lg: "0" }}>
            <Tab
              fontSize="18px"
              fontWeight="400"
              lineHeight="normal"
              padding="0px"
            >
              Popular
            </Tab>
            <Tab
              fontSize="18px"
              fontWeight="400"
              lineHeight="normal"
              padding="0px"
            >
              Premiere
            </Tab>
            <Tab
              fontSize="18px"
              fontWeight="400"
              lineHeight="normal"
              padding="0px"
            >
              For release
            </Tab>
          </TabList>
        </Box>
        <TabIndicator
          mt={{ base: "0", lg: "-6.5px" }}
          height="3px"
          bg="#BE123C"
          fontWeight="700"
          width="32px"
        />
        <TabPanels>
          <TabPanel padding="0">
            <MoviesList movies={popularMoviesDB} />
          </TabPanel>
          <TabPanel padding="0">
            <MoviesList movies={topRatedMovies} />
          </TabPanel>
          <TabPanel padding="0">
            <MoviesList movies={upcomingMovies} />
          </TabPanel>
        </TabPanels>
        <Center pb="60px">
          <Button
            display="inline-flex"
            padding="12px 24px"
            alignItems="center"
            gap="8px"
            borderRadius="32px"
            borderWidth="2px"
            borderStyle="solid"
            borderColor="#BE123C"
            background="none"
            leftIcon={<img src={cinemaIcon} alt="Cinema Icon" />}
            onClick={handleViewMore}
            color="#BE123C"
            fontSize="14px"
            fontWeight="700"
            lineHeight="normal"
          >
            {" "}
            View more
          </Button>
        </Center>
      </Tabs>
    </Box>
  );
}

function MoviesList({ movies }: { movies: Movie[] }) {
  const navigate = useNavigate();
  return (
    <SimpleGrid
      minChildWidth="250px"
      spacing="80px"
      justifyContent="space-between" /*TODO: Fix*/
      my="56px"
    >
      {movies.map((movie) => (
        <Box
          key={movie.id}
          onClick={() => navigate(`/movie/${movie.id}`)}
          cursor="pointer"
          mx="auto"
        >
          <MovieCard
            url={movie.poster}
            title={movie.title}
            rating={movie.rating}
            date={movie.date}
          />
        </Box>
      ))}
    </SimpleGrid>
  );
}
