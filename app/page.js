import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="grid min-h-screen place-items-center gap-y-4 xs:p-4 sm:p-6 md:p-12 lg:p-24">
      <h1 className="font-sans text-4xl font-extrabold text-white">
        Ship Wrecks
      </h1>
      <div>
        <Image
          src={
            "https://images.unsplash.com/photo-1439209306665-700c9bca794c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          }
          alt="ship-image"
          width={2070}
          height={1160}
          priority
          className="h-full w-full rounded-lg"
          placeholder="blur"
          blurDataURL="|$L3*#R+n%bHWBj[WCoeay~Ta}aea}jsj[jZj[ayIWazj@ayoej[azazfQIWRkoeayayfQWVj[j@s.afayaza|ayj[j[ayt6jabGayoeazjtayazkBR+oeayj[j[WVazj[WCj@a}j@ayayj@j[j@WCoeWCj[fjayj[a|ay"
        />
      </div>
      <div className="flex items-center justify-center py-6">
        <Link
          href={"/ships"}
          className="rounded-md bg-indigo-500 px-4 py-2 text-sm font-normal text-white"
        >
          See ships
        </Link>
      </div>
    </main>
  );
}
