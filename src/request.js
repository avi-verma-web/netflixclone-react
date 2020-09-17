const APIKEY = "d365cbaa063086ba0cc9597fa7562898";

const requests = {
    fetchtrending: `/trending/all/day?api_key=${APIKEY}`,
    fetchnetflixoriginals: `/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`,
    fetchnowplaying:`/movie/now_playing?api_key=${APIKEY}&language=en-US&page=1`,
    fetchpopular:`/movie/popular?api_key=${APIKEY}&language=en-US&page=1`,
    fetchupcoming:`/movie/upcoming?api_key=${APIKEY}&language=en-US&page=1`
}

export default requests;