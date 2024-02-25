type SingleCellProps = {
  value: string;
  handleClick: () => void;
};

const SingleCell = ({ handleClick, value }: SingleCellProps) => {
  return (
    <button
      value={value}
      onClick={handleClick}
      className="h-20 w-20 border border-slate-700 bg-slate-100 text-xl font-bold"
    >
      {value}
    </button>
  );
};

export default SingleCell;
