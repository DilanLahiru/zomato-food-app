import {View, Text, Image} from 'react-native';
import React, {FC} from 'react';
import {useStyles} from 'react-native-unistyles';
import {restaurantStyles} from '@unistyles/restuarantStyles';
import ScalePress from '@components/ui/ScalePress';
import {navigate} from '@utils/NavigationUtils';
import CustomText from '@components/global/CustomText';
import StarRating from '@components/ui/StarRating';

const ResturentCard: FC<{item: any}> = ({item}) => {
  const {styles} = useStyles(restaurantStyles);
  return (
    <ScalePress
      onPress={() => {
        navigate('ResturentScreen', {
          item: item,
        });
      }}>
      <View style={styles.card}>
        <View>
          <Image source={{uri: item?.imageUrl}} style={styles.image} />
        </View>
        <View style={styles.info}>
          <View style={styles.textContainer}>
            <View style={styles.textPart}>
              <CustomText
                variant="h5"
                style={styles.name}
                numberOfLine={1}
                fontFamily="Okra-Bold">
                {item?.name}
              </CustomText>
              <CustomText>
                {item?.time} . {item?.distance} . Rs. 150 for one
              </CustomText>
            </View>
            <StarRating rating={item?.rating}/>
          </View>
        </View>
      </View>
    </ScalePress>
  );
};

export default ResturentCard;
