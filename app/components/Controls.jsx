var React = require('react');
var Clock = require('Clock');

var Controls = React.createClass({

  propTypes: {
    countdownStatus: React.PropTypes.string.isRequired,
    onStatusChange: React.PropTypes.func.isRequired
  },

  onStatusChange: function (newStatus) {
    // currying patten function generates a function (in this case passed down from parent)
    return () =>{
      this.props.onStatusChange(newStatus);
    }
  },

    // componentWillReceiveProps: function(newProps){
    //   console.log('componentWillRecieveProps', newProps.countdownStatus);
    // },

  render: function() {

    var {
      countdownStatus
    } = this.props;

    var renderStartStopButton = () => {
      if (countdownStatus === 'started') {
        return <button className="button secondary" onClick={this.onStatusChange("paused")}>Pause</button>
      } else {
        return <button className="button primary" onClick={this.onStatusChange("started")}>Start</button>
      }
    };

    return (
      <div className="controls">
        {renderStartStopButton()}
        <button className="button alert hollow" onClick={this.onStatusChange("stopped")}>Clear</button>
    </div>);
  }
});

module.exports = Controls;
