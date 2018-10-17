import React from 'react'
import PropTypes from 'prop-types'
import {
  Segment,
  Container,
  Grid,
  Icon
} from 'semantic-ui-react'

const propTypes = {
  pageData: PropTypes.object.isRequired
}

const Terms = () => (
  <div>
    <Segment basic>
      <Container>
        {/* <h3 id="category-title">Terms of Service</h3> */}
        <Grid columns={2} stackable verticalAlign="top">
          <Grid.Column>
            <h4 id="article-title">Introduction</h4>
            <div id="article-content">
              <p>
              These Website Standard Terms And Conditions (these “Terms” or these “Website Standard Terms And Conditions”) contained herein on this webpage, shall govern your use of this website, including all pages within this website (collectively referred to herein below as this “Website”). These Terms apply in full force and effect to your use of this Website and by using this Website, you expressly accept all terms and conditions contained herein in full. You must not use this Website, if you have any objection to any of these Website Standard Terms And Conditions.
              </p>
              <p>
              This Website is not for use by any minors (defined as those who are not at least 18 years of age), and you must not use this Website if you a minor.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column>
            <h4 id="article-title">Intellectual Property Rights</h4>
            <div id="article-content">
              <p>
              Other than content you own, which you may have opted to include on this Website, under these Terms, <b>FEEDLEAVE</b> and/or its licensors own all rights to the intellectual property and material contained in this Website, and all such rights are reserved.
              </p>
              <p>
              You are granted a limited license only, subject to the restrictions provided in these Terms, for purposes of viewing the material contained on this Website,
              </p>
              <p>
              PandaTip: If the website is only for viewing, then you might be able to stop where we left off above. That said, you will likely need to provide more in the way of descriptive language around what users may use the website to do/for.
              </p>
            </div>
          </Grid.Column>

          <Grid.Column>
            <h4 id="article-title">Restrictions</h4>
            <div id="article-content">
              <p>
              You are expressly and emphatically restricted from all of the following:
              </p>
              <p>
              - publishing any Website material in any media;
              </p>
              <p>
              - selling, sublicensing and/or otherwise commercializing any Website material;
              </p>
              <p>
              - publicly performing and/or showing any Website material;
              </p>
              <p>
              - using this Website in any way that is, or may be, damaging to this Website;
              </p>
              <p>
              - using this Website in any way that impacts user access to this Website;
              </p>
              <p>
              - using this Website contrary to applicable laws and regulations, or in a way that causes, or may cause, harm to the Website, or to any person or business entity;
              </p>
              <p>
              - engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website, or while using this Website;
              </p>
              <p>
              - using this Website to engage in any advertising or marketing;
              </p>
              <p>
              Certain areas of this Website are restricted from access by you and <b>FEEDLEAVE</b> may further restrict access by you to any areas of this Website, at any time, in its sole and absolute discretion.  Any user ID and password you may have for this Website are confidential and you must maintain confidentiality of such information.
              </p>
            </div>
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  </div>
)

Terms.propTypes = propTypes
export default Terms
