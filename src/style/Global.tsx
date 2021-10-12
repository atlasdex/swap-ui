import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    font-family: sans-serif;
  }
  body {
    background-color: ${({ theme }) => theme.colors.background};

    img {
      height: auto;
      max-width: 100%;
    }
  }

  .form-control {
  border: solid 1px #707070;
  outline: none;
  width: 100%;
}

.form-control:focus {
  box-shadow: none !important;
  border: solid 1px #707070;
}

.form-select {
  background-color: #ececec;
  width: 180px;
  font-style: italic;
}
.form-select:focus {
  border: solid 1px #707070;
  box-shadow: none;
}

/* Tabs on Wallet Modal */
.tab-content {
  border: solid 1px #d8dee3;
  border-radius: 0 0 8px 8px;
  margin-top: 0;
  border-top: 0;
}

.nav-tabs {
  margin-bottom: 0 !important;
}

.nav-link {
  background-color: #ebf0f5 !important;
  border: 1px solid #d8dee3 !important;
  border-bottom: none !important;
  margin-right: 8px;
}
.nav-link.active {
  background-color: white !important;
}
`;

export default GlobalStyle;
