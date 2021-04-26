export const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

export const loadImage = async (e) => {
  const file = e.target.files[0];
  const base64 = await convertBase64(file);
  return base64;
}


const convertBase64 = (file) => {

  try{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      return fileReader.result;
    };

  }catch(error){
  return error;
  }

}