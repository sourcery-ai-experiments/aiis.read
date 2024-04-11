import { render } from '@testing-library/react';

import { NumberDisplayer } from './NumberDisplayer';

it('bignumber should work well', () => {
  expect(render(<NumberDisplayer text="3368437500000000" />).container).toMatchSnapshot();
});
it('integer should be append two zero to tail', () => {
  expect(render(<NumberDisplayer text="3000000000000000000" />).container).toMatchSnapshot();
});
it('if interer part great than 1, decimal part should have 2 decimals', () => {
  expect(render(<NumberDisplayer text="3145000000000000000" />).container).toMatchSnapshot();
});
it('if integer part less than 1, decimal part should have 4 decimals', () => {
  expect(render(<NumberDisplayer text="145000000000000000" />).container).toMatchSnapshot();
});
it('if decimal part less than 0.0001, decimal part should round into 4 decimals', () => {
  expect(render(<NumberDisplayer text="000000000012455" />).container).toMatchSnapshot();
});

it('should throw error if text is not string', () => {
  expect(() =>
    render(<NumberDisplayer text={3.14 as unknown as string} />)
  ).toThrowErrorMatchingSnapshot();
});
