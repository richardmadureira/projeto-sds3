import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas Mundo</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h2 className="text-center text-secondary">Taxa de Sucesso</h2>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h2 className="text-center text-secondary">Todas Vendas</h2>
            <DonutChart />
          </div>
        </div>
        <div className="row px-3">
          <h2 className="text-center text-primary">Todas Vendas</h2>
          <DataTable />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
