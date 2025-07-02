import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <Carousel 
      className="w-full h-[60vh]">
      <Carousel.Item>
      <img
          className="w-[100vw] h-[60vh] object-cover"
          style={{ objectFit: 'cover' }}
          src="https://img.freepik.com/free-photo/minimalist-black-friday-arrangement-black-background_23-2148666981.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="w-[100vw] h-[60vh] object-cover"
          style={{ objectFit: 'cover' }}
          src="https://img.freepik.com/free-photo/modern-man-casual-outfit-showing-shopping-bag-okay-sign-winking-camera-recommending-shop_1258-300002.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="w-[100vw] h-[60vh] object-cover"
          style={{ objectFit: 'cover' }}
          src="https://img.freepik.com/free-photo/composition-black-friday-shopping-cart-with-copy-space_23-2148667046.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;