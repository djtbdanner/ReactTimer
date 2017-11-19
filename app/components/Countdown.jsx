var React = require('react');
var Clock = require('Clock');
var CountdownForm = require('CountdownForm') ;
var Controls = require('Controls');

var Countdown = React.createClass({

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

  // fired from react as move away from components
  componentWillUnmount: function(){
    console.log('Component did unmount');
    clearInterval(this.timer);
    this.timer = undefined;
  },
  // componentWillMount: function(){
  //   console.log('component is gonna mount!!!');
  // },
  // componentDidMount: function(){
  //   console.log('component just mounted!!!');
  // },

  startTimer: function(){
    this.timer = setInterval(
      () => {
       var newCount = this.state.count - 1;
       this.setState({count:newCount>=0?newCount:0});
       if (newCount === 0){
         this.setState({countdownStatus:"stopped"});
       }
      },
    1000);
  },

  getInitialState: function (){
    return {count: 0,
            countdownStatus: "stopped"
          };
  },

  handleSetCountdown: function (seconds){
    this.setState({count: seconds, countdownStatus: "started"});
  },

  handleStatusChange: function(newStatus){
    this.setState({countdownStatus:newStatus});
  },

  render: function() {
   var {count, countdownStatus} = this.state;

   var renderControlArea = () => {
     if (countdownStatus !== 'stopped') {
       return <Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>
     } else {
      return <CountdownForm onSetCountdown={this.handleSetCountdown}/>
     }
   };

    return (
      <div>
        <h1 className="page-title">Countdown App</h1>
        <Clock totalSeconds={count}/>
        {renderControlArea()}
      </div>
    );
  }
});

module.exports = Countdown;
