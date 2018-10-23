import React from 'react'
import PropTypes from 'prop-types'
import config from '../../config'
import LinkedinSDK from 'react-linkedin-sdk'
import {
  Segment,
  Container,
  Grid,
  Icon,
  Form,
  Message,
  Divider
} from 'semantic-ui-react'

const responseLinkedin = response => {
  console.log(response)
}
const propTypes = {
  pageData: PropTypes.object.isRequired
}

const Forget = () => {
  const { socialMediaLinks, email, phone } = config
  const totalSocialMediaLinks = socialMediaLinks.length
  const renderSocialMediaLinks = links => {
    return links
      .filter(link => {
        return link.active
      })
  }
  return (
    <div>
      <Segment basic>
        <Container>
          <Grid columns="one" stackable divided padded>
            <Grid.Row centered>
              <Grid.Column width={6}>
                <h4 id="page-title"><font size="6">Reset Password</font></h4>
                <p>We can help you reset your password using your email address linked to your account.</p>
                <Form>
                  <Form.Group widths="equal">
                    <Form.Input icon="mail" label="" placeholder="Email Address" />
                  </Form.Group>
                  <br />
                  <Form.Button fluid color="blue">Reset Password</Form.Button>
                </Form>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
      <br /><br /><br /><br /><br /><br /><br /><br />
    </div>
  )
}
Forget.propTypes = propTypes
export default Forget
