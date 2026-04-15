import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { MessageCircle } from "lucide-react";

interface Message {
  sender: string;
  text: string;
}

interface ChatBotProps {
  isDarkMode: boolean;
}

export default function ChatBot({ isDarkMode }: ChatBotProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const chatEndRef = useRef<HTMLDivElement>(null);

  // 🔥 Auto scroll to latest message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  const fallbackReplies = (msg : string) => {
  const text = msg.toLowerCase();

  if (text.includes("who are you"))
    return "I am Shivam Jha, a Full Stack Developer based in Ahmedabad.";

  if (text.includes("skills"))
    return "I work with React, Node.js, MongoDB, Tailwind CSS.";

  if (text.includes("experience"))
    return "I have around 1 year of experience.";

  if (text.includes("projects"))
    return "I built real-time chat apps using Socket.io and WebRTC.";

  if (text.includes("contact"))
    return "📞 Phone: +91-6355278751\n🔗 GitHub: github.com/Jhashivam6347";

  return "I'm Shivam Jha. Ask me about my skills, projects, or experience 😊";
};

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { sender: "user", text: input.trim() };

    // ✅ Add user message
    setMessages((prev) => [...prev, userMsg]);

    setLoading(true);
    setInput("");

    try {
      const res = await axios.post("https://chat-bot-hk01.onrender.com/chat", {
        message: userMsg.text,
      });

      const botMsg = {
        sender: "bot",
        text: res.data.reply || fallbackReplies(userMsg.text),
      };

      setMessages((prev) => [...prev, botMsg]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: fallbackReplies(userMsg.text),
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  // 🔥 Send on Enter
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <>
      {/* Chat Icon Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className={`fixed bottom-5 right-5 p-3 rounded-full shadow-lg transition-colors ${
            isDarkMode
              ? "bg-gray-800 hover:bg-gray-700 text-white"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
          aria-label="Open Chat"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className={`fixed bottom-5 right-5 w-80 shadow-xl rounded-xl p-3 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}>
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-bold">Ask Shivam Jha</h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Close Chat"
            >
              ✕
            </button>
          </div>

          <div className={`h-60 overflow-y-auto mb-2 border p-2 rounded ${
            isDarkMode ? "border-gray-600" : "border-gray-300"
          }`}>
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`mb-2 ${
                  msg.sender === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`px-2 py-1 rounded inline-block ${
                    msg.sender === "user"
                      ? isDarkMode
                        ? "bg-blue-600 text-white"
                        : "bg-blue-500 text-white"
                      : isDarkMode
                      ? "bg-gray-700 text-gray-200"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {loading && (
              <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                Typing...
              </p>
            )}

            {/* 🔥 Auto scroll anchor */}
            <div ref={chatEndRef} />
          </div>

          <div className="flex">
            <input
              className={`flex-1 border p-2 rounded-l outline-none ${
                isDarkMode
                  ? "border-gray-600 bg-gray-700 text-white placeholder-gray-400"
                  : "border-gray-300 bg-white text-gray-900"
              }`}
              value={input}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Ask about Shivam..."
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className={`px-3 rounded-r text-white ${
                loading
                  ? "bg-gray-400"
                  : isDarkMode
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "bg-blue-500 hover:bg-blue-600"
              }`}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}