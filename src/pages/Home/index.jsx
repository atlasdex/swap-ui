import styles from "./home.module.css";
import SwapCard from "./components/SwapCard";

const Home = () => {
  return (
    <>
      <div className="container mt-2">
        <div className="row">
          <div className="col-12 col-md-5">
            <div className={styles.swapContainer}>
              <div className={styles.header}>
                <h2>Swap</h2>
              </div>
              <div className={styles.body}>
                <SwapCard type="source" />
                <div className={`m-3 ${styles.swapIcon}`}>o</div>
                <SwapCard type="destination" />

                <div className="w-100 mt-5">
                  <div className="d-flex">
                    <p className={styles.text}>Best Price</p>
                    <div className="d-flex" style={{ marginLeft: "auto" }}>
                      <p>
                        <b>0</b>
                      </p>
                      <div className={styles.arowsWrapper}>
                        <p>=></p>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex">
                    <p className={styles.text}>Slippage Tolerance</p>
                    <div className="d-flex" style={{ marginLeft: "auto" }}>
                      <p>
                        <b>0%</b>
                      </p>
                    </div>
                  </div>

                  <button className={styles.btn}>Quote</button>
                  <p className={styles.timer}>
                    Auto-refresh after <b>00:00</b>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-7">
            <div className={styles.swapContainer}>
              <div className={styles.header}>
                <h2>Optimized Route</h2>
              </div>
              <div className={`${styles.body} h-100`}>
                <h4>No details of Routing Please</h4>
                <p>
                  select your preferred chain, add some value and press Quote
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
