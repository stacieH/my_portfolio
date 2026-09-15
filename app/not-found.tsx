import Link from "next/link";
import { Container } from "@/components/ui/container";
import { ArrowLeftIcon, BlossomIcon } from "@/components/ui/icons";
import { buttonPrimary } from "@/components/ui/styles";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <BlossomIcon className="h-12 w-12 text-sakura" />
      <p className="mt-6 font-mono text-xs uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="mt-3 font-display text-4xl font-bold text-text">This petal drifted away</h1>
      <p className="mt-4 max-w-md text-muted">The page you are looking for does not exist or has moved.</p>
      <Link href="/" className={`${buttonPrimary} mt-8`}>
        <ArrowLeftIcon className="h-4 w-4" />
        Back home
      </Link>
    </Container>
  );
}
