import { getHomePage } from "@/data/loaders"
import { notFound } from "next/navigation";


async function loader() {
 const data = await getHomePage();
   if (!data) notFound();
  //  console.log(data)
   return {...data.data}
}



export default async function HomeRoute() {
  const data = await loader()
  // console.log(data);


 return <div>
  <h1>{data.Title}</h1>
  <h3>{data.Description}</h3>
 </div>
}