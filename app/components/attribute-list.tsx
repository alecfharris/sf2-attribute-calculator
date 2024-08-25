'use client'
import { use, useState } from "react";

const AttributeList = (props : any) => {

    return (
        <div className="flex flex-col items-center">
        <label htmlFor="strength">Strength</label>
        <input type="checkbox" id="strength" name="strength" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setStrength(props.strength+1) : props.setStrength(props.strength-1)} />
        <label htmlFor="dexterity">Dexterity</label>
        <input type="checkbox" id="dexterity" name="dexterity" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setDexterity(props.dexterity+1) : props.setDexterity(props.dexterity-1)}/>
        <label htmlFor="constitution">Constitution</label>
        <input type="checkbox" id="constitution" name="constitution" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setConstitution(props.constitution+1) : props.setConstitution(props.constitution-1)} />
        <label htmlFor="intelligence">Intelligence</label>
        <input type="checkbox" id="intelligence" name="intelligence" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setIntelligence(props.intelligence+1) : props.setIntelligence(props.intelligence-1)} />
        <label htmlFor="wisdom">Wisdom</label>
        <input type="checkbox" id="wisdom" name="wisdom" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setWisdom(props.wisdom+1) : props.setWisdom(props.wisdom-1)} />
        <label htmlFor="charisma">Charisma</label>
        <input type="checkbox" id="charisma" name="charisma" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setCharisma(props.charisma+1) : props.setCharisma(props.charisma-1)} />
        </div>
    );
    }

    export default AttributeList;