import {
  GisLocationPoi,
  HeroiconsOutlineMailOpen,
  HeroiconsOutlinePhotograph,
} from "@/assets/icons";

import Link from "next/link";
import Image from "next/image";

async function getShips() {
  try {
    const res = await fetch(
      "https://next-rest-api-sample.vercel.app/api/ships",
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-cache",
      },
    );

    if (!res.ok) {
      console.log(res.status);
      return alert("Failed to fetch Ships data");
    }

    return res.json();
  } catch (err) {
    console.log(err);
    return alert("Something went wrong in server");
  }
}

export default async function ShipsPage() {
  const { status, message, data } = await getShips();
  console.log(message);
  return (
    <section className="mt-12">
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data?.map((ship) => (
          <li
            key={ship?._id}
            className="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow"
          >
            <div className="flex w-full items-center justify-between space-x-6 p-6">
              <div className="flex-1 truncate">
                <div className="flex items-center space-x-3">
                  <h3 className="truncate text-sm font-medium text-gray-900">
                    {ship?.feature_type}
                  </h3>
                  <span className="inline-block flex-shrink-0 rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium text-green-800">
                    {ship?.depth} mtr
                  </span>
                </div>
                <p className="mt-1 truncate text-xs capitalize text-gray-500">
                  {ship?.watlev}
                </p>
                <div className="flex items-center gap-x-2">
                  <span className="mt-1 truncate text-xs capitalize text-gray-500">
                    Lat-&nbsp;({ship?.latdec})
                  </span>
                  <span className="mt-1 truncate text-xs capitalize text-gray-500">
                    Lon-&nbsp;({ship?.londec})
                  </span>
                </div>
              </div>
              <Image
                className="h-10 w-10 flex-shrink-0 rounded-full bg-gray-300"
                src="https://images.unsplash.com/photo-1561554250-0086e85c2042?q=80&w=256&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={256}
                height={256}
                priority
              />
            </div>
            <div>
              <div className="-mt-px flex divide-x divide-gray-200">
                <div className="flex w-0 flex-1">
                  <Link
                    href={"#"}
                    className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center rounded-bl-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    <HeroiconsOutlineMailOpen
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Email</span>
                  </Link>
                </div>
                <div className="-ml-px flex w-0 flex-1">
                  <Link
                    href={`/ships/${ship?._id}`}
                    className="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500"
                  >
                    <GisLocationPoi
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-3">Location</span>
                  </Link>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-center py-6">
        <Link
          href={"/"}
          className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-normal text-white"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
}
