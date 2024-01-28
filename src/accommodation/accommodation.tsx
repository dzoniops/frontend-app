import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Accommodation() {
  const [accommodation, setAccommodation] = useState(null);

  const params = useParams();
  // const fetchData = () => {
  //   fetch("")
  // }

  useEffect(() => {
    fetch(`http://localhost:1323/accommodations/${params.accommodationId}`)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(params.accommodationId)
        },
        (error) => {}
      );
  }, []);
  return (
    <Row>
      <Col>
        <p>pera</p>
      </Col>
    </Row>
  );
}
