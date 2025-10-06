"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Switch } from "@/components/ui/switch"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  DollarSign, TrendingUp, Users, Calendar, Video, MessageCircle,
  Star, Clock, Settings, Shield, Bell, Camera, Edit, Eye,
  BarChart3, PieChart, Activity, Gift, AlertTriangle, CheckCircle,
  UserCheck, UserX, Flag
} from "lucide-react"
import Link from "next/link"

// Mock dashboard data
const dashboardData = {
  earnings: {
    total: 12450,
    thisMonth: 3200,
    lastMonth: 2850,
    growth: 12.3,
    breakdown: {
      videoCalls: 8900,
      messaging: 2100,
      customContent: 1200,
      tips: 250
    }
  },
  stats: {
    totalBookings: 156,
    activeClients: 89,
    rating: 4.9,
    responseTime: "< 1 hour",
    completionRate: 98,
    onlineHours: 124
  },
  recentBookings: [
    { id: 1, client: "Michael R.", service: "Premium Video Call", amount: 150, date: "2024-10-06", status: "completed" },
    { id: 2, client: "James K.", service: "Virtual Date Experience", amount: 300, date: "2024-10-05", status: "completed" },
    { id: 3, client: "David L.", service: "Exclusive Messaging", amount: 75, date: "2024-10-05", status: "pending" },
    { id: 4, client: "Robert S.", service: "Custom Photo Set", amount: 200, date: "2024-10-04", status: "completed" },
    { id: 5, client: "Thomas M.", service: "Premium Video Call", amount: 150, date: "2024-10-04", status: "completed" }
  ],
  upcomingSchedule: [
    { id: 1, client: "Alexander P.", service: "Premium Video Call", time: "2:00 PM", date: "Today" },
    { id: 2, client: "Christopher L.", service: "Virtual Date Experience", time: "7:00 PM", date: "Today" },
    { id: 3, client: "Daniel W.", service: "Premium Video Call", time: "3:00 PM", date: "Tomorrow" },
    { id: 4, client: "Matthew H.", service: "Custom Photo Set", time: "5:00 PM", date: "Tomorrow" }
  ],
  clients: [
    { id: 1, name: "Michael R.", totalSpent: 1250, sessions: 8, lastSeen: "2 days ago", status: "active", tier: "VIP" },
    { id: 2, name: "James K.", totalSpent: 890, sessions: 5, lastSeen: "1 week ago", status: "active", tier: "Premium" },
    { id: 3, name: "David L.", totalSpent: 450, sessions: 3, lastSeen: "3 days ago", status: "active", tier: "Standard" },
    { id: 4, name: "Robert S.", totalSpent: 320, sessions: 2, lastSeen: "5 days ago", status: "inactive", tier: "Standard" }
  ]
}

export default function CreatorDashboard() {
  const [isOnline, setIsOnline] = useState(true)
  const [autoAcceptBookings, setAutoAcceptBookings] = useState(false)
  const [selectedTimeRange, setSelectedTimeRange] = useState("month")

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
            <Link href="/dashboard" className="text-aurora-gold font-medium">Dashboard</Link>
            <Link href="/messages" className="text-foreground/80 hover:text-foreground transition-colors">Messages</Link>
            <Link href="/bookings" className="text-foreground/80 hover:text-foreground transition-colors">Bookings</Link>
            <Link href="/profile" className="text-foreground/80 hover:text-foreground transition-colors">Profile</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Bell className="w-4 h-4" />
            </Button>
            <div className="flex items-center space-x-2">
              <Switch
                checked={isOnline}
                onCheckedChange={setIsOnline}
                className="data-[state=checked]:bg-aurora-gold"
              />
              <span className="text-sm">{isOnline ? "Online" : "Offline"}</span>
            </div>
            <div className="w-8 h-8 aurora-gold-gradient rounded-full"></div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground/60 text-sm">Total Earnings</p>
                  <p className="text-2xl font-bold aurora-text-gradient">${dashboardData.earnings.total.toLocaleString()}</p>
                  <p className="text-emerald-400 text-sm flex items-center mt-1">
                    <TrendingUp className="w-3 h-3 mr-1" />
                    +{dashboardData.earnings.growth}% this month
                  </p>
                </div>
                <div className="w-12 h-12 aurora-gold-gradient rounded-lg flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-aurora-dark" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground/60 text-sm">Active Clients</p>
                  <p className="text-2xl font-bold">{dashboardData.stats.activeClients}</p>
                  <p className="text-foreground/60 text-sm">+12 new this month</p>
                </div>
                <div className="w-12 h-12 aurora-gold-gradient rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-aurora-dark" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground/60 text-sm">Rating</p>
                  <p className="text-2xl font-bold flex items-center">
                    <Star className="w-6 h-6 fill-aurora-gold text-aurora-gold mr-2" />
                    {dashboardData.stats.rating}
                  </p>
                  <p className="text-foreground/60 text-sm">From 127 reviews</p>
                </div>
                <div className="w-12 h-12 aurora-gold-gradient rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-aurora-dark" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-foreground/60 text-sm">Completion Rate</p>
                  <p className="text-2xl font-bold">{dashboardData.stats.completionRate}%</p>
                  <p className="text-emerald-400 text-sm">Excellent performance</p>
                </div>
                <div className="w-12 h-12 aurora-gold-gradient rounded-lg flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-aurora-dark" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Dashboard Content */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="bookings">Bookings</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-6">
                {/* Earnings Chart */}
                <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle>Earnings Overview</CardTitle>
                      <Select value={selectedTimeRange} onValueChange={setSelectedTimeRange}>
                        <SelectTrigger className="w-32">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="week">This Week</SelectItem>
                          <SelectItem value="month">This Month</SelectItem>
                          <SelectItem value="year">This Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 bg-gradient-to-r from-aurora-purple/10 to-aurora-gold/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 aurora-text-gradient mx-auto mb-4" />
                        <p className="text-foreground/60">Chart visualization would go here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Recent Bookings */}
                <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Client</TableHead>
                          <TableHead>Service</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {dashboardData.recentBookings.map((booking) => (
                          <TableRow key={booking.id}>
                            <TableCell className="font-medium">{booking.client}</TableCell>
                            <TableCell>{booking.service}</TableCell>
                            <TableCell>${booking.amount}</TableCell>
                            <TableCell>
                              <Badge className={
                                booking.status === "completed"
                                  ? "bg-emerald-500/20 text-emerald-400"
                                  : "bg-aurora-gold/20 text-aurora-gold"
                              }>
                                {booking.status}
                              </Badge>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Today's Schedule */}
                <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Today's Schedule
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {dashboardData.upcomingSchedule.slice(0, 2).map((appointment) => (
                        <div key={appointment.id} className="flex items-center justify-between p-3 bg-aurora-dark/30 rounded-lg">
                          <div>
                            <p className="font-medium text-sm">{appointment.client}</p>
                            <p className="text-foreground/60 text-xs">{appointment.service}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-sm aurora-text-gradient">{appointment.time}</p>
                            <p className="text-foreground/60 text-xs">{appointment.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-4" variant="outline">
                      View Full Schedule
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Button className="w-full justify-start aurora-gold-gradient text-aurora-dark">
                        <Camera className="w-4 h-4 mr-2" />
                        Create Content
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Edit className="w-4 h-4 mr-2" />
                        Update Availability
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <MessageCircle className="w-4 h-4 mr-2" />
                        Broadcast Message
                      </Button>
                      <Button className="w-full justify-start" variant="outline">
                        <Settings className="w-4 h-4 mr-2" />
                        Profile Settings
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Performance Metrics */}
                <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Performance</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Response Time</span>
                          <span className="aurora-text-gradient">Excellent</span>
                        </div>
                        <Progress value={95} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Client Satisfaction</span>
                          <span className="aurora-text-gradient">{dashboardData.stats.rating}/5.0</span>
                        </div>
                        <Progress value={98} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-1">
                          <span>Booking Rate</span>
                          <span className="aurora-text-gradient">High</span>
                        </div>
                        <Progress value={87} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Earnings Tab */}
          <TabsContent value="earnings">
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Earnings Breakdown</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="text-center p-4 bg-aurora-dark/30 rounded-lg">
                        <Video className="w-8 h-8 aurora-text-gradient mx-auto mb-2" />
                        <p className="text-2xl font-bold">${dashboardData.earnings.breakdown.videoCalls}</p>
                        <p className="text-sm text-foreground/60">Video Calls</p>
                      </div>
                      <div className="text-center p-4 bg-aurora-dark/30 rounded-lg">
                        <MessageCircle className="w-8 h-8 aurora-text-gradient mx-auto mb-2" />
                        <p className="text-2xl font-bold">${dashboardData.earnings.breakdown.messaging}</p>
                        <p className="text-sm text-foreground/60">Messaging</p>
                      </div>
                      <div className="text-center p-4 bg-aurora-dark/30 rounded-lg">
                        <Camera className="w-8 h-8 aurora-text-gradient mx-auto mb-2" />
                        <p className="text-2xl font-bold">${dashboardData.earnings.breakdown.customContent}</p>
                        <p className="text-sm text-foreground/60">Custom Content</p>
                      </div>
                      <div className="text-center p-4 bg-aurora-dark/30 rounded-lg">
                        <Gift className="w-8 h-8 aurora-text-gradient mx-auto mb-2" />
                        <p className="text-2xl font-bold">${dashboardData.earnings.breakdown.tips}</p>
                        <p className="text-sm text-foreground/60">Tips</p>
                      </div>
                    </div>

                    <div className="h-64 bg-gradient-to-r from-aurora-purple/10 to-aurora-gold/10 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <PieChart className="w-16 h-16 aurora-text-gradient mx-auto mb-4" />
                        <p className="text-foreground/60">Earnings chart visualization</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle>Payout Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-foreground/60">Available Balance</p>
                        <p className="text-2xl font-bold aurora-text-gradient">${dashboardData.earnings.thisMonth}</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Next Payout</p>
                        <p className="font-medium">October 15, 2024</p>
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60">Payout Method</p>
                        <p className="font-medium">Bank Transfer (****1234)</p>
                      </div>
                      <Button className="w-full aurora-gold-gradient text-aurora-dark font-medium">
                        Request Payout
                      </Button>
                      <Button className="w-full" variant="outline">
                        Update Payment Method
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          {/* Clients Tab */}
          <TabsContent value="clients">
            <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Client Management</CardTitle>
                  <div className="flex items-center space-x-2">
                    <Button size="sm" variant="outline">
                      <UserCheck className="w-4 h-4 mr-2" />
                      Verify Client
                    </Button>
                    <Button size="sm" variant="outline">
                      <UserX className="w-4 h-4 mr-2" />
                      Block Client
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Client</TableHead>
                      <TableHead>Total Spent</TableHead>
                      <TableHead>Sessions</TableHead>
                      <TableHead>Last Seen</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Tier</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dashboardData.clients.map((client) => (
                      <TableRow key={client.id}>
                        <TableCell className="font-medium">{client.name}</TableCell>
                        <TableCell>${client.totalSpent}</TableCell>
                        <TableCell>{client.sessions}</TableCell>
                        <TableCell>{client.lastSeen}</TableCell>
                        <TableCell>
                          <Badge className={
                            client.status === "active"
                              ? "bg-emerald-500/20 text-emerald-400"
                              : "bg-foreground/20 text-foreground/60"
                          }>
                            {client.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={
                            client.tier === "VIP"
                              ? "bg-aurora-gold/20 text-aurora-gold"
                              : client.tier === "Premium"
                              ? "bg-aurora-purple/20 text-aurora-purple"
                              : "bg-foreground/20 text-foreground/60"
                          }>
                            {client.tier}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button size="sm" variant="ghost">
                              <MessageCircle className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Flag className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Availability Settings</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Online Status</p>
                      <p className="text-sm text-foreground/60">Show as available to clients</p>
                    </div>
                    <Switch checked={isOnline} onCheckedChange={setIsOnline} />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Auto-Accept Bookings</p>
                      <p className="text-sm text-foreground/60">Automatically accept verified clients</p>
                    </div>
                    <Switch checked={autoAcceptBookings} onCheckedChange={setAutoAcceptBookings} />
                  </div>
                  <Button className="w-full aurora-gold-gradient text-aurora-dark font-medium">
                    Update Schedule
                  </Button>
                </CardContent>
              </Card>

              <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Safety & Security</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <Shield className="w-4 h-4 mr-2" />
                    Privacy Settings
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <UserX className="w-4 h-4 mr-2" />
                    Blocked Users
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Flag className="w-4 h-4 mr-2" />
                    Report Issues
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <AlertTriangle className="w-4 h-4 mr-2" />
                    Safety Guidelines
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}