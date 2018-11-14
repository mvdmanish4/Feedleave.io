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
  // Redirect,
  Link,
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

  componentDidMount() {
    // inserts 3 scripts, and receive encoded javascript string, insert as the 4th script (which does the oauth thing).
    const script1 = document.createElement('script')
    const script2 = document.createElement('script')
    const script3 = document.createElement('script')

    script1.type = 'text/javascript'
    script1.src = 'https://www.gstatic.com/firebasejs/3.4.0/firebase.js'
    script2.type = 'text/javascript'
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.min.js'

    document.body.appendChild(script1)
    document.body.appendChild(script2)

    script3.type = 'text/javascript'
    // script3.async = true
    script3.innerHTML = `// Called sometime after postMessage is called
    function receiveMessage(event)
    {
      // Do we trust the sender of this message?
      if (event.origin !== "http://localhost:5000")
        return;

      // alert('Hi received message');
      // alert(decodeURIComponent(event.data))
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.innerHTML = decodeURIComponent(event.data)
      document.body.appendChild(script)
    }
    //alert('Hi there');
    window.addEventListener("message", receiveMessage, false);`

    document.body.appendChild(script3)
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

  onClickLinkedIn = (event) => {
    // Open the Auth flow in a popup.
    window.open('http://localhost:5000/oauth/redirect', 'firebaseAuth', 'height=600,width=800')
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
        <Segment basic style={{ padding: '0em 0em 12em' }}>
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
                    <Button fluid color='linkedin' onClick={this.onClickLinkedIn}>
                      <Icon name='linkedin' /> LinkedIn
                    </Button>
                  </Form>
                  <br />
                  <label>By continuing, you agree to Feedleave's <Link to="/terms">Terms of Service</Link>, <Link to="/privacy">Privacy Policy</Link></label>
                  <br />
                  {/* <h4 id="article-title"><font size="4">By continuing, you agree to Feedleave's <a href='/terms'>Terms of Service</a>, <a href='/privacy'>Privacy Policy</a>.</font></h4> */}
                  <Message floating warning>
                    <Icon name='user' />
                    Not on Feedleave yet?&nbsp;<Link to="/signup">Sign Up</Link>
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
