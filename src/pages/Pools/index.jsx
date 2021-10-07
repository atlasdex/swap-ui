import { useState } from "react";
import { Form } from "react-bootstrap";
import { MdOutlineRefresh } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";

import DepositCard from "./components/DepositCard";
import Liquidity from "./components/Liquidity";
import WalletModal from "../../components/Modal";
import styles from "./pools.module.css";

function Pools() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="px-5 mt-2">
      <div className={styles.topHeader}>
        <div>
          <h1>Logo</h1>
        </div>
        <div>
          <Form.Group controlId="formFile" className="mb-3 d-flex">
            <Form.Select className={styles.select}>
              <option>ETH</option>
              <option>BTC</option>
              <option>SOL</option>
            </Form.Select>
            <Form.Control
              type="text"
              placeholder="Search pools here"
              className={styles.input}
            />
          </Form.Group>
        </div>
        <div>
          <button
            className={styles.connectButton}
            onClick={() => setVisible(true)}
          >
            Connect Wallet
          </button>
        </div>
      </div>

      <div className={styles.infoContainer}>
        <h4>Pools</h4>
        <div className={styles.infoDetails}>
          <h4>
            <b>TVL: $6,783,45</b>
          </h4>
          <div className={`d-flex`}>
            <MdOutlineRefresh
              size={24}
              style={{ marginRight: 18, cursor: "pointer" }}
            />

            <p className="d-flex align-items-center">
              <AiOutlineClockCircle style={{ marginRight: 8 }} /> Auto refresh
              after <b> 00:00</b>
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-5">
          <DepositCard exc="SOL / BTC" />
          <DepositCard exc="SOL / ETH" />
          <DepositCard exc="SOL / BNB" />
        </div>

        <div className="col-12 col-md-7">
          <Liquidity />
        </div>
      </div>

      <WalletModal visible={visible} setVisible={setVisible} />
    </div>
  );
}

export default Pools;
