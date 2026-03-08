import { render } from '@testing-library/react-native';

import { AppProviders } from '@/contexts/AppProviders';
import IconButton from '@/components/IconButton';

describe('IconButton component', () => {
  test('IconButton renders correctly', () => {
    const tree = render(
      <AppProviders>
        <IconButton icon={'check'} />
      </AppProviders>,
    );

    expect(tree).toMatchSnapshot();
  });
});
