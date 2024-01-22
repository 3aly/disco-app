import { View, Text } from "react-native";
import React, { useEffect, useRef, useState } from "react";
import styles from "./TransactionsHeader.styles";
import { useSpring, animated } from "react-spring"; // Animation library

const TransactionsHeader = ({ title }: { title: string }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default TransactionsHeader;
