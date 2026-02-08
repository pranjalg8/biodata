import { useState } from 'react'
import { Image, Modal, ModalContent, ModalBody } from '@heroui/react'

/**
 * GalleryModal Component
 * Displays a grid of images with lightbox modal functionality
 * 
 * @param {Array} images - Array of image objects with { src, alt }
 */
function GalleryModal({ images }) {
    const [selectedImage, setSelectedImage] = useState(null)

    const openModal = (image) => {
        setSelectedImage(image)
    }

    const closeModal = () => {
        setSelectedImage(null)
    }

    return (
        <>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="gallery-item cursor-pointer"
                        onClick={() => openModal(image)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-[280px] object-cover"
                            radius="lg"
                            shadow="sm"
                            isZoomed
                        />
                    </div>
                ))}
            </div>

            <Modal
                isOpen={!!selectedImage}
                onClose={closeModal}
                size="5xl"
                backdrop="blur"
                classNames={{
                    backdrop: "bg-black/80",
                    base: "bg-transparent shadow-none",
                    body: "p-0"
                }}
            >
                <ModalContent>
                    <ModalBody>
                        {selectedImage && (
                            <Image
                                src={selectedImage.src}
                                alt={selectedImage.alt}
                                className="w-full max-h-[90vh] object-contain"
                                radius="lg"
                            />
                        )}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default GalleryModal
