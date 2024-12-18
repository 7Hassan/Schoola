import React from 'react';
import Header from '../components/header/header';
import Hero from '../components/homeSecs/hero';
import Skills from '../components/homeSecs/skills';
import Students from '../components/homeSecs/students';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Skills />
        <Students />
      </main>
    </div>
  );
};

export default Home;
