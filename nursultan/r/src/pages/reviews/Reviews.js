import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Segment,
  Container,
  Card,
  Image,
  Divider,
  Button,
  Icon
} from 'semantic-ui-react'
import config from '../../config'
import {
  Link,
  withRouter
} from 'react-router-dom'
import Read from '../read/Read'
import { db } from './../../firebase/firebase'
const propTypes = {
  // keyName: PropTypes.object.isRequired
}

class Reviews extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedView: 'Company', listingData: [], users: []}
  }
  componentWillMount() {
    db.ref('reviews/').on('value', snapshot => {
      const result = Object.keys(snapshot.val()).map(function(key) {
        const entry = snapshot.val()[key]
        entry.id = key
        return entry
      })
      this.setState({ users: result })
    })
  }
  renderReviews = (company, reviews) => {
    console.log(reviews)
    const results = [...reviews]
    if (this.state.selectedView === 'Popular') {
      results.sort(function(a, b) {
        if (Number(a.views) > Number(b.views)) {
          return -1
        }
        return 1
      })
    } else {
      results.sort(function(a, b) {
        return a.company.localeCompare(b.company)
      })
    }
    // else if (this.state.selectedView === 'New') {
    //   results.sort(function(a, b) {
    //     return new Date(b.release_date) - new Date(a.release_date)
    //   })
    // }

    return results.map(project => {
      return (
        <Card color="olive" as={Link} to={{ pathname: '/read', state: { userData: project } }}>
          {/* key={project.id} */}
          {/* <Image src={project.thumbnail} /> */}
          <Card.Content>
            <Card.Header>{project.position}</Card.Header>
          </Card.Content>
          {/* <Card.Content extra>{project.company}</Card.Content> */}
          <Card.Description extra>{project.company}</Card.Description>
          <Card.Content extra>{project.linkedinLink}</Card.Content>
          <Card.Content extra>{project.releaseDate}</Card.Content>
          <Card.Content extra><Icon name='eye' />{project.views} views</Card.Content>
        </Card>
      )
    })
  }

  render() {
    const { selectedView } = this.state
    const { reviews } = config
    const browserSize = {
      width: window.innerWidth || document.body.clientWidth,
      height: window.innerHeight || document.body.clientHeight
    }
    const isButtonGroupVertical = browserSize.width <= 748 ? true : false
    return (
      <div>
        <Segment basic>
          <Container textAlign="center">{/* <Button.Group size="large" toggle vertical={isButtonGroupVertical}> */}
            <p>Sort by:</p>
            <Button.Group size="large" toggle>
              <Button
                key={'Company'}
                onClick={this.handleReviewsSelect}
                color={this.state.selectedView === 'Company' ? 'pink' : 'linkedin'}
              >
                Company
              </Button>
              <Button
                key={'Popular'}
                onClick={this.handleReviewsSelect}
                color={this.state.selectedView === 'Popular' ? 'pink' : 'linkedin'}
              >
                Popular
              </Button>
              {/* <Button
                key={'New'}
                onClick={this.handleReviewsSelect}
                color={this.state.selectedView === 'New' ? 'pink' : 'linkedin'}
              >
                New
              </Button> */}
            </Button.Group>
            {/* <Divider /> */}
            <br /><br />
            {/* {this.props.keyName('333')} */}
            {/* <Read text1={{ text1: 'Welcome to React' }}/> */}
            {/* <Read text1={this.state.text1}/> */}
            <Card.Group textAlign="left" itemsPerRow="5" stackable>
              {this.renderReviews(selectedView, this.state.users)}
            </Card.Group>
          </Container>
        </Segment>
      </div>
    )
  }
  itemsRef = db.ref('reviews')
  handleReviewsSelect = (event, data) => {
    this.setState({ selectedView: data.children })
  }

  // countReviews = reviews => {
  //   const results = {}
  //   for (let i = 0; i < reviews.length; i++) {
  //     const project = reviews[i]
  //     const { company } = project
  //     if (results[company] === undefined) {
  //       results[company] = 1
  //     } else {
  //       results[company] += 1
  //     }
  //   }
  //   return results
  // }
}

// export default Reviews
Reviews.propTypes = propTypes
export default withRouter(Reviews)
