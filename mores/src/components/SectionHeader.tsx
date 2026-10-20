interface Props {
  label: string;
  title: string;
}

export default function SectionHeader({ label, title }: Props) {
  return (
    <div className="mb-12 md:mb-16 text-center md:text-left">
      <span className="inline-block px-4 py-1.5 rounded-full bg-sage-soft text-sage-deep text-sm font-semibold mb-4">
        {label}
      </span>
      <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
    </div>
  );
}