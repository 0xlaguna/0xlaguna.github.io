import React, {useState} from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';

import project1Img from '../../assets/images/uni1.png';
import project2Img from '../../assets/images/mejia1cc.png';

import './ProjectsStyles.css';

const StyledBio = styled.div`
  padding: 25vh 20vh;
  position: absolute;
  z-index: 1;

  p {
    font-size: 18px;
    line-height: 1.5;
    text-align: justify;
    color: white;

    a,
    a:visited {
      color: red;
    }
  }
`;

export const Projects = () => {
  return(
    <>
      <StyledBio>
        <Grid>
          <Row around="xs">
            <Col xs={3}>
              <div>
                <img src={project1Img} style={{width: '225px'}} alt="project1" />
                <p>
                  Aplicacion no oficial para acceder al sistema estudiantil de la UNI. Creada con Flutter y Nodejs/puppeteer webscraping
                </p>
              </div>
            </Col>
            <Col xs={3}>
              <div>
                <img src={project2Img} style={{width: '500px'}} alt="project2" />
                <p>
                  Sistema para el control de inventario y ventas del negocio variedades mejia.
                  WPF, Entity Framework, Sql Server.
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </StyledBio>
    </>
  );
}
