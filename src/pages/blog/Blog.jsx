import React from 'react'
import HeadingSection from '../../components/HeadingSection'


const Blog = () => {
  const blogs = [
    {
      id: 1,
      image: "/images/blogs/blog1.png",
      category: "Technology",
      title: "How AI is Shaping the Future of Web Development",
      description:
        "Discover how artificial intelligence is transforming the way we build and design websites.",
      authorImage: "/images/authors/author1.png",
      authorName: "John Doe",
      authorRole: "Tech Blogger",
    },
    {
      id: 2,
      image: "/images/blogs/blog2.png",
      category: "Design",
      title: "10 Tips for Creating Stunning UI/UX Designs",
      description:
        "Learn the secrets to designing user interfaces that captivate and convert users.",
      authorImage: "/images/authors/author2.png",
      authorName: "Jane Smith",
      authorRole: "UX Designer",
    },
    {
      id: 3,
      image: "/images/blogs/blog3.png",
      category: "Development",
      title: "Understanding JavaScript Closures in Depth",
      description:
        "A comprehensive guide to one of the most powerful concepts in JavaScript.",
      authorImage: "/images/authors/author3.png",
      authorName: "Mark Johnson",
      authorRole: "Frontend Developer",
    },
    {
      id: 4,
      image: "/images/blogs/blog4.png",
      category: "Business",
      title: "Why Digital Transformation is Essential for Success",
      description:
        "Explore how businesses can thrive by adopting digital transformation strategies.",
      authorImage: "/images/authors/author4.png",
      authorName: "Emily Carter",
      authorRole: "Business Analyst",
    },
  ]

  return (
    <section className='container-section'>
      <div>
        <HeadingSection subHeading="Our Blogs" heading="Latest Articles and Insights" />
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mx-auto mb-16'>
        {
          blogs.map((blog, index) => (
            <div key={index} className="card bg-base-100  shadow hover:shadow-lg transition-shadow duration-300">
              <figure>
                <img
                  src={blog.image}
                  alt="Shoes" className='w-full h-48 object-cover hover:scale-105 transaction transform duration-200'/>
              </figure>
              <div className="card-body">
                <h5 className='text-sm text-blue-800 font-bold'>{blog.category }</h5>
                <h2 className="card-title text-blod size-18">{blog.title}</h2>
                <p>{blog.description }</p>
                <div className="card-actions justify-start mt-4">
                  <div className='flex items-center gap-2'>
                    <img src={blog.authorImage} alt={blog.authorName} className='w-8 h-8 rounded-full' />
                    <div>
                      <p className='text-sm font-semibold'>{blog.authorName}</p>
                      <p className='text-xs text-gray-500'>{blog.authorRole}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Blog