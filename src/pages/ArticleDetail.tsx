import { useParams, Link, Navigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Tag, Share2 } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ArticleDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <Navigate to="/publishing" replace />;
  }

  const relatedArticles = articles
    .filter((a) => a.id !== article.id && a.tags.some((tag) => article.tags.includes(tag)))
    .slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{article.title} - NexaX Publishing</title>
        <meta name="description" content={article.excerpt} />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.excerpt} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={article.title} />
        <meta name="twitter:description" content={article.excerpt} />
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
          </div>

          <div className="section-container relative z-10">
            <Link
              to="/publishing"
              className="inline-flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground mb-8 transition-colors"
            >
              <ArrowLeft size={18} />
              Back to Publishing
            </Link>

            <div className="max-w-4xl">
              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-foreground/10 text-primary-foreground text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6 leading-tight">
                {article.title}
              </h1>

              <div className="flex items-center gap-6 text-primary-foreground/70">
                <div className="flex items-center gap-2">
                  <Calendar size={18} />
                  <span>
                    {new Date(article.date).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto">
              <article className="prose prose-lg max-w-none">
                {article.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-foreground/80 leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>

              {/* Share */}
              <div className="mt-12 pt-8 border-t border-border">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <span className="text-muted-foreground">Share this article:</span>
                    <Button variant="outline" size="icon">
                      <Share2 size={18} />
                    </Button>
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/publishing">
                      <ArrowLeft size={18} />
                      Back to All Articles
                    </Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Related Articles */}
            {relatedArticles.length > 0 && (
              <div className="mt-20">
                <h2 className="text-2xl font-bold text-foreground mb-8">
                  Related Articles
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {relatedArticles.map((related) => (
                    <Link
                      key={related.id}
                      to={`/publishing/${related.slug}`}
                      className="group"
                    >
                      <article className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-border/50">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {related.tags.slice(0, 2).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 bg-accent text-accent-foreground text-xs font-medium rounded-full"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                          {related.title}
                        </h3>
                        <p className="text-muted-foreground text-sm line-clamp-2">
                          {related.excerpt}
                        </p>
                      </article>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ArticleDetail;
