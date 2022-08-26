/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
// import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import ColorMode from './src/theme/ColorMode';

import Icon from 'react-native-vector-icons/FontAwesome';
// import Icon from 'react-native-vector-icons/AntDesign';

// const Section = ({children, title}): Node => {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// };

import {Provider as PaperProvider} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // console.log('>>>', useColorScheme());
  const mode = useColorScheme();

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  const {
    darker: darkerblue,
    dark: darkblue,
    light: lightblue,
    lighter: lighterblue,
    font,
  } = ColorMode(mode, 'blue');

  console.log('>>>', darkerblue, darkerblue, lightblue, lighterblue, font);
  const [text, setText] = React.useState('');
  return (
    <PaperProvider>
      <View
        style={{
          backgroundColor: darkerblue,
          height: 100,
          justifyContent: 'center',
          padding: 30,
          flex: 1,
        }}>
        <Text style={{fontSize: 30, color: font, fontWeight: '800'}}>
          Create Account
        </Text>
        <View style={{padding: 10}}>
          <Icon name={'home'} size={30} color="black" />
          <TextInput
            label="Email"
            value={text}
            onChangeText={text => setText(text)}
          />
        </View>
      </View>
    </PaperProvider>
  );
};

export default App;
