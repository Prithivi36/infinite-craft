import React from "react"
import './App.css'
import targImg from "./static/target.svg"
import WordLib from "./WordLib";
import Targets from "./Targets";
import Word from "./Word";

function Canvas() {
    const [target,setTarget]=React.useState(false);
    const [dropped,setDropped]=React.useState([]);
    const [draggingInd,setDraggingInd]=React.useState(null);

    function handleMouseMove(e){
        e.preventDefault()
        if(draggingInd!=null){
            const tmp = [...dropped]
            tmp[draggingInd]={
                ...tmp[draggingInd],
                x : e.clientX,
                y : e.clientY
            }
            setDropped(tmp);
        }
    }
    function handleMouseup(){
        setDraggingInd(null);
    }
  return (
    <>
    <div className=" row m-0 vh-100 text-light">

            {target && 
                <Targets setTarget={setTarget} />
            }
            <div className="bg-black canvas col-12 col-md"
                onMouseUp={handleMouseup}
                onMouseMove={handleMouseMove}
                onDragOver={(e)=>e.preventDefault()}
                onDrop={(e)=>{
                    e.preventDefault()
                    const data = e.dataTransfer.getData("text/plain")
                    
                    const x = e.clientX;
                    const y = e.clientY;

                    setDropped((prev)=> [...prev,{data,x,y}]);

                    console.log(dropped);
                }}
            >
                {!target && <button onClick={()=>setTarget(true)} className="target-toggler-open btn rounded-5 btn-outline-light">
                    <i className="bi bullseye bi-bullseye"></i>
                    </button>}
                    {dropped.map((item, index) => (
                        <div
                            key={index}
                            style={{
                            position: 'absolute',
                            top: item.y,
                            left: item.x,
                            transform: 'translate(-50%, -50%)',
                            }}
                            onMouseDown={(e)=>{
                                
                                e.preventDefault();
                                if(e.ctrlKey){
                    
                                    const x = e.clientX;
                                    const y = e.clientY;

                                    setDropped((prev) => {
                                        const newDropped = [...prev, {data:item.data,x,y}];
                                        setDraggingInd(newDropped.length - 1);
                                        return newDropped;
                                    });

                                }else{
                                    setDraggingInd(index)}}
                                }
                        >
                            {<Word w={item.data} drag={false}/>}
                        </div>
                    ))}
            </div>
            <WordLib />
    </div>
    </>
  )
}
export default Canvas