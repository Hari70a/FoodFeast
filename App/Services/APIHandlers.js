const APIBaseURL = "https://android-full-time-task.firebaseio.com/data.json";

const APIHandlers = {
  getFoodItems: function() {
    var request = {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    };
    return fetch(APIBaseURL, request).then(res => {
      return res.json();
    });
  }
};

export default APIHandlers;
