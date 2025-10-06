"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Star, Heart, Filter, Search, MapPin, Clock, Video, MessageCircle, DollarSign } from "lucide-react"
import Link from "next/link"

const mockCreators = [
  {
    id: 1,
    name: "Sophia Laurent",
    username: "@sophia_laurent",
    location: "Los Angeles, CA",
    rating: 4.9,
    reviews: 127,
    isOnline: true,
    isPremium: true,
    isVerified: true,
    specialties: ["Fashion", "Lifestyle", "Art"],
    videoCallRate: 150,
    messageRate: 25,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&h=400&fit=crop",
    languages: ["English", "French"],
    responseTime: "< 1 hour"
  },
  {
    id: 2,
    name: "Isabella Rodriguez",
    username: "@bella_creates",
    location: "Miami, FL",
    rating: 4.8,
    reviews: 89,
    isOnline: false,
    isPremium: true,
    isVerified: true,
    specialties: ["Dance", "Fitness", "Music"],
    videoCallRate: 120,
    messageRate: 20,
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&h=400&fit=crop",
    languages: ["English", "Spanish"],
    responseTime: "< 2 hours"
  },
  {
    id: 3,
    name: "Victoria Chen",
    username: "@victoria_vip",
    location: "New York, NY",
    rating: 5.0,
    reviews: 156,
    isOnline: true,
    isPremium: true,
    isVerified: true,
    specialties: ["Business", "Luxury", "Travel"],
    videoCallRate: 200,
    messageRate: 35,
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=400&fit=crop",
    languages: ["English", "Mandarin"],
    responseTime: "< 30 min"
  },
  {
    id: 4,
    name: "Anastasia Volkov",
    username: "@anastasia_art",
    location: "London, UK",
    rating: 4.9,
    reviews: 203,
    isOnline: false,
    isPremium: true,
    isVerified: true,
    specialties: ["Photography", "Modeling", "Creative"],
    videoCallRate: 180,
    messageRate: 30,
    avatar: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=400&h=400&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=800&h=400&fit=crop",
    languages: ["English", "Russian"],
    responseTime: "< 1 hour"
  },
  {
    id: 5,
    name: "Camila Santos",
    username: "@camila_premium",
    location: "São Paulo, BR",
    rating: 4.7,
    reviews: 74,
    isOnline: true,
    isPremium: false,
    isVerified: true,
    specialties: ["Wellness", "Yoga", "Meditation"],
    videoCallRate: 90,
    messageRate: 15,
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=400&fit=crop",
    languages: ["English", "Portuguese"],
    responseTime: "< 3 hours"
  },
  {
    id: 6,
    name: "Elena Kozlova",
    username: "@elena_exclusive",
    location: "Monaco",
    rating: 4.9,
    reviews: 98,
    isOnline: true,
    isPremium: true,
    isVerified: true,
    specialties: ["Luxury", "Fashion", "High Society"],
    videoCallRate: 250,
    messageRate: 40,
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop&crop=face",
    coverImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=400&fit=crop",
    languages: ["English", "French", "Russian"],
    responseTime: "< 1 hour"
  }
]

export default function CreatorDiscovery() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState("all")
  const [onlineOnly, setOnlineOnly] = useState(false)
  const [viewMode, setViewMode] = useState("grid")

  const filteredCreators = mockCreators.filter(creator => {
    if (searchQuery && !creator.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !creator.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))) {
      return false
    }
    if (onlineOnly && !creator.isOnline) return false
    if (selectedCategory !== "all" && !creator.specialties.some(s => s.toLowerCase() === selectedCategory.toLowerCase())) {
      return false
    }
    if (priceRange !== "all") {
      const rate = creator.videoCallRate
      if (priceRange === "budget" && rate > 100) return false
      if (priceRange === "premium" && (rate < 100 || rate > 200)) return false
      if (priceRange === "luxury" && rate < 200) return false
    }
    return true
  })

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
            <Link href="/profile" className="text-foreground/80 hover:text-foreground transition-colors">Profile</Link>
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
        {/* Search and Filter Bar */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/40 w-4 h-4" />
                <Input
                  placeholder="Search creators, specialties..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="fashion">Fashion</SelectItem>
                  <SelectItem value="fitness">Fitness</SelectItem>
                  <SelectItem value="art">Art</SelectItem>
                  <SelectItem value="business">Business</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                </SelectContent>
              </Select>

              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="budget">$50 - $100</SelectItem>
                  <SelectItem value="premium">$100 - $200</SelectItem>
                  <SelectItem value="luxury">$200+</SelectItem>
                </SelectContent>
              </Select>

              <Button
                variant="outline"
                size="sm"
                onClick={() => setOnlineOnly(!onlineOnly)}
                className={onlineOnly ? "border-aurora-gold text-aurora-gold bg-aurora-gold/10" : ""}
              >
                <Filter className="w-4 h-4 mr-2" />
                Online Only
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="mt-4">
            <Tabs value={viewMode} onValueChange={setViewMode} className="w-full">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-foreground/60">
                    {filteredCreators.length} creators found
                  </span>
                </div>
                <TabsList>
                  <TabsTrigger value="grid">Grid</TabsTrigger>
                  <TabsTrigger value="list">List</TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </div>
        </div>

        {/* Creator Grid */}
        <div className={`grid gap-6 ${viewMode === "grid" ? "grid-cols-1 md:grid-cols-2 xl:grid-cols-3" : "grid-cols-1"}`}>
          {filteredCreators.map((creator) => (
            <Card key={creator.id} className="aurora-border-gradient bg-card/80 backdrop-blur-sm overflow-hidden group hover:shadow-xl transition-all duration-300">
              {/* Cover Image */}
              <div className="relative h-32 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-aurora-purple/20 to-aurora-gold/20"></div>
                <div className="absolute top-4 right-4 flex gap-2">
                  {creator.isOnline && (
                    <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30">
                      Online
                    </Badge>
                  )}
                  {creator.isPremium && (
                    <Badge className="bg-aurora-gold/20 text-aurora-gold border-aurora-gold/30">
                      Premium
                    </Badge>
                  )}
                </div>
              </div>

              <CardContent className="p-6">
                {/* Creator Info */}
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 aurora-gold-gradient rounded-full p-0.5">
                      <div className="w-full h-full bg-card rounded-full"></div>
                    </div>
                    {creator.isOnline && (
                      <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-card"></div>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-lg">{creator.name}</h3>
                      {creator.isVerified && (
                        <div className="w-5 h-5 bg-aurora-gold rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-aurora-dark rounded-full"></div>
                        </div>
                      )}
                    </div>
                    <p className="text-foreground/60 text-sm mb-1">{creator.username}</p>
                    <div className="flex items-center text-sm text-foreground/60 mb-2">
                      <MapPin className="w-3 h-3 mr-1" />
                      {creator.location}
                    </div>

                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-aurora-gold text-aurora-gold mr-1" />
                        <span className="font-medium">{creator.rating}</span>
                        <span className="text-foreground/60 ml-1">({creator.reviews})</span>
                      </div>
                      <div className="flex items-center text-foreground/60">
                        <Clock className="w-3 h-3 mr-1" />
                        {creator.responseTime}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {creator.specialties.slice(0, 3).map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Languages */}
                <div className="mb-4">
                  <p className="text-xs text-foreground/60 mb-1">Languages:</p>
                  <p className="text-sm">{creator.languages.join(", ")}</p>
                </div>

                {/* Pricing */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <Video className="w-4 h-4 mr-2 text-foreground/60" />
                      <span>Video Call</span>
                    </div>
                    <span className="font-medium">${creator.videoCallRate}/hr</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center">
                      <MessageCircle className="w-4 h-4 mr-2 text-foreground/60" />
                      <span>Messages</span>
                    </div>
                    <span className="font-medium">${creator.messageRate}/msg</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button className="flex-1 aurora-gold-gradient text-aurora-dark font-medium">
                    <Video className="w-4 h-4 mr-2" />
                    Book Call
                  </Button>
                  <Button variant="outline" className="border-aurora-gold text-aurora-gold hover:bg-aurora-gold/10">
                    <MessageCircle className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" className="border-aurora-rose-gold text-aurora-rose-gold hover:bg-aurora-rose-gold/10">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        {filteredCreators.length > 0 && (
          <div className="text-center mt-12">
            <Button variant="outline" className="border-aurora-gold text-aurora-gold hover:bg-aurora-gold/10">
              Load More Creators
            </Button>
          </div>
        )}

        {/* No Results */}
        {filteredCreators.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 aurora-gold-gradient rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-aurora-dark" />
            </div>
            <h3 className="text-2xl font-semibold mb-2">No creators found</h3>
            <p className="text-foreground/60 mb-6">Try adjusting your search or filters</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setSelectedCategory("all")
                setPriceRange("all")
                setOnlineOnly(false)
              }}
              className="aurora-gold-gradient text-aurora-dark font-medium"
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}