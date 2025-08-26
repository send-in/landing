// #region Imports
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
// #endregion

const related = [
  {
    title: "Chrome Extension: Schedule LinkedIn Posts Easily",
    author: "Phantom Team",
    date: "March 4, 2025",
    href: "/blog/chrome-extension",
    color: "bg-blue-100",
  },
  {
    title: "Message Templates: Save Time On Outreach",
    author: "John Mears",
    date: "January 18, 2025",
    href: "/blog/message-templates",
    color: "bg-orange",
  },
  {
    title: "Timezone Intelligence: Reach Prospects Globally",
    author: "Carolina Azevedo",
    date: "February 10, 2025",
    href: "/blog/timezone-intelligence",
    color: "bg-charcoal-100",
  },
];

export default function BlogTemplate() {
  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <div className="w-full xlarge:p-8 p-4">
        <section className="py-8 small:py-12 text-center px-6 bg-bluewash w-full items-center flex flex-col rounded-3xl">
          <Navbar />
          <h1
            className="
                text-4xl font-normal w-[35%]
                small:w-full xlarge:text-6xl
                xlarge:w-[40%] tracking-tighter 
                text-charcoal-100 leading-8 mt-24
                small:mt-12
            "
          >
            Bulk Schedule LinkedIn Messages With Ease
          </h1>
          <p
            className="
                font-normal tracking-tight leading-5
                text-md xlarge:text-xl text-charcoal-100 w-[30%] my-10
                small:w-[80%] xlarge:w-[30%] 
            "
          >
            Plan weeks of outreach in minutes. Our bulk scheduling tool helps
            you stay consistent, scale your efforts, and focus on closing deals.
          </p>
        </section>
      </div>

      <main className="flex py-16 px-6 w-full small:px-0">
        <div className="mx-auto w-[60%] small:w-[80%] flex small:flex-col gap-12 justify-between relative">
          {/* Blog Content */}
          <article className="flex flex-col gap-6 max-w-3xl">
            <div className="w-full h-[40vh] rounded-xl bg-blue-100" />
            <h2 className="text-2xl font-medium text-charcoal-100">
              Why Bulk Scheduling Matters
            </h2>
            <p className="text-grey-300 leading-7">
              Consistency is key when it comes to outreach. With bulk
              scheduling, you can plan and automate weeks of LinkedIn messages
              at once, ensuring you never miss an opportunity to engage with
              leads. Instead of manually sending messages every day, let the
              system work for you while you focus on high-value conversations.
            </p>

            <h2 className="text-2xl font-medium text-charcoal-100">
              How It Works
            </h2>
            <p className="text-grey-300 leading-7">
              Simply upload your message list, select your target audience, and
              choose the times you’d like your messages delivered. Our algorithm
              handles time zones, message spacing, and delivery optimization to
              maximize engagement without spamming prospects.
            </p>

            <h2 className="text-2xl font-medium text-charcoal-100">
              Benefits of Bulk Scheduling
            </h2>
            <ul className="list-disc pl-5 text-grey-300 leading-7">
              <li>Save hours every week by automating repetitive tasks</li>
              <li>Ensure consistent communication with prospects</li>
              <li>Reach multiple time zones without staying up late</li>
              <li>
                Improve productivity by focusing on conversations that convert
              </li>
            </ul>

            <div className="mt-12 p-6 bg-bluewash rounded-xl border border-grey-100">
              <h3 className="text-xl font-medium text-blue-200 mb-2">
                💡 Final Takeaway
              </h3>
              <p className="text-grey-300">
                Bulk scheduling helps you scale your LinkedIn presence without
                the burnout. Start batching your posts today and watch your
                productivity—and consistency—improve.
              </p>
            </div>

            <p className="text-sm text-grey-200 mt-6">
              Phantom Team | March 4, 2025
            </p>
          </article>

          <div className="w-[30%] small:w-full min-h-[20vh] relative">
            {/* Related Posts Sidebar */}
            <aside className="shrink-0 sticky top-10">
              <h3 className="text-2xl font-medium text-charcoal-100 mb-4">
                Related Posts
              </h3>
              <div className="flex flex-col gap-8">
                {related.map((post, idx) => (
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
        </div>
      </main>

      <Footer fixed={false} />
    </div>
  );
}
