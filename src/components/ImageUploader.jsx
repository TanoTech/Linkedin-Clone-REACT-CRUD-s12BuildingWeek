import React, { useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { TbPhoto } from "react-icons/tb";

const ImageUploader = ({ onSelectImage }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const files = e.target.files;

    if (files && files.length > 0) {
      const file = files[0];
      setSelectedImage(file);
    }
  }

  const handleImageSelection = () => {
    onSelectImage(selectedImage);
    setShowModal(false);
  };


  const imageUrls = [
    { value: '1', src: '/assets/imgPost/img1.jpeg' },
    { value: '2', src: '/assets/imgPost/img2.jpg' },
    { value: '3', src: '/assets/imgPost/img3.jpg' },
    { value: '4', src: '/assets/imgPost/img4.jpg' },
    { value: '5', src: '/assets/imgPost/img5.jpg' },
    { value: '6', src: '/assets/imgPost/img6.jpg' },
  ];


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
              <Form.Control as="select" onChange={handleImageChange}>
              {imageUrls.map(image => (
                    <div key={image.value} onClick={() => handleImageSelection(image.value)}>
                        <img src={image.src} alt={`Immagine ${image.value}`} />
                    </div>
                ))}
              </Form.Control>
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
