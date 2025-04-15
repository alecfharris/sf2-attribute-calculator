'use client'

const AttributeList = (props : any) => {

    return (
        <div className="grid grid-cols-[1fr_auto] items-baseline-last">
        <label className="mx-2" htmlFor="strength">Strength</label>
        <input type="checkbox" id="strength" name="strength" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setStrength(props.strength+1) : props.setStrength(props.strength-1)} />
        <label className="mx-2" htmlFor="dexterity">Dexterity</label>
        <input type="checkbox" id="dexterity" name="dexterity" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setDexterity(props.dexterity+1) : props.setDexterity(props.dexterity-1)}/>
        <label className="mx-2" htmlFor="constitution">Constitution</label>
        <input type="checkbox" id="constitution" name="constitution" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setConstitution(props.constitution+1) : props.setConstitution(props.constitution-1)} />
        <label className="mx-2" htmlFor="intelligence">Intelligence</label>
        <input type="checkbox" id="intelligence" name="intelligence" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setIntelligence(props.intelligence+1) : props.setIntelligence(props.intelligence-1)} />
        <label className="mx-2" htmlFor="wisdom">Wisdom</label>
        <input type="checkbox" id="wisdom" name="wisdom" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setWisdom(props.wisdom+1) : props.setWisdom(props.wisdom-1)} />
        <label className="mx-2" htmlFor="charisma">Charisma</label>
        <input type="checkbox" id="charisma" name="charisma" onChange={(e) => e.target.checked === true && props.flaws === false || props.flaws === true && e.target.checked === false ? props.setCharisma(props.charisma+1) : props.setCharisma(props.charisma-1)} />
        </div>
    );
    }

    export default AttributeList;