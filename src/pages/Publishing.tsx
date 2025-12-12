import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ArticleCard } from "@/components/ArticleCard";
import { articles, allTags } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet-async";

const ARTICLES_PER_PAGE = 6;

const Publishing = () => {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(ARTICLES_PER_PAGE);

  const filteredArticles = selectedTag
    ? articles.filter((article) => article.tags.includes(selectedTag))
    : articles;

  const visibleArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + ARTICLES_PER_PAGE);
  };

  const handleTagClick = (tag: string | null) => {
    setSelectedTag(tag);
    setVisibleCount(ARTICLES_PER_PAGE);
  };

  return (
    <>
      <Helmet>
        <title>Publishing - NexaX Insights & Ideas</title>
        <meta
          name="description"
          content="Explore insights, articles, and ideas from NexaX. Learn about mobile development, AI, data analytics, and scaling products globally."
        />
        <meta property="og:title" content="Publishing - NexaX Insights & Ideas" />
        <meta property="og:description" content="Explore insights, articles, and ideas from NexaX." />
      </Helmet>

      <Header />
      <main>
        {/* Hero */}
        <section
          className="pt-32 pb-16 relative overflow-hidden"
          style={{ background: "var(--gradient-hero)" }}
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full bg-primary-foreground/5" />
            <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] rounded-full bg-primary-foreground/5" />
          </div>
          
          <div className="section-container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Publishing
              </h1>
              <p className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl">
                Insights, ideas, and perspectives from our team. Explore our latest 
                thinking on technology, product development, and global scaling.
              </p>
            </div>
          </div>
        </section>

        {/* Filter & Articles */}
        <section className="section-padding">
          <div className="section-container">
            {/* Tag Filter */}
            <div className="flex flex-wrap gap-3 mb-12">
              <button
                onClick={() => handleTagClick(null)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedTag === null
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                All
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => handleTagClick(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedTag === tag
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {visibleArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>

            {/* Load More */}
            {hasMore && (
              <div className="text-center mt-12">
                <Button variant="outline" size="lg" onClick={handleLoadMore}>
                  Load More Articles
                </Button>
              </div>
            )}

            {/* Empty State */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-16">
                <p className="text-muted-foreground text-lg">
                  No articles found for this category.
                </p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Publishing;
