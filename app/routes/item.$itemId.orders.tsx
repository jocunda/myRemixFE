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
        <div className={`mb-1 text-base font-medium text-${order.color}-700 dark:text-${order.color}-500`}>{order.name} - {order.progressWidth}%</div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
          <div className={`bg-${order.color}-600 h-2.5 rounded-full dark:bg-${order.color}-500`} style={{ width: `${order.progressWidth}%` }}></div>
        </div>
      </>)}
    </div>
  </>
}