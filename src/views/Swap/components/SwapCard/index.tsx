import { useState } from "react";
import { Form } from "react-bootstrap";
import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { Button } from "components/Button";

import WalletModal from "components/Modal/index";
import etherumLogo from "assets/images/etherum.png";
import bnbLogo from "assets/images/bnb.png";
import solLogo from "assets/images/sol.png";
import tick from "assets/images/tick.svg";

const SwapCard = ({ type }) => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <Box borderRadius="10px" mt="4%" width="100%" border="solid 1px #707070">
      <Flex
        borderRadius="10px 10px 0 0"
        justifyContent="space-between"
        align-items="center"
        p="10px"
        borderBottom="solid 1px #333"
      >
        <Text fontSize="16px" fontWeight="bold" mb="0">
          Swap {type === "source" ? "From" : "To"}
        </Text>
        <Button
          p="10px"
          height="30px"
          borderRadius="30px"
          onClick={() => setVisible(true)}
        >
          Connect Wallet
        </Button>
      </Flex>
      <Box p="12px">
        <Text>Select your preferred chain(s)</Text>
      </Box>

      <Box className={`d-flex w-100 p-3`}>
        <Flex
          justifyContent="center"
          alignItems="center"
          mr="16px"
          border="solid 1px #333"
          position="relative"
          width="54px"
          height="54px"
          borderRadius="50%"
        >
          <img
            src={etherumLogo}
            alt="eth logo"
            style={{ width: "80%", borderRadius: "50%" }}
          />
          <Box position="absolute" top="0px" right="-8px">
            <img
              style={{ width: "80%", borderRadius: "50%" }}
              alt=""
              src={tick}
            />
          </Box>
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          mr="16px"
          border="solid 1px #333"
          position="relative"
          width="54px"
          height="54px"
          borderRadius="50%"
        >
          <img
            src={bnbLogo}
            style={{ width: "80%", borderRadius: "50%" }}
            alt="bnb logo"
          />
        </Flex>
        <Flex
          justifyContent="center"
          alignItems="center"
          mr="16px"
          border="solid 1px #333"
          position="relative"
          width="54px"
          height="54px"
          borderRadius="50%"
        >
          <img
            src={solLogo}
            style={{ width: "80%", borderRadius: "50%" }}
            alt="solana logo"
          />
        </Flex>
      </Box>

      <Flex className={`p-2 w-100`}>
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

      <WalletModal visible={visible} setVisible={setVisible} />
    </Box>
  );
};

export default SwapCard;
