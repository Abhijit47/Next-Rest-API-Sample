// async function getShip(id) {
//   try {
//     const res  =await fetch('input')
//     return "Fetching ship data successfully"
//   } catch (err) {
//     return "Something went wrong in server"
//   }
// }

import Link from "next/link";

export default function ShipPage({ params }) {
  return (
    <section>
      ShipPage{params.id}
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
