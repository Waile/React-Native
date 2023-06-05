import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {useEffect} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

// '832741324989-n4k2vg5r4q4m1p1gu1pfk807qb635v7j.apps.googleusercontent.com'

const GoogleLogin = () => {
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '832741324989-n4k2vg5r4q4m1p1gu1pfk807qb635v7j.apps.googleusercontent.com',
      offlineAccess: true, // if you want to access user data while they are offline
    });
  }, []);
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      await GoogleSignin.signIn().then(result => {
        console.log(result);
      });
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('User cancelled the login flow !');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signin in progress');
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Google play services not available or outdated !');
        // play services not available or outdated
      } else {
        console.log(error);
      }
    }
  };
  return (
    <View>
      <GoogleSigninButton
        style={{width: 192, height: 48}}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={signIn}
      />
      <TouchableOpacity onPress={signIn}>
        <Text>Google</Text>
      </TouchableOpacity>
    </View>
  );
};

export default GoogleLogin;
