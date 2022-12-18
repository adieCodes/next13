export default async function HelloPage() {
  // Force an error
  // const req = await fetch('http://https://httpstat.us/500');
  const req = await fetch('http://localhost:3000/api/hello');
  const data = await req.json();

  // proc the loading state
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <p>{data.name}</p>;
}
