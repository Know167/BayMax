import brackets from "../assets/svg/Brackets";

type TaglineProps = { className?: string; children?: React.ReactNode };
const Tagline = ({ className, children }: TaglineProps): React.ReactNode => {
  return (
    <div className={`tagline flex items-center ${className || ""}`}>
      {brackets("left")}
      <div className="mx-3 text-n-3">{children}</div>
      {brackets("right")}
    </div>
  );
};

export default Tagline;
