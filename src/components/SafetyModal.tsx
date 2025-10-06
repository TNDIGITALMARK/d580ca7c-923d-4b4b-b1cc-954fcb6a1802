"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Shield, Flag, UserX, Phone, AlertTriangle, CheckCircle,
  Camera, MessageCircle, CreditCard, Lock, Eye, EyeOff
} from "lucide-react"

interface SafetyModalProps {
  isOpen: boolean
  onClose: () => void
  type: "block" | "report" | "verify" | "privacy"
  userName?: string
}

export default function SafetyModal({ isOpen, onClose, type, userName = "User" }: SafetyModalProps) {
  const [reportReason, setReportReason] = useState("")
  const [reportDescription, setReportDescription] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [verificationCode, setVerificationCode] = useState("")
  const [showVerificationInput, setShowVerificationInput] = useState(false)
  const [isVerified, setIsVerified] = useState(false)

  const handleBlockUser = () => {
    // Handle blocking logic
    onClose()
  }

  const handleReportUser = () => {
    if (reportReason && reportDescription) {
      // Handle report submission
      onClose()
    }
  }

  const handlePhoneVerification = () => {
    if (phoneNumber) {
      setShowVerificationInput(true)
    }
  }

  const handleVerificationCode = () => {
    if (verificationCode) {
      setIsVerified(true)
      setTimeout(() => {
        onClose()
      }, 2000)
    }
  }

  const renderBlockContent = () => (
    <div className="space-y-6">
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          Blocking {userName} will prevent them from contacting you, viewing your profile, or booking sessions.
        </AlertDescription>
      </Alert>

      <div className="space-y-4">
        <h4 className="font-semibold text-sm">What happens when you block this user:</h4>
        <ul className="space-y-2 text-sm text-foreground/80">
          <li className="flex items-center">
            <div className="w-2 h-2 bg-aurora-gold rounded-full mr-3"></div>
            They cannot send you messages
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-aurora-gold rounded-full mr-3"></div>
            They cannot book video calls with you
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-aurora-gold rounded-full mr-3"></div>
            They cannot view your profile or content
          </li>
          <li className="flex items-center">
            <div className="w-2 h-2 bg-aurora-gold rounded-full mr-3"></div>
            You won't appear in their search results
          </li>
        </ul>
      </div>

      <div className="flex space-x-3">
        <Button variant="outline" className="flex-1" onClick={onClose}>
          Cancel
        </Button>
        <Button variant="destructive" className="flex-1" onClick={handleBlockUser}>
          <UserX className="w-4 h-4 mr-2" />
          Block {userName}
        </Button>
      </div>
    </div>
  )

  const renderReportContent = () => (
    <div className="space-y-6">
      <Alert>
        <Flag className="h-4 w-4" />
        <AlertDescription>
          Reports help keep Aurora safe. All reports are reviewed by our safety team within 24 hours.
        </AlertDescription>
      </Alert>

      <div>
        <label className="text-sm font-medium mb-2 block">Reason for Report</label>
        <Select value={reportReason} onValueChange={setReportReason}>
          <SelectTrigger>
            <SelectValue placeholder="Select a reason" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="harassment">Harassment or Abuse</SelectItem>
            <SelectItem value="inappropriate">Inappropriate Content</SelectItem>
            <SelectItem value="spam">Spam or Unsolicited Contact</SelectItem>
            <SelectItem value="fraud">Fraud or Scam</SelectItem>
            <SelectItem value="underage">Underage User</SelectItem>
            <SelectItem value="violation">Terms of Service Violation</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label className="text-sm font-medium mb-2 block">Description</label>
        <Textarea
          placeholder="Please provide details about the issue..."
          value={reportDescription}
          onChange={(e) => setReportDescription(e.target.value)}
          rows={4}
        />
      </div>

      <div className="flex space-x-3">
        <Button variant="outline" className="flex-1" onClick={onClose}>
          Cancel
        </Button>
        <Button
          className="flex-1 bg-red-500 hover:bg-red-600 text-white"
          onClick={handleReportUser}
          disabled={!reportReason || !reportDescription}
        >
          <Flag className="w-4 h-4 mr-2" />
          Submit Report
        </Button>
      </div>
    </div>
  )

  const renderVerifyContent = () => (
    <div className="space-y-6">
      {!isVerified ? (
        <>
          <div className="text-center">
            <div className="w-16 h-16 aurora-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-aurora-dark" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Verify Your Phone Number</h3>
            <p className="text-foreground/60">
              Phone verification helps keep Aurora safe and builds trust with clients
            </p>
          </div>

          {!showVerificationInput ? (
            <div>
              <label className="text-sm font-medium mb-2 block">Phone Number</label>
              <Input
                type="tel"
                placeholder="+1 (555) 123-4567"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <p className="text-xs text-foreground/60 mt-2">
                We'll send you a verification code via SMS
              </p>
            </div>
          ) : (
            <div>
              <label className="text-sm font-medium mb-2 block">Verification Code</label>
              <Input
                type="text"
                placeholder="Enter 6-digit code"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                maxLength={6}
              />
              <p className="text-xs text-foreground/60 mt-2">
                Code sent to {phoneNumber}
              </p>
            </div>
          )}

          <div className="space-y-3">
            <div className="text-sm text-foreground/80">
              <h4 className="font-semibold mb-2">Benefits of verification:</h4>
              <ul className="space-y-1">
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Verified badge on your profile
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Higher search ranking
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Increased client trust
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-emerald-400 mr-2" />
                  Access to premium features
                </li>
              </ul>
            </div>
          </div>

          <div className="flex space-x-3">
            <Button variant="outline" className="flex-1" onClick={onClose}>
              Skip for Now
            </Button>
            {!showVerificationInput ? (
              <Button
                className="flex-1 aurora-gold-gradient text-aurora-dark font-medium"
                onClick={handlePhoneVerification}
                disabled={!phoneNumber}
              >
                Send Code
              </Button>
            ) : (
              <Button
                className="flex-1 aurora-gold-gradient text-aurora-dark font-medium"
                onClick={handleVerificationCode}
                disabled={!verificationCode}
              >
                Verify
              </Button>
            )}
          </div>
        </>
      ) : (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-emerald-400">Verification Complete!</h3>
          <p className="text-foreground/60">
            Your phone number has been verified successfully
          </p>
          <Badge className="bg-emerald-500/20 text-emerald-400 mt-4">
            <Shield className="w-3 h-3 mr-1" />
            Verified Creator
          </Badge>
        </div>
      )}
    </div>
  )

  const renderPrivacyContent = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="w-16 h-16 aurora-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
          <Lock className="w-8 h-8 text-aurora-dark" />
        </div>
        <h3 className="text-xl font-semibold mb-2">Privacy & Safety Settings</h3>
        <p className="text-foreground/60">
          Manage who can contact you and see your content
        </p>
      </div>

      <div className="space-y-4">
        <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Contact Permissions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Messages from new clients</p>
                <p className="text-sm text-foreground/60">Allow unverified users to message you</p>
              </div>
              <Button variant="outline" size="sm">
                Allow
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Video call requests</p>
                <p className="text-sm text-foreground/60">Auto-approve calls from verified users</p>
              </div>
              <Button variant="outline" size="sm">
                Manual
              </Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Profile visibility</p>
                <p className="text-sm text-foreground/60">Who can see your full profile</p>
              </div>
              <Button variant="outline" size="sm">
                Public
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg">Content Protection</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Screenshot protection</p>
                <p className="text-sm text-foreground/60">Prevent screenshots during calls</p>
              </div>
              <Badge className="bg-emerald-500/20 text-emerald-400">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Recording notifications</p>
                <p className="text-sm text-foreground/60">Alert when recording starts/stops</p>
              </div>
              <Badge className="bg-emerald-500/20 text-emerald-400">Enabled</Badge>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium">Content watermarks</p>
                <p className="text-sm text-foreground/60">Add watermarks to custom content</p>
              </div>
              <Badge className="bg-aurora-gold/20 text-aurora-gold">Premium</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Button className="w-full aurora-gold-gradient text-aurora-dark font-medium">
        Save Settings
      </Button>
    </div>
  )

  const getTitle = () => {
    switch (type) {
      case "block":
        return `Block ${userName}`
      case "report":
        return `Report ${userName}`
      case "verify":
        return "Phone Verification"
      case "privacy":
        return "Privacy & Safety"
      default:
        return "Safety"
    }
  }

  const getContent = () => {
    switch (type) {
      case "block":
        return renderBlockContent()
      case "report":
        return renderReportContent()
      case "verify":
        return renderVerifyContent()
      case "privacy":
        return renderPrivacyContent()
      default:
        return null
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{getTitle()}</DialogTitle>
        </DialogHeader>
        {getContent()}
      </DialogContent>
    </Dialog>
  )
}