// LoginModal.js
import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';


const LoginModal = ({ show, handleClose }) => {
  return (
    <Modal show={show} onHide={handleClose} centered className="login-modal">
      <div className="modal-gradient-wrapper">
        <Modal.Header closeButton className="border-0 text-white">
          <Modal.Title>Login to Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="light" className="w-100 mt-3 fw-semibold" type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
          <small className="text-white">Don't have an account? <a href="#" className="text-warning">Register</a></small>
        </Modal.Footer>
      </div>
    </Modal>
  );
};

export default LoginModal;