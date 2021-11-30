import ImageGallery from 'react-image-gallery';
import "~react-image-gallery/styles/css/image-gallery.css";
import ArrayImg from "../components/ArrayImg";

const ButtonStyle = {
  borderRadius: "10px", 
  border: "solid 2px #b7094c", 
  background: "#b7094c", 
  padding: "7px 20px", 
  marginRight: "7px", 
  color:"white"
}


const MyGallery = (props) => {
  const src = props.image.find((picture) => ArrayImg.includes(picture));

  return (
    <ImageGallery 
      items={
        {props.image.map((picture) => (
          original: 'https://picsum.photos/id/1015/1000/600/',
          thumbnail: 'https://picsum.photos/id/1015/250/150/',
        )
        )}
       } />       
  );
};
export default MyGallery;
