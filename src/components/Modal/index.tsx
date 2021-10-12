import { Modal, Tabs, Tab } from "react-bootstrap";

import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { Button } from "components/Button";

import etherumLogo from "../../assets/images/etherum.png";
import bnbLogo from "../../assets/images/bnb.png";
import solLogo from "../../assets/images/sol.png";
import cancelIcon from "../../assets/images/cancel.png";

function WalletModal({ visible, setVisible }) {
  return (
    <Modal show={visible} onHide={() => setVisible(false)}>
      <Flex justifyContent="flex-end" width="100%" p="1rem 1rem 0 1rem">
        <img
          src={cancelIcon}
          alt=""
          width={20}
          onClick={() => setVisible(false)}
        />
      </Flex>
      <Modal.Body>
        <h4>Connect Wallet(s)</h4>
        <p>You can connect wallet from your preferred chains.</p>
        <Box background="#e7edf2" borderRadius="5px" m="8px 0" p="8px">
          <Text fontSize="12px" m="0">
            By connecting a wallet, you agree to Atlas's <b>Terms of Service</b>{" "}
            and acknowledge that you have read and understand the{" "}
            <b>disclaimer</b>.
          </Text>
        </Box>
        <Box>
          <Tabs
            defaultActiveKey="eth"
            id="uncontrolled-tab-example"
            className="mb-3 mt-3"
          >
            <Tab
              eventKey="eth"
              title={
                <img
                  src={etherumLogo}
                  alt=""
                  style={{ width: 25, borderRadius: "50%" }}
                />
              }
            >
              <WalletConnectSection
                note={
                  <Text fontSize="12px" m="0">
                    Please note you have selected <b>ETH</b> Network so you
                    cannot use <b>Solana</b> and <b>Binance</b> chains for your
                    swap
                  </Text>
                }
              />
            </Tab>
            <Tab
              eventKey="bnb"
              title={
                <img
                  src={bnbLogo}
                  alt=""
                  style={{ width: 25, borderRadius: "50%" }}
                />
              }
            >
              <WalletConnectSection
                note={
                  <Text fontSize="12px" m="0">
                    Please note you have selected <b>Binance</b> Network so you
                    cannot use <b>Solana</b> and <b>ETH</b> chains for your swap
                  </Text>
                }
              />
            </Tab>
            <Tab
              eventKey="sol"
              title={
                <img
                  src={solLogo}
                  alt=""
                  style={{ width: 25, borderRadius: "50%" }}
                />
              }
            >
              <WalletConnectSection
                note={
                  <Text fontSize="12px" m="0">
                    Please note you have selected <b>Solana</b> Network so you
                    can use <b>Solana</b>, <b>ETH</b> and <b>Binance</b> chains
                    for your swap
                  </Text>
                }
              />
            </Tab>
          </Tabs>
        </Box>
      </Modal.Body>
    </Modal>
  );
}

const WalletConnectSection = ({ note }) => {
  return (
    <Box p="20px">
      <Text fontSize="20px" fontWeight="bold">
        Connect Wallet
      </Text>
      <Box background="#e7edf2" borderRadius="5px" m="8px 0" p="8px">
        {note}
      </Box>

      <Flex justifyContent="center" flexDirection="column">
        <Button
          m="8px 0"
          border="dashed 1px #707070"
          color="black"
          backgroundColor="white"
          borderRadius="8px"
        >
          Connect ABC Wallet
        </Button>
        <Button
          m="8px 0"
          border="dashed 1px #707070"
          backgroundColor="white"
          borderRadius="8px"
          color="black"
        >
          Connect XYZ Wallet
        </Button>
        <Button
          m="8px 0"
          border="dashed 1px #707070"
          color="black"
          backgroundColor="white"
          borderRadius="8px"
        >
          Connect YYY Wallet
        </Button>
      </Flex>
    </Box>
  );
};

export default WalletModal;
