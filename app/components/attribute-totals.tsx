'use client'

const AttributeTotals = (props : any) => {

    return (
    <div className="h-full flex flex-col items-center justify-center px-5">
      <label className="flex flex-col items-center text-xl px-5">Attribute Totals</label>
      <div className="grid grid-cols-[1fr_auto] items-baseline-last">
        <label className="mx-2">Strength</label>
        <div>{props.strength}</div>
        <label className="mx-2">Dexterity</label>
        <div>{props.dexterity}</div>
        <label className="mx-2">Constitution</label>
        <div>{props.constitution}</div>
        <label className="mx-2">Intelligence</label>
        <div>{props.intelligence}</div>
        <label className="mx-2">Wisdom</label>
        <div>{props.wisdom}</div>
        <label className="mx-2">Charisma</label>
        <div>{props.charisma}</div>
      </div>
      </div>
    );
    }

    export default AttributeTotals;