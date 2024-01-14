import axios from "axios";
import { useEffect , useState } from "react";

const Chatpage = () => {
    const [messages, setMessages] = useState([]);
  const fetchMessages = async () => {
    const { data } = await axios.get("http://localhost:5000/api/chat");
    setMessages(data);
  };
  useEffect(() => {
    fetchMessages();
  }, []);
  return <div>
        {/* {messages.map((message) => (
            <div key={message._id}>
                {message.chatName}
            </div>
        ))} */}
        lalaal
  </div>;
};

export default Chatpage;
