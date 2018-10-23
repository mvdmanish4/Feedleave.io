// import React from 'react'
import React, { Component } from 'react'
// import config from '../../config'
// import LinkedinSDK from 'react-linkedin-sdk'
import {
  Segment,
  Container,
  Grid,
  Icon,
  Form,
  Message,
  Divider,
  Button,
  Label
} from 'semantic-ui-react'
import { auth, db } from './../../firebase/firebase'
import PropTypes from 'prop-types'
import {
  // BrowserRouter as Router,
  // Route,
  // Link,
  // Redirect,
  withRouter
} from 'react-router-dom'

// const responseLinkedin = response => {
//   console.log(response)
// }
// const propTypes = {
//   pageData: PropTypes.object.isRequired
// }

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  username: '',
  email: '',
  error: null
}

class Login extends Component {
  // const { socialMediaLinks, email, phone } = config
  // const totalSocialMediaLinks = socialMediaLinks.length
  // const renderSocialMediaLinks = links => {
  //   return links
  //     .filter(link => {
  //       return link.active
  //     })
  // }
  static propTypes = {
    history: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.state = { selectedCategory: 'All' }
    this.state = { ...INITIAL_STATE }
  }
  onSubmit = (event) => {
    const {
      email,
      password
    } = this.state
    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }))
        // history.push(routes.HOME)
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error))
      })
    event.preventDefault()
  }

  render() {
    const {
      email,
      password,
      error
    } = this.state

    const isInvalid =
      password === '' ||
      email === ''

    return (
      <div>
        <Segment basic>
          <Container>
            <Grid columns="three" stackable divided padded>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <h4 id="page-title"><font size="6">Sign In</font></h4>
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Input value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} icon="mail" label="Email" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input value={password} onChange={event => this.setState(updateByPropertyName('password', event.target.value))} icon="key" label="Password" type="password" placeholder="minimum 6 characters" />
                    </Form.Group>
                    {error && <p>{error.message}</p>}
                    <p>
                      <a href='/forget'>Forget your password?</a>
                    </p>
                    {/* <Form.Button fluid disabled={isInvalid} color="black" type="submit">Log In</Form.Button> */}
                    <Button type='submit' fluid disabled={isInvalid} color="black" onClick={this.onSubmit}>Log In</Button>
                    <Divider horizontal>or</Divider>
                    <Button fluid color='linkedin'>
                      <Icon name='linkedin' /> LinkedIn
                    </Button>
                  </Form>
                  <br />
                  <label>By continuing, you agree to Feedleave's <a href='\terms'>Terms of Service</a>, <a href='\privacy'>Privacy Policy</a></label>
                  <br />
                  {/* <h4 id="article-title"><font size="4">By continuing, you agree to Feedleave's <a href='/terms'>Terms of Service</a>, <a href='/privacy'>Privacy Policy</a>.</font></h4> */}
                  <Message floating warning>
                    <Icon name='user' />
                    Not on Feedleave yet?&nbsp;<a href='/signup'>Sign Up</a>.
                  </Message>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            {/* <LinkedinSDK
              clientId="86rqnpp2pw98xn"
              callBack={responseLinkedin}
              fields=":{(id,num-connections,picture-url)}"
              className={'className'}
              loginButtonText={'Login with Linkedin'}
              logoutButtonText={'Logout from Linkedin'}
              buttonType={'button'}
              icon={<Icon />}
              getOAuthToken
            /> */}
          </Container>
        </Segment>
      </div>
    )
  }
}
// Login.propTypes = propTypes
// export default Login
export default withRouter(Login)
