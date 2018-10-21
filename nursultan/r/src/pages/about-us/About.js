import React from 'react'
import PropTypes from 'prop-types'
import {
  Segment,
  Container,
  Grid,
  Progress,
  Card,
  Image,
  Icon,
  Tab,
  Statistic,
  Divider,
  List
} from 'semantic-ui-react'

const propTypes = {
  pageData: PropTypes.object.isRequired
}
const panes = [
  {
    menuItem: 'STUDENTS',
    render: () => {
      return (
        <Tab.Pane attached={false}>
          <List bulleted>
            <List.Item>People can make informed decisions about the internship.</List.Item>
            <List.Item>All information about internship experiences can be available at one central location.</List.Item>
            <List.Item>The trusted resource from alumni, staff, and experienced people.</List.Item>
          </List>
        </Tab.Pane>
      )
    }
  },
  {
    menuItem: 'ALUMNI & EXPERIENCED STUDENTS',
    render: () => {
      return (
        <Tab.Pane attached={false}>
          <List bulleted>
            <List.Item>Experienced people will not get the same type of questions.</List.Item>
            <List.Item>Easily share the information with students.</List.Item>
          </List>
        </Tab.Pane>
      )
    }
  }
]
const About = () => (
  <div>
    <Segment basic>
      <Container>
        <Grid columns={1} stackable>
          <Grid.Column>
            <h3 id="category-title">Product Benefits</h3>
            {/* <h4 id="article-title">What's the structure of JavaScript?</h4> */}
            <div id="article-content">
              <Tab menu={{ secondary: true }} panes={panes} />
            </div>
          </Grid.Column>
          {/* <Grid.Column>
            <Image src="" />
          </Grid.Column> */}
        </Grid>
      </Container>
    </Segment>
    <Segment
      inverted
      basic
      id="content-segment-gray"
    >
      <Container>
        <h3 id="category-title">Team Members</h3>
        <Grid columns={4} stackable>
          <Grid.Column align="center">
            <Card>
              <Image src="/img/aboutus/team-member-1.jpg" />
              <Card.Content>
                <Card.Header>Nursultan</Card.Header>
                <Card.Meta>
                  <span>Product Manager</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column align="center">
            <Card>
              <Image src="/img/aboutus/team-member-2.jpg" />
              <Card.Content>
                <Card.Header>Manish</Card.Header>
                <Card.Meta>
                  <span>Scrum Master</span>
                </Card.Meta>
              </Card.Content>
            </Card>{' '}
          </Grid.Column>
          <Grid.Column align="center">
            <Card>
              <Image src="/img/aboutus/team-member-3.jpg" />
              <Card.Content>
                <Card.Header>Qianly</Card.Header>
                <Card.Meta>
                  <span>Back-End Engineer</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column align="center">
            <Card>
              <Image src="/img/aboutus/team-member-4.jpeg" />
              <Card.Content>
                <Card.Header>Alton</Card.Header>
                <Card.Meta>
                  <span>Front-End Engineer</span>
                </Card.Meta>
              </Card.Content>
            </Card>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
    <Segment basic>
      <Container>
        <h3 id="category-title">Product Roadmap</h3>
        <Grid columns={2} stackable verticalAlign="top">
          <Grid.Column>
            <h4 id="article-title">Product Development Process</h4>
            <div id="article-content">
              <List bulleted>
                <List.Item>We develop the project under the SEM course.</List.Item>
                <List.Item>We use Agile methodology for developing process.</List.Item>
                <List.Item>We plan to finish the project in 4 sprints.</List.Item>
              </List>
            </div>
          </Grid.Column>
          <Grid.Column>
            Sprint 1
            <Progress percent={100} progress color="green" />
            Sprint 2
            <Progress percent={20} progress color="yellow" />
            Sprint 3
            <Progress percent={0} progress color="red" />
            Sprint 4
            <Progress percent={0} progress color="red" />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
    <Segment basic>
      <Container>
        <h3 id="category-title">Statistics</h3>
        {/* <Divider /> */}
        <Statistic.Group widths="3" align="center" color="blue">
          <Statistic>
            <Statistic.Value>
              <Icon name="write" />
              2
            </Statistic.Value>
            <Statistic.Label>reviews</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="star" />
              4
            </Statistic.Value>
            <Statistic.Label>ratings</Statistic.Label>
          </Statistic>

          <Statistic>
            <Statistic.Value>
              <Icon name="users" />
              4
            </Statistic.Value>
            <Statistic.Label>users</Statistic.Label>
          </Statistic>

          {/* <Statistic>
            <Statistic.Value>
              <Icon name="heart" style={{ color: 'red' }} />
              1
            </Statistic.Value>
            <Statistic.Label>something</Statistic.Label>
          </Statistic> */}
        </Statistic.Group>
        {/* <Divider /> */}
      </Container>
    </Segment>
  </div>
)

About.propTypes = propTypes
export default About
