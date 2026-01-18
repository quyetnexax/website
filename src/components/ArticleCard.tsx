import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";
import { Article } from "@/data/articles";

interface ArticleCardProps {
  article: Article;
}

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <Link to={`/publishing/${article.slug}`} className="group">
      <article className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-2 border border-border/50 h-full flex flex-col will-change-transform">
        {/* Image */}
        <div className="aspect-[16/10] bg-gradient-to-br from-primary/10 via-accent/20 to-primary/5 overflow-hidden relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl font-bold text-primary/20 group-hover:scale-110 transition-transform duration-300">NX</div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-primary/10 blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-accent/20 blur-xl"></div>
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {article.title}
          </h3>

          {/* Excerpt */}
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
            {article.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
            <div className="flex items-center gap-1.5">
              <Calendar size={14} />
              <span>
                {new Date(article.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        </div>
      </article>
    </Link>
  );
};
