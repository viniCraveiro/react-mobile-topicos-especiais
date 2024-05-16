import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

type Props = {
  headerText: string;
};

const Header = (props: Props) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.headerText}>{props.headerText}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#007bff',
    height: 80,
    justifyContent: 'center',
    flex: 1,
  },
  headerText: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
});

export default Header;
