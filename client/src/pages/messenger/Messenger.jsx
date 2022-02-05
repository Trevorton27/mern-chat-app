import './messenger.css';
import Topbar from '../../components/topbar/Topbar';
import Conversations from '../../components/conversation/Conversation';
import Message from '../../components/Message/Message';
import ChatOnline from '../../components/chatOnline/ChatOnline';

export default function Messenger() {
  return (
    <>
      <Topbar />
      <div className='messenger'>
        <div className='chatMenu'>
          <div className='chatMenuWrapper'>
            <input placeholder='Search for friends' className='chatMenuInput' />
            <Conversations />
          </div>
        </div>
        <div className='chatBox'>
          <div className='chatBoxTop'>
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
            <Message />
            <Message />
            <Message own={true} />
            <Message />
            <Message />
          </div>
          <div className='chatBoxBottom'>
          <textarea className='chatMessageInput' placeholder='Write something here.'></textarea>
       <button className='chatSubmitButton'>Send</button>
        </div>
      </div>
    
        <div className='chatOnline'>
          <div className="chatOnlineWrapper">
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
