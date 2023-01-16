import { useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import { Image } from 'next/image'
import {Flex, Box, Button, Text, Icon, Spacer} from '@chakra-ui/react'
import { BsFilter } from 'react-icons/bs'
import { MdError, MdMovie } from 'react-icons/md'
import { Movie } from 'components/Movie'
import { fetchApi, api_base_url } from 'util/rapidApi'
import Filter from 'components/Filter'

const SearchDisplay = ( {moviesToDisplay, definedGenres} ) => {
    const [searchFilters, setSearchFilters] = useState(false);
    const router = useRouter();

    return (
        <>
            <Box bg="gray.200" p={2} background="blackAlpha.500">
                <Flex justifyContent="center">
                    <Text mt={2} justifyItems="right" fontWeight="bold" fontFamily="fantasy">search movie by name</Text>
                    <Button onClick={() => setSearchFilters((searchFilters)=>!searchFilters)} ml={3} colorScheme="messenger" rightIcon={<BsFilter />}>filter</Button>
                    {/* <Icon pl={3} pt={0} w='10' as={BsFilter} /> */}
                </Flex>
            </Box>
            {searchFilters && <Filter genres={definedGenres}/>}
            <Flex background="gray.500" flexWrap="wrap" p={3}>
                {moviesToDisplay.results.map((movieItem) => <Movie movie={movieItem} key={movieItem.id} />)}
            </Flex>
            <Flex justifyContent="center" flexDirection="row">
                {moviesToDisplay.results.length === 0 && 
                    <div>
                        <MdError />
                        <Text pl={3} justifyItems="right" fontWeight="extrabold" fontFamily="fantasy">No Movies Found</Text>
                    </div>
                }
                
            </Flex>
        </>
    )
}

export async function getServerSideProps(context) {
    const genre = context.query.genre || 'Drama';
    const year = context.query.year || '1999';
    const titleType = context.query.titleType || 'short';

    const moviesDataToDisplay = await fetchApi(`${api_base_url}/titles/?genre=${genre}&year=${year}&titleType=${titleType}`)
    const genres = await fetchApi('https://moviesdatabase.p.rapidapi.com/titles/utils/genres')
    console.log(genres)
    return {
      props: {
        moviesToDisplay: moviesDataToDisplay,
        definedGenres: genres
      }
    }
  }

export default SearchDisplay;