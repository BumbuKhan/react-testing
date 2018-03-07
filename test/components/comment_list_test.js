import {renderComponent, expect} from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('Comment list', () => {
  let component;

  beforeEach(() => {
    const props = {
      comments: ['New comment', 'Another comment']
    };

    component = renderComponent(CommentList, null, props);
  });

  it('shows every comment in li tag', () => {
    expect(component.find('li').length).to.equal(2);
  });

  it('shows each comment that is provided', () => {
    expect(component).to.contain('New comment');
    expect(component).to.contain('Another comment');
  });
});
