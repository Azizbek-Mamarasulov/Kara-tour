import React from "react";
import { StyleSheet, Text, TextProps } from "react-native";

interface AppTextProps extends TextProps {
  children: React.ReactNode;
  bold?: boolean;
}

export default function AppText({
  children,
  style,
  bold,
  ...props
}: AppTextProps) {
  return (
    <Text {...props} style={[styles.text, bold ? styles.bold : null, style]}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: "Roboto_400Regular",
    fontSize: 16,
    color: "#000",
  },
  bold: {
    fontFamily: "Roboto_700Bold",
  },
});
