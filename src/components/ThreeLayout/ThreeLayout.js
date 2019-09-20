import * as THREE from 'three';
import React, { useRef, useEffect } from 'react';
import { Canvas, useRender, useThree, extend } from 'react-three-fiber';

//Postprocessing
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';
import { FilmPass } from 'three/examples/jsm/postprocessing/FilmPass';
import { GlitchPass } from 'three/examples/jsm/postprocessing/GlitchPass';

//Shaders
import { ColorifyShader } from './Shaders/ColorifyShader';
import { HorizontalBlurShader } from './Shaders/HorizontalBlurShader';
import { VerticalBlurShader } from './Shaders/VerticalBlurShader';

//Styles
import './Layout.css';

extend({
  EffectComposer,
  RenderPass,
  ShaderPass,
  FilmPass,
  GlitchPass
});

//Postprocessing effects
function Effects(){
  const { gl, scene, camera, size } = useThree();
  const composer = useRef();

  //Blur effects
  const horizontalBlurShader = HorizontalBlurShader;
  const verticalBlurShader = VerticalBlurShader;
  horizontalBlurShader.uniforms['h'].value = 2 / (size.width / 2);
  verticalBlurShader.uniforms['v'].value = 2 / (size.height / 2);

  //Color effects
  const coloriFyShader = ColorifyShader;
  coloriFyShader.uniforms['color'] = new THREE.Uniform(new THREE.Color(1, 0.75, 0.5));

  useEffect(() => void composer.current.setSize(size.width, size.height), [size]);
  useRender(() => composer.current.render(), true);

  return(
    <effectComposer ref={composer} args={[gl]}>
      <renderPass attachArray="passes" args={[scene, camera]} />
      <shaderPass attachArray="passes" args={[horizontalBlurShader]} />
      <shaderPass attachArray="passes" args={[verticalBlurShader]} />
      <filmPass attachArray="passes" args={[0.40, 0.026, 648, false]} />
      <glitchPass attachArray="passes" args={[]} />
    </effectComposer>
  );
}

//Render an image
function BackgroundImg() {
  const { size, camera } = useThree();
  const scene = useRef();

  useRender(({ gl }) => void (
    (
      gl.autoClear = false,
      gl.gammaInput = true,
      gl.gammaOutput = true,
      gl.setSize(size.width, size.height)
    ),
    gl.render(scene.current, camera)), true);

  return (
    <scene ref={scene}>
      <mesh
        scale={[size.width, size.height, 1]}
        geometry={new THREE.PlaneBufferGeometry(1, 1)}
        material={new THREE.MeshBasicMaterial({
          map: new THREE.TextureLoader().load("../../assets/871707.png"),
          depthTest: false
        })}
      >
      </mesh>
    </scene>
  );
}

export default function ThreeLayout(){
  return (
    <div>
      <Canvas
        orthographic={true}
        style={{
          background: '#272727',
          width: window.innerWidth,
          height: window.innerHeight,
          position: "absolute",
          zIndex: 0
        }}
      >
        <BackgroundImg />
        <Effects />
      </Canvas>
    </div>
  );
}
