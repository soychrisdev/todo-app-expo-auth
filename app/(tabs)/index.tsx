import { ScrollView, ScrollViewBase, StyleSheet, Text, View } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context';

export const Home = () => {
  const items = Array.from({ length: 100 }, (_, index) => `Item ${index + 1}`);
  return (
    <SafeAreaView >
      <ScrollView style={{
        backgroundColor: 'blue',
        // flex: 1,
        // height: 1,
        // maxHeight: 1,
        // width: '100%',
        // height: '100%',
      
      }}>

      {items.map((item) => (
        <>
        
        <View key={item} style={{ flex: 1, backgroundColor: 'green'}}>
          <Text >AKJSKASDJKSA </Text>
        </View>
        </>
      ))}
      </ScrollView>
      
      
    </SafeAreaView>
  )
}
export default Home

const styles = StyleSheet.create({ container: {
  flex: 1,
  // backgroundColor: '#fff',
  height: '100%',
  backgroundColor: 'red',
  // alignItems: 'center',
  justifyContent: 'center',
},

}); 