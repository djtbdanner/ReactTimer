var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountdownForm = require('CountdownForm');

describe('CountdownForm', () => {
  it('Should exist', () => {
    expect(CountdownForm).toExist();
  });

  it('Should call onCountdown if valid data entered', () => {
    var spy = expect.createSpy();
    // injecting the spy into the method
    var countdownform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    // convert to jQuery
  //  alert(ReactDOM.findDOMNode(countdownform));
    var $el = $(ReactDOM.findDOMNode(countdownform));

    countdownform.refs.seconds.value = 109;
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(109);
  });


  it('Should not onCountdown if invalidvalid data entered', () => {
    var spy = expect.createSpy();
    // injecting the spy into the method
    var countdownform = TestUtils.renderIntoDocument(<CountdownForm onSetCountdown={spy}/>);
    // convert to jQuery
  //  alert(ReactDOM.findDOMNode(countdownform));
    var $el = $(ReactDOM.findDOMNode(countdownform));

    countdownform.refs.seconds.value = "rabbit";
    TestUtils.Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
