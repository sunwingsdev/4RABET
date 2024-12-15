import aviatorImg from "../../assets/images/aviator.jpeg";

const Games = () => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-md">
      <img src={aviatorImg} className="w-48 h-36 rounded-md" alt="game image" />
      <p className="text-base font-bold text-white">Aviator</p>
    </div>
  );
};

export default Games;
