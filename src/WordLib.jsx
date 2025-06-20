import Word from "./Word"
import logo from './static/logo.svg'

function WordLib() {
    const words =[
        "🔥 Fire",
        "🌊 Ocean",
        "🏔️ Mountain",
        "🌕 Moon",
        "⛈️ Storm",
        "🧊 Ice",
        "🌈 Rainbow",
        "🚀 Rocket",
        "🌲 Forest",
        "⭐ Star",
        "👻 Ghost",
        "🐉 Dragon",
        "🌻 Sunflower",
        "☁️ Cloud",
        "⚡ Lightning",
        "❄️ Snow",
        "🌋 Volcano",
        "🌵 Cactus",
        "🌌 Galaxy",
        "✨ Magic",
        "💎 Crystal",
        "💀 Skull",
        "🍃 Leaf",
        "💨 Wind",
        "🌞 Sun",
        "🌃 Night",
        "🪐 Planet",
        "🌧️ Rain",
        "🕷️ Spider",
        "👑 Crown",
        "🏴‍☠️ Pirate",
        "🤖 Robot",
        "🧪 Potion",
        "🛡️ Knight",
        "💰 Treasure",
        "🧙 Wizard",
        "😇 Angel",
        "😈 Devil",
        "🎃 Pumpkin",
        "⚔️ Sword",
        "🗺️ Map",
        "🏮 Lantern",
        "☄️ Comet",
        "👽 Alien",
        "⏳ Hourglass",
        "🪞 Mirror",
        "🎈 Balloon",
        "⛺ Tent",
        "🌉 Bridge",
        "🔑 Key",
        "⚓ Anchor",
        "🛡️ Shield",
        "💠 Gem",
        "🔔 Bell",
        "📷 Camera",
        "🚪 Door",
        "🪜 Ladder",
        "🎲 Dice",
        "📜 Scroll",
        "🪖 Helmet"
    ]
  return (
      <div className="col-3 d-flex flex-column bg-black p-md-5 gap-4 word-lib p-4 ">
        <div className="logo">
            <img className="img-fluid" src={logo} alt="" />
        </div>
        <div className="bg-glass row p-2 py-md-3 gap-2 px-md-3 word-container rounded-3 h-100">

            {
                words.map((w,i)=>{
                    return (
                        <Word key={i} w={w} drag={true} />
                    )
                })
            }
        </div>
        <div className="w-100 search-comp d-flex align-items-center justify-content-center">
            <input type="text" className="search rounded-5 p-1 p-md-2 px-3 placeholder-wave text-light bg-black" placeholder={"Search for word..."} />
        </div>
    </div>
  )
}
export default WordLib