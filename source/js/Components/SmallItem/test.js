import React from 'react';
import { shallow } from 'enzyme';

import SimpleItem from './index';

test('[React statefull] Renders then changes the state', () => {
  const item = shallow(
    <SimpleItem
      field="field"
      value="value"
      editable={false}
    />
  );

  item.find('input').simulate('change', { target: { value: 'New value' } });
  expect(item.state('value')).toEqual('New value')
});

test('[React statefull] Renders then don`t allow changes', () => {
  const item = shallow(
    <SimpleItem
      field="field"
      value="value"
      editable={true}
    />
  );

  item.find('input').simulate('change', { target: { value: 'New value' } });
  expect(item.state('value')).toEqual('value')
});