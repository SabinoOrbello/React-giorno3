import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Component } from "react";
import Badge from "react-bootstrap/Badge";
import Container from "react-bootstrap/esm/Container";
import fantasyBooks from "../data/fantasy.json";
import historyBooks from "../data/history.json";
import horrorBooks from "../data/horror.json";
import romanceBooks from "../data/romance.json";
import scifiBooks from "../data/scifi.json";
import Row from "react-bootstrap/esm/Row";

// -----------CLASSE COMPONET
class AllTheBooks extends Component {
  // ---------IL SUO STATE ALL'INTERNO
  state = {
    books: fantasyBooks,
  };
  // --------------------------------

  // ---------RENDER
  render() {
    return (
      <Container className="overflow-auto mt-3">
        <div className="mb-3">
          <Button
            className="me-2"
            variant="info"
            onClick={() => {
              this.setState({ books: fantasyBooks });
            }}
          >
            Fantasy
          </Button>
          <Button
            className="me-2"
            variant="warning"
            onClick={() => {
              this.setState({ books: historyBooks });
            }}
          >
            History
          </Button>
          <Button
            className="me-2"
            variant="danger"
            onClick={() => {
              this.setState({ books: horrorBooks });
            }}
          >
            Horror
          </Button>
          <Button
            className="me-2"
            variant="success"
            onClick={() => {
              this.setState({ books: romanceBooks });
            }}
          >
            Romance
          </Button>
          <Button
            className="me-2"
            variant="dark"
            onClick={() => {
              this.setState({ books: scifiBooks });
            }}
          >
            Sci-fi
          </Button>
        </div>

        <Row className="row-cols-xs-2 row-cols-md-3 row-cols-lg-4">
          {this.state.books.map((book) => (
            <Card key={`book-id-${book.id}`} style={{ width: "18rem" }} className="me-4 mb-4">
              <Card.Img variant="top" src={book.img} style={{ objectFit: "cover", height: "200px" }} />
              <Card.Body>
                <Card.Title>{book.title}</Card.Title>
                <Card.Text>
                  <Badge bg="warning"> {book.price}€</Badge>
                  <Badge bg="info">{book.category}</Badge>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </Row>
      </Container>
    );
  }
}

export default AllTheBooks;
