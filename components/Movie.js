import Link from "next/link";
import Image from "next/image";
import {Box, Flex, Text, Avatar } from '@chakra-ui/react'
import {BsFillCalendarDayFill} from 'react-icons/bs'
import {MdMovie} from 'react-icons/md'
import millify from "millify";

export const Movie = ({ movie: {id, primaryImage, titleText, releaseYear, releaseDate, titleType} }) => (
    <Link href={`/movie/${id}`} passHref>
        <Flex flexWrap='wrap' flexDirection="column" justifyContent="flex-start" cursor="pointer" width="210px" p={3} >
            <Box>
                <Image width={200} height={100} src={primaryImage ? primaryImage.url : 'https://i.natgeofe.com/k/59ccd67f-c57c-4946-99bd-f957a38dafaa/hippopotamus-closeup-water_square.jpg'} alt="no shit"/>
            </Box>
            <Box w='full'> 
                <Flex pt={2} alignItems="center" justifyContent='space-between'>
                    <Flex alignItems="center" flexDirection="row">
                        <Box paddingRight={3} color="Gray"><MdMovie/>
                        </Box>
                        <Text fontWeight="extrabold" fontFamily="fantasy">{titleText.text}</Text>
                        {/* <Text justifyItems="right" fontWeight="light" fontFamily="fantasy">{releaseYear.year}</Text> */}
                    </Flex>
                </Flex>
                <Flex alignItems="center" justifyContent="space-between" w="200px"> 
                    <BsFillCalendarDayFill />{releaseDate!==null? releaseDate.day : null} . {releaseDate!==null? releaseDate.month : null} . {releaseDate!==null? releaseDate.year : null}
                </Flex>
                <Text fontSize="md" fontFamily="fantasy">
                    {titleType.id}
                </Text>
            </Box>
        </Flex>
    </Link>

//     <Link href={`/movies/${id}`} passHref>
//     <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0px' justifyContent='flex-start' cursor='pointer' >
//       <Box>
//         <Image src={primaryImage ? primaryImage.url : 'https://i.natgeofe.com/k/59ccd67f-c57c-4946-99bd-f957a38dafaa/hippopotamus-closeup-water_square.jpg'} alt="NO IMG" width={400} height={260} />
//       </Box>
//       <Box w='full'>
//         <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
//           <Flex alignItems='center'>
//             <Box paddingRight='3' color='green.400'>{<MdMovie />}</Box>
//             <Text fontWeight='bold' fontSize='lg'>AED {titleType.id}</Text>
//           </Flex>
//           {/* <Box>
//             <Avatar size='sm' src={agency?.logo?.url}></Avatar>
//           </Box> */}
//         </Flex>
//         <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
//           {releaseYear.year}
//           {/* <MdMovie /> | {baths} <MdMovie /> | {millify(area)} sqft <MdMovie /> */}
//         </Flex>
//         <Text fontSize='lg'>
//           {titleText.text.length > 30 ? titleText.text.substring(0, 30) + '...' : titleText.text}
//         </Text>
//       </Box>
//     </Flex>
//   </Link>
)