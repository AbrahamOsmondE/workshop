import axios from "axios";

const getUserProfile = (userID) => {
  const [profile, setProfile] = useState(null);

  axios
    .get(`https://jsonplaceholder.typicode.com/${userID}`)
    .then((response) => {
      setProfile(response.data);
    })
    .catch((error) => {
      console.log(error);
    });

  return profile;
};

export default getUserProfile;
