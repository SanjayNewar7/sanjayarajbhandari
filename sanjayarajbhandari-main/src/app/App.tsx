import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

const CategoryPage = lazy(() => import('./pages/CategoryPage').then((module) => ({ default: module.CategoryPage })));
const GalleryPage = lazy(() => import('./pages/GalleryPage').then((module) => ({ default: module.GalleryPage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then((module) => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then((module) => ({ default: module.BlogPostPage })));
const EventsPage = lazy(() => import('./pages/EventsPage').then((module) => ({ default: module.EventsPage })));
const EventDetailPage = lazy(() => import('./pages/EventDetailPage').then((module) => ({ default: module.EventDetailPage })));

export default function App() {
  return (
    <Router>
      <Suspense fallback={<div className="min-h-screen bg-white dark:bg-[#0a0a0a]" />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:slug" element={<EventDetailPage />} />
      </Routes>
      </Suspense>
    </Router>
  );
}
