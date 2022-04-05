import { Row, Col, Card, CardTitle, CardBody } from "reactstrap";

const Questions = () => {
  return (
    <Row>
      <Col>
        <Card align={"center"} style={{ borderColor: "#333" }}>
          <CardTitle tag={"h5"}>Proudest Professional Achievement</CardTitle>
          <CardBody>
            My proudest professional Achievement is what I've been able to
            accomplish in my Senior Project class for the past two semesters
            while maintaining a full-time position.
            <br />
            <br />
            Since August of 2021, I have learned two huge new skills while
            keeping my wife and I afloat. All the while, polishing off my second
            bachelors degree <em>(Info Science at UNF)</em>. Not only was I able
            to learn these skills, but I was able to please my clients at school
            and at work. I have to thank the tremendous help I received from my
            mentors at Availity for this.
            <br />
            <br />
            At work, I successfully procured and learned a brand-new automation
            tool (AutomationAnywhere), while learning full-stack React
            development in my school project. In this project, I was able to
            learn React, JavaScript, and Azure deployment within the span of 6
            months. A live version of this site can be{" "}
            <a
              href="https://yellow-coast-088c6f310-60.centralus.1.azurestaticapps.net/"
              target="_blank"
              rel="noreferrer"
            >
              found here
            </a>
            <br />
            <br />
            In short, I would say my proudest professional achievement is my
            ability to adapt and survive for the past 8 months while continuing
            to excel professionally.
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card style={{ borderColor: "#333" }}>
          <CardTitle tag={"h5"}>
            Something I Have Read and Would Recommend
          </CardTitle>
          <CardBody>
            I don't currently read a lot of articles or listen to podcasts that
            typically revolve around development, so I do apologize if that is
            the preferred discussion piece of this question. I am trying to be
            better about this, but full-time work and full-time school only
            allows me time to typically focus on what is in front of me.
            <br />
            <br />
            <strong>
              However, to answer the question as best as I can: I am a huge
              history fan. 
            </strong>
            <br />
            <br />
            Recently, I have been listening to Dan Carlin's podcasts on the fall
            of the Roman Empire; <em>Death Throes of the Republic</em>. This is
            great as I've previously listened to Mike Duncan's{" "}
            <em>History of Rome</em>, so I have something to bounce this more
            stylized presentation off of.
          </CardBody>
        </Card>
      </Col>
      <Col>
        <Card style={{ borderColor: "#333" }}>
          <CardTitle tag={"h5"}>
            Explaining to Grandma What Availity Does
          </CardTitle>
          <CardBody>Lorem ipsum dollar</CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default Questions;
