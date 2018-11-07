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
    this.state = { selectedView: 'Company', listingData: []}
    // this.state = { text1: '222' }
  }
  componentWillMount() {
    this.itemsRef.on('value', data => {
      // this.setState({ allData: data.val() })
      const allData = data.val()
      console.log(allData)
      const key1 = Object.keys(data.val())[0]
      console.log('----------------------')
      console.log(key1)
      console.log('----------------------')
      // const key2 = Object.keys(data.val()).limitToLast(1)
      // itemsRef = db.ref('items')
      // console.log(itemsRef.orderByKey().limitToLast(1))
      // getLastFromList(this.itemsRef, function(val) {
      // console.log(val)
      // })
      // this.itemsRef.limit(1).once('child_added', function(snapshot) {
      //   console.log(snapshot.val())
      // })
      this.itemsRef.orderByKey().limitToLast(1).on('child_added', function(snapshot) {
        console.log('poslerd: ' + snapshot.key)
      })
      console.log('----------------------')
      // console.log(allData.key.prevChildKey)
      // console.log(data.child('cv'))
      // this.setState({usercount: data.val()});
      // this.setState({
      //   getItems: data.val()
      // })
      this.itemsRef.orderByKey().on('child_added', function(snapshot) {
        console.log(snapshot.key)
      })
      console.log('----------------------')

      this.itemsRef.orderByChild('cv').on('child_added', function(snapshot) {
        console.log(snapshot.val().additionalInformation)
      })
      console.log('----------------------')

      // starCountRef = db.ref('reviews/' + key1)
      db.ref('reviews/' + key1).on('value', function(snapshot) {
        console.log(snapshot.val().position)
      })
      console.log('----------------------')
      // console.log(getItems.position)
      // console.log(this.props.data.initialState)
      // console.log(this.props.text1.text1)

      db.ref('users').once('value').then(snapshot =>
        this.setState({ users: snapshot.val() })
      )
      console.log(this.users)
      // db.ref('users').on('value', function(snapshot) {
      //   this.setState({ users: snapshot.val() })
      // })
    })
  }
  renderReviews = (company, reviews) => {
    const results = [...reviews]
    console.log(results)
    if (this.state.selectedView === 'Popular') {
      results.sort(function(a, b) {
        if (Number(a.views) > Number(b.views)) {
          return -1
        }
        return 1
      })
    }
    if (this.state.selectedView === 'New') {
      results.sort(function(a, b) {
        return new Date(b.release_date) - new Date(a.release_date)
      })
    }
    return results.map(project => {
      return (
        <Card color="olive">
          {/* key={project.id} */}
          {/* <Image src={project.thumbnail} /> */}
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
    const { selectedView } = this.state
    const { reviews } = config
    // db.ref('reviews').on('value', data => {
    //   reviews = data.val()
    // })
    console.log(reviews)
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
              <Button
                key={'New'}
                onClick={this.handleReviewsSelect}
                color={this.state.selectedView === 'New' ? 'pink' : 'linkedin'}
              >
                New
              </Button>
            </Button.Group>
            {/* <Divider /> */}
            <br /><br />
            <Link to="/read">
              {/* {this.props.keyName('333')} */}
              {/* <Read text1={{ text1: 'Welcome to React' }}/> */}
              {/* <Read text1={this.state.text1}/> */}
              <Card.Group textAlign="center" itemsPerRow="5" stackable>
                {this.renderReviews(selectedView, reviews)}
              </Card.Group>
            </Link>
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
