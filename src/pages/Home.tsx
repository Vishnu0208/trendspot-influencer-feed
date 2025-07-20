import Navbar from "@/components/Navbar";
import CategorySection from "@/components/CategorySection";
import InfluencerCard from "@/components/InfluencerCard";
import ContactUs from "@/components/ContactUs";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, Star } from "lucide-react";

const Home = () => {
  const categories = [
    { name: "Dancer", icon: "💃", path: "/category/dancer", count: 150 },
    { name: "Beauty", icon: "💄", path: "/category/beauty", count: 230 },
    { name: "Food", icon: "🍕", path: "/category/food", count: 180 },
    { name: "Gaming", icon: "🎮", path: "/category/gaming", count: 320 },
    { name: "Fashion", icon: "👗", path: "/category/fashion", count: 195 },
    { name: "Fitness", icon: "💪", path: "/category/fitness", count: 170 },
    { name: "Travel", icon: "✈️", path: "/category/travel", count: 210 },
    { name: "Others", icon: "🌟", path: "/others", count: 500 }
  ];

  const trendingCards = [
    {
      title: "10 Viral Dance Moves Taking Over TikTok",
      description: "Master these trending dance moves and join millions of creators worldwide",
      category: "Dance",
      likes: 15600,
      views: 234000,
      trend: "#DanceChallenge"
    },
    {
      title: "Korean Glass Skin Routine: 7 Steps",
      description: "Achieve that coveted glass skin look with this comprehensive skincare routine",
      category: "Beauty",
      likes: 23400,
      views: 456000,
      trend: "#GlassSkin"
    },
    {
      title: "One-Pot Pasta Recipes Under 20 Minutes",
      description: "Quick and delicious pasta recipes perfect for busy weeknight dinners",
      category: "Food",
      likes: 8900,
      views: 123000,
      trend: "#QuickMeals"
    },
    {
      title: "Best Gaming Setup Under $1000",
      description: "Build the ultimate gaming setup without breaking the bank",
      category: "Gaming",
      likes: 34500,
      views: 567000,
      trend: "#GamingSetup"
    },
    {
      title: "Capsule Wardrobe Essentials 2024",
      description: "Build a timeless wardrobe with these 20 essential pieces",
      category: "Fashion",
      likes: 18700,
      views: 298000,
      trend: "#CapsuleWardrobe"
    },
    {
      title: "Morning Workout Routine: 15 Minutes",
      description: "Start your day right with this energizing morning workout",
      category: "Fitness",
      likes: 12300,
      views: 187000,
      trend: "#MorningWorkout"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 animate-fade-in">
              Discover
              <span className="text-transparent bg-gradient-accent bg-clip-text"> Trending </span>
              Ideas
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
              Get inspired by the latest social media trends from top influencers across all categories. 
              From viral dances to beauty tips, find your next viral content idea here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
              <Button size="lg" variant="glow" className="text-lg px-8">
                Explore Trends <TrendingUp className="ml-2" />
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                Join Community <Users className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="animate-fade-in">
                <div className="text-4xl font-bold text-primary mb-2">10M+</div>
                <div className="text-muted-foreground">Active Creators</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="text-4xl font-bold text-primary mb-2">50K+</div>
                <div className="text-muted-foreground">Trending Ideas</div>
              </div>
              <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="text-4xl font-bold text-primary mb-2">1B+</div>
                <div className="text-muted-foreground">Views Generated</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <CategorySection categories={categories} />

      {/* Trending Content Section */}
      <section className="py-16 bg-gradient-card/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Trending Now
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Latest viral content ideas that are taking social media by storm
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingCards.map((card, index) => (
              <div
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <InfluencerCard {...card} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="text-lg px-8">
              View All Trends <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Star className="mx-auto text-accent mb-6" size={48} />
          <h2 className="text-4xl font-bold text-foreground mb-6">
            Ready to Go Viral?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of creators who are already using our platform to discover 
            trending content ideas and grow their following.
          </p>
          <Button size="lg" variant="glow" className="text-lg px-12">
            Get Started Now
          </Button>
        </div>
      </section>

      {/* Contact Us Section */}
      <ContactUs />
    </div>
  );
};

export default Home;