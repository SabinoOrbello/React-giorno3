import { Component } from "react";
import fantasyBooks from "../data/fantasy.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    books: fantasyBooks,
  };

  render() {
    return this.state.books.map((book) => (
      <Card style={{ width: "18rem" }} key={`book-id-${book.id}`}>
        <Card.Img variant="top" src={book.img} />
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.category}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    ));
  }
}
export default SingleBook;
