import React from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { useLocation, Switch, Route } from 'wouter'

//Pages
import ThreeLayout from '../ThreeLayout/ThreeLayout';
import { Home } from '../../pages/Home/Home';
import { Projects } from '../../pages/Projects/Projects';
import { Contact } from '../../pages/Contact/Contact';
import { NotFound } from '../../pages/NotFound/NotFound';

//Comps
import { Menus } from '../Menu/Menu';
import Crosshair from '../CrossHair/CrossHair';

function ContentLayer(){
  return(
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/:rest*" component={NotFound} />
      </Switch>
    </div>
  );
}

const BroswerSite = () => {
  return(
    <>
      <ContentLayer />
      <ThreeLayout />
      <Menus />
      <Crosshair />
    </>
  );
}

const MobileSite = () => {
  return(
    <>
      <p>
        Hey! Lo siento :( Estoy trabajando en el soporte movil,
        quiero llevar la misma experiencia de escritorio para movil. Te invito a
        visitar la versión de escritorio, es alucinante!
      </p>
    </>
  );
}

export default function App(){
  return(
    <>
      <BrowserView>
        <BroswerSite />
      </BrowserView>
      <MobileView>
        <MobileSite />
      </MobileView>
    </>
  );
}
