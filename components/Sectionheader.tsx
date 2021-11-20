import { Text, Flex, Link} from "@chakra-ui/react"


const Sectionheader = ({name}:any) => {
    return (
        <Flex m={5} justifyContent="space-between">
        <Text fontWeight="bold" fontSize="2xl">{name}</Text>
        <Link color="tertiary.200" fontWeight="semibold">See All</Link>
        </Flex>
    )
}

export default Sectionheader
