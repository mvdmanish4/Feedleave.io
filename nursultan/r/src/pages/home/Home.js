import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment
} from 'semantic-ui-react'

const propTypes = {
  footer: PropTypes.object,
  siteLabel: PropTypes.string
}

class Home extends Component {
  render() {
    const { siteLabel, footer } = this.props
    const { copyrightYear } = footer
    return (
      <div>
        <Segment inverted textAlign="center" id="page-header-home" vertical>
          <Container>
            <Grid stackable textAlign="center" verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image
                    src="img/aboutus/office.jpg"
                    alt="feedleave"
                    width="90%"
                    height="90%"
                  />
                </Grid.Column>
                <Grid.Column width={8} textAlign="left">
                  <Grid.Column verticalAlign="middle">
                    {/* <Image
                      src="/img/atomic-128.png"
                      size="tiny"
                      floated="left"
                      verticalAlign="middle"
                    /> */}
                  </Grid.Column>
                  <Grid.Column verticalAlign="middle">
                    <h1 id="home-h1">feedleave</h1>
                  </Grid.Column>
                  <Header
                    as="h2"
                    id="home-h2"
                    content="Find reviews and suggestions about internships in Silicon Valley"
                    inverted
                  />
                  <a
                    href="/forget"
                    // target="_blank"
                  >
                    <Button primary size="huge" color="facebook">
                      <Icon name="write" />
                      Write Review
                    </Button>
                  </a>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>

        <Segment vertical>
          <Grid container stackable>
            <Grid.Row>
              <Grid.Column width={8}>
                <Header id="home-h2">Mission</Header>
                <p>
                  Help students to prepare for internships.
                </p>
                <p>
                  Help experienced people to share information.
                </p>

                <Header id="home-h2">Why feedleave?</Header>
                <List as="ul">
                  <List.Item as="li">
                    Search for internship reviews.
                  </List.Item>
                  <List.Item as="li">
                    Get information from experienced people.
                  </List.Item>
                  <List.Item as="li">
                    Find quickly.
                  </List.Item>
                  <List.Item as="li">
                    Spend less time to search.
                  </List.Item>
                </List>
              </Grid.Column>
            </Grid.Row>
            <br />
          </Grid>
        </Segment>

        <Segment
          inverted
          vertical
          style={{ margin: '5em 0em 0em', padding: '5em 0em' }}
        >
          <Container textAlign="center">
            <Grid inverted stackable>
              <Grid.Row>
                <Grid.Column width={16}>
                  {siteLabel} - {copyrightYear}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}
Home.propTypes = propTypes
export default Home
