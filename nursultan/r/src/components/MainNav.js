import React, { Component } from 'react'
import { Menu, Container, Image, Grid, Input, Dropdown, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'
import firebase from 'firebase/app'
import {
  withRouter
} from 'react-router-dom'

const propTypes = {
  subpages: PropTypes.object.isRequired,
  siteLabel: PropTypes.string.isRequired,
  siteLogoUrl: PropTypes.string.isRequired,
  toggleVisibility: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
}
const options = [
  { key: 1, text: 'My Profile', value: 1, icon: 'settings' },
  { key: 2, text: 'Log Out', value: 2, icon: 'sign out' }
]
class MainNav extends Component {
  componentWillMount() {
    this.authListener = this.authListener.bind(this)
    this.authListener()
    this.setState({ loggedIn: false })
  }
  componentWillUnmount() {
    this.fireBaseListener && this.fireBaseListener()
    this.authListener = undefined
  }
  renderMenuItems = subpages => {
    const menuItems = Object.keys(subpages).map(page => {
      return (
        <Menu.Item
          link
          key={subpages[page].label}
          name={subpages[page].path}
          as={NavLink}
          exact
          to={subpages[page].path}
        />
      )
    })
    return menuItems
  }

  renderDesktopMenu = (url, label, subpages, value) => {
    const menuItems = this.renderMenuItems(subpages)
    console.log(menuItems)
    const trigger = (
      <span>
        <Icon name='user' /> { this.state.email ? this.state.email : 'Username' }
      </span>
    )
    if (this.state.loggedIn) {
      return (
        <Menu fixed="top" color={'blue'} pointing secondary>
          {/* inverted */}
          <Container>
            <Menu.Item as={NavLink} header link to={'/'}>
              <Image
                size="tiny"
                src={url}
                alt={label}
              />
              {/* &nbsp; &nbsp; */}
              {/* {label} */}
            </Menu.Item>
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
            <Menu.Menu position="right">{menuItems[0]}</Menu.Menu>
            {/* <Menu.Menu position="right">{menuItems[1]}</Menu.Menu> */}
            <Menu.Menu position="right">{menuItems[2]}</Menu.Menu>
            {/* <Menu.Menu position="right">{menuItems[3]}</Menu.Menu> */}
            {/* <Menu.Menu position="right">{menuItems[4]}</Menu.Menu> */}
            {/* <Menu.Menu position="right">{menuItems[5]}</Menu.Menu> */}
            {/* <Menu.Menu position="right">{menuItems[6]}</Menu.Menu> */}
            {/* <Menu.Menu position="right">{menuItems[9]}</Menu.Menu> */}
            {/* <Menu.Menu position="right">{menuItems[10]}</Menu.Menu> */}
            {/* <Menu.Menu position="right">{menuItems[11]}</Menu.Menu> */}
            {/* <Menu.Item
            link
            key={pages.reviews.label}
            name={pages.reviews.path}
            as={NavLink}
            exact
            to={pages.reviews.path}
          /> */}
            <Menu.Menu position='right'>
              <Dropdown item trigger={trigger} direction='right' value={value} options={options} onChange={this.handleChange} icon={null} />
            </Menu.Menu>
          </Container>
        </Menu>
      )
    }
    return (
      <Menu fixed="top" color={'blue'} pointing secondary>
        {/* inverted */}
        <Container>
          <Menu.Item as={NavLink} header link to={'/'}>
            <Image
              size="tiny"
              src={url}
              alt={label}
            />
            {/* &nbsp; &nbsp; */}
            {/* {label} */}
          </Menu.Item>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Menu position="right">{menuItems[0]}</Menu.Menu>
          {/* <Menu.Menu position="right">{menuItems[1]}</Menu.Menu> */}
          <Menu.Menu position="right">{menuItems[2]}</Menu.Menu>
          {/* <Menu.Menu position="right">{menuItems[3]}</Menu.Menu> */}
          {/* <Menu.Menu position="right">{menuItems[4]}</Menu.Menu> */}
          {/* <Menu.Menu position="right">{menuItems[5]}</Menu.Menu> */}
          {/* <Menu.Menu position="right">{menuItems[6]}</Menu.Menu> */}
          <Menu.Menu position="right">{menuItems[7]}</Menu.Menu>
          <Menu.Menu position="right">{menuItems[8]}</Menu.Menu>
          {/* <Menu.Menu position="right">{menuItems[9]}</Menu.Menu> */}
          {/* <Menu.Menu position="right">{menuItems[10]}</Menu.Menu> */}
          {/* <Menu.Menu position="right">{menuItems[11]}</Menu.Menu> */}
          {/* <Menu.Item
            link
            key={pages.reviews.label}
            name={pages.reviews.path}
            as={NavLink}
            exact
            to={pages.reviews.path}
          /> */}
          <Menu.Menu position='right'>
            <Dropdown item trigger={trigger} direction='right' value={value} options={options} onChange={this.handleChange} icon={null} />
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }

  renderMobileMenu = (url, label, toggleVisibility) => {
    return (
      <Menu fixed="top" color={'black'} inverted>
        <Container>
          {/* <Menu.Item as="a" header> */}
          <Menu.Item as={NavLink} header link to={'/'}>
            {/* <Image
              size="tiny"
              src={url}
              alt={label}
              // style={{ marginRight: '1.5em' }}
            /> */}
            {/* &nbsp; &nbsp; */}
            {label}
          </Menu.Item>
          {/* <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item> */}
          <Menu.Menu position="right">
            <Menu.Item
              link
              key={'mobile-menu'}
              icon="content"
              onClick={toggleVisibility}
            />
          </Menu.Menu>
        </Container>
      </Menu>
    )
  }

  render() {
    const { subpages, siteLabel, siteLogoUrl, toggleVisibility } = this.props
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column only="tablet computer">
            {this.renderDesktopMenu(siteLogoUrl, siteLabel, subpages)}
          </Grid.Column>
          <Grid.Column only="mobile">
            {this.renderMobileMenu(siteLogoUrl, siteLabel, toggleVisibility)}
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }


  authListener() {
    this.fireBaseListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in.
        console.log('logged in')
        this.setState({
          loggedIn: true,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
          isAnonymous: user.isAnonymous,
          uid: user.uid,
          providerData: user.providerData
        })
        // ...
      } else {
        // User is signed out.
        // ...
        this.setState({ loggedIn: false })
        console.log('logged out')
      }
    })
  }
  // handleChange = (e, { value }) => this.setState({ [name]: value })
  handleChange = (e, { value }) => {
    if (value === 1) {
      // console.log({value})
      this.props.history.push('/profile')
    } else if (value === 2) {
      // this.props.history.push('/profile')
      // auth.signOut()
    }
  }
}

MainNav.propTypes = propTypes
// export default MainNav
export default withRouter(MainNav)
