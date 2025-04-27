const Dashboard = () => {
  return (
    <section className="container mt-5">
      <h2 className="text-center">Dashboard</h2>
      <div className="row">
        <div className="col-sm-3 mb-4">
          <div className="card">
            <div className="card-body">Card 1</div>
          </div>
        </div>
        <div className="col-sm-3 mb-4">
          <div className="card">
            <div className="card-body">Card 2</div>
          </div>
        </div>
        <div className="col-sm-3 mb-4">
          <div className="card">
            <div className="card-body">Card 3</div>
          </div>
        </div>
        <div className="col-sm-3 mb-4">
          <div className="card">
            <div className="card-body">Card 4</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
