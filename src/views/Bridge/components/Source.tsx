import React from "react";
import { Form } from "react-bootstrap";
import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { Button } from "components/Button";

const Source: React.FC = () => {
  return (
    <Box>
      <Text fontWeight="bold" fontSize="22px">
        Source
      </Text>
      <Text fontWeight="bold" fontSize="18px">
        Select your preferred token after connecting your wallet
      </Text>

      <Button mt="2rem" p="10px" height="30px" borderRadius="30px">
        Connect Wallet
      </Button>

      <Flex mt="2rem" className={` w-100`}>
        <Box className="m-1">
          <Form.Select>
            <option>Select a token</option>
            <option>Token 1</option>
            <option>Token 2</option>
            <option>Token 3</option>
          </Form.Select>
        </Box>
        <Box className="m-1">
          <Form.Control type="text" placeholder="Enter value here" />
        </Box>
      </Flex>
    </Box>
  );
};

export default Source;
