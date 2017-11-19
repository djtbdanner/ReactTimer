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
        expect(timer.state.timerStatus).toBe("started");
        done();
      }, 1001);
    });
  });

  it('Should set pause not count up', (done) => {

    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:10});
      timer.handleStatusChange("started");
    timer.handleStatusChange("paused");
    expect(timer.state.count).toBe(10);

    setTimeout(() => {
      expect(timer.state.count).toBe(10);
      expect(timer.state.timerStatus).toBe("paused");
      done();
    }, 1001);
  });

  it('Should reset to 0 on stopped', (done) => {

    var timer = TestUtils.renderIntoDocument(<Timer/>);
    timer.setState({count:10});
    timer.handleStatusChange("started");
    expect(timer.state.count).toBe(10);
    timer.handleStatusChange("stopped");
    setTimeout(() => {
      expect(timer.state.count).toBe(0);
      expect(timer.state.timerStatus).toBe("stopped");
      done();
    }, 1001);
  });

});
