import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { TbPhoto } from 'react-icons/tb';

const ImageUploader = ({ onSelectImage }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleImageSelection = () => {
    onSelectImage(selectedImage);
    setShowModal(false);
  };

  return (
    <div>
      <Button variant="link" onClick={() => setShowModal(true)}>
        <TbPhoto className="fs-4" alt="PhotoPicker" />
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Image Uploader</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form>
            <Form.Group controlId="imageInput">
              <Form.Control type="file" onChange={handleImageChange} accept="image/*" />
              {selectedImage && <img src={selectedImage} alt="Selected" style={{ marginTop: '10px', width: '100%' }} />}
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
