'use client'

const Instructions = (props: any) => {

    return (
         <div className="h-full flex flex-col items-center justify-center">
                <label className="flex flex-row text-xl px-5 text-green-500">Instructions</label>
                <p>{props.message}</p>
        </div>
    );
}

export default Instructions;