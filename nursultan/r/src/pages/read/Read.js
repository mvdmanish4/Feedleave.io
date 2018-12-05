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
  componentWillMount() {
    if (this.state.userData.rating) {
      this.setState({rating: this.state.userData.rating})
      this.state.rating = this.state.userData.rating
    }
  }
  // let results = [...projects]
  onRate = (e, { rating, maxRating }) => {
    this.setState({ rating, maxRating })
    db.ref('reviews/' + this.state.userData.id).update({rating: rating})
    this.state.userData.rating = rating
  }
  render() {
    const project = this.state.userData
    db.ref('reviews/' + project.id).update({views: project.views + 1})
    console.log(project)
    console.log('bdfkdkf')

    return (
      <Segment basic>
        <Container>
          <h3 id="category-title">Background Information</h3>
          <List divided horizontal size='large'>
            <strong>{project.linkedinLink}</strong>
            <List.Item>{project.releaseData}</List.Item>
            <List.Item>{project.views} views</List.Item>
            <List.Item>
              <Rating icon="star" size="large" maxRating={5} onRate={this.onRate} rating={this.state.rating}/>
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
                  {project.company}
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
                <Card.Header>Applications</Card.Header>
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
                  {project.cv.split('\n').map((i, key) => {
                    return <div key={key}>{i}</div>
                  })}
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/applications.png' />
                <Card.Header>Pitch</Card.Header>
                <Card.Meta>how to improve</Card.Meta>
                <Card.Description>
                  {project.pitch.split('\n').map((i, key) => {
                    return <div key={key}>{i}</div>
                  })}
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/interview.png' />
                <Card.Header>Interview Preparation</Card.Header>
                <Card.Meta>how to improve</Card.Meta>
                <Card.Description>
                  {project.interviewPreparation.split('\n').map((i, key) => {
                    return <div key={key}>{i}</div>
                  })}
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/technical.png' />
                <Card.Header>Technical Questions</Card.Header>
                <Card.Meta>how to impove</Card.Meta>
                <Card.Description>
                  {project.technicalQuestions.split('\n').map((i, key) => {
                    return <div key={key}>{i}</div>
                  })}
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/onsite.png' />
                <Card.Header>Phone interview</Card.Header>
                <Card.Meta>how to improve</Card.Meta>
                <Card.Description>
                  {project.phoneInterview.split('\n').map((i, key) => {
                    return <div key={key}>{i}</div>
                  })}
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/onsite.png' />
                <Card.Header>On-site interview</Card.Header>
                <Card.Meta>how to improve</Card.Meta>
                <Card.Description>
                  {project.onsiteInterview.split('\n').map((i, key) => {
                    return <div key={key}>{i}</div>
                  })}
                </Card.Description>
              </Card.Content>
            </Card>
            <Card fluid>
              <Card.Content>
                <Image floated='right' size='tiny' src='img/read/onsite.png' />
                <Card.Header>Additional Information</Card.Header>
                <Card.Meta>how to improve</Card.Meta>
                <Card.Description>
                  {project.additionalInformation.split('\n').map((i, key) => {
                    return <div key={key}>{i}</div>
                  })}
                </Card.Description>
              </Card.Content>
            </Card>
          </Card.Group>
        </Container>
      </Segment>
    )
  }
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
