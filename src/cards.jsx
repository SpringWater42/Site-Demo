const user = {
  name: 'Da Dog',
  imageUrl: '',
  imageSize: 350,
};


function cards() {
  return (
    <div className="card">

        {/* <h1>Cards Component</h1> */}
        <h1>{user.name}</h1>
      <img 
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </div>
  
);
}

export default cards;