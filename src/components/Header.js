import Button from './Button'

const Header = (props) => {
    return (
        <header className='header'>
            <h1> {props.title}</h1>
            <Button color='green' text='Add' />
        </header>
    )
}

Header.defaultProps = {
    name: 'User!'
}

export default Header
