import React from 'react';
import ReactDOM from 'react-dom';
import SocialJSApp from "./App";

it('render without crashing', () => {
const div = document.createElement('div');
ReactDOM.render(<SocialJSApp/>, div);
ReactDOM.unmountComponentAtNode(div);
});
