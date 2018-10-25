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

const propTypes = {
  siteLabel: PropTypes.string.isRequired,
  copyrightYear: PropTypes.number.isRequired,
  siteLogoUrl: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  socialMediaLinks: PropTypes.array
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
    <Segment inverted vertical color={'white'} style={{ padding: '5em 0em' }}>
      <Container textAlign="center">
        <List horizontal inverted divided link verticalAlign="middle">
          <List.Item as='a' href='#'>
            {copyrightYear} © {siteLabel}
          </List.Item>
          <List.Item as='a' href='\terms'>
            Terms of Service
          </List.Item>
          <List.Item as='a' href='\privacy'>
            Privacy Policy
          </List.Item>
          <List.Item as='a' href='\help'>
            Help
          </List.Item>
          <List.Item as='a' href='\about'>
            About
          </List.Item>
          <List.Item as='a' href='\contact'>
            Contact Us
          </List.Item>
        </List>
      </Container>
    </Segment>
    //         <Grid.Column width={16}>
    //           {copyrightYear} © {siteLabel}
  )
}

PageMainFooter.propTypes = propTypes
export default PageMainFooter
