import React, { useEffect } from 'react';
import './App.css';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import top from './assets/top.png';
import topFront from './assets/top-back.png';
import chocolate from './assets/chocolate.png';
import bottomFront from './assets/bottom-front.png';
import bottom from './assets/bottom.png';

export const App = () => {
  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => {
        document.body.style.setProperty('--scroll', (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toString());
      },
      false
    );
    return () =>
      window.removeEventListener(
        'scroll',
        () => {
          document.body.style.setProperty('--scroll', (window.scrollY / (document.body.offsetHeight - window.innerHeight)).toString());
        },
        false
      );
  }, []);

  return (
    <>
      <div
        style={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          margin: 'auto',
          background: 'linear-gradient( #E9B58F, #AE876B, #9D4E16, #69350F, #4E270B)',
        }}
      />
      <div
        style={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          margin: 'auto',
          background: 'repeating-radial-gradient(circle at 20vh 20vw,  #cccccc22, #eeeeee33, #cccccc22 67px)',
        }}
      />
      <div
        style={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          margin: 'auto',
          background: 'repeating-radial-gradient(circle at 70vh 70vw, #cccccc22, #eeeeee33, #cccccc22 15px)',
        }}
      />
      <div
        style={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          margin: 'auto',
          background: 'repeating-radial-gradient(circle at 25vh 70vw, #cccccc22, #eeeeee33, #cccccc22 37px)',
        }}
      />
      <div
        style={{
          position: 'fixed',
          height: '100%',
          width: '100%',
          margin: 'auto',
          background: 'repeating-radial-gradient(circle at 75vh 12vw, #cccccc22, #eeeeee33, #cccccc22 47px)',
        }}
      />
      <div style={{ height: '2000px', transform: 'translateY(calc(var(--scroll)*-500px))' }}>
        <div style={{ transform: 'translateY(calc(var(--scroll)*-500px))' }}>
          <div
            style={{
              position: 'absolute',
              left: 'max(0px,calc(100vw * 0.5 - 512px))',
              top: 'calc(200px + var(--scroll)*2000px)',
              height: 0,
            }}
          >
            <img src={bottom} alt='background' />
          </div>
          <div style={{ position: 'absolute', left: 'max(0px,calc(100vw * 0.5 - 512px))', top: 'calc(200px + var(--scroll)*800px)', height: 0 }}>
            <img src={topFront} alt='background' />
          </div>
          <div
            style={{
              position: 'absolute',
              left: 'max(0px,calc(100vw * 0.5 - 512px))',
              top: 'calc(200px + var(--scroll)*1500px)',
              height: 0,
            }}
          >
            <img src={chocolate} alt='background' />
          </div>
          <div
            style={{
              position: 'absolute',
              left: 'max(0px,calc(100vw * 0.5 - 512px))',
              top: 'calc(200px + var(--scroll)*2000px)',
              height: 0,
            }}
          >
            <img src={bottomFront} alt='background' />
          </div>
          <div style={{ position: 'absolute', left: 'max(0px,calc(100vw * 0.5 - 512px))', top: 'calc(200px + var(--scroll)*800px)', height: 0 }}>
            <img src={top} alt='background' />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
