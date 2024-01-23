import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaRegFaceSmile } from "react-icons/fa6";

const EmoticonPicker = ({ onSelectEmoticon }) => {
    const emoticons = [
        '😀', '😍', '🥳', '😎', '🤩', '😊',
        '😂', '😜', '😇', '🤗', '😘', '😋',
        '🤔', '😏', '😌', '🙃', '😸', '🐵',
        '🌈', '🎉', '🚀', '🌟', '💖', '🌺',
        '🍕', '🍦', '🍩', '🎸', '🎮', '📚',
        '🎨', '⚽', '🚲', '🏖️', '🌅', '🍓',
        '🍔', '🍟', '🍹', '🎤', '🎁', '🎈',
        '🌍', '🚁', '🚤', '🎲', '🍀', '💡',
        '👾', '🧡', '💯', '🔥', '✨', '🍭',
        '💩', '🐷'
      ];
      
      
    const [showModal, setShowModal] = useState(false);

    const handleEmoticonClick = (emoticon) => {
        onSelectEmoticon(emoticon);
        setShowModal(false);
    };

    return (
        <div>
            <Button variant="link" onClick={() => setShowModal(true)}>
                <FaRegFaceSmile size={20} alt="Emoticon Picker" />
            </Button>


            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Select an Emoticon</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="emoticon-container">
                        {emoticons.map((emoticon, index) => (
                            <Button key={index} variant="light" onClick={() => handleEmoticonClick(emoticon)}>
                                {emoticon}
                            </Button>
                        ))}
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default EmoticonPicker;
