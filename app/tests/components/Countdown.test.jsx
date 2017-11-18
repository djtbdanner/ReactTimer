var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Countdown = require('Countdown');

describe('Countdown', () => {
  it('Should exist', () => {
    expect(Countdown).toExist();
  });

  describe('handleCountDown stuff', () => {
    // add done here because that one test takes a second to run
    it('Should set state to started and countdown', (done) => {
      var spy = expect.createSpy();
      // injecting the spy into the method
      var countdown = TestUtils.renderIntoDocument(<Countdown startTimer={spy}/>);
      countdown.handleSetCountdown(10);
      expect(countdown.state.countdownStatus).toBe("started");
      expect(countdown.state.count).toBe(10);

      setTimeout(() => {
        expect(countdown.state.count).toBe(9);
        done();
      }, 1001);
      //expect(spy).toHaveBeenCalled();
    });

    // add done here because that one test takes a second to run
    it('Should not count down to less than 0', (done) => {
      var spy = expect.createSpy();
      // injecting the spy into the method
      var countdown = TestUtils.renderIntoDocument(<Countdown startTimer={spy}/>);
      countdown.handleSetCountdown(1);
      expect(countdown.state.countdownStatus).toBe("started");
      expect(countdown.state.count).toBe(1);

      setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
      }, 2001);
      //expect(spy).toHaveBeenCalled();
    });
  });

});
