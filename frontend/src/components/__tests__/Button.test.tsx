import { render } from '@testing-library/react-native';

import Button from '@/components/Button';

describe('Button component', () => {
  test('Button renders correctly', () => {
    const text = 'vampire';

    const tree = render(<Button label={text} />);

    expect(tree.getByText(text)).toBeVisible();
    expect(tree).toMatchSnapshot();
  });
});
