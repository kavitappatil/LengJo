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
    <div className="ps-5 my-5 w-75 container-fluid ">
      <Card className="text-center border border-0 fluid">
        <h1 className="d-flex justify-content-center my-5 fw-bold">Q and A</h1>

        {comments.map((comment, index) => (
          <Card className=" border border-5 gap={2} " key={index}>
            <div className="fs-6 border-2 d-flex justify-content-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="navy"
                className="bi bi-person-square roundend-end"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"></path>
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"></path>
              </svg>
              <Card.Header as="h-6">
                <small className="px-3">Submitted by {comment.username}</small>
                <hr />
              </Card.Header>
            </div>

            <Card.Body className="text-start ps-5 ms-5">{comment.comment}</Card.Body>

            <p className="text-start fs-6">
              <small className="px-2">
                <Card.Link href="/login">Login</Card.Link> or
                <Card.Link href="/signup">Signup</Card.Link> to post comments
              </small>
            </p>
            <hr className="text-secondary" />
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
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your name"
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
      </Card>
    </div>
  );
};
export default QandA;
