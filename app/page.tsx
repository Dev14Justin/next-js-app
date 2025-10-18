import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1 className=" text-center">Welcome to the Home Page</h1>
      <Image
        src="/globe.svg"
        alt="Example Image"
        width={600}
        height={400}
      />
    </div>
    
  );
}
  