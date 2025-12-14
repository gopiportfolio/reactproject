"use client"

const PageBanner = ({ title, subtitle }) => {
  return (
    <section className="page-banner">
      <div className="banner-content">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
      </div>

      {/* Banner Styles */}
      <style>{`
        .page-banner {
          width: 100%;
           background: linear-gradient(135deg, rgb(58 129 225), rgb(182 214 255));
          padding: 60px 20px;
          text-align: center;
        }

        .banner-content h1 {
          color: #ffffff;
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .banner-content p {
          color: #e9f2ff;
          font-size: 1rem;
          font-weight: 400;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .page-banner {
            padding: 40px 15px;
          }

          .banner-content h1 {
            font-size: 2rem;
          }

          .banner-content p {
            font-size: 0.95rem;
          }
        }

        @media (max-width: 480px) {
          .banner-content h1 {
            font-size: 1.6rem;
          }

          .banner-content p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  )
}

export default PageBanner
