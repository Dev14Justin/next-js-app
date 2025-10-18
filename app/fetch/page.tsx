// app/page.tsx
export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await res.json();

  return <h2 className="bg-blue-200 text-center mt-70">{data.title}</h2>;
}
