import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";

type HeaderLinkProps = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  "target"
>;

function HeaderLink({ className, ...props }: HeaderLinkProps) {
  return (
    <a
      className={cn(
        "underline underline-offset-2 dark:hover:opacity-80 hover:opacity-60 transition-opacity",
        className
      )}
      target="_blank"
      {...props}
    />
  );
}

export default function Header() {
  return (
    <div className="text-center space-y-2">
      <h1 className="text-3xl font-semibold tracking-tight">
        Electron App Boilerplate
      </h1>
      <h2 className="text-sm font-normal flex gap-1 items-center">
        <HeaderLink href="https://vitejs.dev/">Vite</HeaderLink>
        <Separator orientation="vertical" />
        <HeaderLink href="https://react.dev/">React</HeaderLink>
        <Separator orientation="vertical" />
        <HeaderLink href="https://tailwindcss.com/">TailwindCSS</HeaderLink>
        <Separator orientation="vertical" />
        <HeaderLink href="https://www.typescriptlang.org/">
          Typescript
        </HeaderLink>
        <Separator orientation="vertical" />
        <HeaderLink href="https://ui.shadcn.com/">shadcn/ui</HeaderLink>
        <Separator orientation="vertical" />
      </h2>
    </div>
  );
}