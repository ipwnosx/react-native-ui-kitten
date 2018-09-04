import React from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
} from 'react-native';
import { RkStyleSheet } from '../../styles/styleSheet';
import LocaleService from './services/locale.service';

export class RkCalendarDaysNames extends React.Component {
  static propTypes = {
    /**
     * day of week component style prop describing width of cell,
     * regularly is the same as rkCalendarDay component daySize prop.
     */
    daySize: PropTypes.number.isRequired,
  };

  dayOfWeekNames = LocaleService.getDayOfWeekNames();

  getChildComponents = () => this.dayOfWeekNames.map(this.renderDayOfWeek);

  renderDayOfWeek = (item) => (
    <Text
      style={[styles.text, { width: this.props.daySize }]}>
      {item.toUpperCase()}
    </Text>
  );

  render = () => (
    <View style={styles.container}>{this.getChildComponents()}</View>
  );
}

const styles = RkStyleSheet.create(theme => ({
  container: {
    flexDirection: 'row',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontSize: theme.fonts.sizes.base,
    color: theme.colors.text.subtitle,
  },
}));

