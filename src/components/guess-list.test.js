import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessList from './guess-list';

describe('<GuessList />', () => {
    it('Renders without crashing', () => {
        shallow(<GuessList guesses={[]} />);
    });

  it('Renders a list of guesses', () => {
    const values = [9, 78, 99];
    const wrapper = shallow(<GuessList guesses={values} />);
    const items = wrapper.find('li');
    expect(items.length).toEqual(values.length);
    values.forEach((value, index) => {
      expect(items.at(index).text()).toEqual(value.toString());
    });
  });
});
