"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar } from "@/components/ui/calendar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Star, Heart, MapPin, Clock, Video, MessageCircle, DollarSign, Shield, Camera, Gift, Calendar as CalendarIcon, Users, Award } from "lucide-react"
import Link from "next/link"

// Mock creator data - would typically come from API
const mockCreator = {
  id: 1,
  name: "Sophia Laurent",
  username: "@sophia_laurent",
  location: "Los Angeles, CA",
  tagline: "Luxury lifestyle creator & fashion maven",
  bio: "Welcome to my exclusive world of elegance and sophistication. I specialize in creating bespoke experiences that celebrate beauty, fashion, and the finer things in life. With over 5 years in the industry, I offer personalized consultations, styling advice, and intimate conversations that will leave you inspired.",
  rating: 4.9,
  reviews: 127,
  totalBookings: 450,
  memberSince: "2020",
  isOnline: true,
  isPremium: true,
  isVerified: true,
  lastSeen: "Active now",
  responseTime: "< 1 hour",
  completionRate: 98,

  specialties: ["Fashion", "Lifestyle", "Art", "Travel", "Luxury Living"],
  languages: ["English", "French", "Italian"],

  services: [
    {
      id: 1,
      name: "Premium Video Call",
      description: "Personalized 1-on-1 video consultation with exclusive content and intimate conversation",
      price: 150,
      duration: "1 hour",
      icon: Video,
      features: ["HD Video", "Screen Recording", "Private Session", "Custom Requests"]
    },
    {
      id: 2,
      name: "Exclusive Messaging",
      description: "Direct private messages with quick responses and personalized attention",
      price: 25,
      duration: "Per message",
      icon: MessageCircle,
      features: ["Instant Delivery", "Photo/Video Messages", "Voice Notes", "Priority Response"]
    },
    {
      id: 3,
      name: "Custom Photo Set",
      description: "Bespoke photo collection created specifically for your preferences",
      price: 200,
      duration: "5-10 photos",
      icon: Camera,
      features: ["High Quality", "Multiple Outfits", "Custom Themes", "Exclusive Rights"]
    },
    {
      id: 4,
      name: "Virtual Date Experience",
      description: "Immersive virtual date with dinner, conversation, and entertainment",
      price: 300,
      duration: "2 hours",
      icon: Gift,
      features: ["Interactive Experience", "Multiple Activities", "Personalized Menu", "Memory Book"]
    }
  ],

  gallery: [
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=600&fit=crop",
    "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=400&h=600&fit=crop"
  ],

  reviews: [
    {
      id: 1,
      user: "Michael R.",
      rating: 5,
      date: "2 days ago",
      comment: "Absolutely incredible experience. Sophia is professional, engaging, and truly understands luxury. Highly recommend!",
      service: "Premium Video Call"
    },
    {
      id: 2,
      user: "James K.",
      rating: 5,
      date: "1 week ago",
      comment: "Outstanding service and attention to detail. The virtual date was beyond my expectations.",
      service: "Virtual Date Experience"
    },
    {
      id: 3,
      user: "David L.",
      rating: 4,
      date: "2 weeks ago",
      comment: "Great conversation and beautiful content. Quick responses and very professional.",
      service: "Exclusive Messaging"
    }
  ]
}

export default function CreatorProfile({ params }: { params: { id: string } }) {
  const [selectedService, setSelectedService] = useState(null)
  const [bookingDate, setBookingDate] = useState<Date>()
  const [bookingTime, setBookingTime] = useState("")
  const [bookingMessage, setBookingMessage] = useState("")
  const [isFavorited, setIsFavorited] = useState(false)

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
            <Link href="/creators" className="text-aurora-gold font-medium">Creators</Link>
            <Link href="/messages" className="text-foreground/80 hover:text-foreground transition-colors">Messages</Link>
            <Link href="/bookings" className="text-foreground/80 hover:text-foreground transition-colors">Bookings</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4 mr-2" />
              Favorites
            </Button>
            <div className="w-8 h-8 aurora-gold-gradient rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Creator Header */}
        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          <div className="lg:col-span-2">
            <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="flex items-start gap-6 mb-6">
                  {/* Avatar */}
                  <div className="relative">
                    <div className="w-24 h-24 aurora-gold-gradient rounded-full p-1">
                      <div className="w-full h-full bg-card rounded-full"></div>
                    </div>
                    {mockCreator.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-emerald-500 rounded-full border-2 border-card"></div>
                    )}
                    {mockCreator.isVerified && (
                      <div className="absolute -top-1 -right-1 w-8 h-8 bg-aurora-gold rounded-full flex items-center justify-center">
                        <Shield className="w-4 h-4 text-aurora-dark" />
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h1 className="text-3xl font-bold">{mockCreator.name}</h1>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsFavorited(!isFavorited)}
                        className={isFavorited ? "text-aurora-rose-gold" : "text-foreground/60"}
                      >
                        <Heart className={`w-5 h-5 ${isFavorited ? "fill-current" : ""}`} />
                      </Button>
                    </div>

                    <p className="text-foreground/80 text-lg mb-3">{mockCreator.tagline}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-foreground/60 mb-4">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {mockCreator.location}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        Member since {mockCreator.memberSince}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {mockCreator.lastSeen}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {mockCreator.isOnline && (
                        <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                          Online Now
                        </Badge>
                      )}
                      {mockCreator.isPremium && (
                        <Badge className="bg-aurora-gold/20 text-aurora-gold border-aurora-gold/30">
                          Premium Creator
                        </Badge>
                      )}
                      <Badge className="bg-aurora-purple/20 text-aurora-purple border-aurora-purple/30">
                        Top Rated
                      </Badge>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 fill-aurora-gold text-aurora-gold mr-2" />
                        <span className="font-semibold text-lg">{mockCreator.rating}</span>
                        <span className="text-foreground/60 ml-1">({mockCreator.reviews} reviews)</span>
                      </div>
                      <div className="text-foreground/60">
                        <span className="font-semibold text-foreground">{mockCreator.totalBookings}+</span> bookings
                      </div>
                      <div className="text-foreground/60">
                        <span className="font-semibold text-foreground">{mockCreator.completionRate}%</span> completion rate
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                <div className="mb-6">
                  <h3 className="font-semibold mb-3">About Me</h3>
                  <p className="text-foreground/80 leading-relaxed">{mockCreator.bio}</p>
                </div>

                {/* Specialties & Languages */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Specialties</h4>
                    <div className="flex flex-wrap gap-2">
                      {mockCreator.specialties.map((specialty, index) => (
                        <Badge key={index} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Languages</h4>
                    <p className="text-foreground/80">{mockCreator.languages.join(", ")}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div className="space-y-4">
            <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full aurora-gold-gradient text-aurora-dark font-medium">
                        <Video className="w-4 h-4 mr-2" />
                        Book Video Call
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Book Video Call</DialogTitle>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">Select Date</label>
                          <Calendar
                            mode="single"
                            selected={bookingDate}
                            onSelect={setBookingDate}
                            disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                            className="rounded-md border"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Select Time</label>
                          <Select value={bookingTime} onValueChange={setBookingTime}>
                            <SelectTrigger>
                              <SelectValue placeholder="Choose time slot" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="10:00">10:00 AM</SelectItem>
                              <SelectItem value="14:00">2:00 PM</SelectItem>
                              <SelectItem value="18:00">6:00 PM</SelectItem>
                              <SelectItem value="20:00">8:00 PM</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">Message (Optional)</label>
                          <Textarea
                            placeholder="Tell me what you'd like to discuss..."
                            value={bookingMessage}
                            onChange={(e) => setBookingMessage(e.target.value)}
                          />
                        </div>
                        <Button className="w-full aurora-gold-gradient text-aurora-dark font-medium">
                          Confirm Booking - $150
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" className="w-full border-aurora-purple text-aurora-purple hover:bg-aurora-purple/10">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>

                  <Button variant="outline" className="w-full">
                    <Gift className="w-4 h-4 mr-2" />
                    Send Tip
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Stats */}
            <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Response Time</span>
                    <span className="font-medium">{mockCreator.responseTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Completion Rate</span>
                    <span className="font-medium">{mockCreator.completionRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-foreground/60">Total Bookings</span>
                    <span className="font-medium">{mockCreator.totalBookings}+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="gallery">Gallery</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
          </TabsList>

          {/* Services Tab */}
          <TabsContent value="services">
            <div className="grid md:grid-cols-2 gap-6">
              {mockCreator.services.map((service) => (
                <Card key={service.id} className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 aurora-gold-gradient rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-aurora-dark" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.name}</CardTitle>
                        <div className="flex items-center gap-2 text-sm text-foreground/60">
                          <span>${service.price}</span>
                          <span>•</span>
                          <span>{service.duration}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 mb-4">{service.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-sm mb-2">Included Features:</h4>
                      <ul className="space-y-1">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-foreground/60">
                            <div className="w-1.5 h-1.5 bg-aurora-gold rounded-full mr-2"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full aurora-gold-gradient text-aurora-dark font-medium">
                      Book {service.name} - ${service.price}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Gallery Tab */}
          <TabsContent value="gallery">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {mockCreator.gallery.map((image, index) => (
                <Card key={index} className="aurora-border-gradient bg-card/80 backdrop-blur-sm overflow-hidden">
                  <div className="aspect-[3/4] bg-gradient-to-br from-aurora-purple/20 to-aurora-gold/20"></div>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <div className="space-y-6">
              {mockCreator.reviews.map((review) => (
                <Card key={review.id} className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 aurora-gold-gradient rounded-full"></div>
                        <div>
                          <div className="font-medium">{review.user}</div>
                          <div className="flex items-center text-sm text-foreground/60">
                            <Star className="w-4 h-4 fill-aurora-gold text-aurora-gold mr-1" />
                            {review.rating}.0
                          </div>
                        </div>
                      </div>
                      <div className="text-right text-sm text-foreground/60">
                        <div>{review.date}</div>
                        <div>{review.service}</div>
                      </div>
                    </div>
                    <p className="text-foreground/80">{review.comment}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Schedule Tab */}
          <TabsContent value="schedule">
            <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Available Time Slots</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Calendar
                      mode="single"
                      selected={bookingDate}
                      onSelect={setBookingDate}
                      disabled={(date) => date < new Date()}
                      className="rounded-md border"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4">Available Times</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {["10:00 AM", "2:00 PM", "4:00 PM", "6:00 PM", "8:00 PM", "10:00 PM"].map((time) => (
                        <Button
                          key={time}
                          variant="outline"
                          className="justify-start border-aurora-gold/30 hover:bg-aurora-gold/10"
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}