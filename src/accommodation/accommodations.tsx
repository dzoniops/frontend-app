import { useEffect, useState } from "react";
import { Row, Col, Card, Button, Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";


export default function Accommodations() {
  const [accommodations, setAccommodations] = useState(["nikola", [], [], []]);
  const [query, setQuery] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const fetchData = () => {
    fetch(
      "http://localhost:1323/accommodations/search?" +
        new URLSearchParams({
          query: query,
          start_date: startDate.toISOString(),
          end_date:startDate.toISOString(),
        })
    )
      .then((response) => response.json())
      .then((data) => {
        setAccommodations(data);
        console.log(data);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <Row>
        <Col>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Col>
        <Col>
          <div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
        </Col>
        <Col>
          <div>
                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          </div>
        </Col>
      </Row>
      <Row className="mt-2">
        {accommodations.map((accommodation, idx) => {
          return (
            <Col key={idx}>
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    Card Subtitle
                  </Card.Subtitle>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </>
  );
}
