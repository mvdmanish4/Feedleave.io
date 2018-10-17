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


class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedCategory: 'All' }
  }


  render() {
    return (
      <div>
        <Segment basic>
          <Container>
            <Grid columns="three" stackable divided padded>
              <Grid.Row>
                <Grid.Column width={10}>
                  <h4 id="article-title">By continuing, you agree to our Terms of Use and Privacy Policy.</h4>
                  <Form>
                    <Form.Group widths="equal">
                      <Form.Input icon="mail" label="Email" placeholder="Email Address" />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input icon="key" label="Password" placeholder="minimum 6 characters" />
                    </Form.Group>
                    <Form.Group widths="equal">
                      <Form.Input icon="key" label="Confirm Password" placeholder="minimum 6 characters" />
                    </Form.Group>
                    <Form.Button>Sign Up</Form.Button>
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

export default Signup
