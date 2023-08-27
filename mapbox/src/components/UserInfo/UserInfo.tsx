import './UserInfo.css'
interface UserInfoProps {
    token: string;
  }
  
  function UserInfo({ token }: UserInfoProps) {
    return (
      <div className="user">
        {token && (
          <div className="user-info">
            <h2 className="user-info__title">User Information</h2>
            <p className="user-info__token">Token: {token}</p>
          </div>
        )}
      </div>
    );
  }
  
  export default UserInfo;