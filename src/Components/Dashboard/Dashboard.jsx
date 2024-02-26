import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import "./Dashboard.css";

function Dashboard() {
  return (
    <>
      <MDBCarousel showIndicators showControls fade>
        <MDBCarouselItem itemId={1}>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
            className="d-block w-100"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
            className="d-block w-100"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </MDBCarouselCaption>
        </MDBCarouselItem>

        <MDBCarouselItem itemId={3}>
          <img
            src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
            className="d-block w-100"
            alt="..."
          />
          <MDBCarouselCaption>
            <h5>Third slide label</h5>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </MDBCarouselCaption>
        </MDBCarouselItem>
      </MDBCarousel>
      <h2>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse rerum
        maiores quaerat tempora, porro excepturi iure dicta itaque dignissimos
        commodi tenetur veniam hic alias nam cumque corporis id nisi. Quas.
        Aliquid fuga iusto molestias facilis officia reiciendis quo unde vitae
        consequuntur! Maiores, mollitia magni itaque repudiandae vitae deleniti
        asperiores odit molestiae, tenetur tempora quidem, fugit quas officia
        soluta aut. Reiciendis. Sit minus labore accusamus, molestias deserunt
        dicta velit possimus ea aut unde. Nesciunt dignissimos eos ratione
        deserunt incidunt nobis repudiandae debitis itaque sunt ad! Molestiae
        alias accusamus animi similique aspernatur. Minus amet consequatur
        reprehenderit non laudantium a, laborum facere similique rem excepturi
        quae, officiis placeat architecto expedita ipsa nobis quidem nesciunt
        repellat repellendus recusandae, asperiores corrupti? Velit iusto
        perspiciatis facere? Voluptatum praesentium hic explicabo saepe nobis
        tempora, asperiores, nihil quam harum neque vitae, atque non impedit.
        Voluptates, suscipit esse? Nostrum quos impedit et! Veritatis assumenda,
        minus corporis quae reprehenderit dolor! Incidunt minima praesentium
        eum, aspernatur libero vitae rem quis porro doloribus molestias dolorem
        enim nisi magni odit tempore iure accusamus. Perspiciatis molestiae
        vitae impedit reiciendis itaque fugiat, debitis ratione sequi.
      </h2>
    </>
  );
}

export default Dashboard;
