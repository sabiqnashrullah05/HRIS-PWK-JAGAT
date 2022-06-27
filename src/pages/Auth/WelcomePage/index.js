import {View, StatusBar} from 'react-native';
import React from 'react';
import {COLORS, images, icons} from '../../../constant';
import {Button, TextBody, TextHeader, TextTitle} from '../../../components';
const {ArrowRight} = icons;

const {Logo} = images;

const WelcomePage = ({navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <StatusBar translucent backgroundColor={'transparent'} />

      <View style={{alignItems: 'center', marginHorizontal: 24}}>
        <Logo />
        <TextHeader style={{marginTop: 100}} title="Welcome to HRIS" />
        <TextBody
          style={{textAlign: 'center', marginTop: 20}}
          title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque tellus tristique viverra cras amet at fringilla. Facilisi magna ultrices sed amet egestas augue rutrum."
        />
      </View>

      <Button
        styleContainer={{marginTop: 100, marginHorizontal: 24}}
        title="Get started"
        onPress={() => navigation.navigate('Intro')}
        iconRight={<ArrowRight />}
      />
    </View>
  );
};

export default WelcomePage;
