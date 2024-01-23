import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { TbPhoto } from "react-icons/tb";

const ImageUploader = ({ onSelectImage }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleImageSelection = () => {
    onSelectImage(selectedImage);
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="link" onClick={() => setShowModal(true)}>
      <TbPhoto className='fs-4' alt="PhotoPicker" />
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Image Uploader</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="imageInput">
              <Form.Label>Select Image</Form.Label>
              <Form.Control type="file" onChange={handleImageChange} accept="image/*" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleImageSelection}>
            Select Image
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ImageUploader;
