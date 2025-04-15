'use client'

import AttributeList from "./components/attribute-list";
import { use, useState } from "react";
import { Carousel } from "flowbite-react";

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
        <div className="flex flex-col items-center">
        <label className="flex flex-row items-center text-xl px-5 text-green-500">Instructions</label>
        <p>This calculator will walk you through the steps of calculating your attributes, and do the math for you.</p> 
        </div>
        <div className="flex flex-col items-center">
        <label className="flex flex-row items-center text-xl px-5 text-green-500">Instructions</label>
        <p>You&apos;ll still need to consult the official rules to determine which boosts and possibly flaws you&apos;ll get at each step.</p> 
        </div>
        <div className="flex flex-col items-center">
        <label className="flex flex-row items-center text-xl px-5 text-green-500">Instructions</label>
        <p>Once you&apos;ve determined what to select at each step, simply check the relevant boxes, and move on to the next slide by swiping or clicking the indicators.</p>
        </div>
        <div className="flex flex-col items-center justify-center">
        <label className="flex flex-row items-center text-xl px-5 text-green-500">Ancestry Boosts (Select However Many Boosts are Given by Ancestry)</label>
        <AttributeList flaws={false} setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelligence={setIntelligence} setWisdom={setWisdom} setCharisma={setCharisma} strength={strength} dexterity={dexterity} constitution={constitution} intelligence={intelligence} wisdom={wisdom} charisma={charisma} />
        </div>
      <div className="flex flex-col items-center">
        <label className="flex flex-col items-center text-xl px-5">Ancestry Flaws (Select However Many Flaws are Given by Ancestry)</label>
        <AttributeList flaws={true} setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelligence={setIntelligence} setWisdom={setWisdom} setCharisma={setCharisma} strength={strength} dexterity={dexterity} constitution={constitution} intelligence={intelligence} wisdom={wisdom} charisma={charisma} />
      </div>
      <div className="flex flex-col items-center">
        <label className="flex flex-col items-center text-xl px-5">Background (Select 2 Based on Background)</label>
        <AttributeList flaws={false} setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelligence={setIntelligence} setWisdom={setWisdom} setCharisma={setCharisma} strength={strength} dexterity={dexterity} constitution={constitution} intelligence={intelligence} wisdom={wisdom} charisma={charisma} />
      </div>
      <div className="flex flex-col items-center">
        <label className="flex flex-col items-center text-xl px-5">Class (Select 1 Based on Class)</label>
        <AttributeList flaws={false} setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelligence={setIntelligence} setWisdom={setWisdom} setCharisma={setCharisma} strength={strength} dexterity={dexterity} constitution={constitution} intelligence={intelligence} wisdom={wisdom} charisma={charisma} />
      </div>
      <div className="flex flex-col items-center">
        <label className="flex flex-col items-center text-xl px-5">Free (Select 4)</label>
        <AttributeList flaws={false} setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelligence={setIntelligence} setWisdom={setWisdom} setCharisma={setCharisma} strength={strength} dexterity={dexterity} constitution={constitution} intelligence={intelligence} wisdom={wisdom} charisma={charisma} />
      </div>

      <div className="flex flex-col items-center px-5">
      <label className="flex flex-col items-center text-xl px-5">Attribute Totals</label>
      <div className="grid grid-cols-[1fr_auto] items-baseline-last">
        <label className="mx-2">Strength</label>
        <div>{strength}</div>
        <label className="mx-2">Dexterity</label>
        <div>{dexterity}</div>
        <label className="mx-2">Constitution</label>
        <div>{constitution}</div>
        <label className="mx-2">Intelligence</label>
        <div>{intelligence}</div>
        <label className="mx-2">Wisdom</label>
        <div>{wisdom}</div>
        <label className="mx-2">Charisma</label>
        <div>{charisma}</div>
      </div>
      </div>
      </Carousel>
    </main>
  );
}
