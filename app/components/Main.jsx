var React = require('react');
var Navigation = require('Navigation');
// var Main = React.createClass({
//   render: function (){
//     return(
//       <div>
//         <Nav/>
//         {this.props.children}
//       </div>
//     );
//   }
// });

var Main = (props) => {
  return (
    <div>
      <Navigation/>
      <div>
        <div>
          <p>Main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
