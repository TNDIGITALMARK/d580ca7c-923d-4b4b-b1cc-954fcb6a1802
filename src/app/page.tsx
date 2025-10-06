import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Shield, Calendar, MessageCircle, Video, DollarSign } from "lucide-react"
import Link from "next/link"

export const dynamic = 'force-dynamic'

export default function AuroraLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-aurora-darker to-aurora-dark">
      {/* Header */}
      <header className="border-b border-border/50 bg-card/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 aurora-gradient rounded-lg flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded opacity-90"></div>
            </div>
            <span className="text-2xl font-bold aurora-text-gradient">AURORA</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/creators" className="text-foreground/80 hover:text-foreground transition-colors">Creators</Link>
            <Link href="/clients" className="text-foreground/80 hover:text-foreground transition-colors">Clients</Link>
            <Link href="/features" className="text-foreground/80 hover:text-foreground transition-colors">Features</Link>
            <Link href="/pricing" className="text-foreground/80 hover:text-foreground transition-colors">Pricing</Link>
          </nav>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm">Sign In</Button>
            <Button className="aurora-gold-gradient text-aurora-dark font-medium" size="sm">
              Join as Creator
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Elevate Your Influence.{" "}
                  <span className="aurora-text-gradient">Discover Exquisite Talent</span>
                </h1>
                <p className="text-xl text-foreground/70 max-w-lg">
                  The premium platform for adult creators & discerning clientele.
                  Experience luxury, sophistication, and unparalleled connection.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="aurora-gold-gradient text-aurora-dark font-medium aurora-glow">
                  Join as Creator
                </Button>
                <Button size="lg" variant="outline" className="border-aurora-gold text-aurora-gold hover:bg-aurora-gold/10">
                  Find Your Muse
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 aurora-gold-gradient rounded-full"></div>
                        <div>
                          <div className="font-medium">Sophia</div>
                          <div className="flex items-center text-sm text-foreground/60">
                            <Star className="w-4 h-4 fill-aurora-gold text-aurora-gold mr-1" />
                            4.9
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-aurora-purple/20 text-aurora-purple border-aurora-purple/30">Online</Badge>
                    </CardContent>
                  </Card>
                  <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 aurora-gold-gradient rounded-full"></div>
                        <div>
                          <div className="font-medium">Isabella</div>
                          <div className="flex items-center text-sm text-foreground/60">
                            <Star className="w-4 h-4 fill-aurora-gold text-aurora-gold mr-1" />
                            4.8
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-aurora-gold/20 text-aurora-gold border-aurora-gold/30">Premium</Badge>
                    </CardContent>
                  </Card>
                </div>
                <div className="space-y-4 pt-8">
                  <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 aurora-gold-gradient rounded-full"></div>
                        <div>
                          <div className="font-medium">Victoria</div>
                          <div className="flex items-center text-sm text-foreground/60">
                            <Star className="w-4 h-4 fill-aurora-gold text-aurora-gold mr-1" />
                            5.0
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-aurora-rose-gold/20 text-aurora-rose-gold border-aurora-rose-gold/30">VIP</Badge>
                    </CardContent>
                  </Card>
                  <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 aurora-gold-gradient rounded-full"></div>
                        <div>
                          <div className="font-medium">Anastasia</div>
                          <div className="flex items-center text-sm text-foreground/60">
                            <Star className="w-4 h-4 fill-aurora-gold text-aurora-gold mr-1" />
                            4.9
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-aurora-purple/20 text-aurora-purple border-aurora-purple/30">Featured</Badge>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Unleash Your Potential</h2>
            <p className="text-foreground/70 max-w-2xl mx-auto">
              Aurora provides creators and clients with sophisticated tools for meaningful connections and premium experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 aurora-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <DollarSign className="w-8 h-8 text-aurora-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Monetize</h3>
                <p className="text-foreground/70">
                  Multiple revenue streams including video calls, custom content, messaging, and exclusive experiences.
                </p>
                <Button variant="outline" className="mt-6 border-aurora-gold text-aurora-gold hover:bg-aurora-gold/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 aurora-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-aurora-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Organize</h3>
                <p className="text-foreground/70">
                  Smart scheduling, client management, and business analytics to optimize your creator journey.
                </p>
                <Button variant="outline" className="mt-6 border-aurora-gold text-aurora-gold hover:bg-aurora-gold/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>

            <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 aurora-gold-gradient rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-8 h-8 text-aurora-dark" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Connect</h3>
                <p className="text-foreground/70">
                  Secure messaging, premium video experiences, and meaningful interactions with verified clients.
                </p>
                <Button variant="outline" className="mt-6 border-aurora-gold text-aurora-gold hover:bg-aurora-gold/10">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Communication Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Seamless Communication</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Private Consultations</h3>
                  <p className="text-foreground/70 mb-6">
                    Exclusive one-on-one video sessions with verified creators. Premium experiences tailored to your desires.
                  </p>
                  <Button className="aurora-gold-gradient text-aurora-dark font-medium">
                    Start Now
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card className="aurora-border-gradient bg-card/80 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">Curated Experiences</h3>
                  <p className="text-foreground/70 mb-6">
                    Discover handpicked creators and exclusive content. Luxury meets authenticity in every interaction.
                  </p>
                  <Button className="aurora-gold-gradient text-aurora-dark font-medium">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-aurora-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Begin?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-aurora-dark hover:bg-white/90">
              Join Aurora
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 bg-card/80 backdrop-blur-sm py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 aurora-gradient rounded"></div>
              <span className="font-semibold aurora-text-gradient">AURORA</span>
            </div>
            <p className="text-foreground/60 text-sm">© 2024 Aurora. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}