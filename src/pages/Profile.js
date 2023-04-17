import { useData } from "../api/DataContext";

export const Profile = () => {
  const { userData } = useData();
  console.log(userData);
  return (
    <div className="container">
      <h1 className="page-heading">Profile</h1>
      <div className="profile-card">
        <img src={userData.img} alt="profile-pic" />
        <p>
          {" "}
          <span style={{ fontWeight: "600" }}>Name: </span>
          {userData.name}
        </p>
        <p>
          {" "}
          <span style={{ fontWeight: "600" }}>Bio: </span>
          {userData.bio}
        </p>
      </div>
    </div>
  );
};
