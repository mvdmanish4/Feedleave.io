import React from 'react'
import PropTypes from 'prop-types'
import {
  Segment,
  Container,
  Grid,
  Icon
} from 'semantic-ui-react'

const propTypes = {
  pageData: PropTypes.object.isRequired
}

const Help = () => (
  <Segment basic>
    <Container>
      <h4 id="category-title">User Guide</h4>
      <Grid columns="three" stackable divided padded>
        <Grid.Row style={{marginBottom: 40}}>
          <Grid.Column>
            <h4 id="article-title">
              <Icon name="paint brush" color="blue" size="big" /> Write the review
            </h4>
            <p>
            1. Sign Up or Log In to the website.
            </p>
            <p>
            2. Go to the Write Review page.
            </p>
            <p>
            3. Enter the information under each point.
            </p>
            <p>
            4. Save or publish the filled review.
            </p>
          </Grid.Column>
          <Grid.Column>
            <h4 id="article-title">
              <Icon name="paint brush" color="blue" size="big" /> Edit the review
            </h4>
            <p>
            1. Sign Up or Log In to the website.
            </p>
            <p>
            2. Go to the My Profile page.
            </p>
            <p>
            3. Find the necessary review under the Reviews field.
            </p>
            <p>
            4. Click on Edit icon.
            </p>
          </Grid.Column>

          <Grid.Column>
            <h4 id="article-title">
              <Icon name="computer" color="blue" size="big" /> Delete the review
            </h4>
            <p>
            1. Sign Up or Log In to the website.
            </p>
            <p>
            2. Go to the My Profile page.
            </p>
            <p>
            3. Find the necessary review under the Reviews field.
            </p>
            <p>
            4. Click on Ed4. Click on Delete icon. it icon.
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

Help.propTypes = propTypes
export default Help
