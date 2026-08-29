import { motion } from 'motion/react';
import { Calendar, ArrowLeft, Clock, User, Tag, ArrowRight } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

import { blogPosts } from '../data/blogPosts';

export function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-blue-50">
        <Header />
        <div className="container mx-auto px-6 py-20 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
          <Link to="/blog" className="text-blue-600 hover:text-blue-700 inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <Header />
      
      {/* Article Header */}
      <section className="pt-32 pb-16 bg-[#0a84ff] text-white">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-white/90 hover:text-white mb-8 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium">Back to Blog</span>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap items-center gap-4 text-sm mb-6">
              <span className="px-4 py-1.5 bg-white/20 backdrop-blur-sm rounded-full">
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <User className="w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <p className="text-sm opacity-80">Creative Director & Designer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image + Content with Sidebar */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_280px] gap-10 items-start">
            {/* Main Content Column */}
            <div className="min-w-0 overflow-hidden">
              {/* Featured Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="rounded-lg overflow-hidden shadow-xl mb-12"
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full aspect-[16/9] object-cover"
                  onError={(e) => {
                    const img = e.target as HTMLImageElement;
                    img.style.display = 'none';
                  }}
                />
              </motion.div>

              {/* Article Content */}
              <article>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="prose prose-lg max-w-none"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
                
                {/* Tags */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <div className="flex items-center gap-2 flex-wrap">
                    <Tag className="w-5 h-5 text-gray-500" />
                    <span className="text-gray-700 font-medium">Tags:</span>
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-md text-sm font-medium">
                      {post.category}
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                      Design
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md text-sm font-medium">
                      Technology
                    </span>
                  </div>
                </div>
              </article>
            </div>

            {/* Sidebar - Other Blogs (20% smaller) */}
            <div className="lg:col-span-1 min-w-0">
              <aside className="sticky top-32">
                <h2 className="text-lg font-bold text-gray-900 mb-4 break-words">Other Blogs</h2>
                <div className="space-y-4">
                  {blogPosts.filter(p => p.slug !== slug).slice(0, 5).map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.slug}`}
                      className="group block"
                    >
                      <motion.div
                        whileHover={{ y: -3 }}
                        className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-lg transition-all"
                      >
                        <div className="aspect-[16/9] overflow-hidden bg-gray-200">
                          <img
                            src={relatedPost.image}
                            alt={relatedPost.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="p-3">
                          <h3 className="text-sm font-bold text-gray-900 mb-1 line-clamp-2 break-words text-wrap group-hover:text-blue-600 transition-colors">
                            {relatedPost.title}
                          </h3>
                          <p className="text-xs text-gray-600 mb-1.5 line-clamp-2 break-words text-wrap">
                            {relatedPost.excerpt}
                          </p>
                          <div className="flex items-center gap-1.5 text-[11px] text-gray-500">
                            <Calendar className="w-2.5 h-2.5" />
                            {relatedPost.date}
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
                <div className="mt-5">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-1.5 text-blue-600 text-sm font-medium hover:text-blue-700"
                  >
                    View All Blogs
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
