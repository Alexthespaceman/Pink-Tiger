import React from 'react';

class PhotoDisplayer extends React.Component {
    constructor(){
        super()
        this.state={ 
            bool: true,
            desBool: true,
            isLoaded: false,
            content: {},
        }
    }

    componentDidMount = () => {
        fetch('https://api.nasa.gov/planetary/apod?api_key=moewalQmsvubYWWbTgIzQzSt9R8iaA3cjo0SJayL')
          .then((res) => res.json())
          .then((data) => {
            if (data.ExceptionMessage) throw new Error(data.ExceptionMessage);
            this.setState((prevState) => ({
              isLoaded: !prevState.isLoaded,
              content: data,
            }));
            console.log(this.state.content)
          })
          .catch((err) => {
            console.error(`There was an error with the fetch request - (${err.message})`);
            // window.location = '/error';
        });
    }

    
    changeInitialPage(){
      const background = document.getElementById(this.props.props[1].homeScreenId);
      background.className = 'home_page-dark' ? background.className = 'home_page-light': null;
      this.setState({
         bool: false
      });
    }

    nasaImg(){
        return (
            <div className='home_page-img-block'>
                <p className='home_page-nasa-img-des'>{this.state.content.title}</p>
                <img alt='nasa-img' className='home_page-nasa-img' src={this.state.content.url}/>
                {this.state.desBool ?  <p className='home_screen-showDes-button' onClick={()=> this.showDesc()}> Want to learn more? Click me </p> : <p className='home_page-explanation'>{this.state.content.explanation}</p> }            
            </div>
        )
    }

    showDesc() {
        return this.setState({
            desBool: false
        })
    }

    render(){
        return (
            <div id='home-screen' className='home_page-dark'>
            {this.state.isLoaded ? <div>loading</div> : this.state.bool ? <div id='hello-message' className='home_page-hello-message' onClick={()=> this.changeInitialPage()}> {this.props.props[0].title} </div> : this.nasaImg()}
            </div> 
        )
    }
}

export default PhotoDisplayer;