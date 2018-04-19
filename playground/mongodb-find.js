const {MongoClient,ObjectId}=require('mongodb');                                  
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
    return console.log('Unable To connect to MongoDb server');
}

console.log("Connected to MongoDb Server");

// db.collection('Todos').find().count().then((count)=>{
//     console.log('Todos count:',count);
//     //console.log(JSON.stringify(docs,undefined,2))
// },(err)=>{
//     console.log('Unable to fetch todos',err);
// });

// to fetch data by name..
db.collection('Users').find({name: 'uday'}).toArray().then((docs)=>{

    console.log(JSON.stringify(docs,undefined,2));
});
});