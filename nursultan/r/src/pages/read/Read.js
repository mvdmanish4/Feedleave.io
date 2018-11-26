import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
  List
} from 'semantic-ui-react'
import config from '../../config'
import { db } from './../../firebase/firebase'
// import Reviews from '../reviews/Reviews'

const propTypes = {
  // data: PropTypes.object.isRequired,
  location: PropTypes.any
  // text1: PropTypes.string
}
// const readReview = this.countProjects(config.read_review)
function getLastFromList(ref, cb) {
  ref.limit(1).once('child_added', function(snapshot) {
    cb(snapshot.val())
  })
}
class Read extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rating: 0,
      maxRating: 5,
      userData: this.props.location.state.userData
      // text1: ''
    }
  }
  // let results = [...projects]
  onRate = (e, { rating, maxRating }) => this.setState({ rating, maxRating })
  render() {
    const project = this.state.userData
    console.log(project)
    return (
      <Segment basic>
        <Container>
          <h3 id="category-title">Background Information</h3>
          <List divided horizontal size='large'>
            <List.Item><strong>{project.linkedinLink}</strong></List.Item>
            <List.Item>{project.releaseData}</List.Item>
            <List.Item>17 views</List.Item>
            <List.Item>
              <Rating icon="star" size="large" maxRating={5} onRate={this.onRate} />
            </List.Item>
          </List>
          <br /><br />
          <Card.Group itemsPerRow="2" stackable>
            <Card>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/company.png' />
                <Card.Header>Company</Card.Header>
                <Card.Meta>name</Card.Meta>
                <Card.Description>
                  {project.name}
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/position.png' />
                <Card.Header>Position</Card.Header>
                <Card.Meta>internship type</Card.Meta>
                <Card.Description>
                  {project.position}
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/experience.png' />
                <Card.Header>Experience</Card.Header>
                <Card.Meta># of prior years</Card.Meta>
                <Card.Description>
                  {project.experience} years
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/university.png' />
                <Card.Header>University</Card.Header>
                <Card.Meta>attended during internship</Card.Meta>
                <Card.Description>
                  {project.value}
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/leetcode.png' />
                <Card.Header>Leetcode</Card.Header>
                <Card.Meta>how many problems solved</Card.Meta>
                <Card.Description>
                  {project.leetcode} questions
                </Card.Description>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/offers.png' />
                <Card.Header>Offers</Card.Header>
                <Card.Meta>total number</Card.Meta>
                <Card.Description>
                  {project.offers}
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/applications.png' />
                <Card.Header>Applications (5)</Card.Header>
                <Card.Meta>names of companies</Card.Meta>
                <Card.Description>
                  {project.applications}
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
          <br />
          <h3 id="category-title">Recommendations</h3>
          <Card.Group>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/cv.png' />
                <Card.Header>CV</Card.Header>
                <Card.Meta>how to improve</Card.Meta>
                <Card.Description>
                  <p>- Summary, education (projects & roles), skills (as many as possible)</p>
                  <p>- Experience (projects, contributions & roles), honors, activities</p>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/applications.png' />
                <Card.Header>Pitch</Card.Header>
                <Card.Meta>how to improve</Card.Meta>
                <Card.Description>
                  <p>- Practice with Jennifer</p>
                  <p>- Write down a pitch</p>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/interview.png' />
                <Card.Header>Interview Preparation</Card.Header>
                <Card.Meta>how to improve</Card.Meta>
                <Card.Description>
                  <p>- Prepare for behavior questions</p>
                  <p>- Search common questions online, write down your own answers, review them before any interview</p>
                  <p>- Prepare 1-minute brief description for all the projects or activities on your resume (content, contribution)</p>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/technical.png' />
                <Card.Header>Technical Questions</Card.Header>
                <Card.Meta>how to impove</Card.Meta>
                <Card.Description>
                  <p>- practice algorithms, system design, database</p>
                  <p>- practice coding and explaining at the same time on the board</p>
                  <p>- write code in the google document</p>
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/onsite.png' />
                <Card.Header>On-site interview</Card.Header>
                <Card.Meta>how to improve</Card.Meta>
                <Card.Description>
                  <p>- Small companies might require you to do the on-site interview instead of the phone interview</p>
                  <p>- Most of the on-site interview including system design problems</p>
                  <p>- database, distributed system, cloud deployment</p>
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
      </Segment>
    )
  }
  itemsRef = db.ref('reviews')
  // this.itemsRef.on('value', function(snapshot) {
  // console.log(snapshot.val())
  // _this.setState({
  //   posts: snapshot.val(),
  //   loading: false
  //   });
  //   });
  // }
  // }
}
Read.propTypes = propTypes
export default Read
