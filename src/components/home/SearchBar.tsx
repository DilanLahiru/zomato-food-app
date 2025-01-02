import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import {useAppDispatch, useAppSelector} from '@states/reduxHook';
import {useStyles} from 'react-native-unistyles';
import {homeStyles} from '@unistyles/homeStyles';
import {useSharedState} from '@features/tabs/SharedContext';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';
import Icon from '@components/global/Icons';
import RollingContent from 'react-native-rolling-bar';
import CustomText from '@components/global/CustomText';
import {setVegMode} from '@states/reducers/userSlice';

const searchItem: string[] = [
  'Search "chai samosa"',
  'Search "Cake"',
  'search "ice cream"',
  'search "pizza"',
  'search "Biryani"',
];

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const isVegMode = useAppSelector(state => state.user.isVegMode);
  const {styles} = useStyles(homeStyles);
  const {scrollYGloble} = useSharedState();

  const textColorAnimation = useAnimatedStyle(() => {
    const textColor = interpolate(scrollYGloble.value, [0, 80], [255, 0]);
    return {
      color: `rgb(${textColor}, ${textColor}, ${textColor})`,
    };
  });
  return (
    <>
      <SafeAreaView />
      <View style={[styles.flexRowBetween, styles.padding]}>
        <TouchableOpacity
          style={styles.searchInputContainer}
          activeOpacity={0.8}>
          <Icon
            iconFamily="Ionicons"
            name="search"
            color={isVegMode ? '#019A51' : '#E23744'}
            size={18}
          />
          <RollingContent
            interval={3000}
            defaultStyle={false}
            customStyle={styles.textContainer}>
            {searchItem.map((item, i) => {
              return (
                <CustomText
                  fontSize={12}
                  fontFamily="Okra-Medium"
                  key={i}
                  style={styles.rollingText}>
                  {item}
                </CustomText>
              );
            })}
          </RollingContent>
          <Icon
            iconFamily="Ionicons"
            name="mic-outline"
            color={isVegMode ? '#019A51' : '#E23744'}
            size={18}
          />
        </TouchableOpacity>
        
        <Pressable
          style={styles.vegMode}
          onPress={() => dispatch(setVegMode(!isVegMode))}>
          <Animated.Text style={[textColorAnimation, styles.animatedText]}>
            VEG
          </Animated.Text>
          <Animated.Text style={[textColorAnimation, styles.animatedSubText]}>
            MODE
          </Animated.Text>
          <Image
            source={
              isVegMode
                ? require('@assets/icons/switch_on.png')
                : require('@assets/icons/switch_off.png')
            }
            style={styles.switch}
          />
        </Pressable>
      </View>
    </>
  );
};

export default SearchBar;
