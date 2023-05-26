/* This example requires Tailwind CSS v2.0+ */
export default function Example() {
  return (
    <div
      className="flex-none min-w-full px-4 sm:px-6 md:px-0 overflow-hidden lg:overflow-auto scrollbar:!w-1.5 scrollbar:!h-1.5 scrollbar:bg-transparent scrollbar-track:!bg-slate-100 scrollbar-thumb:!rounded scrollbar-thumb:!bg-slate-300 scrollbar-track:!rounded dark:scrollbar-track:!bg-slate-500/[0.16] dark:scrollbar-thumb:!bg-slate-500/50 max-h-96 lg:supports-scrollbars:pr-2 lg:max-h-96"
      bis_skin_checked="1"
    >
      <table className="w-full text-left border-collapse">
        <thead>
          <tr>
            <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
              <div
                className="py-2 pr-2 border-b border-slate-200 dark:border-slate-400/20"
                bis_skin_checked="1"
              >
                Class
              </div>
            </th>
            <th className="sticky z-10 top-0 text-sm leading-6 font-semibold text-slate-700 bg-white p-0 dark:bg-slate-900 dark:text-slate-300">
              <div
                className="py-2 pl-2 border-b border-slate-200 dark:border-slate-400/20"
                bis_skin_checked="1"
              >
                Properties
              </div>
            </th>
          </tr>
        </thead>
        <tbody className="align-baseline">
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400"
            >
              basis-0
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300"
            >
              flex-basis: 0px;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-1
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 0.25rem;
              <span className="text-indigo-400"> /* 4px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-2
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 0.5rem;
              <span className="text-indigo-400"> /* 8px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-3
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 0.75rem;
              <span className="text-indigo-400"> /* 12px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-4
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 1rem;
              <span className="text-indigo-400"> /* 16px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-5
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 1.25rem;
              <span className="text-indigo-400"> /* 20px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-6
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 1.5rem;
              <span className="text-indigo-400"> /* 24px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-7
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 1.75rem;
              <span className="text-indigo-400"> /* 28px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-8
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 2rem;
              <span className="text-indigo-400"> /* 32px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-9
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 2.25rem;
              <span className="text-indigo-400"> /* 36px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-10
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 2.5rem;
              <span className="text-indigo-400"> /* 40px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-11
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 2.75rem;
              <span className="text-indigo-400"> /* 44px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 3rem;
              <span className="text-indigo-400"> /* 48px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-14
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 3.5rem;
              <span className="text-indigo-400"> /* 56px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-16
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 4rem;
              <span className="text-indigo-400"> /* 64px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-20
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 5rem;
              <span className="text-indigo-400"> /* 80px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-24
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 6rem;
              <span className="text-indigo-400"> /* 96px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-28
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 7rem;
              <span className="text-indigo-400"> /* 112px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-32
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 8rem;
              <span className="text-indigo-400"> /* 128px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-36
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 9rem;
              <span className="text-indigo-400"> /* 144px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-40
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 10rem;
              <span className="text-indigo-400"> /* 160px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-44
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 11rem;
              <span className="text-indigo-400"> /* 176px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-48
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 12rem;
              <span className="text-indigo-400"> /* 192px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-52
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 13rem;
              <span className="text-indigo-400"> /* 208px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-56
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 14rem;
              <span className="text-indigo-400"> /* 224px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-60
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 15rem;
              <span className="text-indigo-400"> /* 240px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-64
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 16rem;
              <span className="text-indigo-400"> /* 256px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-72
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 18rem;
              <span className="text-indigo-400"> /* 288px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-80
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 20rem;
              <span className="text-indigo-400"> /* 320px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-96
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 24rem;
              <span className="text-indigo-400"> /* 384px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-auto
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: auto;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-px
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 1px;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-0.5
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 0.125rem;
              <span className="text-indigo-400"> /* 2px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-1.5
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 0.375rem;
              <span className="text-indigo-400"> /* 6px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-2.5
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 0.625rem;
              <span className="text-indigo-400"> /* 10px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-3.5
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 0.875rem;
              <span className="text-indigo-400"> /* 14px */</span>
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-1/2
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 50%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-1/3
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 33.333333%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-2/3
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 66.666667%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-1/4
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 25%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-2/4
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 50%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-3/4
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 75%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-1/5
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 20%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-2/5
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 40%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-3/5
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 60%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-4/5
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 80%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-1/6
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 16.666667%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-2/6
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 33.333333%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-3/6
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 50%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-4/6
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 66.666667%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-5/6
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 83.333333%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-1/12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 8.333333%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-2/12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 16.666667%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-3/12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 25%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-4/12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 33.333333%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-5/12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 41.666667%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-6/12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 50%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-7/12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 58.333333%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-8/12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 66.666667%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-9/12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 75%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-10/12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 83.333333%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-11/12
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 91.666667%;
            </td>
          </tr>
          <tr>
            <td
              translate="no"
              className="py-2 pr-2 font-mono font-medium text-xs leading-6 text-sky-500 whitespace-nowrap dark:text-sky-400 border-t border-slate-100 dark:border-slate-400/10"
            >
              basis-full
            </td>
            <td
              translate="no"
              className="py-2 pl-2 font-mono text-xs leading-6 text-indigo-600 whitespace-pre dark:text-indigo-300 border-t border-slate-100 dark:border-slate-400/10"
            >
              flex-basis: 100%;
            </td>
          </tr>
        </tbody>
      </table>
      <div
        className="sticky bottom-0 h-px -mt-px bg-slate-200 dark:bg-slate-400/20"
        bis_skin_checked="1"
      ></div>
    </div>
  );
}
