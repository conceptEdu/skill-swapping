const submitHandler = async (e) => {
  e.preventDefault();
  
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json', // यह बहुत ज़रूरी है!
      },
    };

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    );
    
    console.log("Registered Success:", data);
    // यहाँ डेटा को localStorage में सेव करें
  } catch (error) {
    console.error("Error:", error.response.data.message);
  }
};
