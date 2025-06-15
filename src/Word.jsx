function Word(props) {
  return (
    <div draggable={props.drag} className="word py-2 m-0 d-flex  align-items-center col px-2 rounded-3 border"
        onDragStart={(e)=>e.dataTransfer.setData("text/plain",props.w)}
    >
        <p className="m-0 p-0 text-nowrap">{props.w}</p>
    </div>
  )
}
export default Word