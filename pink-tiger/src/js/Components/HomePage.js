import React from 'react';

class HomePage extends React.Component {
    constructor(){
        super()
        this.state={ 
            bool: true,
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
            <div>
                <p className='home_page-nasa-img-des'>{this.state.content.title}</p>
                <img className='home_page-nasa-img' src={this.state.content.url}/>
            </div>
        )
    }

    render(){
        return (
            <div id='home-screen' className='home_page-dark'>
               {this.state.isLoaded ? <div>loading</div> : this.state.bool ? <div id='hello-message' className='home_page-hello-message' onClick={()=> this.changeInitialPage(this.state.bool)}> {this.props.props[0].title} </div> : this.nasaImg()}
                {/* { this.state.bool ? <div id='hello-message' className='home_page-hello-message' onClick={()=> this.changeInitialPage(this.state.bool)}> {this.props.props[0].title} </div> : this.nasaImg()} */}
            </div> 
        )
    }
}

export default HomePage;