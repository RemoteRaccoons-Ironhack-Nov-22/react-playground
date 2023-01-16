function Header(props) {

    return (
        <header>
            <h1>This is the header component</h1>
            {props.children}
        </header>
    );
}

export default Header;