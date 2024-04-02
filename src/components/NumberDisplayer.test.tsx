import { render } from '@testing-library/react';

import { NumberDisplayer } from './NumberDisplayer';

it('balance should display well', () => {
  expect(render(<NumberDisplayer text="0.000000180813661601" />).container).toMatchSnapshot();
});
it('bignumber should be transform automatically', () => {
  expect(render(<NumberDisplayer text="3368437500000000" />).container).toMatchSnapshot();
});
it('integer should be append two zero to tail', () => {
  expect(render(<NumberDisplayer text="3" />).container).toMatchSnapshot();
});
it('if interger part great than 1, decimal part should have 2 decimals', () => {
  expect(render(<NumberDisplayer text="3.145" />).container).toMatchSnapshot();
});
it('if interger part less than 1, decimal part should have 4 decimals', () => {
  expect(render(<NumberDisplayer text="0.145" />).container).toMatchSnapshot();
});
it('if interger part great than 1, decimal part should round into 4 decimals', () => {
  expect(render(<NumberDisplayer text="0.14235" />).container).toMatchSnapshot();
});

it('should throw error if text is not string', () => {
  expect(() =>
    render(<NumberDisplayer text={3.14 as unknown as string} />)
  ).toThrowErrorMatchingSnapshot();
});
