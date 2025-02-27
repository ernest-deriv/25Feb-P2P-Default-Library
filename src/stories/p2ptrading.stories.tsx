import P2PTrading from "@/components/p2p/P2PTrading";

export const Default = {
  title: "P2P/P2PTrading",
  component: P2PTrading,
  parameters: {
    layout: "fullscreen",
  },
  render: (args: any) => <P2PTrading {...args} />,
};
