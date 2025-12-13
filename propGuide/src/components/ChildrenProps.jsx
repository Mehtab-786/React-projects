function Card({ children, title, color = "blue" }) {
  const colorClasses = {
    blue: "border-blue-200 bg-blue-700",
    green: "border-green-200 bg-green-700",
    red: "border-red-200 bg-red-700",
    pink: "border-pink-200 bg-pink-700",
  };
  return (
    <div className={`${colorClasses[color]} p-6 rounded-lg`}>
      {title && <h3 className="text-2xl font-semibold ">{title}</h3>}
      {children}
    </div>
  );
}

function Container({ children, layout = "vertical" }) {
  const layoutClass = {
    horizontal: "flex flex-row gap-5 flex-wrap ",
    vertical: "flex flex-col space-y-2",
    grid: "grid grid-cols-1 md:grid-cols-2 gap-4",
  };
  return <div className={`${layoutClass[layout]} `}>{children}</div>;
}

function ChildrenProps() {
  return (
    <div className="w-full p-5">
      <h1 className="text-3xl py-2 font-medium">
        Card Component with Children Props
      </h1>
      <p className="text-gray-300 mb-3">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil vel unde
        omnis reiciendis sunt quibusdam aspernatur atque dolorem amet
      </p>
      <div className="w-full bg-gray-700">
        <Container layout="grid">
          <Card color="blue" title="User Profile">
            <h3><span className="font-bold">Name :</span>  Mehtab Hussain</h3>
            <h3><span className="font-bold">Email :</span>  mehtab@gmail.com</h3>
            <h3><span className="font-bold">Role :</span>  Developer</h3>
          </Card>
          <Card color="green" title="Statatics">
            <h3><span className="font-bold">Age :</span> 22</h3>
            <h3><span className="font-bold">Work Done :</span>  All</h3>
            <h3><span className="font-bold">Useful :</span>  Yes</h3>
          </Card>
          <Card color="green" title="Miscelleneous">
            <h3><span className="font-bold">Sleep :</span>  8 hours</h3>
            <h3><span className="font-bold">Hours :</span>  24</h3>
            <h3><span className="font-bold">Developer :</span>  Yes</h3>
          </Card>
        </Container>
        <Container layout="vertical">
          <Card color="blue" title="User Profile">
            <h3><span className="font-bold">Name :</span>  Mehtab Hussain</h3>
            <h3><span className="font-bold">Email :</span>  mehtab@gmail.com</h3>
            <h3><span className="font-bold">Role :</span>  Developer</h3>
          </Card>
          <Card color="green" title="Statatics">
            <h3><span className="font-bold">Age :</span> 22</h3>
            <h3><span className="font-bold">Work Done :</span>  All</h3>
            <h3><span className="font-bold">Useful :</span>  Yes</h3>
          </Card>
          <Card color="green" title="Miscelleneous">
            <h3><span className="font-bold">Sleep :</span>  8 hours</h3>
            <h3><span className="font-bold">Hours :</span>  24</h3>
            <h3><span className="font-bold">Developer :</span>  Yes</h3>
          </Card>
        </Container>
        <Container layout="horizontal">
          <Card color="blue" title="User Profile">
            <h3><span className="font-bold">Name :</span>  Mehtab Hussain</h3>
            <h3><span className="font-bold">Email :</span>  mehtab@gmail.com</h3>
            <h3><span className="font-bold">Role :</span>  Developer</h3>
          </Card>
          <Card color="green" title="Statatics">
            <h3><span className="font-bold">Age :</span> 22</h3>
            <h3><span className="font-bold">Work Done :</span>  All</h3>
            <h3><span className="font-bold">Useful :</span>  Yes</h3>
          </Card>
          <Card color="green" title="Miscelleneous">
            <h3><span className="font-bold">Sleep :</span>  8 hours</h3>
            <h3><span className="font-bold">Hours :</span>  24</h3>
            <h3><span className="font-bold">Developer :</span>  Yes</h3>
          </Card>
        </Container>
      </div>
    </div>
  );
}

export default ChildrenProps;
