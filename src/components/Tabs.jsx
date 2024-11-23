import { useState } from "react";

import TabButton from "./TabButton/TabButton";
import TabContent from "./TabContent";
import { EXAMPLES } from "../data-with-examples";

export default function Tabs({ buttonsContainer = "div" }) {
  const [selectedValue, setselectedValue] = useState(null);
  const ButtonContainer = buttonsContainer;

  function handleClick(selectedButton) {
    setselectedValue(selectedButton);
  }

  return (
    <>
      <ButtonContainer>
        {Object.keys(EXAMPLES).map((tabName, index) => (
          <TabButton
            key={index}
            isSelected={selectedValue === tabName}
            onClick={() => handleClick(tabName)}
          >
            {EXAMPLES[tabName].title}
          </TabButton>
        ))}
      </ButtonContainer>
      <TabContent content={EXAMPLES[selectedValue]} />
    </>
  );
}
