import Link from "next/link";

interface AppLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function LinkContent({ href, children, className }: AppLinkProps) {
  return (
    <Link
      href={href}
      className={`text-accent underline hover:text-accent/80 transition-colors ${className}`}
    >
      {children}
    </Link>
  );
}