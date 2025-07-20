import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Others = () => {
  const otherCategories = [
    {
      title: "Fashion Influencers",
      description: "Outfit ideas, styling tips, and the latest fashion trends",
      icon: "👗",
      trends: ["#OOTD", "#StyleTips", "#FashionWeek"],
      count: "195 ideas"
    },
    {
      title: "Beauty Influencers",
      description: "Skincare routines, makeup tutorials, and beauty hacks",
      icon: "💄",
      trends: ["#MakeupTutorial", "#SkincareRoutine", "#BeautyHacks"],
      count: "230 ideas"
    },
    {
      title: "Fitness Influencers",
      description: "Workout routines, healthy living tips, and fitness motivation",
      icon: "💪",
      trends: ["#FitnessMotivation", "#WorkoutRoutine", "#HealthyLiving"],
      count: "170 ideas"
    },
    {
      title: "Travel Influencers",
      description: "Destination guides, travel vlogs, and adventure tips",
      icon: "✈️",
      trends: ["#TravelVlog", "#Wanderlust", "#TravelTips"],
      count: "210 ideas"
    },
    {
      title: "Food Influencers",
      description: "Delicious recipes, food photography, and cooking tips",
      icon: "🍕",
      trends: ["#FoodieLife", "#RecipeShare", "#FoodPhotography"],
      count: "180 ideas"
    },
    {
      title: "Lifestyle Influencers",
      description: "Daily routines, life hacks, and lifestyle inspiration",
      icon: "🌟",
      trends: ["#LifestyleBlogger", "#DailyRoutine", "#LifeHacks"],
      count: "160 ideas"
    },
    {
      title: "Tech Influencers",
      description: "Latest gadgets, app reviews, and tech tutorials",
      icon: "📱",
      trends: ["#TechReview", "#Gadgets", "#TechTips"],
      count: "140 ideas"
    },
    {
      title: "Parenting Influencers",
      description: "Family content, parenting tips, and mom/dad life",
      icon: "👶",
      trends: ["#MomLife", "#ParentingTips", "#FamilyTime"],
      count: "120 ideas"
    },
    {
      title: "Finance Influencers",
      description: "Budgeting tips, investing advice, and financial literacy",
      icon: "💰",
      trends: ["#FinanceTips", "#Investing", "#BudgetingHacks"],
      count: "110 ideas"
    },
    {
      title: "Art/DIY Influencers",
      description: "Creative projects, crafts tutorials, and artistic inspiration",
      icon: "🎨",
      trends: ["#DIYProject", "#ArtTutorial", "#CreativeLife"],
      count: "200 ideas"
    },
    {
      title: "Gaming Influencers",
      description: "Game reviews, live streams, and gaming tips",
      icon: "🎮",
      trends: ["#Gaming", "#GameReview", "#LiveStream"],
      count: "320 ideas"
    },
    {
      title: "Pet Influencers",
      description: "Adorable pets with massive followings and pet care tips",
      icon: "🐾",
      trends: ["#PetsOfInstagram", "#PetCare", "#FurryFriends"],
      count: "90 ideas"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              All Influencer Categories
            </h1>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Discover trending content ideas across all major influencer categories. 
              From fashion to finance, find inspiration for your next viral post.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
            <div className="text-center animate-fade-in">
              <div className="text-3xl font-bold text-primary mb-2">12</div>
              <div className="text-muted-foreground text-sm">Categories</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-3xl font-bold text-primary mb-2">2K+</div>
              <div className="text-muted-foreground text-sm">Ideas</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-3xl font-bold text-primary mb-2">50M+</div>
              <div className="text-muted-foreground text-sm">Total Views</div>
            </div>
            <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground text-sm">Updates</div>
            </div>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCategories.map((category, index) => (
              <Card
                key={category.title}
                className="bg-gradient-card border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in cursor-pointer group"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-4xl">{category.icon}</div>
                    <span className="text-xs text-accent bg-accent/10 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                  <CardTitle className="text-foreground text-xl group-hover:text-primary transition-colors">
                    {category.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {category.trends.map((trend, trendIndex) => (
                        <span
                          key={trendIndex}
                          className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full"
                        >
                          {trend}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                        <TrendingUp size={16} />
                        <span>Trending Now</span>
                      </div>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-primary hover:text-accent group-hover:translate-x-1 transition-transform"
                      >
                        <ArrowRight size={16} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16 py-12 bg-gradient-card/20 rounded-lg">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We're constantly adding new categories and trending ideas. 
              Join our community to get notified about the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="glow" size="lg">
                Request New Category
              </Button>
              <Link to="/lists">
                <Button variant="outline" size="lg">
                  Browse All Ideas
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Others;