import Link from "next/link";

const concept = [
     {name: "What is MongoDB?", path:"/concepts/WhatIsMongoDB"},
     {name: "Difference between SQL and NoSQL?", path:"/concepts/SQLvsNoSQL"},
     {name: "What is a Document in MongoDB?", path:"/concepts/MongoDBDocument"},
     {name: "What is a Collection in MongoDB?", path:"/concepts/MongoDBCollection"},
     {name: "What is a BSON?", path:"/concepts/WhatIsBSON"},
     {name: "How to Insert Data in MongoDB (insertOne, insertMany)?", path:"/concepts/InsertDataMongoDB"},
     {name: "How to Read Data in MongoDB (find, findOne)?", path:"/concepts/ReadDataMongoDB"},
     {name: "How to Update Data in MongoDB (updateOne, updateMany)?", path:"/concepts/UpdateDataMongoDB"},
     {name: "How to Delete Data in MongoDB (deleteOne, deleteMany)?", path:"/concepts/DeleteDataMongoDB"},
     {name: "What is Embedded Data Model in MongoDB?", path:"/concepts/EmbeddedDataModelMongoDB"},
     {name: "What is Referenced Data Model in MongoDB?", path:"/concepts/ReferencedDataModelMongoDB"},
     {name: "When to Use Embedded vs Referenced Data Model in MongoDB?", path:"/concepts/EmbeddedVsReferencedMongoDB"},
     {name: "What is Indexing in MongoDB?", path:"/concepts/IndexingMongoDB"},
     {name: "Why Indexing Improves Performance in MongoDB?", path:"/concepts/WhyIndexingMongoDB"},
     {name: "Types of Indexes in MongoDB?", path:"/concepts/TypesOfIndexesMongoDB"},
     {name: "When NOT to Use Indexing in MongoDB?", path:"/concepts/NotToUseIndexing"},
     {name: "What is Aggregation Pipeline in MongoDB?", path:"/concepts/AggregationPipelineMongoDB"},
     {name: "$match Stage in MongoDB Aggregation Pipeline?", path:"/concepts/MatchStageMongoDB"},
     {name: "$group Stage in MongoDB Aggregation Pipeline?", path:"/concepts/GroupStageMongoDB"},
     {name: "$sort Stage in MongoDB Aggregation Pipeline?", path:"/concepts/SortStageMongoDB"},
     {name: "$project Stage in MongoDB Aggregation Pipeline?", path:"/concepts/ProjectStageMongoDB"},
     {name: "$lookup Stage (Join) in MongoDB?", path:"/concepts/LookupStageMongoDB"},
     {name: "What is Mongoose?", path:"/concepts/WhatIsMongoose"},
     {name: "Difference between Schema and Model in Mongoose?", path:"/concepts/SchemaVsModelMongoose"},
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