import { Heading } from "@chakra-ui/react";
import useGameQueryStore from "../store";
import useGenres from "../hooks/useGenres";
import usePlatforms from "../hooks/usePlatforms";

export const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenres(genreId);
  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatforms(platformId);

  const heading = `${platform?.name || " "} ${genre?.name || " "} Games`;

  return (
    <Heading as="h1" marginY={3} marginLeft={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};
