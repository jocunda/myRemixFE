import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";
import type { LoaderFunctionArgs } from "@remix-run/node";
import type { FunctionComponent } from "react";

import invariant from "tiny-invariant";

import { getItem } from "../data";

export const loader = async ({
  params,
}: LoaderFunctionArgs) => {
  invariant(params.itemId, "Missing itemId param");
  const item = await getItem(params.itemId);
  if (!item) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ item });
};

export default function Item() {
  const { item } = useLoaderData<typeof loader>();

  return (
    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
      <h1>ItemId{item.id}</h1>
    </div>
  );

};