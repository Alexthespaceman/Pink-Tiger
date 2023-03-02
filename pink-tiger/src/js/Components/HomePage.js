import changePage from "../functions/ChangePage";

function HomePage(props) {
    return ( <div className='home_page'>
            <div className='home_page-hello-message' onClick={changePage}> {props.title}</div>
        </div> );
}

export default HomePage;