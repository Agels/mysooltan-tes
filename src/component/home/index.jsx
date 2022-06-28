import { Card, Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { repolist } from "../../app/actions/repoAction";
import moment from "moment";
import Search from "../search";
import "moment-timezone";
import Avatar from "../avatar";
import {cardStyle,doted,style} from '../css/css';
const Home = () => {
  const dispatch = useDispatch();
  const repo = useSelector((state) => state.repo.repo);
  const [type, setType] = useState("created&direction=desc");
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(`https://api.github.com/users/Agels/repos?sort=${type}`
      )
      .then((res) => dispatch(repolist(res.data)));
  }, [type]);
  const filtered = !search
    ? repo
    : repo.filter((person) =>
        person.name.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div style={style}>
      <Container>
        <Row>
          <Col lg={4}>
            <Avatar />
          </Col>
          <Col lg={8}>
            <Search
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              onClick={(e) => setType(e)}
            />
            {filtered.map((el, index) => {
              return (
                <Card style={cardStyle} key={index}>
                  <Card.Body>
                    <Row>
                      <Col>
                        <Card.Text>
                          <Card.Title className="end">{el.name}</Card.Title>
                          <span style={doted}></span> {el.language}
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>
                          {moment(new Date(el.updated_at)).fromNow()}
                        </Card.Text>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
              );
            })}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
