import { Tabs, Tab, Form } from "react-bootstrap";
import { FiSettings } from "react-icons/fi";
import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import styles from "./liquidity.module.css";
import solIcon from "../../../../assets/images/sol.png";
import bnbIcon from "../../../../assets/images/bnb.png";

const ExchangeSection = ({ coin, icon }) => {
  return (
    <>
      <div className={`row p-3`}>
        <div className={`col-4 p-0`}>
          <div className={styles.coinContainer}>
            <img
              src={icon}
              width={20}
              style={{ borderRadius: "50%", marginRight: 6 }}
            />
            {coin}
          </div>
        </div>
        <div className={`col-8 p-0`}>
          <Form.Control type="text" />
        </div>
      </div>

      <div
        className={`d-flex justify-content-between w-100 ${styles.bottomText}`}
      >
        <p>Balance:~</p>
        <p>560(+15%)</p>
      </div>
    </>
  );
};

function Liquidity() {
  return (
    <div className={`${styles.swapContainer} mt-3`}>
      <div className={styles.header}>
        <h2>Manage Liquidity</h2>
      </div>
      <div className={`${styles.body} h-100`}>
        <div className={`row`}>
          <div className="col-12 col-md-5">
            <Tabs
              defaultActiveKey="eth"
              id="uncontrolled-tab-example"
              className="mb-3 mt-3"
            >
              <Tab eventKey="eth" title={"Deposit"} className="p-2">
                <div className={`d-flex w-100 p-3`}>
                  <FiSettings style={{ marginLeft: "auto" }} />
                </div>
                <ExchangeSection coin="SOL" icon={solIcon} />
                <hr />
                <ExchangeSection coin="BNB" icon={bnbIcon} />

                <button className={styles.button}>0.3% free tier</button>
              </Tab>

              <Tab eventKey="bnb" title={"Withdraw"} className="p-2">
                <div className={`d-flex w-100 p-3`}>
                  <FiSettings style={{ marginLeft: "auto" }} />
                </div>
                <ExchangeSection coin="BNB" icon={bnbIcon} />
                <hr />
                <ExchangeSection coin="SOL" icon={solIcon} />

                <button className={styles.button}>0.3% free tier</button>
              </Tab>
            </Tabs>
          </div>
          <div className="col-12 col-md-7 mt-3">
            <div className={styles.details}>
              <h4>Currency Reserves</h4>
              <div className={`d-flex`}>
                <div className="d-flex flex-column align-items-center">
                  <div
                    className={`d-flex align-items-center ${styles.coinDetails}`}
                  >
                    <img
                      src={solIcon}
                      style={{ borderRadius: "50%", width: 30 }}
                    />
                    <p>SOL</p>
                  </div>
                  <p className={styles.rev}>$5,444M</p>
                </div>

                <div className="d-flex flex-column align-items-center">
                  <div
                    className={`d-flex align-items-center ${styles.coinDetails}`}
                  >
                    <img
                      src={bnbIcon}
                      style={{ borderRadius: "50%", width: 30 }}
                    />
                    <p>BNB</p>
                  </div>
                  <p className={styles.rev}>$5,419M</p>
                </div>
              </div>

              <div className={`row mt-4`}>
                <div className={`col-3`}>
                  <h4 className={styles.coinName}>
                    TVL <BiUpArrowAlt color="green" size={18} />{" "}
                  </h4>
                  <p className={styles.value}>$303.18m</p>
                </div>
                <div className={`col-5`}>
                  <h4 className={styles.coinName}>
                    Volume (24hrs) <BiDownArrowAlt color="red" size={18} />{" "}
                  </h4>
                  <p className={styles.value}>$303.18m</p>
                </div>
                <div className={`col-4`}>
                  <h4 className={styles.coinName}>
                    Volume (7D) <BiUpArrowAlt color="green" size={18} />{" "}
                  </h4>
                  <p className={styles.value}>$303.18m</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12">
            <div
              className={styles.details}
              style={{ height: "inherit", marginTop: 10 }}
            >
              <div className={`d-flex justify-content-center p-5`}>
                Graph Here
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Liquidity;
