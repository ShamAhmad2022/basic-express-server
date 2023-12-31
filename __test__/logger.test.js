'use strict';

const logger = require('../src/Middleware/logger');

describe('Logger Middleware', () => {

  let consoleSpy;
  const req = {};
  const res = {};
  const next = jest.fn();

  beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log').mockImplementation();
  })

  afterEach(() => {
    consoleSpy.mockRestore();
  })

  it('if console.log have been called', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalled();
  })
  
  it('Moving to the next function', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
    
  })
})