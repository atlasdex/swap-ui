import React from "react";
import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { Button } from "components/Button";
import Note from "./Note";
import { theme } from "theme";

const Destination: React.FC = () => {
  const { textSubtle } = theme.colors;

  return (
    <Box>
      <Text fontWeight="bold" fontSize="22px">
        Destination
      </Text>
      <Text fontWeight="bold" fontSize="18px">
        Select your preferred recipient chain along with address
      </Text>

      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Box>
          <Button mt="2rem" p="10px" height="30px" borderRadius="30px">
            7YiY...QPan on Solana
          </Button>
          <Text
            mt="6px"
            style={{
              textDecoration: "underline",
              fontStyle: "italic",
              cursor: "pointer",
            }}
          >
            Disconnect Wallet
          </Text>
        </Box>

        <Button mt="2rem" borderRadius="30px">
          Your Balance 0.0
        </Button>
      </Flex>

      <Flex width="100%" mt="4rem" justifyContent="space-between">
        <Box>
          <Text fontWeight="bold">Bridged tokens</Text>
          <Text
            color={textSubtle}
            my="1rem"
            style={{ textDecoration: "underline" }}
          >
            0x48...988d on Ethereum
          </Text>
          <Text fontWeight="bold">(Value: 0.01)</Text>
        </Box>
        <Box>
          <Text fontWeight="bold">Sent to</Text>
          <Text
            color={textSubtle}
            my="1rem"
            style={{ textDecoration: "underline" }}
          >
            D8Us...YvDj on Solana
          </Text>
          <Text fontWeight="bold">(Current balance: 0.00)</Text>
        </Box>
      </Flex>

      <Note
        text=" Any relevant information or disclaimer here as banner can be used to
          guide user"
      />
    </Box>
  );
};

export default Destination;
