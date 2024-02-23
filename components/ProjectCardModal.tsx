import React from 'react';
import { Modal, CardText } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectCardModal = ({ images, show, handleClose, body, title }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton className='bg-zinc-900' style={{width: 700}}>
                <Modal.Title className='text-white'>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body className='px-5 bg-zinc-900' style={{width: 700}}>
                <Slider >
                    {images.map((image, index) => (
                        <div key={index}>
                            <img src={image.src} alt={`Image ${index}`} />
                        </div>
                    ))}
                </Slider>

                <CardText className='text-white py-3'>{body}</CardText>
            </Modal.Body>
        </Modal>
    );
};

export default ProjectCardModal;
