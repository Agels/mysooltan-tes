import { Card, Button, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { repolist } from "../../app/actions/repoAction";
import moment from "moment";
import Search from "../search";
import "moment-timezone";

const Home = () => {
  const dispatch = useDispatch();
  const repo = useSelector((state) => state.repo.repo);

  const [img, setImg] = useState({});
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.github.com/users/Agels/repos?sort=created&direction=desc"
      )
      .then((res) => dispatch(repolist(res.data)));
  }, []);
  useEffect(() => {
    axios
      .get("https://api.github.com/users/Agels")
      .then((res) => setImg(res.data));
  }, []);

  const filtered = !search
    ? repo
    : repo.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );
  return (
    <Container className="mt-5">
      <Row>
        <Col lg={4}>
          <img src={img.avatar_url} className="rounded-circle w-50" alt="img" />
          <p>{img.login}</p>
        </Col>
        <Col lg={8}>
          <Search onChange={(e) => setSearch(e.target.value)} value={search} />
          {filtered.map((el) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Body>
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
