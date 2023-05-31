const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={className}>
      <p className="box-name">{text}</p>
    </div>
  );
};

const element = (
  <div className="back-cont">
    <h1 className="heading">Boxes</h1>
    <div className="box-cont">
      <Box className="box1" text="Small" />
      <Box className="box2" text="Medium" />
      <Box className="box3" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
