import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface CategorySectionProps {
  categories: Array<{
    name: string;
    icon: string;
    path: string;
    count: number;
  }>;
}

const CategorySection = ({ categories }: CategorySectionProps) => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4 animate-fade-in">
            Explore Influencer Types
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover trending content and ideas from various influencer categories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.path}
              className="group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-gradient-card border border-primary/20 rounded-lg p-6 hover:border-primary/40 hover:shadow-glow transition-all duration-300 animate-fade-in">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {category.count} trending ideas
                </p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-primary hover:text-accent group-hover:translate-x-1 transition-transform"
                >
                  Explore <ChevronRight size={16} className="ml-1" />
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;