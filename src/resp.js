import axios from 'axios';

const req = async () => {
  try {
    const reg = await axios.post('https://conduit.productionready.io/api/users', {
      user: {
        username: 'Sivand209',
        email: 'whtrx91358@gmail.com',
        password: 'jakejake',
      },
    });
    console.log(reg);
    const auth = await axios.post('https://conduit.productionready.io/api/users/login', {
      user: {
        email: 'whtrx91358@gmail.com',
        password: 'jakejake',
      },
    });
    console.log(auth);
  } catch (e) {
    console.log('Error', e.header);
  }
};

req();
