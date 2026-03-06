import { render } from '@testing-library/react-native';

import { AppProviders } from '@/contexts/AppProviders';
import Button from '@/components/Button';

describe('Button component', () => {
  test('Button renders correctly', () => {
    const text = 'vampire';

    const tree = render(
      <AppProviders>
        <Button label={text} />
      </AppProviders>,
    );

    expect(tree.getByText(text)).toBeVisible();
    expect(tree).toMatchSnapshot();
  });
});
