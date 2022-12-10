export default async function HelloPage() {
  const req = await fetch('http://localhost:3000/api/hello');
  const data = await req.json();

  return <p>{data.name}</p>;
}
