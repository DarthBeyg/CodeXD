
//data fetching serverside
//api data fetch (promises) 
//async await
//server components (fetching data from serverside)
 
const getQuote = async () => {
  //api calling
  const res = await fetch("https://catfact.ninja/fact",{
    cache: "no-store",
  });
  
  const data = await res.json();
  console.log(data);
  return data.content;
  
}
export default async function Home() {
  const quote = await getQuote();
  console.log(quote);
  return (
    <div className="bg-slate-300 text-3xl font-bold font-serif text-red-600 items-center justify-center">
      Welcome to My Blog Website
      <h1>{quote}</h1>
    </div>
    
  );
}
