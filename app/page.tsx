'use client'
import { useState } from "react";
import { Carousel } from "flowbite-react";
import Instructions from "./components/instructions";
import BoostsAndFlaws from "./components/boosts-and-flaws";
import AttributeTotals from "./components/attribute-totals";

export default function Home() {
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-gradient-to-b from-black to-gray-900 font-oxanium">
      <h1 className="text-4xl font-bold pt-24 flex items-center justify-center">Starfinder 2 Attribute Calculator</h1>
      <Carousel className="h-96 w-96 px-20" slide={false} indicators={true} leftControl={false} rightControl={false}>

        <Instructions message={'Welcome to the Starfinder 2 Attribute Calculator!'} />

        <Instructions message={'This calculator will walk you through the steps of calculating your attributes, and do the math for you.'} />

        <Instructions message={'You\'ll still need to consult the official rules to determine which boosts and possibly flaws you\'ll get at each step.'} />

        <Instructions message={'Once you\'ve determined what to select at each step, simply check the relevant boxes, and move on to the next slide by swiping or clicking the indicators.'} />

        <BoostsAndFlaws
          label={'Ancestry Boosts (Select However Many Boosts are Given by Ancestry)'}
          flaws={false}
          setStrength={setStrength}
          setDexterity={setDexterity}
          setConstitution={setConstitution}
          setIntelligence={setIntelligence}
          setWisdom={setWisdom}
          setCharisma={setCharisma}
          strength={strength}
          dexterity={dexterity}
          constitution={constitution}
          intelligence={intelligence}
          wisdom={wisdom}
          charisma={charisma} />

        <BoostsAndFlaws
          label={'Ancestry Flaws (Select However Many Flaws are Given by Ancestry)'}
          flaws={true}
          setStrength={setStrength}
          setDexterity={setDexterity}
          setConstitution={setConstitution}
          setIntelligence={setIntelligence}
          setWisdom={setWisdom}
          setCharisma={setCharisma}
          strength={strength}
          dexterity={dexterity}
          constitution={constitution}
          intelligence={intelligence}
          wisdom={wisdom}
          charisma={charisma} />

        <BoostsAndFlaws
          label={'Background (Select 2 Based on Background)'}
          flaws={false}
          setStrength={setStrength}
          setDexterity={setDexterity}
          setConstitution={setConstitution}
          setIntelligence={setIntelligence}
          setWisdom={setWisdom}
          setCharisma={setCharisma}
          strength={strength}
          dexterity={dexterity}
          constitution={constitution}
          intelligence={intelligence}
          wisdom={wisdom}
          charisma={charisma} />

        <BoostsAndFlaws
          label={'Class (Select 1 Based on Class)'}
          flaws={false}
          setStrength={setStrength}
          setDexterity={setDexterity}
          setConstitution={setConstitution}
          setIntelligence={setIntelligence}
          setWisdom={setWisdom}
          setCharisma={setCharisma}
          strength={strength}
          dexterity={dexterity}
          constitution={constitution}
          intelligence={intelligence}
          wisdom={wisdom}
          charisma={charisma} />

        <BoostsAndFlaws
          label={'Free (Select 4)'}
          flaws={false}
          setStrength={setStrength}
          setDexterity={setDexterity}
          setConstitution={setConstitution}
          setIntelligence={setIntelligence}
          setWisdom={setWisdom}
          setCharisma={setCharisma}
          strength={strength}
          dexterity={dexterity}
          constitution={constitution}
          intelligence={intelligence}
          wisdom={wisdom}
          charisma={charisma} />

        <AttributeTotals
          strength={strength}
          dexterity={dexterity}
          constitution={constitution}
          intelligence={intelligence}
          wisdom={wisdom}
          charisma={charisma} />
          
      </Carousel>
    </main>
  );
}
