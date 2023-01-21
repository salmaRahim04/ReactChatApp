import {ChatEngine} from 'react-chat-engine';
import ChatFeed from './components/ChatFeed';
import './App.css'
import { LoginForm } from './components/LoginForm';
const App = () =>{
    if (!localStorage.getItem('username')) return <LoginForm />;

    return(
        <ChatEngine
        height="100vh"
        projectID="b91e65ff-db4b-4436-9c82-300be45748c7"
        userName={localStorage.getItem('username')}  
        userSecret={localStorage.getItem('password')} 
        renderChatFeed= {(chatAppProps) =><ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;