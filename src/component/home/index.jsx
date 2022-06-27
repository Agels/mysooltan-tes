import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import moment from "moment";
import Search from "../search";
import "moment-timezone";
import { propTypes } from "react-bootstrap/esm/Image";
const Home = () => {
  const [repo, setRepo] = useState([]);
  const [img, setImg] = useState({});
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.github.com/users/Agels/repos?sort=created&direction=desc"
      )
      .then((res) => setRepo(res.data));
  }, []);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/Agels")
      .then((res) => setImg(res.data));
  }, []);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const filtered = !search
    ? repo
    : repo.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );
      console.log(filtered)
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={4}>
          <img
            src={img.avatar_url}
            className="rounded-circle w-50"
            alt="img"
          />
          <p>{img.login}</p> 
        </Col>
        <Col lg={8}>
        <Search onChange={handleSearchChange} value={search} />
        {filtered.map((el) => {
          return (
              <Card style={{ width: "18rem" }}>
                <Card.Body>
                  {/* {console.log(el)} */}
                  <Card.Title>{el.name}</Card.Title>
                  <Card.Text>
                    {el.language} &nbsp;&nbsp;&nbsp;updated on{" "}
                    {moment(new Date(el.updated_at)).fromNow()}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
          );
        })}
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
