"use client";

import { useEffect, useRef, useState } from "react";
import { ExternalLink } from "@/components/ui/external-link";
import { CertificateIcon, CloseIcon, LinkedInIcon } from "@/components/ui/icons";
import { certificatePreviewUrl } from "@/lib/certificates";

type CertificateDialogProps = {
  title: string;
  url: string;
  linkedinUrl?: string;
};

export function CertificateDialog({ title, url, linkedinUrl }: CertificateDialogProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  // The dialog closes itself on Escape and on a backdrop click, so follow its
  // own close event rather than tracking every route out of the open state.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    const handleClose = () => setOpen(false);
    dialog.addEventListener("close", handleClose);
    return () => dialog.removeEventListener("close", handleClose);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          dialogRef.current?.showModal();
        }}
        className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 font-mono text-xs text-accent transition-colors hover:border-accent hover:bg-surface-soft"
      >
        <CertificateIcon className="h-3.5 w-3.5" />
        View certificate
        <span className="sr-only"> for {title}</span>
      </button>
      <dialog
        ref={dialogRef}
        aria-label={`Certificate: ${title}`}
        onClick={(event) => {
          // Clicks land on the dialog itself only when they hit the backdrop.
          if (event.target === dialogRef.current) dialogRef.current?.close();
        }}
        // m-auto restores the centering that the CSS reset's `margin: 0` removes.
        className="m-auto max-h-[92vh] w-[min(64rem,92vw)] overflow-hidden rounded-2xl border border-border bg-surface p-0 text-text backdrop:bg-black/60"
      >
        <div className="flex items-center justify-between gap-4 border-b border-border px-5 py-3">
          <h2 className="font-display text-base font-bold text-text">{title}</h2>
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            aria-label="Close certificate"
            className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border text-text transition-colors hover:border-accent hover:text-accent"
          >
            <CloseIcon className="h-5 w-5" />
          </button>
        </div>
        {/* Rendered only while open, so a page of certificates loads nothing until asked. */}
        {open ? (
          <iframe
            src={certificatePreviewUrl(url)}
            title={`Certificate: ${title}`}
            className="block h-[70vh] w-full bg-surface-soft"
          />
        ) : null}
        <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 border-t border-border px-5 py-3">
          {linkedinUrl ? (
            <ExternalLink
              href={linkedinUrl}
              className="inline-flex items-center gap-1.5 font-mono text-xs text-accent hover:underline"
            >
              <LinkedInIcon className="h-3.5 w-3.5" />
              Open in LinkedIn
            </ExternalLink>
          ) : null}
          <ExternalLink href={url} className="font-mono text-xs text-accent hover:underline">
            Open in a new tab
          </ExternalLink>
        </div>
      </dialog>
    </>
  );
}
