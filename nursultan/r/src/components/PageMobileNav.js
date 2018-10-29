import React, { Component } from 'react'
import { Menu, Icon } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const propTypes = {
  subpages: PropTypes.object.isRequired
}
class PageMobileNav extends Component {
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
        >
          <Icon name={subpages[page].icon} src={subpages[page].path} />{' '}
          {subpages[page].label}
        </Menu.Item>
      )
    })
    return menuItems
  }

  render() {
    const { subpages } = this.props
    const menuItems = this.renderMenuItems(subpages)
    return (
      <div>
        <Menu.Item link key={'home'} name={'home'} as={NavLink} exact to={'/'}>
          <Icon name={'home'} src={'/'} /> Home
        </Menu.Item>
        <Menu.Item link key={'reviews'} name={'reviews'} as={NavLink} exact to={'/reviews'}>
          <Icon name={'book'} src={'/reviews'} /> Reviews
        </Menu.Item>
        <Menu.Item link key={'write'} name={'write'} as={NavLink} exact to={'/write'}>
          <Icon name={'write'} src={'/write'} /> Write
        </Menu.Item>
        <Menu.Item link key={'login'} name={'login'} as={NavLink} exact to={'/login'}>
          <Icon name={'user'} src={'/login'} /> Log In
        </Menu.Item>
        <Menu.Item link key={'signup'} name={'signup'} as={NavLink} exact to={'/signup'}>
          <Icon name={'user circle'} src={'/signup'} /> Sign Up
        </Menu.Item>
        <Menu.Item link key={'profile'} name={'profile'} as={NavLink} exact to={'/profile'}>
          <Icon name={'settings'} src={'/profile'} /> My Profile
        </Menu.Item>
        <Menu.Item link key={'signout'} name={'signout'} as={NavLink} exact to={'/signout'}>
          <Icon name={'sign out'} src={'/signout'} /> Sign Out
        </Menu.Item>
      </div>
    )
  }
}

PageMobileNav.propTypes = propTypes
export default PageMobileNav
