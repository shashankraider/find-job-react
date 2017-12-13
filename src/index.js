import React from "react";
import ReactDOM from "react-dom";
import '../styles/main.scss';

export default class App extends React.Component {
    render() {
        return (
           <div className="main">
           </div>
                
        )
    }
}
ReactDOM.render(<App />, document.getElementById("app"));
