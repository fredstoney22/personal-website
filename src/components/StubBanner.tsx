type StubBannerProps = {
  label?: string;
};

export function StubBanner({
  label = "Stub page — content coming soon. Used to test navigation and growth routes.",
}: StubBannerProps) {
  return (
    <div
      role="status"
      className="border-b border-accent/25 bg-accent-soft px-5 py-3 text-sm text-ink sm:px-8"
    >
      <p className="mx-auto max-w-5xl">{label}</p>
    </div>
  );
}
