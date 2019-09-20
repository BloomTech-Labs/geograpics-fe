import React from 'react';
import toJson from 'enzyme-to-json';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import App from './App';
import Map from './components/Map';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('Map', () => {
  it('displays map starting point based on attribute data', () => {
    const map = shallow(
      <Map 
        pictureInfo = "This is picture info"
      />
    )
    expect(map.find().pictureInfo()).toBe('This is picture info');
    pictureInfo.setProps({ pictureInfo: "New picture info" })
    expect(map.find().pictureInfo()).toBe('New picture info')
  })
})
