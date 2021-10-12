import { Link } from "react-router-dom";

import { Box, Flex } from "components/Box";

const Navbar: React.FC = () => {
  return (
    <Flex
      background="#efefef"
      p="20px 0"
      borderBottom="solid 1px #333"
      mb="20px"
    >
      <Box m="0 4% 0 1%">
        <Link style={{ textDecoration: "none" }} to="/">
          Swap
        </Link>
      </Box>
      <Box m="0 4% 0 1%">
        <Link style={{ textDecoration: "none" }} to="/pools">
          Pools
        </Link>
      </Box>
      <Box m="0 4% 0 1%">
        <Link style={{ textDecoration: "none" }} to="/bridge">
          Bridge
        </Link>
      </Box>
    </Flex>
  );
};

export default Navbar;
