import { assert } from 'chai';
import { awesomeFunction } from '../src/awesomeModule';

// or import * as awesomeModule from '../src/awesomeModule';

describe('Example test', () => {
  it('tests my example function', () => {
    assert(awesomeFunction(1, 1) === 2, 'Not awesome :(');
  });
});
