import CopyrightYear from '@/components/CopyrightYear';

export default function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="container-editorial flex flex-col gap-1.5 py-6 text-[12px] uppercase tracking-[0.04em] text-muted-faint sm:flex-row sm:items-center sm:justify-between sm:py-7 lg:text-[13px]">
        <p className="text-muted-faint">
          © <CopyrightYear buildYear={new Date().getFullYear()} /> 2ML LLC · San Francisco
        </p>
        <p className="text-muted-faint">
          <a href="mailto:info@2ml.ai" className="hover:text-accent">
            info@2ml.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
