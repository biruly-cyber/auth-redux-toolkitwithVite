import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { app } from "../firebase";
import axios from "axios";
import {
  updateUserFailure,
  updateUserStart,
  updateUserSuccess,
} from "../redux/user/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const fileRef = useRef();
  const [image, setImage] = useState(null);
  const [imagePercentage, setImagePercentage] = useState(0);
  const [imageUploadError, setImageUploadError] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    profilePicture: "",
  });

  const { currentUser } = useSelector((state) => state.user);

  useEffect(() => {
    if (image) {
      handleFileUpload(image);
    }
  }, [image]);

  const handleFileUpload = async (image) => {
    try {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + image.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setImagePercentage(Math.round(progress));
        },
        (error) => {
          setImageUploadError(true);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setFormData((prevData) => ({
              ...prevData,
              profilePicture: downloadURL,
            }));
          });
        }
      );
    } catch (error) {
      setImageUploadError(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  //handle on submit
  const handleOnSubmit = async () => {
    console.log(formData);
    try {
      dispatch(updateUserStart());
      const response = await axios.post(
        `/api/v1/auth/update/${currentUser._id}`,
        {
          body: formData,
        }
      );
      const { user } = response.data;
      dispatch(updateUserSuccess(user));
    } catch (error) {
      console.log(error);
      dispatch(updateUserFailure(error));
    }
  };

  if (!currentUser) {
    return <div>Please log in to view your profile.</div>;
  }

  return (
    <div className="container mx-auto p-4 h-screen">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center space-x-4">
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
          />
          <img
            src={formData.profilePicture || currentUser.profilePicture}
            alt="Profile"
            className="w-24 h-24 rounded-full cursor-pointer"
            onClick={() => fileRef.current.click()}
          />
          <p>
            {imageUploadError ? (
              <span className="text-red-600">
                Error uploading image (file size must be less than 2 MB)
              </span>
            ) : imagePercentage > 0 && imagePercentage < 100 ? (
              <span>{`Uploading: ${imagePercentage}% `}</span>
            ) : imagePercentage === 100 ? (
              <span className="text-green-600">
                {" "}
                Image uploaded successfully
              </span>
            ) : (
              ""
            )}
          </p>
          <div>
            <input
              id="username"
              type="text"
              className="text-2xl font-bold"
              value={currentUser.username}
              onChange={handleChange}
            />
            <input
              id="email"
              type="email"
              className="text-gray-600"
              value={currentUser.email}
              onChange={handleChange}
            />
            <input
              id="password"
              type="password"
              className="text-gray-600"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button
            className="bg-green-500 px-4 py-1 text-white rounded-full"
            onClick={handleOnSubmit}
          >
            Update
          </button>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">About Me</h3>
          <p className="text-gray-700 mt-2">
            {currentUser.bio || "No bio available."}
          </p>
        </div>
        <div className="mt-6">
          <h3 className="text-xl font-semibold">Settings</h3>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>Change Password</li>
            <li>Manage Subscriptions</li>
            <li>Privacy Settings</li>
          </ul>
          <button className="bg-green-500 px-4 py-1 text-white rounded-full">
            Update
          </button>

          <button className="bg-red-500 px-4 py-1 text-white rounded-full">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
