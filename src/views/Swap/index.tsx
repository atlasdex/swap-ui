import React from "react";
import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { theme } from "theme";

import SwapCard from "./components/SwapCard/index";
import warning from "assets/images/warning.svg";
import horizontalArrows from "assets/images/arrows-h.svg";
import verticalArrows from "assets/images/arrows-v.svg";

const Swap: React.FC = () => {
  const { textSubtle } = theme.colors;
  return (
    <>
      <Box className="container mt-2">
        <Box className="row">
          <Box className="col-12 col-md-5">
            <Box border="solid 1px #333" borderRadius="10px" height="100%">
              <Box
                background="#e6e1e1"
                borderBottom="solid 1px #707070"
                borderRadius="10px 10px 0 0"
                p="16px"
              >
                <Text
                  fontSize="20px"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  Swap
                </Text>
              </Box>
              <Flex
                p="0 4%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                <SwapCard type="source" />
                <img src={verticalArrows} alt="" className="mt-5" />
                <div className={`m-3`}></div>
                <SwapCard type="destination" />

                <Box className="w-100 mt-5">
                  <Flex>
                    <Text fontSize="16px" color={textSubtle}>
                      Best Price
                    </Text>
                    <Flex ml="auto">
                      <Text mr="8px">
                        <b>0</b>
                      </Text>
                      <Box>
                        <img src={horizontalArrows} alt="" />
                      </Box>
                    </Flex>
                  </Flex>

                  <Flex>
                    <Text fontSize="16px" color={textSubtle}>
                      Slippage Tolerance
                    </Text>
                    <Flex ml="auto">
                      <Text>
                        <b>0%</b>
                      </Text>
                    </Flex>
                  </Flex>

                  <Button width="100%" my="1rem">
                    Quote
                  </Button>
                  <Text
                    textAlign="center"
                    color={textSubtle}
                    fontSize={"13px"}
                    mt="4px"
                    mb="2%"
                  >
                    Auto-refresh after <b>00:00</b>
                  </Text>
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box className="col-12 col-md-7">
            <Box border="solid 1px #333" borderRadius="10px" height="100%">
              <Box
                background="#e6e1e1"
                borderBottom="solid 1px #707070"
                borderRadius="10px 10px 0 0"
                p="16px"
              >
                <Text
                  fontSize="20px"
                  textTransform="uppercase"
                  fontWeight="bold"
                >
                  Optimized Route
                </Text>
              </Box>
              <Flex
                className={`h-100`}
                p="0 4%"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                width="100%"
              >
                <img src={warning} alt="" className="m-2" width="60" />
                <Text fontSize="16px" color={textSubtle}>
                  No details of Routing
                </Text>
                <Text color={textSubtle}>
                  Please select your preferred chain, add some value and press
                  Quote
                </Text>
              </Flex>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Swap;
