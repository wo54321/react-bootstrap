/** @jsx React.DOM */

var carouselInstance = (
    <Carousel wrap={false}>
      <CarouselItem>
        <img width="200" height="200" style={{height: 200, width: "100%", background: "red"}} />
      </CarouselItem>
      <CarouselItem>
        <img width="200" height="200" style={{height: 200, width: "100%", background: "black"}}  />
      </CarouselItem>
      <CarouselItem>
        <img width="200" height="200" style={{height: 200, width: "100%", background: "blue"}}  />
      </CarouselItem>
    </Carousel>
  );

React.renderComponent(carouselInstance, mountNode);