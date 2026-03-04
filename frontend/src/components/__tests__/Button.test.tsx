import { render } from '@testing-library/react-native';

import Button from '@/components/Button';

describe('Button component', () => {
  test('Button renders correctly', () => {
    const text = 'vampire';

    const { getByText } = render(<Button label={text}/>);

    getByText(text);
  });
});
