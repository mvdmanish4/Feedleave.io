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
    menuItem: 'OUR VISION',
    render: () => {
      return (
        <Tab.Pane attached={false}>
          <p>
            some text.
          </p>
        </Tab.Pane>
      )
    }
  },
  {
    menuItem: 'OUR WORK',
    render: () => {
      return (
        <Tab.Pane attached={false}>
          <p>
            Et offendit do nostrud, eram ingeniis e concursionibus hic quorum e
            mentitum ex fugiat, cillum constias nam arbitror. Tempor constias ab
            graviterque. Noster ea ad eram aliquip. Ad cillum elit aut possumus,
            mentitum in quibusdam, illum nam doctrina id illum ad a eram
            appellat.Offendit quo quamquam te et te illustriora ita velit hic
            laborum est expetendis enim dolore probant quae, commodo aute
            commodo appellat, ita noster velit irure ullamco, ex iudicem te
            consequat, fabulas qui fugiat singulis. Ubi minim duis est possumus.
            Amet est ingeniis, an ullamco aut admodum, nam quorum occaecat
            praesentibus eu e iudicem relinqueret.
          </p>
        </Tab.Pane>
      )
    }
  }
]
const About = () => (
  <div>
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
            <Progress percent={100} progress color="red" />
            Sprint 2
            <Progress percent={20} progress color="orange" />
            Sprint 3
            <Progress percent={0} progress color="yellow" />
            Sprint 4
            <Progress percent={0} progress color="green" />
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
)

About.propTypes = propTypes
export default About
