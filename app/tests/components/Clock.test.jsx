var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Clock = require('Clock');

describe('Clock', () => {
  it('Should exist', () => {
    expect(Clock).toExist();
  });

});

describe('render', () => {
  it('Should render clock to output', () => {
    var clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62}/>);
    // convert to jQuery
    alert(ReactDOM.findDOMNode(clock));
    var $el = $(ReactDOM.findDOMNode(clock));
    var actualText = $el.find('.clock-text').text();
    alert(actualText);
    expect(actualText).toBe("01:02");
  });
});

describe('Clock format', () => {

  it('Should format seconds.', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);

    var seconds = 615;
    var expected = "10:15";
    var actual = clock.formatSeconds(seconds);
    expect(actual).toBe(expected);
  });

  it('Should format seconds when seconds and minutes < 10.', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);

    var seconds = 62;
    var expected = "01:02";
    var actual = clock.formatSeconds(seconds);
    expect(actual).toBe(expected);
  });

  it('Should format seconds when seconds < 10 and minutes > 10.', () => {
    var clock = TestUtils.renderIntoDocument(<Clock/>);

    var seconds = 602;
    var expected = "10:02";
    var actual = clock.formatSeconds(seconds);
    expect(actual).toBe(expected);
  });
});
