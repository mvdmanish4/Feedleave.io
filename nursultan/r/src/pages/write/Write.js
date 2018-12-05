import React, { Component } from 'react'
// import PropTypes from 'prop-types'
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
  List,
  Checkbox,
  Form,
  Message,
  Input,
  Modal,
  Header
} from 'semantic-ui-react'
// import config from '../../config'
import { auth, db } from './../../firebase/firebase'

const propTypes = {
  // pageData: PropTypes.object.isRequired
}

const options = [
  { key: 'u0', text: 'Carnegie Mellon University SV', value: 'Carnegie Mellon University SV' },
  { key: 'u1', text: 'Carnegie Mellon University Pittsburgh', value: 'Carnegie Mellon University Pittsburgh' },
  { key: 'u2', text: 'Stanford University', value: 'Stanford University' }
  // { key: 'u3', text: 'University of California, Berkeley', value: 'berkeley' },
  // { key: 'u4', text: 'San José State University', value: 'sanjose' },
  // { key: 'u5', text: 'Berkeley City College', value: 'bcc' },
  // { key: 'u6', text: 'California Maritime Academy (Vallejo)', value: 'cmav' },
  // { key: 'u7', text: 'California State University, East Bay (Hayward)', value: 'csuebh' },
  // { key: 'u8', text: 'Cañada College (Redwood City)', value: 'ccrc' },
  // { key: 'u9', text: 'Chabot College (Hayward)', value: 'cch' },
  // { key: 'u10', text: 'City College of San Francisco', value: 'ccosf' },
  // { key: 'u11', text: 'College of Alameda', value: 'coa' },
  // { key: 'u12', text: 'College of Marin (Kentfield)', value: 'cmk' },
  // { key: 'u13', text: 'College of San Mateo', value: 'cosm' },
  // { key: 'u14', text: 'Contra Costa College (San Pablo)', value: 'cccsp' },
  // { key: 'u15', text: 'De Anza College, (Cupertino)', value: 'dacc' },
  // { key: 'u16', text: 'Diablo Valley College, (Pleasant Hill)', value: 'dvcph' },
  // { key: 'u17', text: 'Evergreen Valley College (San Jose)', value: 'evcsj' },
  // { key: 'u18', text: 'Foothill College (Los Altos Hills)', value: 'fclah' },
  // { key: 'u19', text: 'Gavilan College (Gilroy)', value: 'gcg' },
  // { key: 'u20', text: 'Laney College (Oakland)', value: 'lco' },
  // { key: 'u21', text: 'Las Positas College (Livermore)', value: 'lpcl' },
  // { key: 'u22', text: 'Los Medanos College (Pittsburg)', value: 'lmcp' },
  // { key: 'u23', text: 'Merritt College (Oakland)', value: 'mro' },
  // { key: 'u24', text: 'Mission College (Santa Clara)', value: 'mcsc' },
  // { key: 'u25', text: 'Napa Valley College (Napa)', value: 'nvcn' },
  // { key: 'u26', text: 'Ohlone College (Fremont)', value: 'ocf' },
  // { key: 'u27', text: 'San Francisco State University', value: 'sfsu' },
  // { key: 'u28', text: 'San Jose City College', value: 'sjcc' },
  // { key: 'u29', text: 'San Jose State University', value: 'sjsu' },
  // { key: 'u30', text: 'Santa Rosa Junior College', value: 'srjc' },
  // { key: 'u31', text: 'Sonoma State University (Rohnert Park)', value: 'sturp' },
  // { key: 'u32', text: 'Skyline College (San Bruno)', value: 'scsb' },
  // { key: 'u33', text: 'Solano Community College (Fairfield)', value: 'sccf' },
  // { key: 'u34', text: 'West Valley College, Saratoga', value: 'wvcs' },
  // { key: 'u35', text: 'University of California, Hastings College of the Law (San Francisco)', value: 'uochcotl' },
  // { key: 'u36', text: 'University of California, San Francisco', value: 'uocsf' },
  // { key: 'u37', text: 'University of California, Santa Cruz', value: 'uocsc' },
  // { key: 'u38', text: 'Academy of Art University', value: 'aoau' },
  // { key: 'u39', text: 'The Art Institute of California – San Francisco', value: 'taiocsf' },
  // { key: 'u40', text: 'California College of the Arts', value: 'ccota' },
  // { key: 'u41', text: 'California Culinary Academy', value: 'cca' },
  // { key: 'u42', text: 'California Institute of Integral Studies', value: 'ciois' },
  // { key: 'u43', text: 'Cogswell Polytechnical College', value: 'cpc' },
  // { key: 'u44', text: 'Culinary Institute of America at Greystone', value: 'cioaag' },
  // { key: 'u45', text: 'DeVry University', value: 'du' },
  // { key: 'u46', text: 'Dominican University', value: 'domu' },
  // { key: 'u47', text: 'Expression College for Digital Arts', value: 'ecfda' },
  // { key: 'u48', text: 'Fashion Institute of Design and Merchandising', value: 'fiodam' },
  // { key: 'u49', text: 'Five Branches University', value: 'fbu' },
  // { key: 'u50', text: 'Golden Gate University', value: 'ggu' },
  // { key: 'u51', text: 'Holy Names University', value: 'hnu' },
  // { key: 'u52', text: 'Herguan University', value: 'hu' },
  // { key: 'u53', text: 'Hult International Business School', value: 'hibs' },
  // { key: 'u54', text: 'Institute of Transpersonal Psychology', value: 'iotp' },
  // { key: 'u55', text: 'International Technological University', value: 'itu' },
  // { key: 'u56', text: 'John F. Kennedy University', value: 'jfku' },
  // { key: 'u57', text: 'Lincoln Law School of San Jose', value: 'llspsj' },
  // { key: 'u58', text: 'Lincoln University (California)', value: 'luc' },
  // { key: 'u59', text: 'Menlo College', value: 'mc' },
  // { key: 'u60', text: 'Mills College', value: 'mic' },
  // { key: 'u61', text: 'Minerva Schools at KGI', value: 'msakgi' },
  // { key: 'u62', text: 'National Hispanic University', value: 'nhu' },
  // { key: 'u63', text: 'New College of California', value: 'ncoc' },
  // { key: 'u64', text: 'Northwestern Polytechnic University', value: 'npu' },
  // { key: 'u65', text: 'Notre Dame de Namur University', value: 'nddnu' },
  // { key: 'u66', text: 'Palo Alto University', value: 'pau' },
  // { key: 'u67', text: 'Pacific Union College', value: 'puc' },
  // { key: 'u68', text: 'Palmer College of Chiropractic West', value: 'pcocw' },
  // { key: 'u69', text: 'Patten University', value: 'pu' },
  // { key: 'u70', text: 'Presidio School of Management', value: 'psom' },
  // { key: 'u71', text: 'Saint Marys College of California', value: 'smcoc' },
  // { key: 'u72', text: 'San Francisco Conservatory of Music', value: 'sfcom' },
  // { key: 'u73', text: 'San Francisco Law School', value: 'sfls' },
  // { key: 'u74', text: 'Santa Clara University', value: 'scu' },
  // { key: 'u75', text: 'Saybrook Graduate School and Research Center', value: 'sgsarc' },
  // { key: 'u76', text: 'Silicon Valley University', value: 'svu' },
  // { key: 'u77', text: 'Touro University California', value: 'tuc' },
  // { key: 'u78', text: 'University of Northern California', value: 'uonc' },
  // { key: 'u79', text: 'University of Phoenix North Bay Fairfield Campus', value: 'uopnbfc' },
  // { key: 'u80', text: 'University of Phoenix San Jose Campus', value: 'uofsjc' },
  // { key: 'u81', text: 'University of San Francisco', value: 'uosf' },
  // { key: 'u82', text: 'Silicon Valley Technical Institute', value: 'svti' },
  // { key: 'u83', text: 'Wharton West—Executive MBA Program (University of Pennsylvania)', value: 'wwembapuop' }
]
// https://en.wikipedia.org/wiki/List_of_colleges_and_universities_in_the_San_Francisco_Bay_Area
const INITIAL_STATE = {
  linkedinLink: '',
  company: '',
  position: '',
  experience: '',
  value: '',
  leetcode: '',
  offers: '',
  applications: '',
  cv: '',
  pitch: '',
  interviewPreparation: '',
  technicalQuestions: '',
  nonTechnicalQuestions: '',
  phoneInterview: '',
  onsiteInterview: '',
  additionalInformation: '',
  submitLinkedinLink: '',
  submittedCompany: '',
  submittedPosition: '',
  submittedExperience: '',
  submittedLeetcode: '',
  submittedOffers: '',
  submittedCv: '',
  submittedPitch: '',
  submittedInterviewPreparation: '',
  submittedTechnicalQuestions: '',
  submittedNonTechnicalQuestions: '',
  submittedPhoneInterview: '',
  submittedOnsiteInterview: '',
  submittedAdditionalInformation: '',
  modalOpen: false,
  publishReview: false,
  views: 0
}


class Write extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.znachenie = 'ss'
  }
  componentWillMount() {
    this.itemsRef.on('value', data => {
      this.itemsRef.orderByKey().limitToLast(1).on('child_added', function(snapshot) {
        // this.znachenie = snapshot.key
        // this.setState({
        //   znachenie: snapshot.key
        // })
        console.log('posled: ' + snapshot.key)
      })
    })
  }
  // componentWillMount() {
  //   this.itemsRef.on('value', data => {
  //     this.setState({
  //       items: data.val()
  //     })
  //   })
  // }
  // componentWillUnmount() {
  //   fire.removeBinding(this.itemsRef)
  // }
  render() {
    const {
      linkedinLink, company, position, experience, value, leetcode, offers, applications, cv, pitch, interviewPreparation, technicalQuestions, nonTechnicalQuestions, phoneInterview, onsiteInterview, additionalInformation, submitLinkedinLink, submittedCompany, submittedPosition, submittedExperience, submittedLeetcode, submittedOffers, submittedCv, submittedPitch, submittedInterviewPreparation, submittedTechnicalQuestions, submittedNonTechnicalQuestions, submittedPhoneInterview, submittedOnsiteInterview, submittedAdditionalInformation } = this.state
    return (
      <Segment basic>
        <Container>
          <h3 id="category-title">Write Review</h3>
          <Form>
            <Form.Field required>
              <label>LinkedIn Profile</label>
              <Form.Input placeholder='enter the url' name='linkedinLink' value={linkedinLink} onChange={this.handleChange} />
              {/* <Input label='http://' placeholder='name' name='linkedinLink' value={linkedinLink} onChange={this.handleChange} /> */}
            </Form.Field>
            <Form.Field required>
              <label>Company</label>
              <Form.Input placeholder='name of the company you interned' name='company' value={company} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field required>
              <label>Position</label>
              <Form.Input placeholder='name of the internship position' name='position' value={position} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field required>
              <label>Experience</label>
              <Form.Input placeholder='number of prior experience years' name='experience' value={experience} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <Form.Select required fluid label='University' value={value} options={options} onChange={this.handleChangeDropdown} placeholder='choose from the list' />
            </Form.Field>
            <Form.Field>
              <label>Leetcode</label>
              <Form.Input placeholder='number of problems solved prior to internship' name='leetcode' value={leetcode} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field required>
              <label>Offers</label>
              <Form.Input placeholder='number of offers held' name='offers' value={offers} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field required>
              <label>Applications</label>
              {/* <Form.Input placeholder='name of the company applied' /> */}
              {/* <Input action={{ icon: 'close', color: 'red' }} placeholder='enter company name' /> */}
              <Form.Input placeholder='enter company name' name='applications' value={applications} onChange={this.handleChange} />
              {/* onClick={this.addInput} */}
              {/* <p id="article-title"><font size="4">+ Add new </font></p> */}
              {/* <Button icon labelPosition='left' basic color="transparent">
                <Icon name='plus' />
                Add new
              </Button> */}
            </Form.Field>
            <h3 id="category-title">Recommendations</h3>
            <Form.Field>
              <label>CV</label>
              <Form.TextArea placeholder='write down your suggestions...' name='cv' value={cv} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Pitch</label>
              <Form.TextArea placeholder='write down your suggestions...' name='pitch' value={pitch} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Interview Preparation</label>
              <Form.TextArea placeholder='write down your suggestions...' name='interviewPreparation' value={interviewPreparation} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Technical Questions</label>
              <Form.TextArea placeholder='write down your suggestions...' name='technicalQuestions' value={technicalQuestions} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Non-technical Questions</label>
              <Form.TextArea placeholder='write down your suggestions...' name='nonTechnicalQuestions' value={nonTechnicalQuestions} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Phone Interview</label>
              <Form.TextArea placeholder='write down your suggestions...' name='phoneInterview' value={phoneInterview} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>On-site Interview</label>
              <Form.TextArea placeholder='write down your suggestions...' name='onsiteInterview' value={onsiteInterview} onChange={this.handleChange} />
            </Form.Field>
            <Form.Field>
              <label>Additional Information</label>
              <Form.TextArea placeholder='write down your suggestions...' name='additionalInformation' value={additionalInformation} onChange={this.handleChange} />
            </Form.Field>
            <br />
            <Form.Field>
              {/* <Checkbox label='I agree to the Terms and Conditions' /> */}
              <Form.Field control={Checkbox} label={<label>I agree to the <a href='\terms'>Terms of Service</a>, <a href='\terms'>Privacy Policy</a></label>} />
            </Form.Field>
          </Form>
          <br />
          <Grid>
            <Grid.Column>
              <Button type='submit' color="red" onClick={this.handleClear}>Clear</Button>
              <Button type='submit' color="blue" onClick={this.handleSave}>Save</Button>
              <Button type='submit' color="green" onClick={this.handleSubmit}>Submit</Button>
            </Grid.Column>
          </Grid>
          {/* <pre>{JSON.stringify({ linkedinLink, company, position, experience, leetcode, offers, cv, pitch, interviewPreparation, technicalQuestions, nonTechnicalQuestions, phoneInterview, onsiteInterview, additionalInformation }, null, 2)}</pre> */}
          {/* <pre>{JSON.stringify({ submitLinkedinLink, submittedCompany, submittedPosition, submittedExperience, submittedLeetcode, submittedOffers, submittedCv, submittedPitch, submittedInterviewPreparation, submittedTechnicalQuestions, submittedNonTechnicalQuestions, submittedPhoneInterview, submittedOnsiteInterview, submittedAdditionalInformation }, null, 2)}</pre> */}
          {/* <Message hidden success header='Review Published' content="You can edit/delete/publish the review in the profile page" /> */}
          {/* <Message header='Review Saved' content="You can edit/delete/publish the review in the profile page" /> */}
          {/* <Message hidden error header='Error' content='Please, fill out all required fields.' /> */}
          <Modal
            open={this.state.modalOpen}
            onClose={this.handleClose}
            basic
            size='small'
          >
            <Header icon='browser' content='Review Published' />
            <Modal.Content>
              <h3>You can edit/delete/publish the review in the profile page.</h3>
            </Modal.Content>
            <Modal.Actions>
              <Button color='green' onClick={this.handleClose} inverted>
                <Icon name='checkmark' /> Got it
              </Button>
            </Modal.Actions>
          </Modal>
        </Container>
      </Segment>
    )
  }
  // `users/${authUser.user.uid}`
  itemsRef = db.ref('users/' + auth.currentUser.uid)
  itemsRef2 = db.ref('reviews')
  // onAuthStateChanged(function(user) {
  //   if (user) {
  //   }
  // })
  // completeItem = (id) => {
  //   this.itemsRef.update({
  //     [id]: {
  //       ...this.state.items[id],
  //       completed: true
  //     }
  //   })
  // }
  // deleteItem = (id) => {
  //   this.itemsRef.update({
  //     [id]: null
  //   })
  // }
  // addItem = (e) => {
  //   e.preventDefault()
  //   this.itemsRef.push({
  //     item: this.todoItem.value,
  //     completed: false
  //   })
  // }
  handleClear = () => {
    this.setState({
      ...INITIAL_STATE
    })
  }
  handleSave = () => {
    const { linkedinLink, company, position, experience, value, leetcode, offers, applications, cv, pitch, interviewPreparation, technicalQuestions, nonTechnicalQuestions, phoneInterview, onsiteInterview, additionalInformation } = this.state
    this.itemsRef.push({
      linkedinLink, company, position, experience, value, leetcode, offers, applications, cv, pitch, interviewPreparation, technicalQuestions, nonTechnicalQuestions, phoneInterview, onsiteInterview, additionalInformation, publishReview: false
    })
    itemsRef.on('child_added', function(data) {
      addCommentElement(postElement, data.key, data.val().text, data.val().author)
    })
    this.setState({
      ...INITIAL_STATE
    })
  }
  handleChangeDropdown = (e, { value }) => this.setState({ value })
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => {
    const { linkedinLink, company, position, experience, value, leetcode, offers, applications, cv, pitch, interviewPreparation, technicalQuestions, nonTechnicalQuestions, phoneInterview, onsiteInterview, additionalInformation } = this.state
    const tempDate = new Date()
    const releaseDate =  (tempDate.getMonth() + 1) + '/' + tempDate.getDate() + '/' + tempDate.getFullYear()
    const views = 0
    this.itemsRef.push({
      linkedinLink, company, position, experience, value, leetcode, offers, applications, cv, pitch, interviewPreparation, technicalQuestions, nonTechnicalQuestions, phoneInterview, onsiteInterview, additionalInformation, publishReview: true, releaseDate, views
    })
    this.itemsRef2.push({
      linkedinLink, company, position, experience, value, leetcode, offers, applications, cv, pitch, interviewPreparation, technicalQuestions, nonTechnicalQuestions, phoneInterview, onsiteInterview, additionalInformation, publishReview: true, releaseDate, views
    })
    // this.setState({ submitLinkedinLink: linkedinLink, submittedCompany: company, submittedPosition: position, submittedExperience: experience, submittedLeetcode: leetcode, submittedOffers: offers, submittedCv: cv, submittedPitch: pitch, submittedInterviewPreparation: interviewPreparation, submittedTechnicalQuestions: technicalQuestions, submittedNonTechnicalQuestions: nonTechnicalQuestions, submittedPhoneInterview: phoneInterview, submittedOnsiteInterview: onsiteInterview, submittedAdditionalInformation: additionalInformation })
    this.setState({
      ...INITIAL_STATE
    })
    this.setState({ modalOpen: true })
  }
  handleClose = () => this.setState({ modalOpen: false })
}
// Write.propTypes = propTypes
export default Write
