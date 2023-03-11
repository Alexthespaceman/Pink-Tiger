import HeaderChild from "./HeaderChild";

function Header() {
    return ( <header className="header">
      <HeaderChild titleText='title one'/>
       <HeaderChild titleText='title two'/>
       <HeaderChild titleText='title three'/>
       <HeaderChild titleText='title four'/>
       <HeaderChild titleText='title five'/>
    </header> );
}

export default Header;