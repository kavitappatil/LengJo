import React from "react";
import {  Button, Card, Form, Modal } from "react-bootstrap";
const QandA = () => {
  const [comments, setComments] = React.useState([]);
  const [newComment, setNewComment] = React.useState("");
  const [newUsername, setNewUsername] = React.useState("");
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    fetch("http://localhost:5000/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  const addNewComment = () => {
    fetch("http://localhost:5000/api/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ comment: newComment, username: newUsername }),
    })
      .then((res) => res.json())
      .then(() => window.location.reload());
  };
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  return (
    <div>
      <h1 className="d-flex justify-content-center my-5">Q and A</h1>
      <div className="container">
        {comments.map((comment, index) => (
          <Card key={index}>
            <Card.Body>{comment.comment}</Card.Body>
            <Card.Footer>Username: {comment.username}</Card.Footer>
          </Card>
        ))}
        <br />
        <Button variant="secondary" onClick={handleShow}>
          Put Your Comment
        </Button>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Put Your Comment</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group>
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your username"
                  onChange={(e) => setNewUsername(e.target.value)}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter comment"
                  onChange={(e) => setNewComment(e.target.value)}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="dark" onClick={handleClose}>
              Close
            </Button>
            <Button variant="warning" onClick={addNewComment}>
              Submit Comment
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};
export default QandA;
