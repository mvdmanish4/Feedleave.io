import React, { Component } from 'react'
import {
  Segment,
  Container,
  Grid,
  Icon,
  Form,
  Message,
  Divider,
  Button
} from 'semantic-ui-react'
import { auth, db } from './../../firebase/firebase'
import PropTypes from 'prop-types'
import {
  Link,
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
        this.props.history.push('/write')
        this.itemsRef.push({
          username
        })
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
        <Segment basic style={{ padding: '0em 0em 4em' }}>
          <Container>
            <Grid columns="one" stackable divided padded>
              <Grid.Row centered>
                <Grid.Column width={6}>
                  <h4 id="page-title"><font size="6">Sign Up</font></h4>
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Input required value={username} onChange={event => this.setState(updateByPropertyName('username', event.target.value))} icon="user" label="Name" placeholder="Name" />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input required value={email} onChange={event => this.setState(updateByPropertyName('email', event.target.value))} icon="mail" label="Email" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input required value={passwordOne} onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))} icon="key" label="Password" type="password" placeholder="minimum 6 characters" />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input required value={passwordTwo} onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))} icon="key" label="Confirm Password" type="password" placeholder="minimum 6 characters" />
                    </Form.Group>
                    {error && <p>{error.message}</p>}
                    {/* <Form.Button fluid disabled={isInvalid} color="black" type="submit">Sign Up</Form.Button> */}
                    <Button type='submit' fluid disabled={isInvalid} color="black" onClick={this.onSubmit}>Sign Up</Button>
                    <Divider horizontal>or</Divider>
                    <Button fluid color='linkedin'>
                      <Icon name='linkedin' /> LinkedIn
                    </Button>
                  </Form>
                  <br />
                  <label>By continuing, you agree to Feedleave's <Link to="/terms">Terms of Service</Link>, <Link to="/privacy">Privacy Policy</Link></label>
                  {/* <h4 id="article-title"><font size="4">By continuing, you agree to Feedleave's <a href='/terms'>Terms of Service</a>, <a href='/privacy'>Privacy Policy</a>.</font></h4> */}
                  <br />
                  <Message floating warning>
                    <Icon name='user' />
                    Already signed up?&nbsp;<Link to="/login">Log In</Link>.
                  </Message>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
  itemsRef = db.ref('items')
}

export default withRouter(Signup)
