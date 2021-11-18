import React, { useState } from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

import Text from 'components/Text';
import { WHITE, BLACK, GRAY2, LINE } from 'theme/Colors';

interface Props extends ViewProps {
  items: string[];
  onIndexChange: (index: number) => void;
  defaultIndex?: number;
}

const TopFilterBar = ({ children, items, defaultIndex = 0, onIndexChange }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(defaultIndex);

  return (
    <View style={styles.topTabBar}>
      <View style={styles.topTabBarFilter}>
        {items.map((item, index) => (
          <Text
            key={index}
            fontType={'BOLD_14'}
            style={{ marginRight: 20 }}
            color={selectedIndex === index ? BLACK : GRAY2}
            onPress={() => {
              onIndexChange(index);
              setSelectedIndex(index);
            }}>
            {item}
          </Text>
        ))}
      </View>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  topTabBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderBottomColor: LINE,
    borderBottomWidth: 1,
    backgroundColor: WHITE,
    marginBottom: 8,
  },
  topTabBarFilter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: WHITE,
  },
});

export default TopFilterBar;