import File from "../models/file.js";
// if .js is not added then the app crash error may come


export const uploadImage=async(request,response)=>{
    const fileObj = {
        path: request.file.path,
        name: request.file.originalname
    }

    try {
        // this is made to make creation of collection dataset and to make it download backable
        const file = await File.create(fileObj);
        console.log(file);
        response.status(200).json({path: `${process.env.PORT}/file/${file._id}`})
    } catch (error) {
        console.error(error.message);
        return response.status(500).json({error:error.message});
    }
}

export const downloadImage =async(request,response)=>{
    try{
       const file= await File.findById(request.params.fileId);
       file.downloadContent++;
       await file.save();//to save the download count to the database
       response.download(file.path,file.name)// here it is to make a download of that file
    }catch(error){
        console.error(error.message);
        return response.status(500).json({error:error.message});
    }
}