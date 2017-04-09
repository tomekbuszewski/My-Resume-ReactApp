import React from 'react';
import { shallow } from 'enzyme';

import Button from './index';

it ('[React stateless] Renders correctly', () => {
  const component = shallow(
    <Button
      label="Test"
      onClick={() => { return false; }}
    />
  );

  expect(component.text()).toEqual('Test')
});