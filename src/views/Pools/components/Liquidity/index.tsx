import { Tabs, Tab, Form } from "react-bootstrap";
import { FiSettings } from "react-icons/fi";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";

import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { Button } from "components/Button";
import { theme } from "theme";

import solIcon from "../../../../assets/images/sol.png";
import bnbIcon from "../../../../assets/images/bnb.png";

const ExchangeSection = ({ coin, icon }) => {
  const { textSubtle } = theme.colors;
  return (
    <>
      <Box className={`row p-3`}>
        <Box className={`col-4 p-0`}>
          <Flex
            border="solid 1px #333"
            borderRadius="8px"
            p="4px 14px"
            justifyContent="center"
            alignItems="center"
            height="100%"
            mr="10px"
          >
            <img
              src={icon}
              width={20}
              alt=""
              style={{ borderRadius: "50%", marginRight: 6 }}
            />
            {coin}
          </Flex>
        </Box>
        <Box className={`col-8 p-0`}>
          <Form.Control type="text" />
        </Box>
      </Box>

      <Flex justifyContent="space-between" width="100%">
        <Text color={textSubtle}>Balance:~</Text>
        <Text color={"black"} fontWeight="bold">
          560(+15%)
        </Text>
      </Flex>
    </>
  );
};

function Liquidity() {
  const { textSubtle } = theme.colors;

  return (
    <Box border="solid 1px #333" borderRadius="10px" height="100%" mt="1rem">
      <Box
        borderRadius="10px 10px 0 0"
        p="16px"
        background="#e6e1e1"
        borderBottom="solid 1px #333"
      >
        <Text fontSize="20px" fontWeight="bold">
          Manage Liquidity
        </Text>
      </Box>
      <Box p="0 4%" width="100%" height="100%">
        <Box className={`row`}>
          <Box className="col-12 col-md-5">
            <Tabs
              defaultActiveKey="eth"
              id="uncontrolled-tab-example"
              className="mb-3 mt-3"
            >
              <Tab eventKey="eth" title={"Deposit"} className="p-2">
                <Box className={`d-flex w-100 p-3`}>
                  <FiSettings style={{ marginLeft: "auto" }} />
                </Box>
                <ExchangeSection coin="SOL" icon={solIcon} />
                <hr />
                <ExchangeSection coin="BNB" icon={bnbIcon} />

                <Button
                  backgroundColor="#efefef"
                  color="#333"
                  border="solid 1px #858585"
                  width="100%"
                  p="10px"
                  mb="10px"
                >
                  0.3% free tier
                </Button>
              </Tab>

              <Tab eventKey="bnb" title={"Withdraw"} className="p-2">
                <Box className={`d-flex w-100 p-3`}>
                  <FiSettings style={{ marginLeft: "auto" }} />
                </Box>
                <ExchangeSection coin="BNB" icon={bnbIcon} />
                <hr />
                <ExchangeSection coin="SOL" icon={solIcon} />

                <Button
                  backgroundColor="#efefef"
                  color="#333"
                  border="solid 1px #858585"
                  width="100%"
                  p="10px"
                  mb="10px"
                >
                  0.3% free tier
                </Button>
              </Tab>
            </Tabs>
          </Box>
          <Box className="col-12 col-md-7 mt-3">
            <Box
              border="solid 1px #858585"
              p="10px"
              borderRadius="10px"
              height="100%"
            >
              <Text fontWeight="bold">Currency Reserves</Text>
              <Flex>
                <Flex flexDirection="column" alignItems="center">
                  <Flex alignItems="center" width="100px">
                    <img
                      src={solIcon}
                      alt=""
                      style={{ borderRadius: "50%", width: 30 }}
                    />
                    <p style={{ margin: 0 }}>SOL</p>
                  </Flex>
                  <Text fontWeight="bold" mt="10px">
                    $5,444M
                  </Text>
                </Flex>

                <Flex flexDirection="column" alignItems="center">
                  <Flex alignItems="center" width="100px">
                    <img
                      src={bnbIcon}
                      alt=""
                      style={{ borderRadius: "50%", width: 30 }}
                    />
                    <p style={{ margin: 0 }}>SOL</p>
                  </Flex>
                  <Text fontWeight="bold" mt="10px">
                    $5,444M
                  </Text>
                </Flex>
              </Flex>

              <Box className={`row mt-4`}>
                <Box className={`col-3`}>
                  <Text
                    color={textSubtle}
                    fontSize="14px"
                    m="0"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    TVL <BiUpArrowAlt color="green" size={18} />{" "}
                  </Text>
                  <Text m="0" fontWeight="bold" fontSize="14px">
                    $303.18m
                  </Text>
                </Box>
                <Box className={`col-5`}>
                  <Text
                    color={textSubtle}
                    fontSize="14px"
                    m="0"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    Volume (24hrs) <BiDownArrowAlt color="red" size={18} />{" "}
                  </Text>
                  <Text m="0" fontWeight="bold" fontSize="14px">
                    $303.18m
                  </Text>
                </Box>
                <Box className={`col-4`}>
                  <Text
                    color={textSubtle}
                    fontSize="14px"
                    m="0"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "flex-start",
                    }}
                  >
                    Volume (7D) <BiUpArrowAlt color="green" size={18} />{" "}
                  </Text>
                  <Text m="0" fontWeight="bold" fontSize="14px">
                    $303.18m
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>

          <Box className="col-12">
            <Box
              borderRadius="10px"
              border="solid 1px #333"
              height="100%"
              p="10px"
              style={{ height: "inherit", marginTop: 10 }}
            >
              <div className={`d-flex justify-content-center p-5`}>
                Graph Here
              </div>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Liquidity;
