var React=require("react");

var Nav=require('./nav');
var Popular=require("./Popular")
var Battle=require("./Battle")
var Home=require("./Home");
var Results=require("./Results");

var ReactRouter = require("react-router-dom");
var Router=ReactRouter.BrowserRouter;
var Route=ReactRouter.Route;


var Switch=ReactRouter.Switch;

class App extends React.Component{
    render(){
       return (
           <Router>
                <div className="container">
                    <Nav />
                    <Switch>
                        <Route exact path="/battle/results"
                        component={Results} />
                        <Route exact path="/home" component={Home}/>
                        <Route path="/popular" component={Popular} />
                        <Route exact path="/battle" component={Battle} />
                        <Route render={function(){
                                return <p>Not Found</p>
                            }} />
                    </Switch>
                 </div>
                   
           </Router>
      
       ) 
    }
}

module.exports=App;