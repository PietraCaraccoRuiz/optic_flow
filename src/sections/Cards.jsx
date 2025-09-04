import Card from "../components/Card";

const Cards = () => {
  return (
    <div className="relative w-full h-60 flex flex-col justify-center items-center">
      <div className="flex w-full justify-center">
        <h1 className="text-3xl bg-gradient-to-b from-white to-gray-400/50 bg-clip-text text-transparent">
          Used by top teams
        </h1>
      </div>
      <div className="flex w-full justify-between px-5">
        <h1 className="text-3xl bg-gradient-to-b from-white/60 to-gray-400/50 bg-clip-text text-transparent z-0">
          across
        </h1>
        <h1 className="text-3xl bg-gradient-to-b from-white/60 to-gray-400/50 bg-clip-text text-transparent z-0">
          the globe
        </h1>
      </div>
      <div className="bg-black backdrop-blur-xl absolute z-0"></div>

      <div className=" -top-5 relative z-1 w-full flex justify-center items-center">
        <Card
          translateX={40}
          translateY={30}
          shadow="none"
          z={0}
          rotate={-10}
        />
        <Card translateX={-60} translateY={10} position={400} z={2} />
        <Card
          translateX={-40}
          translateY={30}
          position={20}
          shadow="none"
          z={0}
          rotate={10}
        />
        <div className="absolute w-38 h-28 bg-black/70 rounded-4xl blur-[13px] z-1"></div>
        <div className="absolute w-[18.4vh] h-[25.5vh] rounded-2xl shadow-[0_0_40px_rgba(65,166,130,0.8)] z-0"></div>
      </div>
      <div className="absolute w-full h-50  z-4 top-45 bg-gradient-to-b from-black/100 via-black/45 to-black/0"></div>
      <div className="absolute w-full h-30 blur-[35px] z-3 top-45 bg-[rgba(65,166,130,0.7)]"></div>
    </div>
  );
};

export default Cards;
