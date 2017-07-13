var React=require('react');
var NavLink=require('react-router-dom').NavLink;

function Nav(){
    return (
        
        <ul className="nav">
            <li>
                <NavLink exact activeClassName="active" to="/home">
                    HOME
                </NavLink>
            </li>
        
            <li>
                <NavLink  activeClassName="active" to="/battle">
                    BATTLE
                </NavLink>
            </li>
            
            <li>
                <NavLink  activeClassName="active" to="/popular">
                    POPULAR
                </NavLink>
            </li>
            
        </ul>
        
        
    )
}

module.exports=Nav;