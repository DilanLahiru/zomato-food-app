import {View, Text, Platform} from 'react-native';
import React, {FC} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useStyles} from 'react-native-unistyles';
import {homeStyles} from '@unistyles/homeStyles';
import {useSharedState} from '@features/tabs/SharedContext';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import HeaderSection from '@components/home/HeaderSection';
import Graphics from '@components/home/Graphics';
import MainList from '@components/list/MainList';

const DeliveryScreen: FC = () => {
  const inset = useSafeAreaInsets();
  const {styles} = useStyles(homeStyles);
  const {scrollYGloble, scrollY} = useSharedState();

  const moveUpStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollYGloble.value,
      [0, 50],
      [0, -50],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{translateY: translateY}],
    };
  });

  const moveUpStyleNotExtrapolate = useAnimatedStyle(() => {
    const translateY = interpolate(scrollYGloble.value, [0, 50], [0, -50]);

    return {
      transform: [{translateY: translateY}],
    };
  });

  const backgroundColorChanges = useAnimatedStyle(() => {
    const opacity = interpolate(scrollYGloble.value, [1, 50], [0, 1]);
    return {
      backgroundColor: `rgba(255,255,255,${opacity})`,
    };
  });

  return (
    <View style={styles.container}>
      <View>
        <Animated.View style={[moveUpStyle]}>
          <Animated.View style={[moveUpStyleNotExtrapolate]}>
            <Graphics/>
          </Animated.View>
          <Animated.View style={[backgroundColorChanges, styles.topHeader]}>
            <HeaderSection />
          </Animated.View>
        </Animated.View>
        <Animated.View style={[moveUpStyle]}>
          <MainList/>
        </Animated.View>
      </View>
    </View>
  );
};

export default DeliveryScreen;
