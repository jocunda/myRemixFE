import { Form } from "@remix-run/react";
import type { FunctionComponent } from "react";

import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";

import { getItems } from "../data";
import ItemList from "~/components/ItemList";

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
          <ItemList data={items} />
        </div>
      </div>
    </div>
  );

};