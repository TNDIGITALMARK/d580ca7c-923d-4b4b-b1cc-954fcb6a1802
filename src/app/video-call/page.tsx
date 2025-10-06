"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Slider } from "@/components/ui/slider"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import {
  Video, VideoOff, Mic, MicOff, Phone, PhoneOff, Settings,
  Volume2, VolumeX, Camera, CameraOff, Users, Heart,
  Star, Gift, MessageCircle, Maximize, Minimize,
  RotateCcw, Pause, Play, Record, StopCircle
} from "lucide-react"

export default function VideoCallPage() {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isRecording, setIsRecording] = useState(false)
  const [callDuration, setCallDuration] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [volume, setVolume] = useState([75])
  const [showSettings, setShowSettings] = useState(false)
  const [showTipDialog, setShowTipDialog] = useState(false)
  const [tipAmount, setTipAmount] = useState(50)

  // Mock call data
  const callData = {
    clientName: "Michael R.",
    clientUsername: "@michael_r",
    clientTier: "VIP",
    sessionRate: 150,
    isVerified: true,
    connectionQuality: "Excellent"
  }

  // Timer effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hours > 0 ? `${hours}:` : ""}${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const handleEndCall = () => {
    // Handle call end logic
    window.history.back()
  }

  const handleSendTip = () => {
    // Handle tip sending logic
    setShowTipDialog(false)
  }

  return (
    <div className="min-h-screen bg-aurora-dark flex flex-col">
      {/* Call Header */}
      <div className="p-4 bg-card/90 backdrop-blur-sm border-b border-border/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <div className="w-12 h-12 aurora-gold-gradient rounded-full flex items-center justify-center">
                <div className="w-8 h-8 bg-card rounded-full"></div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-card"></div>
            </div>

            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-semibold text-lg">{callData.clientName}</h2>
                {callData.isVerified && (
                  <div className="w-5 h-5 bg-aurora-gold rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-aurora-dark rounded-full"></div>
                  </div>
                )}
                <Badge className={
                  callData.clientTier === "VIP"
                    ? "bg-aurora-gold/20 text-aurora-gold"
                    : "bg-aurora-purple/20 text-aurora-purple"
                }>
                  {callData.clientTier}
                </Badge>
              </div>
              <div className="flex items-center space-x-4 text-sm text-foreground/60">
                <span>{callData.clientUsername}</span>
                <span>•</span>
                <span>{formatTime(callDuration)}</span>
                <span>•</span>
                <span className="text-emerald-400">{callData.connectionQuality}</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <Badge className="bg-aurora-gold/20 text-aurora-gold">
              ${callData.sessionRate}/hour
            </Badge>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsFullscreen(!isFullscreen)}
            >
              {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Video Area */}
      <div className="flex-1 relative bg-gradient-to-br from-aurora-darker to-aurora-dark">
        {/* Main Video (Client) */}
        <div className="w-full h-full relative">
          <div className="w-full h-full bg-gradient-to-br from-aurora-purple/20 to-aurora-gold/20 flex items-center justify-center">
            <div className="text-center">
              <div className="w-24 h-24 aurora-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-12 h-12 text-aurora-dark" />
              </div>
              <p className="text-2xl font-semibold mb-2">Video Call in Progress</p>
              <p className="text-foreground/60">Premium session with {callData.clientName}</p>
            </div>
          </div>

          {/* Self Video (Picture-in-Picture) */}
          <Card className="absolute top-4 right-4 w-48 h-36 aurora-border-gradient bg-card/80 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0 h-full">
              <div className="w-full h-full bg-gradient-to-br from-aurora-rose-gold/20 to-aurora-gold/20 flex items-center justify-center">
                {isVideoOn ? (
                  <div className="text-center">
                    <Camera className="w-8 h-8 text-aurora-gold mx-auto mb-2" />
                    <p className="text-xs text-foreground/60">You</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <CameraOff className="w-8 h-8 text-foreground/40 mx-auto mb-2" />
                    <p className="text-xs text-foreground/40">Camera Off</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Recording Indicator */}
          {isRecording && (
            <div className="absolute top-4 left-4">
              <div className="flex items-center space-x-2 bg-red-500/20 text-red-400 px-3 py-2 rounded-lg backdrop-blur-sm">
                <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Recording</span>
              </div>
            </div>
          )}

          {/* Connection Quality */}
          <div className="absolute bottom-4 left-4">
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
              HD • {callData.connectionQuality}
            </Badge>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="p-6 bg-card/90 backdrop-blur-sm border-t border-border/50">
        <div className="flex items-center justify-center space-x-6">
          {/* Audio Control */}
          <Button
            variant={isAudioOn ? "outline" : "destructive"}
            size="lg"
            onClick={() => setIsAudioOn(!isAudioOn)}
            className="w-14 h-14 rounded-full"
          >
            {isAudioOn ? <Mic className="w-6 h-6" /> : <MicOff className="w-6 h-6" />}
          </Button>

          {/* Video Control */}
          <Button
            variant={isVideoOn ? "outline" : "destructive"}
            size="lg"
            onClick={() => setIsVideoOn(!isVideoOn)}
            className="w-14 h-14 rounded-full"
          >
            {isVideoOn ? <Video className="w-6 h-6" /> : <VideoOff className="w-6 h-6" />}
          </Button>

          {/* Recording Control */}
          <Button
            variant={isRecording ? "destructive" : "outline"}
            size="lg"
            onClick={() => setIsRecording(!isRecording)}
            className="w-14 h-14 rounded-full"
          >
            {isRecording ? <StopCircle className="w-6 h-6" /> : <Record className="w-6 h-6" />}
          </Button>

          {/* End Call */}
          <Button
            variant="destructive"
            size="lg"
            onClick={handleEndCall}
            className="w-16 h-16 rounded-full bg-red-500 hover:bg-red-600"
          >
            <PhoneOff className="w-8 h-8" />
          </Button>

          {/* Settings */}
          <Button
            variant="outline"
            size="lg"
            onClick={() => setShowSettings(true)}
            className="w-14 h-14 rounded-full"
          >
            <Settings className="w-6 h-6" />
          </Button>

          {/* Send Tip */}
          <Button
            size="lg"
            onClick={() => setShowTipDialog(true)}
            className="w-14 h-14 rounded-full aurora-gold-gradient text-aurora-dark font-medium"
          >
            <Gift className="w-6 h-6" />
          </Button>
        </div>

        {/* Additional Controls */}
        <div className="flex items-center justify-center space-x-4 mt-4">
          <Button variant="ghost" size="sm">
            <MessageCircle className="w-4 h-4 mr-2" />
            Chat
          </Button>
          <Button variant="ghost" size="sm">
            <Star className="w-4 h-4 mr-2" />
            Rate
          </Button>
          <Button variant="ghost" size="sm">
            <Heart className="w-4 h-4 mr-2" />
            Favorite
          </Button>
        </div>
      </div>

      {/* Settings Dialog */}
      <Dialog open={showSettings} onOpenChange={setShowSettings}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Call Settings</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <label className="text-sm font-medium mb-3 block">Volume</label>
              <div className="flex items-center space-x-3">
                <VolumeX className="w-4 h-4 text-foreground/60" />
                <Slider
                  value={volume}
                  onValueChange={setVolume}
                  max={100}
                  step={1}
                  className="flex-1"
                />
                <Volume2 className="w-4 h-4 text-foreground/60" />
              </div>
              <p className="text-xs text-foreground/60 mt-1">{volume[0]}%</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">HD Quality</span>
                <Badge className="bg-emerald-500/20 text-emerald-400">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Noise Reduction</span>
                <Badge className="bg-aurora-gold/20 text-aurora-gold">Active</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Auto Record</span>
                <Badge className="bg-foreground/20 text-foreground/60">Disabled</Badge>
              </div>
            </div>

            <div>
              <Button className="w-full aurora-gold-gradient text-aurora-dark font-medium">
                Apply Settings
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Tip Dialog */}
      <Dialog open={showTipDialog} onOpenChange={setShowTipDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Send a Tip</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <p className="text-sm text-foreground/60 mb-4">
                Show your appreciation to {callData.clientName}
              </p>

              <div className="grid grid-cols-4 gap-3 mb-4">
                {[25, 50, 100, 200].map((amount) => (
                  <Button
                    key={amount}
                    variant={tipAmount === amount ? "default" : "outline"}
                    onClick={() => setTipAmount(amount)}
                    className={tipAmount === amount ? "aurora-gold-gradient text-aurora-dark" : ""}
                  >
                    ${amount}
                  </Button>
                ))}
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Custom Amount</label>
                <div className="flex items-center space-x-2">
                  <span className="text-lg">$</span>
                  <input
                    type="number"
                    value={tipAmount}
                    onChange={(e) => setTipAmount(Number(e.target.value))}
                    className="flex-1 px-3 py-2 bg-input border border-border rounded-md"
                    min="1"
                    max="1000"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setShowTipDialog(false)}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSendTip}
                className="flex-1 aurora-gold-gradient text-aurora-dark font-medium"
              >
                Send ${tipAmount} Tip
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}