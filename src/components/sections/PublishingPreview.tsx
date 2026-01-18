import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Tag } from "lucide-react";
import { articles } from "@/data/articles";

export const PublishingPreview = () => {
  const latestArticles = articles.slice(0, 3);

  return (
    <section className="section-padding relative">
      <div className="section-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              Publishing
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Insights &<span className="gradient-text"> Ideas</span>
            </h2>
          </div>
          <Button variant="outline" size="lg" asChild>
            <Link to="/publishing">
              View All Articles
              <ArrowRight size={18} />
            </Link>
          </Button>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestArticles.map((article, index) => {
            const gradients = [
              'from-purple-500/20 via-blue-500/10 to-purple-500/5',
              'from-blue-500/20 via-teal-500/10 to-blue-500/5',
              'from-pink-500/20 via-purple-500/10 to-pink-500/5'
            ];
            const iconColors = [
              'text-purple-500/30',
              'text-blue-500/30',
              'text-pink-500/30'
            ];
            return (
            <Link
              key={article.id}
              to={`/publishing/${article.slug}`}
              className="group"
            >
              <article className="bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-2 border border-border/50 h-full flex flex-col will-change-transform">
                {/* Image */}
                <div className={`aspect-[16/10] overflow-hidden relative bg-gradient-to-br ${gradients[index]}`}>
                  {index === 0 && article.image && article.image !== '/placeholder.svg' ? (
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`text-6xl font-bold ${iconColors[index]} group-hover:scale-110 transition-transform duration-300`}>NX</div>
                      </div>
                      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-white/5 blur-xl"></div>
                      <div className="absolute bottom-4 left-4 w-20 h-20 rounded-full bg-white/10 blur-xl"></div>
                    </>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.slice(0, 2).map((tag) => (
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
                      <span>{new Date(article.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Link>
          )})}
        </div>
      </div>
    </section>
  );
};
