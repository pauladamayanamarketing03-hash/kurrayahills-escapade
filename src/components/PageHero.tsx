interface Props {
  image: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}
export function PageHero({ image, eyebrow, title, subtitle }: Props) {
  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden">
      <div
        className="absolute inset-0 animate-ken-burns bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/20 to-background" />
      <div className="relative z-10 flex h-full items-end pb-20">
        <div className="mx-auto max-w-[1400px] w-full px-6 lg:px-10">
          <div className="eyebrow text-gold animate-fade-up">{eyebrow}</div>
          <h1 className="mt-3 font-display text-5xl md:text-7xl text-foreground leading-[1] animate-fade-up max-w-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-5 max-w-xl text-foreground/80 text-base md:text-lg animate-fade-up">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
