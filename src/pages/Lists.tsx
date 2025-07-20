import Navbar from "@/components/Navbar";
import InfluencerCard from "@/components/InfluencerCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter } from "lucide-react";
import { useState } from "react";

const Lists = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allContent = [
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
    },
    {
      title: "Home Decor DIY: Budget Makeover",
      description: "Transform your space with these simple and affordable DIY projects",
      category: "Lifestyle",
      likes: 9800,
      views: 145000,
      trend: "#HomeDecor"
    },
    {
      title: "Street Photography Tips for Beginners",
      description: "Capture stunning urban photos with these expert techniques",
      category: "Photography",
      likes: 7200,
      views: 98000,
      trend: "#StreetPhoto"
    },
    {
      title: "Plant-Based Protein Sources Guide",
      description: "Complete guide to getting enough protein on a plant-based diet",
      category: "Food",
      likes: 11500,
      views: 176000,
      trend: "#PlantBased"
    },
    {
      title: "Productivity Apps That Actually Work",
      description: "Boost your productivity with these game-changing apps and tools",
      category: "Tech",
      likes: 16200,
      views: 234000,
      trend: "#Productivity"
    },
    {
      title: "Sustainable Fashion on a Budget",
      description: "Look great while being environmentally conscious without breaking the bank",
      category: "Fashion",
      likes: 13700,
      views: 201000,
      trend: "#SustainableFashion"
    },
    {
      title: "Meditation for Busy People: 5-Minute Sessions",
      description: "Quick meditation techniques you can do anywhere, anytime",
      category: "Wellness",
      likes: 19800,
      views: 287000,
      trend: "#Mindfulness"
    }
  ];

  const categories = ["all", "Dance", "Beauty", "Food", "Gaming", "Fashion", "Fitness", "Lifestyle", "Photography", "Tech", "Wellness"];

  const filteredContent = allContent.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-primary">
      <Navbar />
      
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
              All Trending Ideas
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our complete collection of viral content ideas from top influencers
            </p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder="Search trending ideas..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-muted border-primary/20 text-foreground"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="text-muted-foreground" size={20} />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48 bg-muted border-primary/20 text-foreground">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === "all" ? "All Categories" : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredContent.length} of {allContent.length} results
            </p>
          </div>

          {/* Content Grid */}
          {filteredContent.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredContent.map((item, index) => (
                <div
                  key={index}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <InfluencerCard {...item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                No results found
              </h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search terms or filters
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}

          {/* Load More */}
          {filteredContent.length > 0 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Content
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Lists;