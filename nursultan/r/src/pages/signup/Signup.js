import React, { Component } from 'react'
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
import PropTypes from 'prop-types'
import {
  // BrowserRouter as Router,
  // Route,
  // Link,
  // Redirect,
  withRouter
} from 'react-router-dom'
const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
})

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null
}

class Signup extends Component {
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
      username,
      email,
      passwordOne
    } = this.state
    auth.createUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState(() => ({ ...INITIAL_STATE }))
        this.props.history.push('/')
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error))
      })
    event.preventDefault()
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error
    } = this.state
    const { history } = this.props
    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === ''

    return (
      <div>
        <Segment basic>
          <Container>
            <Grid columns="three" stackable divided padded>
              <Grid.Row>
                <Grid.Column width={10}>
                  <h4 id="article-title">By continuing, you agree to our Terms of Use and Privacy Policy.</h4>
                  <Form onSubmit={this.onSubmit}>
                    <Form.Group widths="equal">
                      <Form.Input value={username} onChange={event => this.setState(updateByPropertyName('username', event.target.value))} icon="user" label="Name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} icon="mail" label="Email" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input value={passwordOne} onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))} icon="key" label="Password" type="password" placeholder="minimum 6 characters" />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input value={passwordTwo} onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))} icon="key" label="Confirm Password" type="password" placeholder="minimum 6 characters" />
                    </Form.Group>
                    { error && <p>{error.message}</p> }
                    <Form.Button disabled={isInvalid} type="submit">Sign Up</Form.Button>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}

// export default Signup
export default withRouter(Signup)
