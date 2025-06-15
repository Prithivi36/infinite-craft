import Word from "./Word"

function Targets(props) {
    const generated = [
        "Blizzard ❄️",
        "Galaxy 🌌",
        "Whisper 🌬️",
        "Ignite 🔥",
        "Solace 🌿",
        "Prism 🌈",
        "Nebula ☄️",
        "Ripple 💧",
        "Thrive 🌱",
        "Zephyr 🍃"
    ]
    return (
        <div className="col-md-3 bg-black p-4 vh-100 target-tab">
            <div className="bg-glass d-flex flex-column justify-content-between h-100 rounded-5 overflow-hidden">
                
                <div className="p-3">
                    <button onClick={() => props.setTarget(false)} className="target-toggler-close rounded-5 btn btn-light">
                        <i className="bi bi-reply-fill"></i>
                    </button>
                </div>

                <div className="row gap-2 px-4 pb-3 overflow-auto">
                    {
                        generated.map((w, i) => (
                            <Word key={i} w={w} drag={false} />
                        ))
                    }
                </div>
                <div className="d-flex justify-content-center mb-4">
                    <div className="btn btn-light rounded-5">Generate</div>
                </div>
            </div>
        </div>
    )
}
export default Targets
