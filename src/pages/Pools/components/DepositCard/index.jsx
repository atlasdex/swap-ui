import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import styles from "./deposit-card.module.css";

function DepositCard({ exc }) {
  return (
    <div className={styles.card}>
      <div className={styles.percent}>
        <p>0.56%</p>
      </div>

      <div className={`row w-100 p-1`}>
        <div className={`col-2`}>
          <div>Icon</div>
        </div>
        <div className={`col-10`} style={{ marginTop: -12 }}>
          <h3 className={styles.title}>{exc}</h3>

          <div className={`row`}>
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

          <div className={`row mt-4 mb-2`}>
            <div className="col-8 d-flex align-items-center">
              <h4 className={`${styles.coinName} `}>Total deposits: </h4>
              <p className={styles.value}>$129,378,94</p>
            </div>
            <div className="col-4">
              <button className={styles.button}>Deposit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepositCard;
