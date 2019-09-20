import React, {useState} from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import styled from 'styled-components';
import { ContentModal } from '../../components/ContentModal/ContentModal';

import './HomeStyles.css';

const StyledBio = styled.div`
  padding: 25vh 20vh;
  position: absolute;
  z-index: 1;

  img {
    margin-bottom: 5vh;
  }

  p {
    font-size: 40px;
    line-height: 1.5;
    text-align: justify;
    color: white;

    a,
    a:visited {
      color: red;
    }
  }
`

const StyledBio2 = styled.div`
  padding: 10vh 0;

  img {
    margin-bottom: 5vh;
  }

  p {
    font-family: 'Industry book';
    font-weight: normal;
    font-size: 30px;
    line-height: 1.5;
    text-align: justify;
    color: whitesmoke;

    a,
    a:visited {
      color: red;
    }
  }
`

export const Home = () => {
  const [toggle, setToggle] = useState(false);

  const toggleModal = () => {
    setToggle(toggle => !toggle);
  };

  return(
    <>
      {!toggle && (
        <StyledBio>
          <Grid>
            <Row>
              <Col xs={12}>
                <Row center="xs">
                  <Col xs={6}>
                    <div>
                      <div className="uname">
                        Maykol Laguna
                      </div>
                      <div className="bioGraphy" onClick={toggleModal}>ACERCA DE</div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Grid>
        </StyledBio>
      )}
      <ContentModal open={toggle} toggleModal={toggleModal} padding={false}>
        <StyledBio2>
            <Grid>
              <Row>
                <Col xs={12} sm={6}>

                </Col>
                <Col xs={false} sm={1} />
                <Col xs={12} sm={5}>
                  <div className="cardC">
                    <p>
                      Soy de Managua, Nicaragua. Soy desarollador y estudiante, me concidero una persona audodidacta,
                      me gusta adquirir nuevos conocimiento por mi propia cuenta, me gusta tomar riesgos y retar a los retos!

                      He trabajado en proyectos interesantes (Puedes ver mas en la sección de proyectos)
                      y participado en ferias tecnologicas: Hackathon 2017 [2do Lugar], Feria UNI FEC 2017(Primer lugar)
                    </p>
                  </div>
                </Col>
              </Row>
            </Grid>
          </StyledBio2>
      </ContentModal>
    </>
  );
}
