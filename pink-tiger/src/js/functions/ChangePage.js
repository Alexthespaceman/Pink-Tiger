function changePage(props) {
    const background = document.getElementById(props[1].homeScreenId);
    const greetingMessage = document.getElementById(props[2].greetingMessageId);
    background.className = 'home_page-dark' ? background.className = 'home_page-light': null;
    greetingMessage.className = 'home_page-hello-message' ? greetingMessage.className = 'home_page-hello-message-hidden': null;
}

export default changePage;