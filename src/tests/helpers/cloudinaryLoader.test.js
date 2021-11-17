import { clouddinaryLoader } from "../../helpers/clouddinaryLoader";
import   cloudinary from 'cloudinary';


cloudinary.config({ 
    cloud_name: 'jengine', 
    api_key: '629273143839366', 
    api_secret: 'NHIqaI0710ttlaywnmXOGFgigyA' 
  });

describe('Este helper regresa una direcion url despues de hacer un fetch a cloudnary', () => {


    // test('debe retonar un string como url, despues de haber cargado una imagen a claoudinary & descargar dicho url', async () => {
    //     //cargar imagen externa o local
    //     const imgFile= await fetch('https://kinsta.com/wp-content/uploads/2017/04/PNG-size.png');
    //     //hacer el respectivo blob de la imagen

    //     const blob= await imgFile.blob();
    //     const file=new File([blob], 'foto.png');
    //     //llamar el metodo loader
    //     const url= await clouddinaryLoader(file);

    //     expect(typeof url).toBe('string');

    //     //delete img de prueba de cludinary
    //     // const segments=url.split('/');
    //     // const imgId=segments[segments.length-1].replace('.png', '');

    //     // cloudinary.v2.api.delete_resources(imgId, {}, ()=>{
    //     //     done();
    //     // });



    // });

    test('retornara null si la url no se carga de cloudinary',  async() => {

      
        const file=new File([], 'foto.png');
        //llamar el metodo loader
        const url= await clouddinaryLoader(file);

        expect(url).toBe(null);
        
    })
    


    
    
});
