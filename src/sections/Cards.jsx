import Card from "../components/Card";
import Brilhos from "../assets/brilhos.svg";
import AI from "../assets/globo.png";
import Grafico from "../assets/grafico.svg";
import Token from "../assets/token.svg";

const Cards = () => {
  return (
    <div className="relative w-full h-60 flex flex-col justify-center items-center mt-[10vh]">
      <div className="flex w-full justify-center">
        <h1 className="text-3xl bg-gradient-to-b from-white to-gray-600/50 z-100 bg-clip-text text-transparent">
          The protection you
        </h1>
      </div>
      <div className="flex w-full justify-between px-15">
        <h1 className="text-3xl bg-gradient-to-b z-100 from-white/60 to-gray-300/50 bg-clip-text text-transparent">
          can
        </h1>
        <h1 className="text-3xl bg-gradient-to-b from-white/60 to-gray-400/50 bg-clip-text text-transparent z-100">
          see
        </h1>
      </div>
      <div className="bg-black backdrop-blur-xl absolute z-0"></div>

      <div className=" -top-5 relative z-1 w-full flex justify-center items-center">
        <Card
          translateX={60}
          translateY={30}
          shadow="none"
          z={0}
          rotate={-10}
          img={Token}
          text={false}
          p={"pt-2"}
        />
        <Card 
        translateX={-60} 
        translateY={10} 
        position={400} 
        z={2}
        img={AI}
        text={true}
        p={""} />
        <Card
          translateX={-60}
          translateY={30}
          position={20}
          shadow="none"
          z={0}
          rotate={10}
          img={Grafico}
          text={false}
          p={"px-2 pt-5"}
        />
        <div className="absolute w-[28vh] h-28 bg-black/70 rounded-4xl blur-[13px] z-1"></div>
        <div className="absolute w-[18.4vh] h-[25.5vh] rounded-2xl shadow-[0_0_40px_rgba(65,166,130,0.8)] z-0"></div>
      </div>
      <img src={Brilhos} className="absolute z-2 opacity-18 -top-5" />
      <div className="absolute w-full h-[60vh] z-4 top-45 bg-gradient-to-b from-black/100 to-black/0"></div>
      <div className="absolute w-full h-30 blur-[35px] z-3 top-45 bg-[rgba(65,166,130,0.7)] "></div>
      <div className="absolute w-full h-30 blur-[35px] z-4 top-60 bg-[rgba(65,166,130,0.2)] "></div>
    </div>
  );
};

export default Cards;
