import { Prism } from "@mantine/prism";

interface CodeProps {
  storeCode: string;
  componentCode: string;
}

export const Code = ({ storeCode, componentCode }: CodeProps) => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Prism.Tabs>
        <Prism.Tab noCopy label="store" language="tsx">
          {storeCode}
        </Prism.Tab>
        <Prism.Tab noCopy label="component" language="tsx">
          {componentCode}
        </Prism.Tab>
      </Prism.Tabs>
    </div>
  );
};
