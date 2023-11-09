

const verificaiMG = async (img ) => {
    try {
      const response = await axios.get(img);
      return response.data;
    } catch (error) {
      const imgDefault="https://i.pinimg.com/originals/f5/d3/37/f5d337e299f9fdd4c599a7cae655171a.png"
      return imgDefault;
    }
  };

  export default verificaiMG;