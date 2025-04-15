'use client'
import AttributeList from "./attribute-list";

const BoostsAndFlaws = (props: any) => {

    return (
        <div className="h-full flex flex-col items-center justify-center">
        <label className="flex flex-row items-center text-xl px-5">{props.label}</label>
        <AttributeList flaws={props.flaws} setStrength={props.setStrength} setDexterity={props.setDexterity} setConstitution={props.setConstitution} setIntelligence={props.setIntelligence} setWisdom={props.setWisdom} setCharisma={props.setCharisma} strength={props.strength} dexterity={props.dexterity} constitution={props.constitution} intelligence={props.intelligence} wisdom={props.wisdom} charisma={props.charisma} />
        </div>
    );
}

export default BoostsAndFlaws;