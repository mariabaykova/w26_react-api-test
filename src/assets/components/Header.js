import React from 'react'

// class Header extends React.Component {
//     render() {
//         const {title} = this.props;
//         return React.createElement('header', {className: "App-header"}, title);
//     }
// }

function Header ( props ) {
    return (
        <header className='App-header'>{props.title}</header>
    );
}

export default Header;