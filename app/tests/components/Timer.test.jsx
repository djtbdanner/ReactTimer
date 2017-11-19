var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Timer = require('Timer');

describe('Timer', () => {
  it('Should exist', () => {
    expect(Timer).toExist();
  });


  describe('Handle timer stuff', () => {
    // add done here because that one test takes a second to run
    it('Should set state to started and count up', (done) => {

      var timer = TestUtils.renderIntoDocument(<Timer/>);
      timer.handleStatusChange("started");
      expect(timer.state.timerStatus).toBe("started");
      expect(timer.state.count).toBe(0);

      setTimeout(() => {
        expect(timer.state.count).toBe(1);
        done();
      }, 1001);
    });
  });

});
