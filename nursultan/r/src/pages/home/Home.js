import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Home.css'
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
  Statistic
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
      <div >
        <Segment style={{ height: '90vh' }} inverted textAlign="center" id="page-header-home" vertical>
          <Container>
            <Grid stackable textAlign="center" verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Image
                    src="img/home/internship.jpg"
                    alt="feedleave"
                    width="100%"
                    height="100%"
                  />
                </Grid.Column>
                <Grid.Column width={8} textAlign="center">
                  <Grid.Column verticalAlign="middle">
                    {/* <Image
                      src="/img/atomic-128.png"
                      size="tiny"
                      floated="left"
                      verticalAlign="middle"
                    /> */}
                  </Grid.Column>
                  <Grid.Column verticalAlign="middle">
                    <h1 id="home-h1">Build a roadmap</h1>
                  </Grid.Column>
                  <Header
                    as="h2"
                    id="home-h2"
                    content="Find reviews and suggestions about internships in Silicon Valley"
                    inverted
                  />
                  <br />
                  <a
                    href="/login"
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
        {/* <Segment vertical>
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
        </Segment> */}

        <Segment
          vertical
          style={{ margin: '1.5em 0em 0em', padding: '1.5em 0em' }}
        >
          <Container textAlign="center">
            <List horizontal divided link verticalAlign="middle">
              <List.Item as='a' href='#'>
                {copyrightYear} © {siteLabel}
              </List.Item>
              <List.Item as='a' href='\terms'>
                Terms of Service
              </List.Item>
              <List.Item as='a' href='\privacy'>
                Privacy Policy
              </List.Item>
              <List.Item as='a' href='\help'>
                Help
              </List.Item>
              <List.Item as='a' href='\about'>
                About
              </List.Item>
              <List.Item as='a' href='\contact'>
                Contact Us
              </List.Item>
            </List>
          </Container>
        </Segment>
      </div>
    )
  }
}
Home.propTypes = propTypes
export default Home
