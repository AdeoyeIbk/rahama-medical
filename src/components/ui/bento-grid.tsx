import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-3xl border border-neutral-200 bg-white transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-slate-900 dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="flex-1 flex flex-col justify-between space-y-2 transition duration-200 group-hover/bento:translate-x-1">
        <div>
          {icon}
          <div className="mt-3 mb-1.5 font-sans font-bold text-slate-900 dark:text-neutral-100 text-lg sm:text-xl leading-snug">
            {title}
          </div>
        </div>
        <div className="font-sans text-xs sm:text-sm font-normal text-slate-600 dark:text-neutral-300 leading-relaxed">
          {description}
        </div>
      </div>
    </div>
  );
};
