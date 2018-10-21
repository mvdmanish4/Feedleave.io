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
  Divider
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
          <p>
            Students can easily find information about internships.
          </p>
        </Tab.Pane>
      )
    }
  },
  {
    menuItem: 'ALUMNI',
    render: () => {
      return (
        <Tab.Pane attached={false}>
          <p>
            Alumni can easily share information for students.
          </p>
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
            <h3 id="category-title">Project Benefits</h3>
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
            <h4 id="article-title">Agile Development</h4>
            <div id="article-content">
              <p>
                We develop the project under SEM course. We use Agile methodology for developing process.
              </p>
              <p>
                We plan to finish it in four sprints.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
            Sprint 1
            <Progress percent={100} progress color="green" />
            Sprint 2
            <Progress percent={20} progress color="orange" />
            Sprint 3
            <Progress percent={0} progress color="yellow" />
            Sprint 4
            <Progress percent={0} progress color="red" />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
    <Segment basic>
      <Container>
        <Divider />
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
