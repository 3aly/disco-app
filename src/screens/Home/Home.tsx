import { View, Text } from "react-native";
import React, { useState } from "react";
import styles from "./Home.styles";
import { TopTabs } from "@components/organisms";
import { Header } from "@components/molecules";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handlePress = (_: string, id: number) => {
    setSelectedTab(id);
  };
  console.log("selectedTab", selectedTab);

  return (
    <View style={styles.container}>
      <Header />
      <TopTabs
        onPressFn={handlePress}
        initialTab={0}
        activeTab={selectedTab}
        Tabs={[
          {
            id: 0,
            name: "All",
          },
          {
            id: 1,
            name: "Personal",
          },
          {
            id: 2,
            name: "Work",
          },
        ]}
      />
      {selectedTab === 0 && <Text>first tab</Text>}
      {selectedTab === 1 && <Text>second tab</Text>}
      {selectedTab === 2 && <Text>third tab</Text>}
    </View>
  );
};

export default Home;
