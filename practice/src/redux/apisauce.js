import {create} from 'apisauce';

const api = create({
  baseURL: 'https://picsum.photos/v2',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getVideosAsync = async () => {
  let response = {data: null, error: ''};

  await api
    .get('/list')
    .then(apiResponse => {
      if (apiResponse.ok) {
        response.data = apiResponse.data;
      } else {
        response.error = 'Unable to fetch new list.';
      }
    })
    .catch(error => {
      response.error = error;
    });

  return response;
};

//Calling colorpicker api
export const getColorAsync = async () => {
  let response = {data: null, error: ''};

  await api
    .get('https://5f16ad48a346a0001673929b.mockapi.io/api/mockdata/chemicals')
    .then(apiResponse => {
      if (apiResponse.ok) {
        response.data = apiResponse.data;
        console.log('response.data color-->', response.data);
      } else {
        response.error = 'Unable to fetch new Color list.';
      }
    })
    .catch(error => {
      response.error = error;
    });

  return response;
};
