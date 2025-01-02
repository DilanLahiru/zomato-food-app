import {
  View,
  Text,
  SectionList,
  NativeSyntheticEvent,
  NativeScrollEvent,
  ViewToken,
} from 'react-native';
import React, {FC, useRef, useState} from 'react';
import ExploreSection from '@components/home/ExploreSection';
import ResturentList from './ResturentList';
import {useStyles} from 'react-native-unistyles';
import {restaurantStyles} from '@unistyles/restuarantStyles';
import {useSharedState} from '@features/tabs/SharedContext';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';
import BackToTopButton from '@components/ui/BackToTopButton';

const sectionData = [
  {title: 'Explore', data: [{}], renderItem: () => <ExploreSection />},
  {title: 'Resturent', data: [{}], renderItem: () => <ResturentList />},
];

const MainList: FC = () => {
  const {styles} = useStyles(restaurantStyles);
  const {scrollY, scrollToTop, scrollYGloble} = useSharedState();
  const previousScrollyTopButton = useRef<number>(0);
  const prevScrollY = useRef(0);
  const sectionListRef = useRef<SectionList>(null);

  const [isResturentVisible, setIsResturentVisible] = useState(false);
  const [isNearEnd, setIsNearEnd] = useState(false);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const currentScrollY = event?.nativeEvent?.contentOffset?.y;
    const isScrollingDown = currentScrollY > prevScrollY.current;

    scrollY.value = isScrollingDown
      ? withTiming(1, {duration: 300})
      : withTiming(0, {duration: 300});

      scrollYGloble.value = currentScrollY
      prevScrollY.current = currentScrollY

    const containerHeight = event.nativeEvent.contentSize.height;
    const layoutHeight = event?.nativeEvent?.layoutMeasurement?.height;
    const offset = event?.nativeEvent.contentOffset.y;

    setIsNearEnd(offset + layoutHeight >= containerHeight - 500);
  };

  const handleScrollToTop = async () => {
    scrollToTop();
    sectionListRef.current?.scrollToLocation({
      sectionIndex: 0,
      itemIndex: 0,
      animated: true,
      viewPosition: 0,
    });
  };

  const backToTopStyle = useAnimatedStyle(() => {
    const isScrollingUp =
      scrollYGloble?.value < previousScrollyTopButton.current &&
      scrollYGloble.value > 180;
    const opacity = withTiming(
      isScrollingUp && (isResturentVisible || isNearEnd) ? 1 : 0,
      {duration: 300},
    );
    const translateY = withTiming(
      isScrollingUp && (isResturentVisible || isNearEnd) ? 0 : 10,
      {duration: 300},
    );

    previousScrollyTopButton.current = scrollYGloble.value;

    return {
      opacity,
      transform: [{translateY}],
    };
  });

  const viewabilityConfig = {
    viewAreaCoveragePercentThreshold: 80,
  };

  const onViewbleItemsChanged = ({
    viewableItems,
  }: {
    viewableItems: Array<ViewToken>;
  }) => {
    const resturentVisible = viewableItems.some(
      item => item?.section?.title === 'Resturents' && item?.isViewable,
    );
    setIsResturentVisible(resturentVisible);
  };
  return (
    <>
    <Animated.View style={[styles.backToTopButton, backToTopStyle]}>
      <BackToTopButton onPress={handleScrollToTop}/>
      </Animated.View> 
      <SectionList
        sections={sectionData}
        overScrollMode="always"
        onScroll={handleScroll}
        scrollEventThrottle={16}
        bounces={false}
        renderSectionHeader={({section}) => {
          if (section.title !== 'Resturents') {
            return null
          }
          return (
            <Animated.View style={[isResturentVisible || isNearEnd ? styles.shadowBottom : null]}>

              </Animated.View>
          )
        }}
        nestedScrollEnabled
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.listContainer}
        stickySectionHeadersEnabled={true}
        viewabilityConfig={viewabilityConfig}
        onViewableItemsChanged={onViewbleItemsChanged}
      />
    </>
  );
};

export default MainList;
