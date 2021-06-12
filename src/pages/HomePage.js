import { useContext } from "react";
import SocketContext from "../context/SocketContext";
import Header from "../components/Header/Header";
import Status from "../components/General/Status";
import Subtitle from "../components/General/Subtitle";
import AddBandForm from "../components/Forms/AddBandForm";
import ListBands from "../components/Bands/ListBands";
import "./reset.css";
import "./App.scss";
import BandChart from "../components/Chart/BandChart";
function HomePage() {
  const { online } = useContext(SocketContext);

  return (
    <>
      <Header />
      <main className="wrapperMain">
        <section className="wrapperStatus">
          {online ? (
            <Status status={`online`} />
          ) : (
            <Status status={`offline`} />
          )}
        </section>
        <section className="wrapperGraph">
          <BandChart />
        </section>
        <section className="wrapperData">
          <div className="wrapperDataBands">
            <div className="wrapperTitles">
              <Subtitle subtitle="Listas de bandas" />
            </div>
            <ListBands />
          </div>
          <div className="wrapperForm">
            <div className="wrapperTitles">
              <Subtitle subtitle="Agrega una nueva banda" />
            </div>
            <AddBandForm />
          </div>
        </section>
      </main>
    </>
  );
}

export default HomePage;
