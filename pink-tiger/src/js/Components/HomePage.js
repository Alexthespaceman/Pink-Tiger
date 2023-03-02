import changePage from "../functions/ChangePage";
import React from 'react';

class HomePage extends React.Component {

    state={bool: true}

    changeInitialPage(){
      const background = document.getElementById(this.props.props[1].homeScreenId);
      background.className = 'home_page-dark' ? background.className = 'home_page-light': null;
      this.setState({
         bool: false
      });
    }

    render(){
        return (
            <div id='home-screen' className='home_page-dark'>
                { this.state.bool ? <div id='hello-message' className='home_page-hello-message' onClick={()=> this.changeInitialPage(this.state.bool)}> {this.props.props[0].title} </div> : null }
            </div> 
        )
    }
}

export default HomePage;