import { footerNavItems } from "@/components/CMS";

var today = new Date();

export default function Footer() {
  return (
    <footer className="bg-neutral-950" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:py-8 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-8"
              src="/images/logo-with-text.png"
              alt="映火"
            />
            <p className="text-neutral-400 text-base">
              探索影像的无限可能。
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-300">解决方案</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavItems.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-neutral-400 hover:text-neutral-500">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-semibold text-neutral-300">支持</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavItems.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-neutral-400 hover:text-neutral-500 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-300">公司</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavItems.company.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-neutral-400 hover:text-neutral-500 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-lg font-semibold text-neutral-300">合法</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavItems.legal.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-neutral-400 hover:text-neutral-500 transition-colors">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-neutral-800 pt-8">
          <p className="text-base text-neutral-400 xl:text-center">&copy; {today.getFullYear()} 北京映火文化传媒有限公司 版权所有</p>
        </div>
      </div>
    </footer>
  )
}