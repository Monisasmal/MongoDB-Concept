import Link from "next/link";

const concept = [
     {name: "What is MongoDB?", path:"/concepts/WhatIsMongoDB"},
     {name: "Difference between SQL and NoSQL?", path:"/concepts/SQLvsNoSQL"},
];

export default function Concepts(){
    
    return(
    
        <section>
         <h1 className="text-3xl font-bold m-8 text-blue-600">MongoDB Concepts</h1>
         <ul className="grid gap-4 sm:grid-cols-3 m-12">
        {concept.map(c => (
          <li key={c.name} className="bg-blue-50 p-4 rounded shadow">
            <Link href={c.path} className="font-semibold">
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
      </section>
      
    )
}