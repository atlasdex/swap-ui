import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
import { Box, Flex } from "components/Box";
import { Text } from "components/Text";
import { Button } from "components/Button";
import Source from "./components/Source";
import Destination from "./components/Destination";
import Send from "./components/Send";
import Redeem from "./components/Redeem";

import { theme } from "theme";

interface StepBoxProps {
  title: string;
  description?: string;
  number: number;
  completed?: boolean;
}
const StepBox: React.FC<StepBoxProps> = (props: StepBoxProps) => {
  const { textSubtle } = theme.colors;
  const { number, title, description, completed } = props;
  return (
    <Flex
      justifyContent="flex-start"
      mb="1.5rem"
      alignItems="center"
      style={{ cursor: "pointer" }}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        width="40px"
        height="40px"
        borderRadius="50%"
        background={completed ? "#2FA837" : "white"}
      >
        {completed ? (
          <Flex>
            <AiOutlineCheck size={26} />
          </Flex>
        ) : (
          <Text color="#333">{number}</Text>
        )}
      </Flex>
      <Box ml="20px">
        <Text color="white" fontSize="22px" fontWeight="bold">
          {title}
        </Text>
        {description && completed && (
          <Text color={textSubtle} fontSize="14px">
            {description}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

const SwitchUIs = (id: number) => {
  switch (id) {
    case 1:
      return <Source />;
    case 2:
      return <Destination />;
    case 3:
      return <Send />;
    case 4:
      return <Redeem />;
  }
};

const Bridge: React.FC = () => {
  let [tab, setTab] = useState<number>(1);
  return (
    <>
      <Flex>
        <Box background="black" p="1rem" height="calc(100vh - 140px)">
          <StepBox
            number={1}
            title="Source"
            description="53 USDTs have been transferred!"
            completed={tab > 1}
          />
          <StepBox
            number={2}
            title="Destination"
            description="to 0x4fsadsd...2656 on Ethereum"
            completed={tab > 2}
          />

          <StepBox
            number={3}
            description="Tokens sent to 0x4fsadsd...2656"
            title="Send"
            completed={tab > 3}
          />
          <StepBox number={4} title="Redeem" completed={tab > 4} />
        </Box>

        <Box p="2rem 4rem">{SwitchUIs(tab)}</Box>
      </Flex>

      <Flex
        justifyContent="space-between"
        background="#E6E6E6"
        p="1rem"
        height="80px"
      >
        <Button onClick={() => setTab(--tab)} disabled={tab === 1}>
          Back
        </Button>
        <Button onClick={() => setTab(++tab)} disabled={tab === 4}>
          Next
        </Button>
      </Flex>
    </>
  );
};

export default Bridge;
