/**
 * GalleryModal Component
 * Displays a grid of images
 * 
 * @param {Array} images - Array of image objects with { src, alt }
 * @param {Function} onImageClick - Callback when image is clicked
 */
function GalleryModal({ images, onImageClick }) {
    return (
        <div className="gallery-grid">
            {images.map((image, index) => (
                <div
                    key={index}
                    className="gallery-item cursor-pointer"
                    onClick={() => onImageClick(image.src)}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                </div>
            ))}
        </div>
    )
}

export default GalleryModal
