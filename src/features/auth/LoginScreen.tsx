import {
  View,
  Text,
  StatusBar,
  Platform,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {FC, useState} from 'react';
import {useStyles} from 'react-native-unistyles';
import {loginStyles} from '@unistyles/authStyles';
import Animated from 'react-native-reanimated';
import CustomText from '@components/global/CustomText';
import BreakerText from '@components/ui/BreakerText';
import PhoneInput from '@components/ui/PhoneInput';
import SocialLogin from '@components/ui/SocialLogin';
import { resetAndNavigate } from '@utils/NavigationUtils';

const LoginScreen: FC = () => {
  const [phone, setPhone] = useState('');
  const [loading, setLoding] = useState(false);
  const {styles} = useStyles(loginStyles);

  const handleLogin = async () => {
    setLoding(true);
    setTimeout(() => {
        setLoding(false)
        resetAndNavigate('UserBottomTab')
    }, 2000);
  };

  return (
    <View style={styles.container}>
      <StatusBar hidden={Platform.OS !== 'android'} />
      <Image
        source={require('@assets/images/login.png')}
        style={styles.cover}
      />
      <Animated.ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={styles.bottomContainer}>
        <CustomText fontFamily="Okra-Bold" variant="h2" style={styles.title}>
          Sri lanka #1 Food Delivery and Dining App
        </CustomText>
        <BreakerText text="Log in or sign up" />
        <PhoneInput
          onFocus={() => {}}
          onBlur={() => {}}
          value={phone}
          onChangeText={setPhone}
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleLogin}
          activeOpacity={0.8}>
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText fontFamily="Okra-Medium" color="#fff" variant="h5">
              Continue
            </CustomText>
          )}
        </TouchableOpacity>
        <BreakerText text="or" />
        <SocialLogin/>
      </Animated.ScrollView>
      <View style={styles.footer}>
        <CustomText>By Continuing, you agree to our</CustomText>
        <View style={styles.footerTextContainer}>
          <CustomText style={styles.footerText}>Terms of Service</CustomText>
          <CustomText style={styles.footerText}>Privacy Policy</CustomText>
          <CustomText style={styles.footerText}>Content Policy</CustomText>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
