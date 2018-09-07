import React from 'react';
import PropTypes from 'prop-types';
import { RkCalendarView } from '../common/rkCalendarView.component';
import { RkCalendarMonthComponent } from './rkCalendarMonth.component';
import { RkCalendarYearComponent } from './rkCalendarYear.component';
import { RkCalendarDayComponent } from './rkCalendarDay.component';
import * as RkCalendarService from '../services/index';

export class RkCalendar extends React.Component {
  static propTypes = {
    min: PropTypes.instanceOf(Date).isRequired,
    max: PropTypes.instanceOf(Date).isRequired,
    boundingMonth: PropTypes.bool,
    filter: PropTypes.func,
    renderDay: PropTypes.func,
    onSelect: PropTypes.func,
  };
  static defaultProps = {
    boundingMonth: true,
    renderDay: undefined,
    filter: (() => true),
    onSelect: (() => null),
  };

  state = {
    selected: RkCalendarService.Date.today(),
  };

  onDaySelect = (date) => {
    this.setState({ selected: date });
    this.props.onSelect(date);
  };

  render = () => (
    <RkCalendarView
      dayComponent={RkCalendarDayComponent}
      monthComponent={RkCalendarMonthComponent}
      yearComponent={RkCalendarYearComponent}
      min={this.props.min}
      max={this.props.max}
      selected={this.state.selected}
      boundingMonth={this.props.boundingMonth}
      renderDay={this.props.renderDay}
      filter={this.props.filter}
      onSelect={this.onDaySelect}
    />
  );
}