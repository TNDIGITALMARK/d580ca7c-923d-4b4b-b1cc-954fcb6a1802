"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Send, Image, Video, Smile, Paperclip, Phone, VideoIcon,
  Search, MoreVertical, Star, Shield, Flag, UserX, Heart,
  Clock, Check, CheckCheck
} from "lucide-react"
import Link from "next/link"

const conversations = [
  {
    id: 1,
    name: "Michael R.",
    username: "@michael_r",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    lastMessage: "Looking forward to our call tomorrow!",
    timestamp: "2 min ago",
    unreadCount: 2,
    isOnline: true,
    isVerified: true,
    tier: "VIP",
    totalSpent: 1250,
    lastSeen: "Active now"
  },
  {
    id: 2,
    name: "James K.",
    username: "@james_premium",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    lastMessage: "Thank you for the amazing session yesterday",
    timestamp: "1 hour ago",
    unreadCount: 0,
    isOnline: false,
    isVerified: true,
    tier: "Premium",
    totalSpent: 890,
    lastSeen: "2 hours ago"
  },
  {
    id: 3,
    name: "David L.",
    username: "@david_client",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    lastMessage: "When would be a good time for a video call?",
    timestamp: "3 hours ago",
    unreadCount: 1,
    isOnline: true,
    isVerified: true,
    tier: "Standard",
    totalSpent: 450,
    lastSeen: "30 min ago"
  },
  {
    id: 4,
    name: "Robert S.",
    username: "@robert_standard",
    avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=100&h=100&fit=crop&crop=face",
    lastMessage: "I've sent the payment for the custom content",
    timestamp: "1 day ago",
    unreadCount: 0,
    isOnline: false,
    isVerified: false,
    tier: "Standard",
    totalSpent: 320,
    lastSeen: "1 day ago"
  }
]

const messages = [
  {
    id: 1,
    senderId: 1,
    senderName: "Michael R.",
    content: "Hi Sophia! Hope you're having a wonderful day. I was wondering if we could schedule another video session soon?",
    timestamp: "10:30 AM",
    status: "read",
    type: "text"
  },
  {
    id: 2,
    senderId: "me",
    senderName: "You",
    content: "Hi Michael! Absolutely, I'd love to chat with you again. How about tomorrow evening around 7 PM?",
    timestamp: "10:32 AM",
    status: "read",
    type: "text"
  },
  {
    id: 3,
    senderId: 1,
    senderName: "Michael R.",
    content: "Perfect! I'll book the session right now. You always make my day brighter ✨",
    timestamp: "10:35 AM",
    status: "read",
    type: "text"
  },
  {
    id: 4,
    senderId: "me",
    senderName: "You",
    content: "Aww, you're so sweet! I'm excited to catch up with you tomorrow. I have some new outfits to show you too 😊",
    timestamp: "10:38 AM",
    status: "read",
    type: "text"
  },
  {
    id: 5,
    senderId: 1,
    senderName: "Michael R.",
    content: "Looking forward to our call tomorrow!",
    timestamp: "Just now",
    status: "delivered",
    type: "text"
  }
]

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0])
  const [newMessage, setNewMessage] = useState("")
  const [searchQuery, setSearchQuery] = useState("")

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    conv.username.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Handle send message logic
      setNewMessage("")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-aurora-darker to-aurora-dark">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 aurora-gradient rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded opacity-90"></div>
            </div>
            <span className="text-2xl font-bold aurora-text-gradient">AURORA</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/creators" className="text-foreground/80 hover:text-foreground transition-colors">Creators</Link>
            <Link href="/messages" className="text-aurora-gold font-medium">Messages</Link>
            <Link href="/bookings" className="text-foreground/80 hover:text-foreground transition-colors">Bookings</Link>
            <Link href="/dashboard" className="text-foreground/80 hover:text-foreground transition-colors">Dashboard</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 aurora-gold-gradient rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Conversations List */}
        <div className="w-80 border-r border-border/50 bg-card/80 backdrop-blur-sm">
          <div className="p-4 border-b border-border/50">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 w-4 h-4" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          <ScrollArea className="h-full">
            <div className="p-4 space-y-2">
              {filteredConversations.map((conversation) => (
                <Card
                  key={conversation.id}
                  className={`cursor-pointer transition-all ${
                    selectedConversation?.id === conversation.id
                      ? "aurora-border-gradient bg-aurora-dark/50"
                      : "bg-card/60 hover:bg-card/80"
                  }`}
                  onClick={() => setSelectedConversation(conversation)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={conversation.avatar} />
                          <AvatarFallback>{conversation.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        {conversation.isOnline && (
                          <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-card"></div>
                        )}
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center space-x-2">
                            <h3 className="font-medium text-sm truncate">{conversation.name}</h3>
                            {conversation.isVerified && (
                              <Shield className="w-3 h-3 text-aurora-gold" />
                            )}
                          </div>
                          <div className="flex items-center space-x-1">
                            <Badge className={
                              conversation.tier === "VIP"
                                ? "bg-aurora-gold/20 text-aurora-gold text-xs"
                                : conversation.tier === "Premium"
                                ? "bg-aurora-purple/20 text-aurora-purple text-xs"
                                : "bg-foreground/20 text-foreground/60 text-xs"
                            }>
                              {conversation.tier}
                            </Badge>
                            {conversation.unreadCount > 0 && (
                              <Badge className="bg-aurora-gold text-aurora-dark text-xs">
                                {conversation.unreadCount}
                              </Badge>
                            )}
                          </div>
                        </div>

                        <p className="text-foreground/60 text-sm truncate mb-1">
                          {conversation.lastMessage}
                        </p>

                        <div className="flex items-center justify-between text-xs text-foreground/40">
                          <span>{conversation.timestamp}</span>
                          <span>${conversation.totalSpent} spent</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </div>

        {/* Chat Area */}
        {selectedConversation ? (
          <div className="flex-1 flex flex-col bg-background/50">
            {/* Chat Header */}
            <div className="p-4 border-b border-border/50 bg-card/80 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={selectedConversation.avatar} />
                      <AvatarFallback>{selectedConversation.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    {selectedConversation.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-500 rounded-full border-2 border-card"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-medium flex items-center space-x-2">
                      <span>{selectedConversation.name}</span>
                      {selectedConversation.isVerified && (
                        <Shield className="w-4 h-4 text-aurora-gold" />
                      )}
                      <Badge className={
                        selectedConversation.tier === "VIP"
                          ? "bg-aurora-gold/20 text-aurora-gold text-xs"
                          : selectedConversation.tier === "Premium"
                          ? "bg-aurora-purple/20 text-aurora-purple text-xs"
                          : "bg-foreground/20 text-foreground/60 text-xs"
                      }>
                        {selectedConversation.tier}
                      </Badge>
                    </h3>
                    <p className="text-sm text-foreground/60">
                      {selectedConversation.isOnline ? "Active now" : `Last seen ${selectedConversation.lastSeen}`}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="outline">
                    <VideoIcon className="w-4 h-4" />
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline">
                        <MoreVertical className="w-4 h-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Client Actions</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-2">
                        <Button className="w-full justify-start" variant="outline">
                          <Star className="w-4 h-4 mr-2" />
                          Add to Favorites
                        </Button>
                        <Button className="w-full justify-start" variant="outline">
                          <Flag className="w-4 h-4 mr-2" />
                          Report User
                        </Button>
                        <Button className="w-full justify-start" variant="destructive">
                          <UserX className="w-4 h-4 mr-2" />
                          Block User
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </div>
              </div>
            </div>

            {/* Messages */}
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.senderId === "me" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[70%] rounded-2xl px-4 py-3 ${
                        message.senderId === "me"
                          ? "aurora-gold-gradient text-aurora-dark"
                          : "bg-card/80 backdrop-blur-sm"
                      }`}
                    >
                      <p className="text-sm">{message.content}</p>
                      <div className={`flex items-center justify-end mt-2 text-xs ${
                        message.senderId === "me" ? "text-aurora-dark/70" : "text-foreground/60"
                      }`}>
                        <span className="mr-2">{message.timestamp}</span>
                        {message.senderId === "me" && (
                          message.status === "read" ? (
                            <CheckCheck className="w-3 h-3" />
                          ) : message.status === "delivered" ? (
                            <Check className="w-3 h-3" />
                          ) : (
                            <Clock className="w-3 h-3" />
                          )
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-border/50 bg-card/80 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <Paperclip className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Image className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost">
                    <Video className="w-4 h-4" />
                  </Button>
                </div>

                <div className="flex-1">
                  <Textarea
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="min-h-[44px] max-h-32 resize-none"
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault()
                        handleSendMessage()
                      }
                    }}
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="ghost">
                    <Smile className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    onClick={handleSendMessage}
                    className="aurora-gold-gradient text-aurora-dark font-medium"
                    disabled={!newMessage.trim()}
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center justify-between mt-3 pt-3 border-t border-border/20">
                <div className="flex items-center space-x-2">
                  <Button size="sm" variant="outline" className="text-xs">
                    💕 Send Flirt
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    📸 Request Photo
                  </Button>
                  <Button size="sm" variant="outline" className="text-xs">
                    🎥 Video Call
                  </Button>
                </div>
                <div className="flex items-center text-sm text-foreground/60">
                  <Heart className="w-4 h-4 mr-1" />
                  Tip Rate: $25/msg
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-1 flex items-center justify-center bg-background/50">
            <div className="text-center">
              <div className="w-16 h-16 aurora-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-aurora-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Select a conversation</h3>
              <p className="text-foreground/60">Choose a client to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}