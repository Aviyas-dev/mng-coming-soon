import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fdfaf5] text-[#3A2D28] flex flex-col items-center justify-center text-center px-4">
      <div className="mb-6">
        <Image
          src="/10.jpg"
          alt="MNG Yoga"
          width={200}
          height={200}
          className="rounded-full object-cover shadow-lg"
        />
      </div>
      <h1 className="text-4xl md:text-6xl font-bold mb-6">🧘‍♀️ MNG Yoga</h1>
      <p className="text-xl md:text-2xl mb-2">05.11-нд нээлтээ хийнэ!</p>
      <p className="text-md text-gray-500">Тун удахгүй уулзацгаая ✨</p>
    </main>
  );
}

