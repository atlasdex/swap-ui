import React from "react";
import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { Button } from "components/Button";

const Redeem: React.FC = () => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="22px">
        Redeem
      </Text>
      <Text fontWeight="bold" fontSize="18px">
        Receive the tokens on the destination targeted chain
      </Text>

      <Flex width="100%" justifyContent="space-between" alignItems="center">
        <Box>
          <Button mt="2rem" p="10px" height="30px" borderRadius="30px">
            0x546BV565..55
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
      </Flex>

      <Button
        mt="2rem"
        p="10px"
        width="100%"
        borderRadius="30px"
        disabled={true}
      >
        Redeem Tokens
      </Button>

      <Text fontWeight="bold" textAlign="center" color="#2FA837" mt="1rem">
        Success! The redeem transaction was processed successfully to
      </Text>
      <Text fontWeight="bold" textAlign="center">
        0x16516165161as65165asd6516a51sd65165a1s56d1as56d1a65s1d65a1sd
      </Text>

      <Flex>
        <Button ml="auto" mt="2rem" p="10px" height="30px" borderRadius="30px">
          View it on Etherscan
        </Button>
      </Flex>

      <Flex mt="2rem">
        <Text fontWeight="bold" fontSize="18px">
          Want to transfer more tokens?
        </Text>
      </Flex>

      <Button p="10px" width="100%" borderRadius="30px">
        Transfer More
      </Button>
    </Box>
  );
};

export default Redeem;
