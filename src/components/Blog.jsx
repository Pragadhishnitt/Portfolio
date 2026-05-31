import React from 'react';
import { useInView } from 'react-intersection-observer';
import { PenTool, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { blogPosts } from '../data/portfolio';

const Blog = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const hasBlogs = blogPosts && blogPosts.length > 0;

    return (
        <section id="blog" ref={ref} className="py-24 px-6 relative">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className={`mb-16 ${inView ? 'animate-slide-up' : 'opacity-0'}`}>
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                        Thoughts & Insights<span className="text-accent">.</span>
                    </h2>
                    <p className="text-lg text-primary-muted max-w-2xl leading-relaxed">
                        Sharing learnings, explorations, and perspectives on technology.
                    </p>
                </div>

                {hasBlogs ? (
                    /* Blog Posts Grid */
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {blogPosts.map((post, index) => (
                            <a
                                key={post.id}
                                href={post.link}
                                className={`group glass rounded-2xl p-6 hover:border-primary/20 transition-all duration-500 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="flex items-center gap-2 text-xs text-primary-muted mb-3">
                                    <Clock size={14} />
                                    <span>{post.readTime}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>

                                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                                    {post.title}
                                </h3>

                                <p className="text-primary-muted text-sm line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-4">
                                    {post.tags.map((tag, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 rounded-md text-xs bg-surface text-primary-muted border border-border"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex items-center gap-2 text-accent text-sm font-medium group-hover:gap-3 transition-all">
                                    Read More
                                    <ArrowRight size={16} />
                                </div>
                            </a>
                        ))}
                    </div>
                ) : (
                    /* External Blog Redirect */
                    <div className={`${inView ? 'animate-slide-up' : 'opacity-0'}`} style={{ animationDelay: '100ms' }}>
                        <div className="glass rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
                            {/* Background decoration */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-5">
                                <PenTool size={300} strokeWidth={0.5} />
                            </div>

                            {/* Subtle gradient accent */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 rounded-full"
                                style={{ background: 'linear-gradient(90deg, transparent, rgb(var(--color-accent)), transparent)' }} />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                                    <Sparkles size={16} />
                                    Engineering Blog
                                </div>

                                <h3 className="text-2xl md:text-3xl font-heading font-bold text-primary mb-4">
                                    Thoughts & Deep Dives
                                </h3>

                                <p className="text-primary-muted max-w-lg mx-auto text-lg leading-relaxed mb-8">
                                    Writing about AI/ML engineering, system architecture, and building production-grade
                                    intelligent systems — on my dedicated blog.
                                </p>

                                <div className="flex flex-wrap justify-center gap-3 mb-10">
                                    {['Agentic AI', 'Deep Learning', 'System Design', 'DevOps', 'Security'].map((topic, i) => (
                                        <span
                                            key={i}
                                            className="px-4 py-2 rounded-full text-sm bg-surface text-primary-muted border border-border"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>

                                <a
                                    href="https://pragadhish-blogs.vercel.app"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                                    style={{
                                        background: 'rgb(var(--color-primary))',
                                        color: 'rgb(var(--color-background))',
                                    }}
                                >
                                    <PenTool size={18} />
                                    Visit My Blog
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Blog;
