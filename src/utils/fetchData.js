export const exerciseOptions = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': '093e71f173msh2f789a72af8784cp11bdeejsn41942f18496c',
          'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
        }
 };
export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '093e71f173msh2f789a72af8784cp11bdeejsn41942f18496c',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options)=>{
    const response = await fetch(url, options)
    const data = await response.json();

    return data;
}