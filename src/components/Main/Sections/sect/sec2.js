import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";
import Video from "../videos/index";
import Section1 from "./sec1";

// const StyledCard = styled.div`
//   margin: 1em;
// `;
const Titulos = styled.div`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 100;
  width: 100%;
`;
const Titles = styled.h2`
  border-radius: 0.1em;
  font-size: 2.3em;
  text-decoration: underline;
  text-align: center;
  margin: 0.2em 0.4em;
  padding: 0.2em 0.4em;
  @media screen and (max-width: 700px) {
    font-size: 2em;
    padding: .15em .3em ;
  }
`;

const Careouseles = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1300, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 900, min: 0 },
      items: 1,
    },
  };

  const { videos, eliminarVideo } = props;
  const { color, titulo } = props.datos;
  const objColor = {
    backgroundColor: color,
  };

  return (
    <>
      {videos.length > 0 && (
        <div>
          <Titulos>
            <Titles style={objColor}>{titulo}</Titles>
            <p>{props.datos.descripcion}</p>
          </Titulos>
          <Carousel responsive={responsive} infinite={true}>
            {videos.map((video, index) => (
              <Video
                datos={video}
                key={index}
                colores={props.datos}
                eliminarVideo={eliminarVideo}
              />
            ))}
          </Carousel>
        </div>
      )}
    </>
  );
};

export default Careouseles;

//  <StyledCard>
//          <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/5K97MfYA1sw?si=qkbRvajAJcNZbKHf"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>
//         <StyledCard>
//            <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/PlaQ913yggM?si=27PZg1gawKBYtqVU"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>
//         <StyledCard>
//           <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/Oigen2sjagk?si=ceHTTJ1USJh4LcY3"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>
//         <StyledCard>
//           <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/R9uaBxgCkyA?si=2K99QgNJXUlOberG"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>

// <Titulos>
//       <Titles>Back End</Titles>
//       <p>Formación Back End de Alura Latam</p>
//       </Titulos>
//       <Carousel responsive={responsive} infinite={true}>
//         <StyledCard>
//           <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/Z024LSCMqFk?si=XXzW5tD5RUT9oAdO"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>
//         <StyledCard>
//           <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/LLt7FreeHfQ?si=JqUUAzorsYuGXTFG"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>
//         <StyledCard>
//           <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/pOYyav4qx7o?si=TkSUC2SgYu6jQsrf"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>
//         <StyledCard>
//           <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/b71kWley8-o?si=wO06v0KUgrpT1qHv"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>
//       </Carousel>
//       <Titulos>
//       <Titles variant="orange">Innovacion y Gestión</Titles>
//       <p>Formación Innovación y Gestión de Alura Latam</p>
//       </Titulos>
//       <Carousel responsive={responsive} infinite={true}>
//         <StyledCard>
//           <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/vhwspfvI52k?si=MdhdyXdeSMNvoOCK"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>
//         <StyledCard>
//           <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/YhR7Zp8NUzE?si=3yy4yLseFdo1cBcJ"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>
//         <StyledCard>
//           <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/6N3OkLCfK-0?si=bmMAhbn1qPBQWmdA"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>
//         <StyledCard>
//           <iframe
//             width="430"
//             height="224"
//             src="https://www.youtube.com/embed/eejIHbOk_uI?si=dXQCQF7HqLbhlT_V"
//             title="YouTube video player"
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//             allowfullscreen
//           ></iframe>
//         </StyledCard>
//       </Carousel>
