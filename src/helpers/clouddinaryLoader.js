export const clouddinaryLoader= async (file)=>{

    const cloudUrl='https://api.cloudinary.com/v1_1/jengine/image/upload';

        const formData= new FormData();

        formData.append('upload_preset', 'journal-app');
        formData.append('file', file);

        try {

            const respuesta= await fetch(cloudUrl, { 
                method:'POST',
                body: formData
            });

            if(respuesta.ok){
                const respCloud= await respuesta.json();
                return respCloud.secure_url;
            }else{
                //throw respuesta.json();
                return null;

            }
            
        } catch (error) {
            console.log(error);
            
        }
}