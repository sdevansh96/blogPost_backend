
exports.createFunction=async (Model,body)=>{
const document=await Model.create(body)
return document;
}

exports.findOneHandler=async (Model,ket,data)=>{
const document=await Model.findOne({
    key:data
})
}

exports.getAllHandler=async(Model)=>{
const document=await Model.find();
return document;
}