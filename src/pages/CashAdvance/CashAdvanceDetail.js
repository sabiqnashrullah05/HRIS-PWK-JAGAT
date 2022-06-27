import {View, Text, Image} from 'react-native';
import React from 'react';
import {COLORS, images} from '../../constant';
import {Header, TextBody, TextTitle} from '../../components';

const {Resi} = images;

const CashAdvanceDetail = () => {
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white2}}>
      <Header title="Detail Cash Advance" />
      <View style={{paddingHorizontal: 24}}>
        <View style={{alignItems: 'flex-end', marginTop: 35}}>
          <TextBody
            style={{color: COLORS.black}}
            title="Cash Advance Nominal"
          />
          <TextTitle title="Rp. 100.000" />
        </View>
        <TextBody style={{marginTop: 17, marginBottom: 10}} title="Detail" />
        <View
          style={{
            paddingVertical: 10,
            backgroundColor: COLORS.white,
            borderRadius: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderBottomColor: COLORS.lightGray2,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: COLORS.black}} title="Date of Use" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody title="27/02.2022" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderBottomColor: COLORS.lightGray2,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: COLORS.black}} title="Policy Name" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody title="Uli Ahda Raihan" />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              borderBottomWidth: 1,
              paddingVertical: 12,
              paddingHorizontal: 20,
              borderBottomColor: COLORS.lightGray2,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: COLORS.black}} title="Reason" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <TextBody
                style={{textAlign: 'right'}}
                title="Pembayaran mengenai barang kantor"
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 12,
              paddingHorizontal: 20,
            }}>
            <View style={{flex: 1}}>
              <TextBody style={{color: COLORS.black}} title="Attachment" />
            </View>
            <View style={{flex: 1, alignItems: 'flex-end'}}>
              <Image source={Resi} style={{width: 115, height: 115}} />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CashAdvanceDetail;
