import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box>
          <Text>Nícolas Ortiz</Text>
          <Text>nicolas.lsortiz</Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Nicolas Ortiz"
        src="https://github.com/NicolasLOrtiz.png"
      />
    </Flex>
  );
}
