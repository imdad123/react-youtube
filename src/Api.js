module.exports = {
  VidoeCallApi: (query, maxResult) => {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=${maxResult}&key=AIzaSyAUH8MUT46r4uGCwR32D0jbfnl6EExE91s`
    ).then((Res) => Res.json());
  },
  relatedVideoAPI: (id, maxResult) => {
    return fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=${id}&type=video&maxResults=${maxResult}&key=AIzaSyAUH8MUT46r4uGCwR32D0jbfnl6EExE91s`
    ).then((Res) => Res.json());
  }
};
