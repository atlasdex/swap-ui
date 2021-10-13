import React from "react";
import { MdAvTimer } from "react-icons/md";
import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { Button } from "components/Button";
import Note from "./Note";

const Progress = ({ progress }) => {
  return (
    <Box
      height="10px"
      width="100%"
      background="#BEBEBE"
      borderRadius="10px"
      mt="30px"
    >
      <Box
        height="10px"
        width={`${progress}%`}
        background="#1C1C1C"
        borderRadius="10px"
        mt="10px"
      ></Box>
    </Box>
  );
};
const Send: React.FC = () => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="22px">
        Send
      </Text>
      <Text fontWeight="bold" fontSize="18px">
        Transfer the tokens to the Bridge
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

      <Note
        text=" Any relevant information or disclaimer here as banner can be used to
          guide user"
      />

      <Button mt="2rem" p="10px" width="100%" borderRadius="30px">
        <MdAvTimer size={22} style={{ marginRight: 6 }} /> Transfer in-progress
      </Button>

      <Text fontWeight="bold" textAlign="center" mt="1rem">
        0x16516165161as65165asd6516a51sd65165a1s56d1as56d1a65s1d65a1sd
      </Text>

      <Flex>
        <Button ml="auto" mt="2rem" p="10px" height="30px" borderRadius="30px">
          0x546BV565..55
        </Button>
      </Flex>

      <Progress progress={75} />
      <Flex>
        <Text ml="auto" fontStyle="italic">
          Waiting for 1/6 confirmations on Ethereum ...
        </Text>
      </Flex>
    </Box>
  );
};

export default Send;
