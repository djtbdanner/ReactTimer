var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');
var CountdownForm = require('CountdownForm') ;

var Timer = React.createClass({

  getInitialState : function() {
    return {count: 0, countdownStatus: "paused"};
  },
  handleStatusChange: function(newStatus){
    this.setState({countdownStatus:newStatus});
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
    this.timer = undefined;
  },

  //name specific - called by ReactDOM
  componentDidUpdate: function (prevProps, prevState){
    if (this.state.countdownStatus !== prevState.countdownStatus){
      switch (this.state.countdownStatus) {
        case "started":
          this.startTimer();
          break;
        case "stopped":
          this.setState({count:0}); // no break will do next thing too
        case "paused":
          clearInterval(this.timer);
          break;
        default:
      }
    }
  },

  startTimer: function(){
    this.timer = setInterval(
      () => {
       var newCount = this.state.count + 1;
       this.setState({count:newCount>=0?newCount:0});
      },
    1000);
  },

  render: function() {
    var {count, countdownStatus} = this.state;

    return(
      <div>
        <h1 className="page-title">Timer App</h1>
        <Clock totalSeconds={count}/>
        <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
      </div>
    );
  }
});

module.exports = Timer;
