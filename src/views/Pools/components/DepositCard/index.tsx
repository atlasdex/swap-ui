import { BiUpArrowAlt, BiDownArrowAlt } from "react-icons/bi";
import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { Button } from "components/Button";

import { theme } from "theme";
interface DepositCardProps {
  exc: string;
}
const DepositCard: React.FC<DepositCardProps> = ({ exc }: DepositCardProps) => {
  const { textSubtle } = theme.colors;
  return (
    <Flex
      border="solid 1px #333"
      flexDirection="column"
      borderRadius="12px"
      mt="1rem"
    >
      <Box
        borderRadius="0 12px 0 12px"
        width="fit-content"
        ml="auto"
        borderRight="0"
        borderTop="0"
        p="10px 20px"
      >
        <Text fontSize="12px" m="0" fontWeight="bold">
          0.56%
        </Text>
      </Box>

      <Box className={`row w-100 p-1`}>
        <Box className={`col-2`}>
          <div>Icon</div>
        </Box>
        <Box className={`col-10`} style={{ marginTop: -12 }}>
          <Text fontSize="22px">{exc}</Text>

          <Box className={`row`}>
            <Box className={`col-3`}>
              <Text color={textSubtle} fontSize="14px">
                TVL <BiUpArrowAlt color="green" size={18} />{" "}
              </Text>
              <Text m="0" fontWeight="bold" fontSize="14px">
                $303.18m
              </Text>
            </Box>
            <Box className={`col-5`}>
              <Text color={textSubtle} fontSize="14px">
                Volume (24hrs) <BiDownArrowAlt color="red" size={18} />{" "}
              </Text>
              <Text m="0" fontWeight="bold" fontSize="14px">
                $303.18m
              </Text>
            </Box>
            <Box className={`col-4`}>
              <Text color={textSubtle} fontSize="14px">
                Volume (7D) <BiUpArrowAlt color="green" size={18} />{" "}
              </Text>
              <Text m="0" fontWeight="bold" fontSize="14px">
                $303.18m
              </Text>
            </Box>
          </Box>

          <Box className={`row mt-4 mb-2`}>
            <Flex className="col-8" alignItems="center">
              <Text color={textSubtle} fontSize="14px">
                Total deposits:
              </Text>
              <Text m="0" fontWeight="bold" fontSize="14px">
                $129,378,94
              </Text>
            </Flex>
            <Box className="col-4">
              <Button p="4px 10px" width="100%" height="40px">
                DEPOSIT
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

export default DepositCard;
