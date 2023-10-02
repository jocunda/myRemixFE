import { Form } from "@remix-run/react";
import type { FunctionComponent } from "react";

import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";

import { getItems } from "../data";

export const loader = async ({
}: LoaderFunctionArgs) => {
  const items = await getItems();
  if (!items) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ items });
};

export default function Items() {

  const { items } = useLoaderData<typeof loader>();

  return (
    <div className="bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-2xl font-bold text-gray-900">Items</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {items.map((item) => (
              <div key={item.name} className="group relative">
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-sm text-gray-500">
                  <a href={`item/${item.id}`}>
                    <span className="absolute inset-0" />
                    {item.name}
                  </a>
                </h3>
                <p className="text-base font-semibold text-gray-900">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

};