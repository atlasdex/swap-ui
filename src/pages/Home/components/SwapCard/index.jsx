import { useState } from "react";
import { Form } from "react-bootstrap";
import styles from "./swap-card.module.css";

import WalletModal from "../Modal";
import etherumLogo from "../../../../assets/images/etherum.png";
import bnbLogo from "../../../../assets/images/bnb.png";
import solLogo from "../../../../assets/images/sol.png";
import tick from "../../../../assets/images/tick.svg";

const SwapCard = ({ type }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.swapCard}>
      <div className={styles.cardHeader}>
        <h2>Swap {type === "source" ? "From" : "To"}</h2>
        <button onClick={() => setVisible(true)}>Connect Wallet</button>
      </div>
      <div className={styles.cardBody}>
        <p>Select your preferred chain(s)</p>
      </div>

      <div className={`d-flex w-100 p-3`}>
        <div className={`${styles.iconContainer} ${styles.active}`}>
          <img src={etherumLogo} alt="eth logo" />
          <div className={styles.check}>
            <img src={tick} />
          </div>
        </div>
        <div className={`${styles.iconContainer}`}>
          <img src={bnbLogo} alt="bnb logo" />
        </div>
        <div className={`${styles.iconContainer}`}>
          <img src={solLogo} alt="solana logo" />
        </div>
      </div>

      <div className={`d-flex p-2 w-100`}>
        <div className="m-1">
          <Form.Select>
            <option>Select a token</option>
            <option>Token 1</option>
            <option>Token 2</option>
            <option>Token 3</option>
          </Form.Select>
        </div>
        <div className="m-1">
          <Form.Control type="text" placeholder="Enter value here" />
        </div>
      </div>

      <WalletModal visible={visible} setVisible={setVisible} />
    </div>
  );
};

export default SwapCard;
