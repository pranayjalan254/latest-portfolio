import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  content: string;
  sender: "user" | "assistant";
  timestamp: Date;
}

const ChatModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hi! I'm Pranay's AI assistant. I can answer questions about his background, experience, projects, and skills. What would you like to know?",
      sender: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        "Pranay is an experienced AI/ML Engineer with expertise in building LLM applications, blockchain solutions, and full-stack web applications.",
        "He has won multiple hackathons including the AI Innovation Challenge where he built a GPT-4 powered code review assistant.",
        "His technical skills include Python, React, LangChain, Solidity, and various AI/ML frameworks. He's passionate about automation and Web3 development.",
        "Pranay has worked on projects ranging from DeFi lending protocols to smart home automation systems. He loves solving complex problems with innovative technology.",
        "He's currently focused on building scalable LLM applications and exploring the intersection of AI and blockchain technology.",
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        sender: "assistant",
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 p-4 bg-gradient-primary text-primary-foreground rounded-full shadow-large hover:shadow-glow transition-all duration-300"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.button>

      {/* Chat Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-end justify-end p-6"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            {/* Chat Window */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md h-[600px] bg-gradient-card rounded-2xl shadow-large border border-border/50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-border/50">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-primary rounded-full">
                    <Bot className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">AI Assistant</h3>
                    <p className="text-sm text-muted-foreground">Ask me about Pranay</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div className={`flex items-start space-x-2 max-w-xs ${message.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}>
                      <div className={`p-2 rounded-full ${message.sender === "user" ? "bg-primary" : "bg-accent"}`}>
                        {message.sender === "user" ? (
                          <User className="w-4 h-4 text-primary-foreground" />
                        ) : (
                          <Bot className="w-4 h-4 text-accent-foreground" />
                        )}
                      </div>
                      <div
                        className={`p-3 rounded-2xl ${
                          message.sender === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-accent/20 text-accent-foreground border border-accent/30"
                        }`}
                      >
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex justify-start"
                  >
                    <div className="flex items-start space-x-2 max-w-xs">
                      <div className="p-2 bg-accent rounded-full">
                        <Bot className="w-4 h-4 text-accent-foreground" />
                      </div>
                      <div className="p-3 rounded-2xl bg-accent/20 border border-accent/30">
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                              className="w-2 h-2 bg-accent-foreground rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-border/50">
                <div className="flex space-x-2">
                  <Input
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about Pranay's experience..."
                    className="flex-1 bg-background/50 border-border/50 focus:border-primary/50"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputMessage.trim() || isTyping}
                    size="sm"
                    className="bg-gradient-primary hover:shadow-glow"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatModal;