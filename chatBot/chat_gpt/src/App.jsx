import "./App.css";
import gptLogo from './assets/chatgpt.svg'
import addBtn from './assets/add-30.png'
import msgIcon from './assets/message.svg'
import Home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import send from './assets/send.svg'
import userIcon from './assets/user-icon.png'
import gptImgLogo from './assets/chatgptLogo.svg'
import { sendMsgToOpenAI } from "./openAi";
import { useState } from "react";



function App() {
const [input, setInput] = useState('');
  const handleSend= async()=>{
    const res = await sendMsgToOpenAI(input);
    console.log(res)
  }
  return (
    <>
      <div className="App">
        <div className="sideBar">
          <div className="upperSide">
              <div className="upperSideTop">
                <img src={gptLogo} alt="" className="logo"/><span className="brand" >chatgpt</span>
              </div>
                <button className="midBtn"><img src={addBtn} alt="" className="addBtn" />new chat</button>
                <div className="upperSideBottom">
                  <button className="query"><img src={msgIcon} alt="" />what is programinng
                  </button>
                  <button className="query"><img src={msgIcon} alt="" />How to use an api
                  </button>
                </div>
          </div>
          <div className="lowerside">
            <div className="listItems"><img src={Home} alt="Home" className="listItemsImg" />Home</div>
            <div className="listItems"><img src={saved} alt="Saved" className="listItemsImg" />Saved</div>
            <div className="listItems"><img src={rocket} alt="Rocket" className="listItemsImg" />Upgrade to pro</div>
          </div>
        </div>
        <div className="main">
            <div className="chats">
              <div className="chat">
                <img src={userIcon} className="chatImg" alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolores illo nulla quasi iste dignissimos iusto atque eaque, quibusdam enim illum error harum officia molestiae. In dolores ipsam quidem reprehenderit commodi voluptates omnis, dolore vero veniam natus explicabo dolorum dolor ipsum placeat deserunt sapiente, quos esse corporis blanditiis nemo reiciendis suscipit quis! Nobis doloremque voluptatibus officiis consequatur tenetur iste optio vitae suscipit nemo sequi perspiciatis laborum beatae, eaque minus magni. Nobis necessitatibus itaque recusandae, qui, praesentium, velit porro tempora expedita ducimus quasi id quaerat alias? Odio ipsam tempora id veritatis qui dolor explicabo error, placeat debitis sed, ea nobis expedita.</p>
              </div>
              <div className="chat bot">
                <img src={gptImgLogo} className="chatImg" alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa sunt quisquam obcaecati sapiente, quidem incidunt est ab aliquam aperiam nulla assumenda iure pariatur provident saepe magnam exercitationem dignissimos, ut recusandae earum reiciendis quibusdam quae possimus hic odio. Aspernatur, id? Maxime at quasi libero facilis a officia vero minus? Atque consectetur quis vitae laborum ipsum nesciunt autem, quisquam labore vel culpa! Aliquid libero sint illum molestiae dolor reprehenderit reiciendis sapiente nostrum eveniet! Velit molestias vitae natus magni adipisci? Alias, a libero? Molestiae voluptas sapiente recusandae enim. Provident excepturi, ex, error cumque nostrum nulla consequuntur beatae quidem nobis consequatur quaerat numquam sed.</p>
              </div>
            </div>
            <div className="chatFooter">
              <div className="inp">
                <input type="text" placeholder="send a message.." value={input} onChange={(e)=>setInput(e.target.value)}/><button type="button" onClick={handleSend} className="send"><img src={send} alt="sendBtn" /></button>
              </div>
              <p>chat gpt can produce incorrect answers</p>
            </div>
        </div>
      </div>
    </>
  );
}

export default App;
