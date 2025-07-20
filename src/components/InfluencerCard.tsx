import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Share2, Eye } from "lucide-react";
import { useState } from "react";

interface InfluencerCardProps {
  title: string;
  description: string;
  category: string;
  likes: number;
  views: number;
  image?: string;
  trend: string;
}

const InfluencerCard = ({ title, description, category, likes, views, trend }: InfluencerCardProps) => {
  const [isLiked, setIsLiked] = useState(false);
  const [currentLikes, setCurrentLikes] = useState(likes);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setCurrentLikes(prev => isLiked ? prev - 1 : prev + 1);
  };

  return (
    <Card className="bg-gradient-card border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow animate-fade-in">
      <CardHeader>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-accent bg-accent/10 px-2 py-1 rounded-full">
            {category}
          </span>
          <span className="text-xs text-muted-foreground">
            Trending: {trend}
          </span>
        </div>
        <CardTitle className="text-foreground text-lg">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {description}
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Eye size={16} />
              <span>{views.toLocaleString()}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Heart size={16} className={isLiked ? "text-red-500 fill-current" : ""} />
              <span>{currentLikes.toLocaleString()}</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleLike}
              className="text-muted-foreground hover:text-primary"
            >
              <Heart size={16} className={isLiked ? "text-red-500 fill-current" : ""} />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-muted-foreground hover:text-primary"
            >
              <Share2 size={16} />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default InfluencerCard;