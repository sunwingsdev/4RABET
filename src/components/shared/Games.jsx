const Games = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center gap-2 rounded-md">
      <img src={img} className="w-48 h-36 rounded-md" alt="game image" />
      <p className="text-base font-bold text-white">{title}</p>
    </div>
  );
};

export default Games;
