import {View, ScrollView} from 'react-native';
import React from 'react';
import {COLORS, icons} from '../../constant';
import {Button, Header, TextField} from '../../components';

const {Attachment, CalenderBlack} = icons;

const ReimbursmentRequest = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <Header title="Request Reimbursment" />
      <ScrollView contentContainerStyle={{paddingHorizontal: 24}}>
        <TextField
          label="Date"
          placeholder="Select date"
          styleContainer={{marginTop: 40}}
          editable={false}
          iconRight={<CalenderBlack />}
        />
        <TextField
          label="Reason"
          placeholder="Your reason"
          numberOfLines={3}
          styleContainer={{marginTop: 20}}
        />
        <TextField
          label="Nominal"
          placeholder="Rp"
          styleContainer={{marginTop: 20}}
        />
        <TextField
          editable={false}
          label="Attachment"
          placeholder="Choose File"
          styleContainer={{marginTop: 20}}
          iconRight={<Attachment />}
        />

        <Button styleContainer={{marginTop: 60}} title="Submit" />
        <Button secondary styleContainer={{marginTop: 12}} title="Cancel" />
      </ScrollView>
    </View>
  );
};

export default ReimbursmentRequest;
