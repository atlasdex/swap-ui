import React, { useState } from "react";
import { Form } from "react-bootstrap";
import { MdOutlineRefresh } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { Button } from "components/Button";

import DepositCard from "./components/DepositCard/index";
import Liquidity from "./components/Liquidity/index";
import WalletModal from "../../components/Modal";
import { theme } from "theme";

const Pools: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const { textSubtle } = theme.colors;
  return (
    <Box className="px-5 mt-2">
      <Flex justifyContent="space-between" alignItems="center">
        <Box>
          <Text>Logo</Text>
        </Box>
        <Box>
          <Form.Group controlId="formFile" className="mb-3 d-flex">
            <Form.Select
              style={{
                borderRadius: "10px 0 0 10px",
                border: "solid 1px #333",
              }}
            >
              <option>ETH</option>
              <option>BTC</option>
              <option>SOL</option>
            </Form.Select>
            <Form.Control
              type="text"
              placeholder="Search pools here"
              style={{
                borderRadius: "0 10px 10px 0",
                borderLeft: 0,
                padding: "16px 10px",
              }}
            />
          </Form.Group>
        </Box>

        <Box>
          <Button
            onClick={() => setVisible(true)}
            width="100%"
            border="solid 1px #333"
            color="white"
            p="6px 20px"
            height="40px"
            borderRadius="20px"
          >
            Connect Wallet
          </Button>
        </Box>
      </Flex>

      <Box mt="30px">
        <Text>Pools</Text>
        <Flex justifyContent="space-between" alignItems="center">
          <Text color={textSubtle} fontSize="medium">
            <b>TVL: $6,783,45</b>
          </Text>
          <Flex>
            <MdOutlineRefresh
              size={24}
              style={{ marginRight: 18, cursor: "pointer" }}
            />

            <Text className="d-flex align-items-center">
              <AiOutlineClockCircle style={{ marginRight: 8 }} /> Auto refresh
              after <b> 00:00</b>
            </Text>
          </Flex>
        </Flex>
      </Box>

      <Box className="row">
        <Box className="col-12 col-md-5">
          <DepositCard exc="SOL / BTC" />
          <DepositCard exc="SOL / ETH" />
          <DepositCard exc="SOL / BNB" />
        </Box>

        <Box className="col-12 col-md-7">
          <Liquidity />
        </Box>
      </Box>

      <WalletModal visible={visible} setVisible={setVisible} />
    </Box>
  );
};

export default Pools;
