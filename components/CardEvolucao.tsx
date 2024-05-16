import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import * as React from 'react';

type props = {
  uriImagem: string;
  titleText: string;
  pageName: string;
  navigation?: any;
};

export default function CardEvolucao(props: props) {


  return (
    <>
      <TouchableOpacity
        onPress={() => props.navigation.navigate(props.pageName,  {'name': props.pageName.toLowerCase()})}>
        <View style={styles.touchableArea} />

        <View style={styles.cardContainerImage}>
          <Image
            style={styles.imageCard}
            source={{
              uri: props.uriImagem,
            }}
          />
          <Text style={styles.cardContainerImageText}>{props.titleText}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  cardContainerImage: {
    minHeight: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  cardContainerImageText: {
    fontWeight: 'bold',
  },
  imageCard: {
    width: 180,
    height: 180,
  },
  touchableArea: {
    backgroundColor: 'red',
  },
});
