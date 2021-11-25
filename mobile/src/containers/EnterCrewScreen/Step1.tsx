import React from 'react';
import { StyleSheet, View } from 'react-native';

import { GRAY1, GRAY2, GRAY3, GRAY4 } from 'theme/Colors';
import Text from 'components/Text';
import SvgIcon from 'components/SvgIcon';
import { image } from 'assets/svg/icons';
import LineTextInput from 'components/LineTextInput';
import { MemberProfile } from 'types';

type MemberCategory = {
  categoryId: number;
  categoryName: string;
};

interface Props {
  memberCategories: MemberCategory[];
  setUserInfo: React.Dispatch<React.SetStateAction<MemberProfile>>;
  userInfo: MemberProfile;
}

const Step1 = ({ memberCategories, setUserInfo, userInfo }: Props) => {
  const onChangeText = (text: string, name: string) => {
    setUserInfo({
      ...userInfo,
      [name]: text,
    });
  };

  return (
    <>
      <View style={{ paddingTop: 20, alignItems: 'center' }}>
        <View style={styles.circle}>
          <SvgIcon xml={image} fill={GRAY3} width={24} />
        </View>
      </View>
      <View style={styles.paddingWidth}>
        <LineTextInput
          style={{ textAlign: 'center' }}
          fontType={'BOLD_18'}
          placeholder={'이름'}
          limit={20}
          maxLength={20}
          name={'name'}
          onChangeText={onChangeText}
        />
      </View>
      <View style={styles.paddingWidth}>
        <LineTextInput
          multiline
          placeholder={'소개를 입력해주세요'}
          limit={60}
          maxLength={60}
          title={'description'}
          name={'description'}
          onChangeText={onChangeText}
        />
      </View>
      <View style={styles.paddingWidth}>
        <Text fontType={'REGULAR_12'} color={GRAY2}>
          회원분류
        </Text>
        <View style={styles.categoryList}>
          {memberCategories.map((category) => (
            <View key={category.categoryId} style={styles.categoryItem}>
              <Text fontType={'REGULAR_14'} color={GRAY1}>
                {category.categoryName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  paddingWidth: {
    paddingTop: 40,
    width: '100%',
  },
  circle: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: GRAY4,
    borderRadius: 100,
  },
  categoryList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  categoryItem: {
    alignSelf: 'center',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 8,
    borderColor: GRAY3,
    borderWidth: 1,
    marginRight: 10,
    marginBottom: 10,
  },
});

export default Step1;