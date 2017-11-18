var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var Controls = require('Controls');

describe('Controls', () => {
  it('Should exist', () => {
    expect(Controls).toExist();
  });

  describe('Test buttons', () => {
    it('Should be Start button if paused', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={"paused"}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
    //  alert($el);
      var pauseButton = $el.find('button:contains(Pause)');
      expect(pauseButton.length).toBe(0);
      var startButton = $el.find('button:contains(Start)');
      expect(startButton.length).toBe(1);

    });

    it('Should be pause button if started', () => {
      var controls = TestUtils.renderIntoDocument(<Controls countdownStatus={"started"}/>);
      var $el = $(ReactDOM.findDOMNode(controls));
      var pauseButton = $el.find('button:contains(Pause)');
      expect(pauseButton.length).toBe(1);
      var startButton = $el.find('button:contains(Start)');
      expect(startButton.length).toBe(0);
    });
  });
});
