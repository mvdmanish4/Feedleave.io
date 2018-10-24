import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {
  Segment,
  Container,
  Grid,
  Icon,
  Image,
  Label,
  Card,
  Button,
  Rating,
  List,
  Checkbox,
  Form,
  Message,
  Input,
  Divider
} from 'semantic-ui-react'
import config from '../../config'

const propTypes = {
  // pageData: PropTypes.object.isRequired
}

class Profile extends Component {
  render() {
    return (
      <Segment basic>
        <Container>
          <h3 id="category-title">My Profile</h3>
          <Grid columns="one" stackable divided padded>
            <Grid.Row>
              <Grid.Column width={6}>
                <Form>
                  <Form.Field>
                    <label>Email</label>
                    <Form.Input placeholder='james@bond.com' icon="mail" />
                  </Form.Field>
                  <Form.Field>
                    <label>Password</label>
                    <Form.Input placeholder='james@bond.com' icon="key" />
                  </Form.Field>
                  <Form.Field>
                    <label>Confirm Password</label>
                    <Form.Input placeholder='james@bond.com' icon="key" />
                  </Form.Field>
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Grid>
              <Grid.Column>
                <br />
                <Button type='submit' color="green">Change Password</Button>
              </Grid.Column>
            </Grid>
          </Grid>
          <br />
          <Divider />
          <br />
          {/* <Message success header='Password changed' />
          <Message error header='Error' content='Please, fill out all required fields.' /> */}
          <h3 id="category-title">My Reviews (2)</h3>
          <Grid columns={8} stackable celled verticalAlign="middle" textAlign="center">
            <Grid.Row>
              <Grid.Column width={2}>
                <strong>Product Manager</strong>
              </Grid.Column>
              <Grid.Column>
                <Label color='blue' >Apple</Label>
              </Grid.Column>
              <Grid.Column>
                CV, Pitch, Interview
              </Grid.Column>
              <Grid.Column>
                21/10/2018
              </Grid.Column>
              <Grid.Column>
                17 views
              </Grid.Column>
              <Grid.Column>
                4.5 rating
              </Grid.Column>
              <Grid.Column>
                <Button circular icon='write' />
              </Grid.Column>
              <Grid.Column>
                <Button circular icon='trash' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Grid columns={8} stackable celled verticalAlign="middle" textAlign="center">
            <Grid.Row>
              <Grid.Column width={2}>
                <strong>Software Engineer</strong>
              </Grid.Column>
              <Grid.Column>
                <Label color='blue' >Google</Label>
              </Grid.Column>
              <Grid.Column>
                Pitch, Phone Interview
              </Grid.Column>
              <Grid.Column>
                21/10/2018
              </Grid.Column>
              <Grid.Column>
                17 views
              </Grid.Column>
              <Grid.Column>
                4.5 rating
              </Grid.Column>
              <Grid.Column>
                <Button circular icon='write' />
              </Grid.Column>
              <Grid.Column>
                <Button circular icon='trash' />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
// Profile.propTypes = propTypes
export default Profile
