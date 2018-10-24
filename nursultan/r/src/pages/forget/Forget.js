import React, { Component } from 'react'
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
import { auth, db } from './../../firebase/firebase'

// const responseLinkedin = response => {
//   console.log(response)
// }
const propTypes = {
  pageData: PropTypes.object.isRequired
}
// auth.sendPasswordResetEmail(email)
const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  email: '',
  error: null
}

class Forget extends Component {
  constructor(props) {
    super(props)
    this.state = { ...INITIAL_STATE }
    // this.state = {
    //   email: ''
    // }
  }
  // const { socialMediaLinks } = config
  // const totalSocialMediaLinks = socialMediaLinks.length
  // const renderSocialMediaLinks = links => {
  //   return links
  //     .filter(link => {
  //       return link.active
  //     })
  // }
  onSubmit = (event) => {
    const {
      email
    } = this.state
    auth.sendPasswordResetEmail(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE })
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error))
      })
    event.preventDefault()
  }
  render() {
    const {
      email,
      error
    } = this.state
    const isInvalid =
      email === ''
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
                      <Form.Input value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} icon="mail" label="" placeholder="Email Address" />
                    </Form.Group>
                    {error && <p>{error.message}</p>}
                    <br />
                    <Form.Button fluid disabled={isInvalid} color="blue" onClick={this.onSubmit}>Reset Password</Form.Button>
                  </Form>
                  {/* <Message success header='Password Changed' content="" /> */}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        <br /><br /><br /><br /><br /><br /><br /><br />
      </div>
    )
  }
}
Forget.propTypes = propTypes
export default Forget
