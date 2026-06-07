import Link from "next/link";

type ButtonVariant = "primary" | "outline" | "ghost";

type ButtonProps = {
  variant?: ButtonVariant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  external?: boolean;
};

export default function Button({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  type = "button",
  external = false,
}: ButtonProps) {
  const cls = `btn-${variant} ${className}`;

  if (href) {
    return external ? (
      <a href={href} className={cls} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ) : (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={cls} onClick={onClick}>
      {children}
    </button>
  );
}
