import { Modal, Tabs, Tab } from "react-bootstrap";
import styles from "./wallet-modal.module.css";

import etherumLogo from "../../assets/images/etherum.png";
import bnbLogo from "../../assets/images/bnb.png";
import solLogo from "../../assets/images/sol.png";
import cancelIcon from "../../assets/images/cancel.png";

function WalletModal({ visible, setVisible }) {
  return (
    <Modal show={visible} onHide={() => setVisible(false)}>
      <div className="d-flex justify-content-end w-100 p-2 pb-0">
        <img src={cancelIcon} width={20} onClick={() => setVisible(false)} />
      </div>
      <Modal.Body>
        <h4>Connect Wallet(s)</h4>
        <p>You can connect wallet from your preferred chains.</p>
        <div className={styles.note}>
          <p>
            By connecting a wallet, you agree to Atlas's <b>Terms of Service</b>{" "}
            and acknowledge that you have read and understand the{" "}
            <b>disclaimer</b>.
          </p>
        </div>
        <div>
          <Tabs
            defaultActiveKey="eth"
            id="uncontrolled-tab-example"
            className="mb-3 mt-3"
          >
            <Tab
              eventKey="eth"
              title={<img src={etherumLogo} className={styles.tabIcon} />}
            >
              <WalletConnectSection
                note={
                  <p>
                    Please note you have selected <b>ETH</b> Network so you
                    cannot use <b>Solana</b> and <b>Binance</b> chains for your
                    swap
                  </p>
                }
              />
            </Tab>
            <Tab
              eventKey="bnb"
              title={<img src={bnbLogo} className={styles.tabIcon} />}
            >
              <WalletConnectSection
                note={
                  <p>
                    Please note you have selected <b>Binance</b> Network so you
                    cannot use <b>Solana</b> and <b>ETH</b> chains for your swap
                  </p>
                }
              />
            </Tab>
            <Tab
              eventKey="sol"
              title={<img src={solLogo} className={styles.tabIcon} />}
            >
              <WalletConnectSection
                note={
                  <p>
                    Please note you have selected <b>Solana</b> Network so you
                    can use <b>Solana</b>, <b>ETH</b> and <b>Binance</b> chains
                    for your swap
                  </p>
                }
              />
            </Tab>
          </Tabs>
        </div>
      </Modal.Body>
    </Modal>
  );
}

const WalletConnectSection = ({ note }) => {
  return (
    <div className={styles.wrapper}>
      <h4>Connect Wallet</h4>
      <div className={styles.note}>{note}</div>

      <div className={styles.btnGroup}>
        <button className={styles.connectButton}>Connect ABC Wallet</button>
        <button className={styles.connectButton}>Connect XYZ Wallet</button>
        <button className={styles.connectButton}>Connect YYY Wallet</button>
      </div>
    </div>
  );
};

export default WalletModal;
