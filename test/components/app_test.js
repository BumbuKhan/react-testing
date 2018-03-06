import {renderComponent, expect} from '../test_helper';
import App from '../../src/components/app';


// for grouping similar tests together
describe('App', () => {
  // testing a single attribute of a target
  it('shows the correct text', () => {
    const component = renderComponent(App);

    // for making an assertion about the target
    expect(component).to.contain('React simple starter');
  })
});
