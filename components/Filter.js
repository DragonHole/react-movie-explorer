import { useEffect, useState } from "react";
import { Button, Flex, Select, Box, Text, Input, Spinner, Icon, filter } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'

const Filter = ( {genres: {results}} ) => {
    const [filters, setFilters] = useState({})
    const router = useRouter();

    const updateSearchFilter = (newFilterVal) => {
        const filterVals = filters;
        const updatedKey = Object.keys(newFilterVal)[0];
        filterVals[updatedKey] = newFilterVal[updatedKey]
        setFilters(filterVals)
        console.log(filters)
    }

    // callback on search button click 
    const refreshPageWithFilters = () => {
        const filterVals = filters;
        const path = router.pathname;
        const query = router.query;
        for (var key in filterVals) {
            query[key] = filterVals[key]
        }
        router.push({pathname: path, query})
    }

    return (
        <Flex justifyContent="center" pt={1}>
            <Text m={1}>Genre</Text>
            <Select placeholder='Genre' size="sm"
                onChange={(e) => {updateSearchFilter({'genre': e.target.value})}}
                w="-webkit-fit-content">
                {results.map((genre) => (
                    <option value={genre} key={genre}>{genre}</option>
                ))}
            </Select>
            <Text pl={5} m={1}>Year</Text>
            <NumberInput
                defaultValue={2020}
                max={2023}
                size="sm"
                w="20"
                keepWithinRange={false}
                clampValueOnBlur={false}
                onChange={(valueAsNumber) => updateSearchFilter({"year": valueAsNumber})}
            >
                <NumberInputField />
                <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
            <Button variant="ghost" colorScheme="facebook" size="sm"
                onClick={(e) => {refreshPageWithFilters()}}>
                Search
            </Button>
        </Flex>
    )
}

export default Filter
