import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className=" w-screen h-screen bg-black flex justify-center items-center text-white">
        <div className=" w-full max-w-[620px] mx-auto:">
          <h1 className=" text-6xl  mb-4">
            My Dairy: Reflect, Record, Remember
          </h1>
          <p className=" text-2xl text-white/65 mb-4">
            Capture your life&apos; moments with My Dairy! This intuitive,
            secure journal app lets you effortlessly record and cherish your
            daily thoughts. Start your journey today and turn your reflections
            into lasting memories!
          </p>
          <div>
            <Link href="/journal">
              <button className="bg-blue-600 px-4 py-2 rounded-lg text-xl">
                Start Writing
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
