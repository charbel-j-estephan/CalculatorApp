import React, { FC } from 'react';
import {
  Dimensions,
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
const { width } = Dimensions.get('screen');
const btnRatio = 4;
const btnWidth = width / btnRatio;
interface Props {
  style?: StyleProp<ViewStyle>;
  title: string;
  onPress?(): void;
}

const CalcButton: FC<Props> = props => {
  return (
    <TouchableOpacity
      style={[styles.buttonWrapper, props.style]}
      onPress={props.onPress}
    >
      <Text style={styles.buttonText}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
  },
});

export default CalcButton;
