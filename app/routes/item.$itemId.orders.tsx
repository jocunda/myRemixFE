import { useState } from "react";

const orders = [
  {
    id: 1,
    name: 'item1',
    color: "gray",
    progressWidth: 45
  },
  {
    id: 2,
    name: 'item2',
    color: "red",
    progressWidth: 45
  },
  {
    id: 3,
    name: 'item3',
    color: "orange",
    progressWidth: 45
  },
  {
    id: 4,
    name: 'item4',
    color: "amber",
    progressWidth: 45
  },
  {
    id: 5,
    name: 'item5',
    color: "yellow",
    progressWidth: 45
  },
  {
    id: 6,
    name: 'item6',
    color: "lime",
    progressWidth: 45
  },
  {
    id: 7,
    name: 'item7',
    color: "green",
    progressWidth: 45
  },
  {
    id: 8,
    name: 'item8',
    color: "emerald",
    progressWidth: 45
  },
  {
    id: 9,
    name: 'item9',
    color: "emerald",
    progressWidth: 80
  },
  {
    id: 10,
    name: 'item10',
    color: "teal",
    progressWidth: 27
  },
  {
    id: 11,
    name: 'item11',
    color: "cyan",
    progressWidth: 45
  },
  {
    id: 12,
    name: 'item12',
    color: "sky",
    progressWidth: 80
  },
  {
    id: 13,
    name: 'item13',
    color: "blue",
    progressWidth: 45
  },
  {
    id: 14,
    name: 'item14',
    color: "indigo",
    progressWidth: 79
  },
  {
    id: 15,
    name: 'item15',
    color: "violet",
    progressWidth: 45
  },
  {
    id: 16,
    name: 'item16',
    color: "purple",
    progressWidth: 45
  },
  {
    id: 17,
    name: 'item17',
    color: "fuchsia",
    progressWidth: 35
  },
  {
    id: 18,
    name: 'item18',
    color: "pink",
    progressWidth: 67
  },
  {
    id: 19,
    name: 'item19',
    color: "rose",
    progressWidth: 80
  },

]


export default function ItemOrder() {

  const [progressWidth, setProgressWidth] = useState(45);

  return <>
    <div >
      {orders.map((order) => <>
        <div className={`mb-1 text-base font-medium text-${order.color}-700 dark:text-${order.color}-500`} style={{ marginTop: '10px' }}>
          {order.name} - {order.progressWidth}%
        </div>
        <div className=" w-full bg-gray-200 rounded-full h-2.5 mb-12 dark:bg-gray-700" >
          <div className={`bg-${order.color}-600 h-2.5 rounded-full dark:bg-${order.color}-500`} style={{ width: `${order.progressWidth}%` }}></div>
          <div className="mt-1 mb-10 flex items-center">
            <p></p>
            <span className="mr-2 inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
              Start: 30 February 2022
            </span>
            <div className="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
            <span className="ml-2 inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
              Due: 21 March 2022
            </span>
          </div>
        </div>
      </>)}
    </div>

    {/* <ol class="items-center sm:flex">
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
      </li>
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
      </li>
      <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
          <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
            <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
            </svg>
          </div>
          <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
          <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
      </li>
    </ol> */}
  </>
}