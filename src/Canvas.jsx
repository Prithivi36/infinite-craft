import React from "react"
import './App.css'
import targImg from "./static/target.svg"
import WordLib from "./WordLib";
import Targets from "./Targets";

function Canvas() {
    const [target,setTarget]=React.useState(false);
  return (
    <>
    <div className=" row m-0 vh-100 text-light">

            {target && 
                <Targets setTarget={setTarget} />
            }
            <div className="bg-black canvas col-12 col-md">
                {!target && <button onClick={()=>setTarget(true)} className="target-toggler-open btn rounded-5 btn-outline-light">
                    <i className="bi bullseye bi-bullseye"></i>
                    </button>}
            </div>
            <WordLib />
    </div>
    </>
  )
}
export default Canvas