import React from 'react'
import PropTypes from 'prop-types'
import config from '../../config'
import LinkedinSDK from 'react-linkedin-sdk'
// import fire from './Config/Fire'
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

  // const auth = firebase.auth();
  // export {
  // auth,
  // };
  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     // console.log(user);
  //     if (user) {
  //       this.setState({user})
  //       localStorage.setItem('user', user.id)
  //     } else {
  //       this.setState({user: null})
  //       localStorage.removeItem('user')
  //     }
  //   })
  // }
  return (
    <div>
      <Segment basic>
        <Container>
          <Grid columns="three" stackable divided padded>
            <Grid.Row>
              <Grid.Column width={10}>
                <h4 id="article-title">Reset Password</h4>
                <p>We can help you reset your password using your email address linked to your account.</p>
                <Form>
                  <Form.Group widths="equal">
                    <Form.Input icon="mail" label="" placeholder="Email Address" />
                  </Form.Group>
                  {/* <Form.Group widths="equal">
                    <Form.Input icon="key" label="Password" placeholder="minimum 6 characters" />
                  </Form.Group> */}
                  {/* <Form.Group widths="equal">
                    <Form.Input icon="key" label="Confirm Password" placeholder="minimum 6 characters" />
                  </Form.Group> */}
                  <Form.Button>Reset Password</Form.Button>
                </Form>
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
Forget.propTypes = propTypes
export default Forget
