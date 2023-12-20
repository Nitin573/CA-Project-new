import { Box, Grid, Image, Text } from '@chakra-ui/react'
import React from 'react'
import rect from '../components/assets/Rectangle.png';

export default function Exclusiive() {
    return (
        <Box>

            <Text fontSize="30px" color="black" fontWeight="bold" textAlign="start">Exclusive Partner Benefits for Vakilsearch Clients</Text>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in ligula quis </Text>
            <Grid gridTemplateColumns="1fr 1fr">
                {
                    new Array(6).fill(0).map((e, i) => (
                        <Box key={i}>
                            <Image w="90%" src={rect} alt=""></Image>
                            <Text color="black">Lorem ipsliquid ratione recusandae ab praesentium iste voluptatum laboriosam iusto ipsam ex?</Text>
                        </Box>
                    ))
                }
            </Grid>
        </Box>
    )
}
