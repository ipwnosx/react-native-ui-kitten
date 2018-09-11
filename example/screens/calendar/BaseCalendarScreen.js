import React from 'react';
import { View } from 'react-native';
import {
  RkCalendar,
  RkStyleSheet,
} from 'react-native-ui-kitten';

export class BaseCalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Base Calendar',
  };

  getBounds = () => {
    const min = new Date(2018, 1, 1);
    return {
      min,
      max: new Date(min.getFullYear() + 1, min.getMonth(), min.getDate()),
    };
  };

  render = () => {
    const bounds = this.getBounds();
    return (
      <View style={styles.container}>
        <RkCalendar
          min={bounds.min}
          max={bounds.max}
        />
      </View>
    );
  };
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 8,
  },
}));
