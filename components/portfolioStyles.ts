export const portfolioShell =
  "mx-auto w-[min(calc(100%_-_4rem),1400px)] min-[1100px]:me-auto min-[1100px]:ms-[clamp(2.5rem,5vw,6rem)] min-[1100px]:w-[min(calc(100%_-_14rem),1400px)] max-[1099px]:w-[min(calc(100%_-_3rem),76rem)] max-[600px]:w-[min(calc(100%_-_2rem),44rem)]";

export const sectionBase =
  "relative z-[1] scroll-mt-4 border-b border-border max-[600px]:scroll-mt-2";

export const eyebrow =
  "m-0 text-xs font-bold uppercase leading-[1.4] tracking-[0.24em] text-gold rtl:font-semibold rtl:tracking-normal max-[600px]:text-[0.64rem] max-[600px]:tracking-[0.19em]";

export const stationKicker =
  "m-0 flex items-center gap-[0.85rem] text-xs font-bold uppercase leading-[1.4] tracking-[0.24em] text-textMuted after:h-px after:w-14 after:bg-[linear-gradient(90deg,var(--gold),transparent)] after:content-[''] rtl:font-semibold rtl:tracking-normal rtl:after:bg-[linear-gradient(270deg,var(--gold),transparent)] [&>span]:text-gold max-[600px]:flex-wrap max-[600px]:gap-[0.55rem] max-[600px]:text-[0.64rem] max-[600px]:tracking-[0.19em] max-[600px]:after:w-[2.4rem]";

export const sectionHeader =
  "mb-[clamp(4rem,8vw,7rem)] flex items-end justify-between gap-16 max-[820px]:grid max-[820px]:gap-[1.8rem] max-[600px]:mb-[3.7rem]";

export const sectionIntro =
  "mb-[0.7rem] max-w-[35rem] text-[clamp(1rem,1.35vw,1.18rem)] leading-[1.75] text-textSecondary max-[820px]:max-w-[42rem]";

export const sectionTitle =
  "mt-4 max-w-[13ch] font-display text-[clamp(3.7rem,7vw,7.6rem)] font-medium leading-[0.82] tracking-[-0.055em] text-foreground rtl:font-persian rtl:font-bold rtl:leading-[1.12] rtl:tracking-normal [&>em]:font-normal [&>em]:text-goldLight max-[600px]:text-[clamp(3.3rem,17vw,5.1rem)]";

export const buttonBase =
  "inline-flex min-h-[3.7rem] cursor-pointer items-center justify-center gap-[0.7rem] rounded-[0.65rem] border border-transparent px-[1.45rem] py-[0.9rem] text-[0.9rem] font-bold tracking-[-0.01em] transition-[transform,border-color,background-color,box-shadow] duration-200 hover:-translate-y-0.5 rtl:tracking-normal [&>svg]:h-[1.05rem] [&>svg]:w-[1.05rem] max-[600px]:min-h-[3.45rem] max-[600px]:w-full";

export const buttonGold =
  "border-goldLight bg-[linear-gradient(135deg,#f0c66f,#d29d44_70%,#bf7a43)] text-[#090705] shadow-[0_0_0_1px_rgba(255,220,143,0.16),0_14px_42px_rgba(189,117,64,0.2)] hover:shadow-[0_0_0_1px_rgba(255,220,143,0.3),0_17px_50px_rgba(214,169,95,0.28)]";

export const buttonGlass =
  "border-borderActive bg-[rgba(7,7,10,0.62)] text-foreground backdrop-blur-2xl hover:border-gold hover:bg-[rgba(24,24,32,0.82)]";

export const directionalIcon = "rtl:rotate-180";

export const technologyList =
  "mt-[1.35rem] flex list-none flex-wrap gap-[0.45rem] p-0 [&>li]:rounded-full [&>li]:border [&>li]:border-border [&>li]:px-[0.62rem] [&>li]:py-[0.4rem] [&>li]:text-[0.65rem] [&>li]:text-textMuted";

export const detailList =
  "mt-[1.3rem] grid list-none gap-[0.65rem] p-0 text-[0.83rem] leading-[1.55] text-textSecondary [&>li]:relative [&>li]:ps-[1.1rem] [&>li]:before:absolute [&>li]:before:start-0 [&>li]:before:top-[0.64rem] [&>li]:before:h-[0.28rem] [&>li]:before:w-[0.28rem] [&>li]:before:rounded-full [&>li]:before:bg-gold [&>li]:before:shadow-[0_0_0.7rem_rgba(214,169,95,0.35)] [&>li]:before:content-['']";
