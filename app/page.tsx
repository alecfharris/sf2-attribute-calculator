'use client'

import AttributeList from "./components/attribute-list";
import { use, useState } from "react";

export default function Home() {
  const [strength, setStrength] = useState(0);
  const [dexterity, setDexterity] = useState(0);
  const [constitution, setConstitution] = useState(0);
  const [intelligence, setIntelligence] = useState(0);
  const [wisdom, setWisdom] = useState(0);
  const [charisma, setCharisma] = useState(0);
  return (
    <main className="text-green-600 flex flex-col justify-start items-center">
      <h1 className="text-4xl font-bold pt-24">Starfinder 2 Attribute Calculator</h1>
      <div className="flex min-h-screen flex-row items-center justify-evenly px-24 pb-24">
      <div className="flex flex-col">
        <label className="flex flex-col items-center text-xl px-5">Ancestry Boosts (Select However Many Boosts are Given by Ancestry)</label>
        <AttributeList flaws={false} setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelligence={setIntelligence} setWisdom={setWisdom} setCharisma={setCharisma} strength={strength} dexterity={dexterity} constitution={constitution} intelligence={intelligence} wisdom={wisdom} charisma={charisma} />
      </div>
      <div className="flex flex-col">
        <label className="flex flex-col items-center text-xl px-5">Ancestry Flaws (Select However Many Flaws are Given by Ancestry)</label>
        <AttributeList flaws={true} setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelligence={setIntelligence} setWisdom={setWisdom} setCharisma={setCharisma} strength={strength} dexterity={dexterity} constitution={constitution} intelligence={intelligence} wisdom={wisdom} charisma={charisma} />
      </div>
      <div className="flex flex-col">
        <label className="flex flex-col items-center text-xl px-5">Background (Select 2 Based on Background)</label>
        <AttributeList flaws={false} setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelligence={setIntelligence} setWisdom={setWisdom} setCharisma={setCharisma} strength={strength} dexterity={dexterity} constitution={constitution} intelligence={intelligence} wisdom={wisdom} charisma={charisma} />
      </div>
      <div className="flex flex-col">
        <label className="flex flex-col items-center text-xl px-5">Class (Select 1 Based on Class)</label>
        <AttributeList flaws={false} setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelligence={setIntelligence} setWisdom={setWisdom} setCharisma={setCharisma} strength={strength} dexterity={dexterity} constitution={constitution} intelligence={intelligence} wisdom={wisdom} charisma={charisma} />
      </div>
      <div className="flex flex-col">
        <label className="flex flex-col items-center text-xl px-5">Free (Select 4)</label>
        <AttributeList flaws={false} setStrength={setStrength} setDexterity={setDexterity} setConstitution={setConstitution} setIntelligence={setIntelligence} setWisdom={setWisdom} setCharisma={setCharisma} strength={strength} dexterity={dexterity} constitution={constitution} intelligence={intelligence} wisdom={wisdom} charisma={charisma} />
      </div>

      <div className="flex flex-col items-center px-5">
      <label className="flex flex-col items-center text-xl px-5">Attribute Totals</label>
        <label className="flex flex-col items-center">Strength</label>
        <div>{strength}</div>
        <label className="flex flex-col items-center">Dexterity</label>
        <div>{dexterity}</div>
        <label className="flex flex-col items-center">Constitution</label>
        <div>{constitution}</div>
        <label className="flex flex-col items-center">Intelligence</label>
        <div>{intelligence}</div>
        <label className="flex flex-col items-center">Wisdom</label>
        <div>{wisdom}</div>
        <label className="flex flex-col items-center">Charisma</label>
        <div>{charisma}</div>
      </div>
      </div>
    </main>
  );
}
