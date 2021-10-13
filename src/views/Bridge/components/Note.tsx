import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { AiFillInfoCircle } from "react-icons/ai";
import { theme } from "theme";

const Note: React.FC<{ text: string }> = (props: { text: string }) => {
  const { textSubtle } = theme.colors;
  const { text } = props;
  return (
    <Flex mt="3rem" borderRadius="13px" p="1rem" background={textSubtle}>
      <Box>
        <AiFillInfoCircle color="white" size={32} />
      </Box>
      <Box p="0.4rem">
        <Text color="white">{text}</Text>
      </Box>
    </Flex>
  );
};

export default Note;
