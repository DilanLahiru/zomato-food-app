import {View, Text, Dimensions} from 'react-native';
import React, {FC} from 'react';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {useAppSelector} from '@states/reduxHook';
import {useSharedState} from './SharedContext';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useStyles} from 'react-native-unistyles';
import {tabStyles} from '@unistyles/tabStyles';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import ScalePress from '@components/ui/ScalePress';
import {
  DeliveryTabIcon,
  DiningTabIcon,
  LiveTabIcon,
  ReorderTabIcon,
} from './TabIcon';

export const screenWidth = Dimensions.get('screen').width

const CustomTabBar: FC<BottomTabBarProps> = props => {
  const isVegMode = useAppSelector(state => state.user.isVegMode);
  const {scrollY} = useSharedState();

  const {state, navigation} = props;
  const bottom = useSafeAreaInsets();

  const {styles} = useStyles(tabStyles);
  const isLiveTabFocused = state.routes[state.index]?.name === 'Live';

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY:
            scrollY.value === 1
              ? withTiming(100, {duration: 300})
              : withTiming(0, {duration: 300}),
        },
      ],
    };
  });

  const indicatorStyle = useAnimatedStyle(() => {
    const baseleft = 10;
    const slideValue = state.index === 3 ? 0.23 : 0.24;

    return {
      left: withTiming(baseleft + (state.index * screenWidth * slideValue))
    }
  })
  return (
    <>
      <Animated.View
        style={[
          styles.tabBarContainer,
          animatedStyle,
          {
            paddingBottom: bottom.bottom,
            backgroundColor: isLiveTabFocused ? '#18171C' : '#fff',
          },
        ]}>
        <View style={styles.tabContainer}>
          {state?.routes?.map((route, index) => {
            const isFocused = state.index === index;
            
            const onPress = () => {
              const event = navigation.emit({
                type: 'tabPress',
                target: route?.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route?.name);
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route?.key,
              });
            };
            return (
              <ScalePress
                onPress={onPress}
                onLongPress={onLongPress}
                key={index}
                style={[
                  styles.tabItem,
                  isFocused ? styles.focusedTabItem : {},
                ]}>
                {route?.name === 'Delivery' && (
                  <DeliveryTabIcon focused={isFocused} />
                )}
                {route?.name === 'Reorder' && (
                  <ReorderTabIcon focused={isFocused} />
                )}
                {route?.name === 'Dining' && (
                  <DiningTabIcon focused={isFocused} />
                )}
                {route?.name === 'Live' && <LiveTabIcon focused={isFocused} />}
              </ScalePress>
            );
          })}
          <View style={styles.verticalLine}></View>
        </View>
        <Animated.View style={[styles.slidingIndicator, indicatorStyle, {
          backgroundColor: isLiveTabFocused ? '#fff' : isVegMode ? '#019A51' : '#E23744'
        }]}/>
      </Animated.View>
    </>
  );
};

export default CustomTabBar;