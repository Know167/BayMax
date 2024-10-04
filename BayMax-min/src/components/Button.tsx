import ButtonSvg from "../assets/svg/ButtonSvg";

type ButtonProps = {
  className: string;
  href?: string;
  onclick?: React.MouseEventHandler<HTMLButtonElement>;
  px?: number;
  white?: boolean;
  children?: React.ReactNode;
};
const Button = ({
  className,
  href,
  onclick,
  children,
  px,
  white,
}: ButtonProps):React.ReactNode => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;
  const spanClasses='relative z-10'
    const renderButton = (): React.ReactNode => (
      <button className={classes} onClick={onclick}>
        <span className={spanClasses}>{children}</span>
        {ButtonSvg(white!)}
      </button>
    );
  const renderLink = ():React.ReactNode => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white!)}
    </a>
  );
    return href?renderLink():renderButton();
};

export default Button;
