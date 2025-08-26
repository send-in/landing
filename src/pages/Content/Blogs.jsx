// #region Imports
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// #endregion

const featured = {
  title:
    "Top 3 LinkedIn Sales Navigator Alternatives & Competitors For Sales Prospecting",
  desc: "Here’s your guide to the best LinkedIn Sales Navigator alternatives for streamlining sales prospecting and lead generation...",
  href: "/blog/sales-navigator-alternatives",
  author: "Adina Timar",
  date: "June 24, 2025",
  color: "bg-blue-100",
};

const trending = [
  {
    title: "How to Track and Improve Sales Velocity",
    author: "Carolina Azevedo",
    date: "December 17, 2024",
    href: "/blog/sales-velocity",
    color: "bg-orange",
  },
  {
    title: "Lead Prospecting: Strategies And Tools For Scaling Outreach",
    author: "John Mears",
    date: "December 17, 2024",
    href: "/blog/lead-prospecting",
    color: "bg-charcoal-100",
  },
  {
    title: "Sales Process Optimization: 11 Strategies To Drive Efficiency",
    author: "Phantom Team",
    date: "December 17, 2024",
    href: "/blog/sales-process",
    color: "bg-blue-100",
  },
];

export default function BlogLanding() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center ">
      <div className="w-full xlarge:p-8 p-4">
        <section className="py-8 small:py-12 text-center px-6 bg-bluewash w-full items-center flex flex-col rounded-3xl">
          <Navbar />
          <h1
            className="
							text-4xl font-normal w-[40%]
							small:w-full xlarge:text-6xl
							xlarge:w-[40%] tracking-tighter 
							text-charcoal-100 leading-8 mt-24
							small:mt-12
						"
          >
            Approve and launch experiments within hours, not weeks.
          </h1>
          <p
            className="
							font-normal tracking-tight leading-5
							text-md xlarge:text-xl text-charcoal-100 w-[30%] my-10
							small:w-[80%] xlarge:w-[30%] 
						"
          >
            Schedule LinkedIn messages across time zones so you never have to
            wake up at odd hours and miss a lead again.
          </p>
        </section>
      </div>

      <main className="py-16 px-6 w-full small:px-0">
        <div className=" mx-auto w-[60%] small:w-[80%] flex small:flex-col justify-between gap-12">
          <a
            href={featured.href}
            className="md:col-span-2 flex flex-col gap-4 max-w-3xl"
          >
            <div className={`w-full h-[30vh] rounded-xl ${featured.color}`} />

            <h2 className="text-2xl font-medium text-charcoal-100">
              {featured.title}
            </h2>
            <p className="text-grey-300">{featured.desc}</p>
            <p className="text-sm text-grey-200">
              {featured.author} | {featured.date}
            </p>
          </a>

          <aside>
            <h3 className="text-2xl font-medium text-charcoal-100 mb-4">
              Trending
            </h3>
            <div className="flex flex-col gap-8">
              {trending.map((post, idx) => (
                <a
                  key={idx}
                  href={post.href}
                  className="flex gap-4 items-start"
                >
                  <div
                    className={`w-48 h-36 rounded-md shrink-0 ${post.color}`}
                  />
                  <div>
                    <h4 className="text-sm font-medium text-charcoal-100 line-clamp-2">
                      {post.title}
                    </h4>
                    <p className="text-xs text-grey-300 mt-1">
                      {post.author} | {post.date}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </main>

      <Footer fixed={false} />
    </div>
  );
}
