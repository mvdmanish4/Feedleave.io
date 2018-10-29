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
const propTypes = {
  // keyName: PropTypes.object.isRequired
}

class Reviews extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedCompany: 'All' }
    // this.state = { text1: '222' }
  }

  renderReviewsHeader = () => {
    const reviews = this.countReviews(config.reviews)
    const { selectedCompany } = this.state
    const activeColor = 'pink'
    const deActiveColor = 'linkedin'
    const result = Object.keys(reviews).map(company => {
      const buttonColor =
        company === selectedCompany ? activeColor : deActiveColor
      return (
        <Button
          key={company}
          onClick={this.handleReviewsSelect}
          color={buttonColor}
        >
          {company}
        </Button>
      )
    })

    result.unshift(
      <Button
        key={'All'}
        color={selectedCompany === 'All' ? activeColor : deActiveColor}
        onClick={this.handleReviewsSelect}
      >
        All
      </Button>
    )
    return result
  }

  renderReviews = (company, reviews) => {
    let results = [...reviews]
    if (this.state.selectedCompany !== 'All') {
      results = reviews.filter(project => {
        return project.company === company
      })
    }
    return results.map(project => {
      return (
        <Card color="olive" key={project.id}>
          <Image src={project.thumbnail} />
          <Card.Content>
            <Card.Header>{project.position}</Card.Header>
          </Card.Content>
          {/* <Card.Content extra>{project.company}</Card.Content> */}
          <Card.Description extra>{project.type}</Card.Description>
          <Card.Content extra>{project.author}</Card.Content>
          <Card.Content extra>{project.release_date}</Card.Content>
          <Card.Content extra><Icon name='eye' />{project.views} views</Card.Content>
        </Card>
      )
    })
  }

  render() {
    const { selectedCompany } = this.state
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
            <Button.Group size="large" toggle>
              {this.renderReviewsHeader()}
            </Button.Group>
            {/* <Divider /> */}
            <br /><br />
            <Link to="/read">
              {/* {this.props.keyName('333')} */}
              {/* <Read text1={{ text1: 'Welcome to React' }}/> */}
              {/* <Read text1={this.state.text1}/> */}
              <Card.Group textAlign="center" itemsPerRow="5" stackable>
                {this.renderReviews(selectedCompany, reviews)}
              </Card.Group>
            </Link>
          </Container>
        </Segment>
      </div>
    )
  }

  handleReviewsSelect = (event, data) => {
    this.setState({ selectedCompany: data.children })
  }

  countReviews = reviews => {
    const results = {}
    for (let i = 0; i < reviews.length; i++) {
      const project = reviews[i]
      const { company } = project
      if (results[company] === undefined) {
        results[company] = 1
      } else {
        results[company] += 1
      }
    }
    return results
  }
}

// export default Reviews
Reviews.propTypes = propTypes
export default withRouter(Reviews)
