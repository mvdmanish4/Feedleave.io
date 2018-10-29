import React from 'react'
import PropTypes from 'prop-types'
import {
  Container,
  Grid,
  Image,
  Segment,
  Icon,
  Header,
  List
} from 'semantic-ui-react'
import {
  Link,
  withRouter
} from 'react-router-dom'

const propTypes = {
  siteLabel: PropTypes.string.isRequired,
  copyrightYear: PropTypes.number.isRequired,
  siteLogoUrl: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  socialMediaLinks: PropTypes.array,
  history: PropTypes.object.isRequired
}

const PageMainFooter = props => {
  const { siteLabel, siteLogoUrl, copyrightYear, message, socialMediaLinks, email, phone } = props
  const renderSocialMediaLinks = links => {
    return links.filter((link) => {
      return link.active
    }).map((url) => {
      return (
        <a href={url.url} key={url.id} target="_blank">
          <Icon name={url.icon} size='large' />
        </a>
      )
    })
  }
  return (
    // padding: '5em 0em'
    <Segment inverted vertical color={'white'} style={{ }}>
      <Container textAlign="center">
        <List horizontal inverted divided link verticalAlign="middle">
          <List.Item>
            <Link to="/">{copyrightYear} © {siteLabel}</Link>
          </List.Item>
          <List.Item>
            <Link to="/terms">Terms of Service</Link>
          </List.Item>
          <List.Item>
            <Link to="/privacy">Privacy Policy</Link>
          </List.Item>
          <List.Item>
            <Link to="/help">Help</Link>
          </List.Item>
          <List.Item>
            <Link to="/about">About</Link>
          </List.Item>
          <List.Item>
            <Link to="/contact">Contact Us</Link>
          </List.Item>
        </List>
      </Container>
    </Segment>
    //         <Grid.Column width={16}>
    //           {copyrightYear} © {siteLabel}
  )
}

PageMainFooter.propTypes = propTypes
// export default PageMainFooter
export default withRouter(PageMainFooter)
