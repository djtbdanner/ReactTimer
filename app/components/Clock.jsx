var React = require('react');

var Clock = React.createClass({

  getDefaultProps: function(){
    totalSeconds: 0
  },

  propTypes:{
    totalSeconds: React.PropTypes.number
  },

  formatSeconds: function (totalSeconds){
    return this.fixNumber(totalSeconds / 60) + ":" + this.fixNumber(totalSeconds % 60);
  },

  fixNumber: function (val){
    val = Math.floor(val);
    if (val < 10){
      return "0" + val;
    } else {
      return val;
    }
  },


  render: function() {
    var {totalSeconds} = this.props;
    return (
      <div className="clock">
        <span className="clock-text">{this.formatSeconds(totalSeconds)}</span>
      </div>
    );
  }
});

module.exports = Clock;
