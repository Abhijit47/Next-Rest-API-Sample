async function getShip(id) {
  try {
    const res = await fetch(
      `https://next-rest-api-sample.vercel.app/api/ships/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) {
      console.log(res.status);
      return "failed to fetch data";
    }

    return res.json();
  } catch (err) {
    return "Something went wrong in server";
  }
}

import Link from "next/link";
import Image from "next/image";

export default async function ShipPage({ params }) {
  const { data, success, message } = await getShip(params.id);

  return (
    <section>
      <div className="relative overflow-hidden rounded-md bg-white py-16">
        <div className="hidden lg:absolute lg:inset-y-0 lg:block lg:h-full lg:w-full">
          <div
            className="relative mx-auto h-full max-w-prose text-lg"
            aria-hidden="true"
          >
            <svg
              className="absolute left-full top-12 translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)"
              />
            </svg>
            <svg
              className="absolute right-full top-1/2 -translate-x-32 -translate-y-1/2 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
              />
            </svg>
            <svg
              className="absolute bottom-12 left-full translate-x-32 transform"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect
                    x={0}
                    y={0}
                    width={4}
                    height={4}
                    className="text-gray-200"
                    fill="currentColor"
                  />
                </pattern>
              </defs>
              <rect
                width={404}
                height={384}
                fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)"
              />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-prose text-lg">
            <h1>
              <span className="block text-center text-base font-semibold uppercase tracking-wide text-indigo-600">
                {data?._id}
              </span>
              <span className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                {data?.feature_type}
              </span>
            </h1>
            <p className="mt-8 text-xl leading-8 text-gray-500">
              Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
              At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at
              vitae feugiat egestas ac. Diam nulla orci at in viverra
              scelerisque eget. Eleifend egestas fringilla sapien.
            </p>
          </div>
          <div className="prose prose-lg prose-indigo mx-auto mt-6 text-gray-500">
            <p>
              Faucibus commodo massa rhoncus, volutpat.{" "}
              <strong>Dignissim</strong> sed <strong>eget risus enim</strong>.
              Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit. Faucibus commodo massa rhoncus, volutpat.
              Dignissim sed eget risus enim.{" "}
              <Link href="#">Mattis mauris semper</Link> sed amet vitae sed
              turpis id.
            </p>
            <ul>
              <li>Quis elit egestas venenatis mattis dignissim.</li>
              <li>
                Cras cras lobortis vitae vivamus ultricies facilisis tempus.
              </li>
              <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
            </ul>
            <p>
              Quis semper vulputate aliquam venenatis egestas sagittis quisque
              orci. Donec commodo sit viverra aliquam porttitor ultrices gravida
              eu. Tincidunt leo, elementum mattis elementum ut nisl, justo,
              amet, mattis. Nunc purus, diam commodo tincidunt turpis. Amet,
              duis sed elit interdum dignissim.
            </p>
            <h2>From beginner to expert in 30 days</h2>
            <p>
              Id orci tellus laoreet id ac. Dolor, aenean leo, ac etiam
              consequat in. Convallis arcu ipsum urna nibh. Pharetra, euismod
              vitae interdum mauris enim, consequat vulputate nibh. Maecenas
              pellentesque id sed tellus mauris, ultrices mauris. Tincidunt enim
              cursus ridiculus mi. Pellentesque nam sed nullam sed diam turpis
              ipsum eu a sed convallis diam.
            </p>
            <blockquote>
              <p>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
                Dictum urna sed consectetur neque tristique pellentesque.
                Blandit amet, sed aenean erat arcu morbi.
              </p>
            </blockquote>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
            <figure>
              <Image
                className="h-full w-full rounded-lg"
                src="https://images.unsplash.com/photo-1439209306665-700c9bca794c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
                width={2070}
                height={1180}
                priority={false}
                placeholder="blur"
                blurDataURL="|$L3*#R+n%bHWBj[WCoeay~Ta}aea}jsj[jZj[ayIWazj@ayoej[azazfQIWRkoeayayfQWVj[j@s.afayaza|ayj[j[ayt6jabGayoeazjtayazkBR+oeayj[j[WVazj[WCj@a}j@ayayj@j[j@WCoeWCj[fjayj[a|ay"
              />
              <figcaption>
                Sagittis scelerisque nulla cursus in enim consectetur quam.
              </figcaption>
            </figure>
            <h2>Everything you need to get up and running</h2>
            <p>
              Purus morbi dignissim senectus mattis{" "}
              <Link href="#">adipiscing</Link>. Amet, massa quam varius orci
              dapibus volutpat cras. In amet eu ridiculus leo sodales cursus
              tristique. Tincidunt sed tempus ut viverra ridiculus non molestie.
              Gravida quis fringilla amet eget dui tempor dignissim. Facilisis
              auctor venenatis varius nunc, congue erat ac. Cras fermentum
              convallis quam.
            </p>
            <p>
              Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
              enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
              praesent donec est. Odio penatibus risus viverra tellus varius sit
              neque erat velit.
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center py-6">
        <Link
          href={"/ships"}
          className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-normal text-white"
        >
          Go Back
        </Link>
      </div>
    </section>
  );
}
