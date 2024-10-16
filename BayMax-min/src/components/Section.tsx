import SectionSvg from "../assets/svg/SectionSvg";

type SectionProps = {
  className: string;
  id: string;
  crosses?: boolean;
  crossesOffset?: string;
  customPaddings?: boolean;
  children?: React.ReactNode;
};
const Section = ({
  className,
  id,
  crosses,
  crossesOffset,
  customPaddings,
  children,
}: SectionProps): React.ReactNode => {
  return (
      <div
          id={id}
      className={`relative ${
        customPaddings ||
        `py-10 lg:py-16 xl:py-20 ${crosses ? "lg:py-32 xl:py-40" : ""}${
          className || ""
        }`
      }`}>
      {children}
      <div className="hidden absolute top-0  bg-stroke-1 left-5 w-0.25 h-full pointer-events-none md:block lg:left-7.5 xl:left-10" />
          <div className="hidden absolute top-0  bg-stroke-1 left-5 w-0.25 h-full pointer-events-none md:block lg:right-7.5 xl:right-10" />
          {crosses && (<>
              <div className={`hidden absolute top-0 left-7.5 h-0.25 bg-stroke-1 ${crossesOffset && crossesOffset} pointer-events-none lg:block xl:left-10 right-10`} />
          <SectionSvg crossesOffset={crossesOffset}/>
          </>)}
    </div>
  );
};

export default Section;