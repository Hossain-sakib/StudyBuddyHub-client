/** Public website Tailwind patterns. */
import { commonRecipes, applyRecipes } from "./style-recipes";
const recipes = {
  ...commonRecipes,
  dark: "bg-[#302a43] text-white hover:bg-violet-700",
  "public-site":
    "min-h-screen bg-[#fffdf9] font-sans text-[#29243d] antialiased dark:bg-slate-950 dark:text-slate-100",
  "skip-link":
    "fixed left-[15px] top-[-70px] z-[1000] bg-[#30213e] text-[#fff] p-[12px] rounded-[5px] [&:focus]:top-[12px]",
  "public-main": "mx-auto max-w-[1280px] px-5 sm:px-9",
  "website-hero":
    "grid items-center gap-8 py-12 lg:min-h-[560px] lg:grid-cols-[1.1fr_1fr] lg:gap-10 lg:py-16 [&_h1]:font-heading [&_h1]:text-[42px] [&_h1]:font-extrabold [&_h1]:leading-[1.12] [&_h1]:tracking-[-2px] [&_h1]:text-[#29243d] sm:[&_h1]:text-[56px] lg:[&_h1]:text-[60px] lg:[&_h1]:tracking-[-3px] [&_h1>span]:text-[#8557c4] dark:[&_h1]:text-slate-100 dark:[&_h1>span]:text-slate-100",
  "site-kicker":
    "inline-flex items-center gap-2 text-[9px] font-semibold uppercase leading-6 tracking-[.16em] text-violet-400 [&>span]:h-1.5 [&>span]:w-1.5 [&>span]:rounded-full [&>span]:bg-violet-400",
  "hero-spark":
    "relative -top-4 ml-1 text-[28px] text-amber-400 sm:text-[34px]",
  "website-hero-copy":
    "mx-auto max-w-xl text-center lg:mx-0 lg:text-left [&>p]:mx-auto [&>p]:mt-6 [&>p]:max-w-[440px] [&>p]:text-sm [&>p]:leading-7 [&>p]:text-slate-500 lg:[&>p]:mx-0 dark:[&>p]:text-slate-400",
  "site-hero-actions":
    "mt-8 flex flex-col items-center justify-center gap-5 sm:flex-row lg:justify-start [&>.button]:w-full [&>.button]:px-5 [&>.button]:py-3.5 [&>.button]:text-xs sm:[&>.button]:w-auto",
  "site-secondary":
    "inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-violet-600 [&_svg]:h-3.5 [&_svg]:w-3.5 dark:text-slate-400 dark:hover:text-violet-300",
  "site-benefits":
    "mt-6 flex flex-wrap items-center justify-center gap-5 text-[10px] text-slate-400 lg:justify-start [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&_svg]:h-3 [&_svg]:w-3 [&_svg]:text-violet-400",
  "site-value-strip":
    "grid grid-cols-2 gap-5 border-y border-slate-200/70 py-6 text-[10px] text-slate-500 md:grid-cols-4 md:text-xs [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-violet-400 dark:border-slate-700/70 dark:text-slate-400",
  "site-section": "scroll-mt-24 py-12 md:py-16",
  "site-section-heading":
    "mb-7 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end [&_h2]:mt-3 [&_h2]:font-heading [&_h2]:text-[26px] [&_h2]:font-bold [&_h2]:leading-[1.3] [&_h2]:tracking-[-.8px] [&_h2]:text-slate-800 sm:[&_h2]:text-[32px] [&_p]:mt-3 [&_p]:max-w-xl [&_p]:text-xs [&_p]:leading-7 [&_p]:text-slate-400 dark:[&_h2]:text-slate-100",
  "community-copy":
    "[&_h2]:text-[38px] [&_h2]:leading-[1.3] [&_h2]:tracking-[-1.4px] [&_h2]:font-extrabold [&_h2]:text-[#3c2c4c] [&_h2]:mt-[12px] [&_h2]:m-[15px_0_18px] [&_p]:text-[14px] [&_p]:text-[#8e759e] [&_p]:leading-[1.95] [&_p]:mb-[26px] [&_p]:max-w-[450px] [&_.button]:text-[13px] [&_.button]:p-[14px_20px] max-[1101px]:[&_h2]:text-[32px] max-[801px]:max-w-[560px] max-[501px]:[&_h2]:text-[30px] max-[501px]:[&_h2]:tracking-[-1px] max-[501px]:[&_p]:text-[13px] max-[501px]:[&_.button]:text-[12px] max-[501px]:[&_.button]:p-[14px_17px] dark:[&_h2]:text-slate-100 dark:[&_p]:text-slate-300",
  "catalog-note": "shrink-0 text-[10px] text-slate-400",
  "public-course-grid": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
  "site-how": "pt-0 pb-12 md:pb-16",
  "site-steps":
    "grid [grid-template-columns:repeat(3,1fr)] gap-[40px] mt-[42px] [&_article>div]:flex [&_article>div]:justify-between [&_article>div]:items-center [&_article>div]:[border-top:1px_solid_#e7dcef] [&_article>div]:pt-[22px] [&_article>div]:mb-[22px] [&_article>div>span]:[font-family:Manrope,sans-serif] [&_article>div>span]:text-[34px] [&_article>div>span]:font-bold [&_article>div>span]:text-[#b497ca] [&_article>div>span]:tracking-[-1px] [&_article>div>svg]:w-[25px] [&_article>div>svg]:h-[25px] [&_article>div>svg]:text-[#a687bd] [&_h3]:text-[17px] [&_h3]:text-[#51375f] [&_h3]:mb-[12px] [&_p]:text-[13px] [&_p]:leading-[1.9] [&_p]:text-[#8d769b] [&_p]:max-w-[300px] max-[801px]:gap-[25px] max-[801px]:[&_h3]:text-[15px] max-[801px]:[&_p]:text-[12px] max-[501px]:[grid-template-columns:1fr] max-[501px]:gap-[25px] max-[501px]:mt-[28px] max-[501px]:[&_article>div]:mb-[15px] max-[501px]:[&_article>div]:pt-[18px] max-[501px]:[&_article>div>span]:text-[30px] max-[501px]:[&_h3]:text-[18px] max-[501px]:[&_p]:text-[13px] max-[501px]:[&_p]:max-w-[100%] dark:[&_article>div>span]:text-slate-300 dark:[&_article>div>svg]:text-slate-300 dark:[&_h3]:text-slate-100 dark:[&_p]:text-slate-300",
  "site-community":
    "grid items-center gap-8 pt-0 pb-12 md:grid-cols-2 md:gap-12 md:pb-16",
  "community-art":
    "bg-[#f5e4ed] h-[330px] rounded-[22px] relative overflow-hidden max-[1101px]:h-[330px] max-[801px]:max-w-[480px] max-[801px]:w-[100%] max-[801px]:m-[auto] max-[801px]:[order:2] max-[501px]:h-[285px]",
  "community-line":
    "w-[220px] h-[220px] absolute left-[95px] top-[55px] [border:1px_dashed_#dcbacf] rounded-[50%] [transform:rotate(-30deg)] max-[501px]:left-[60px] max-[501px]:top-[35px] max-[501px]:w-[200px] max-[501px]:h-[200px]",
  "community-bubble":
    "absolute grid [place-items:center] shadow-[4px_10px_18px_#9b6a9b13] [border:4px_solid_#fff5f8] w-[80px] h-[80px] rounded-[50%] text-[30px] max-[501px]:w-[67px] max-[501px]:h-[67px] max-[501px]:text-[25px]",
  "bubble-one":
    "bg-[#a78ccf] text-[#f5edff] top-[50px] left-[64px] [transform:rotate(-12deg)] max-[1101px]:left-[35px] max-[501px]:left-[30px] max-[501px]:top-[35px]",
  "bubble-two":
    "bg-[#f2c58d] text-[#a77840] right-[75px] top-[45px] [transform:rotate(12deg)] max-[1101px]:right-[35px] max-[501px]:right-[27px] max-[501px]:top-[35px]",
  "bubble-three":
    "bg-[#a2bdaa] text-[#fff] right-[130px] bottom-[30px] [transform:rotate(-8deg)] max-[501px]:right-[90px] max-[501px]:bottom-[25px]",
  "community-note":
    "absolute top-[154px] left-[88px] bg-[white] [border:1px_solid_#f9eef5] rounded-[12px] p-[16px_20px] text-[#986e93] text-[15px] leading-[1.7] [transform:rotate(-6deg)] shadow-[0_10px_24px_#9b6a9b13] [&_strong]:text-[#755078] max-[1101px]:left-[35px] max-[501px]:top-[128px] max-[501px]:left-[32px] max-[501px]:text-[13px] max-[501px]:p-[13px_16px]",
  "community-star":
    "absolute text-[37px] text-[#c99bb6] left-[36px] bottom-[40px] max-[501px]:left-[24px] max-[501px]:bottom-[24px] max-[501px]:text-[32px]",
  "site-final-cta":
    "relative isolate mb-12 overflow-hidden rounded-3xl border border-violet-100 bg-[#eee7f8] px-6 py-12 text-center md:mb-16 md:py-14 [&_h2]:mt-4 [&_h2]:font-heading [&_h2]:text-[28px] [&_h2]:font-bold [&_h2]:leading-[1.4] [&_h2]:tracking-tight [&_h2]:text-[#67517c] sm:[&_h2]:text-[36px] [&_p]:mx-auto [&_p]:mt-4 [&_p]:max-w-xl [&_p]:text-xs [&_p]:leading-7 [&_p]:text-[#9580a5] [&_.button]:mt-6 dark:border-violet-900/60 dark:bg-slate-800 dark:[&_h2]:text-slate-100 dark:[&_p]:text-slate-300",
  "cta-star":
    "absolute right-[70px] top-[65px] text-[#ba9dda] text-[55px] [transform:rotate(15deg)] max-[801px]:right-[30px] max-[801px]:top-[30px] max-[801px]:text-[35px] max-[501px]:hidden dark:text-slate-300",
  "public-catalog-toolbar":
    "mb-7 flex flex-col justify-between gap-4 lg:flex-row lg:items-center",
  "public-topic-tabs":
    "flex flex-wrap gap-2 [&>button]:rounded-full [&>button]:border [&>button]:border-slate-200 [&>button]:bg-white [&>button]:px-3.5 [&>button]:py-2 [&>button]:text-[11px] [&>button]:font-medium [&>button]:text-slate-400 [&>button.selected]:border-violet-500 [&>button.selected]:bg-violet-500 [&>button.selected]:text-white dark:[&>button]:border-slate-700/70 dark:[&>button]:bg-slate-900",
  "public-search":
    "flex w-full items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-slate-300 lg:w-72 [&>svg]:h-4 [&>svg]:w-4 [&>input]:w-full [&>input]:min-w-0 [&>input]:border-0 [&>input]:bg-transparent [&>input]:text-xs [&>input]:text-slate-600 [&>input]:outline-none [&>input]:placeholder:text-slate-300 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-500 dark:[&>input]:text-slate-200 dark:[&>input]:placeholder:text-slate-500",
  "learning-paths": "pt-0 pb-12 md:pb-16",
  "path-grid":
    "grid [grid-template-columns:repeat(3,minmax(0,1fr))] gap-[20px] max-[1001px]:gap-[16px] max-[701px]:[grid-template-columns:1fr]",
  "path-card":
    "relative [border:1px_solid_#e6d7f5] rounded-[16px] p-[26px] text-left flex flex-col items-start gap-[20px] bg-[#eee5fa] text-[#9573b4] min-h-[255px] overflow-hidden [transition:transform_.2s] [&:hover]:[transform:translateY(-4px)] [&.peach]:bg-[#ffedda] [&.peach]:[border-color:#f4e0c9] [&.peach]:text-[#bc925c] [&.mint]:bg-[#e5f1e8] [&.mint]:[border-color:#d3e6d8] [&.mint]:text-[#83a68c] [&:after]:[content:''] [&:after]:absolute [&:after]:w-[130px] [&:after]:h-[130px] [&:after]:[border:1px_solid_currentColor] [&:after]:opacity-[.16] [&:after]:rounded-[50%] [&:after]:right-[-45px] [&:after]:bottom-[-45px] [&.peach_strong]:text-[#89613b] [&.mint_strong]:text-[#50795d] [&.peach_.path-copy>span:last-child]:text-[#a28362] [&.mint_.path-copy>span:last-child]:text-[#73947d] [&>svg]:absolute [&>svg]:top-[27px] [&>svg]:right-[25px] [&>svg]:w-[20px] [&>svg]:h-[20px] max-[1001px]:p-[22px] max-[701px]:min-h-[0] max-[701px]:p-[24px] max-[701px]:flex-row max-[701px]:items-start max-[701px]:gap-[18px] max-[701px]:[&>svg]:top-[24px] max-[701px]:[&>svg]:right-[18px] max-[701px]:[&>svg]:w-[17px] max-[501px]:p-[21px] max-[501px]:gap-[14px] dark:bg-slate-800 dark:text-slate-300 dark:[&.peach]:bg-slate-800 dark:[&.peach]:border-slate-700/70 dark:[&.peach]:text-slate-300 dark:[&.mint]:bg-slate-800 dark:[&.mint]:border-slate-700/70 dark:[&.mint]:text-slate-300 dark:[&.peach_strong]:text-slate-100 dark:[&.mint_strong]:text-slate-300 dark:[&.peach_.path-copy>span:last-child]:text-slate-300 dark:[&.mint_.path-copy>span:last-child]:text-slate-300",
  "path-icon":
    "bg-[#fff9] p-[11px] rounded-[13px] flex [&>svg]:w-[25px] [&>svg]:h-[25px] max-[701px]:p-[10px] max-[701px]:[&_svg]:w-[22px] max-[701px]:[&_svg]:h-[22px]",
  "path-copy":
    "flex flex-col [&_.eyebrow]:text-[9px] [&_.eyebrow]:tracking-[1.2px] [&_.eyebrow]:text-[inherit] [&_strong]:[font-family:Manrope,sans-serif] [&_strong]:text-[20px] [&_strong]:tracking-[-.6px] [&_strong]:leading-[1.6] [&_strong]:text-[#5c416f] [&_strong]:m-[7px_0] [&>span:last-child]:text-[12px] [&>span:last-child]:leading-[1.8] [&>span:last-child]:text-[#8e739f] [&>span:last-child]:max-w-[260px] max-[1001px]:[&_strong]:text-[18px] max-[701px]:pr-[15px] max-[701px]:[&_strong]:text-[18px] max-[701px]:[&>span:last-child]:max-w-[none] max-[501px]:[&_strong]:text-[17px] max-[501px]:[&>span:last-child]:text-[12px] dark:[&_strong]:text-slate-100 dark:[&>span:last-child]:text-slate-300",
  "practice-section": "pt-0 pb-12 md:pb-16",
  "practice-grid":
    "grid [grid-template-columns:repeat(3,minmax(0,1fr))] gap-[22px] max-[1001px]:gap-[16px] max-[701px]:[grid-template-columns:1fr]",
  "practice-card":
    "[border:1px_solid_#e8def0] rounded-[17px] overflow-hidden bg-white dark:bg-slate-900 dark:border-slate-700 shadow-[0_8px_25px_#76509305] [&:nth-child(2)_.practice-visual]:bg-[#fcead5] [&:nth-child(3)_.practice-visual]:bg-[#e5f0e5] [&:nth-child(2)_.practice-number]:text-[#e7c49b] [&:nth-child(3)_.practice-number]:text-[#b9d3bb] [&:nth-child(2)_.practice-sticker]:bg-[#deb27b] [&:nth-child(2)_.practice-sticker]:[border-color:#fff5e6] [&:nth-child(2)_.practice-sticker]:[transform:rotate(12deg)] [&:nth-child(2)_.practice-sticker]:shadow-[8px_8px_0_#edcfaa77] [&:nth-child(3)_.practice-sticker]:bg-[#9abb9d] [&:nth-child(3)_.practice-sticker]:[border-color:#f1faef] [&:nth-child(3)_.practice-sticker]:shadow-[8px_8px_0_#ccdfcb77] max-[701px]:grid max-[701px]:[grid-template-columns:130px_1fr] max-[501px]:[grid-template-columns:1fr] dark:[&:nth-child(2)_.practice-visual]:bg-slate-800 dark:[&:nth-child(3)_.practice-visual]:bg-slate-800 dark:[&:nth-child(2)_.practice-sticker]:bg-slate-800 dark:[&:nth-child(2)_.practice-sticker]:border-slate-700/70 dark:[&:nth-child(3)_.practice-sticker]:bg-slate-800 dark:[&:nth-child(3)_.practice-sticker]:border-slate-700/70",
  "practice-visual":
    "h-[150px] bg-[#f0e7fc] relative flex items-center justify-center overflow-hidden max-[701px]:h-[100%] max-[701px]:min-h-[220px] max-[501px]:min-h-[150px] max-[501px]:h-[150px]",
  "practice-number":
    "absolute [font-family:Manrope,sans-serif] text-[125px] font-extrabold tracking-[-7px] left-[14px] top-[-17px] text-[#d8c4ef] opacity-[.4] max-[701px]:text-[92px] max-[701px]:left-[1px] max-[701px]:top-[2px] max-[501px]:text-[125px] max-[501px]:left-[24px] max-[501px]:top-[-18px]",
  "practice-sticker":
    "grid [place-items:center] w-[74px] h-[80px] [transform:rotate(-13deg)] rounded-[15px] bg-[#aa87d9] [border:4px_solid_#f7efff] text-[white] shadow-[8px_8px_0_#d9c8ed77] [&>svg]:w-[36px] [&>svg]:h-[36px] [&>svg]:[stroke-width:1.3] max-[701px]:w-[65px] max-[701px]:h-[72px] max-[701px]:[&>svg]:w-[29px] max-[701px]:[&>svg]:h-[29px] max-[501px]:w-[74px] max-[501px]:h-[80px]",
  "practice-spark":
    "absolute text-[30px] text-[#b899d0] top-[23px] right-[29px] max-[701px]:text-[22px] max-[701px]:right-[12px] max-[701px]:top-[35px] max-[501px]:text-[32px] max-[501px]:right-[40px] max-[501px]:top-[20px] dark:text-slate-300",
  "practice-body":
    "p-[23px] [&>h3]:text-[17px] [&>h3]:text-[#694879] [&>h3]:leading-[1.6] [&>h3]:m-[12px_0] [&>h3]:tracking-[-.5px] [&>p]:text-[12px] [&>p]:leading-[1.9] [&>p]:text-[#967da5] [&>p]:max-h-[90px] [&>p]:overflow-auto [&>p]:mb-[20px] [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:gap-[10px] [&>div]:pt-[17px] [&>div]:[border-top:1px_solid_#eee5f5] [&>div>span]:text-[10px] [&>div>span]:text-[#ae94bd] [&_button]:flex [&_button]:items-center [&_button]:gap-[8px] [&_button]:text-[11px] [&_button]:text-[#8f64ac] [&_button]:bg-[none] [&_button]:p-0 [&_button>svg]:w-[13px] max-[1001px]:p-[19px] max-[1001px]:[&>h3]:text-[16px] max-[1001px]:[&>div]:flex-wrap max-[701px]:p-[21px] max-[701px]:[&>p]:text-[12px] max-[501px]:[&>h3]:text-[18px] max-[501px]:[&>p]:text-[13px] max-[501px]:[&>p]:max-h-[none] max-[501px]:[&>div]:flex-nowrap dark:[&>h3]:text-slate-100 dark:[&>p]:text-slate-300 dark:[&>div>span]:text-slate-300 dark:[&_button]:text-slate-300",
  "sample-label":
    "inline-block text-[8px] tracking-[1px] text-[#ad91bd] bg-[#f6f0fc] rounded-[4px] p-[5px_7px] dark:text-slate-300 dark:bg-slate-800",
  "site-faq":
    "grid gap-7 pt-0 pb-12 md:grid-cols-[1fr_1.5fr] md:gap-16 md:pb-16 [&_h2]:mt-3 [&_h2]:font-heading [&_h2]:text-[30px] [&_h2]:font-bold [&_h2]:leading-[1.3] [&_h2]:tracking-tight [&_h2]:text-slate-800 [&>div>p]:mt-3 [&>div>p]:text-xs [&>div>p]:text-slate-400 dark:[&_h2]:text-slate-100",
  "faq-list":
    "[&>details]:[border-bottom:1px_solid_#eadff2] [&>details]:p-[21px_0] [&>details:first-child]:[border-top:1px_solid_#eadff2] [&_summary]:[list-style:none] [&_summary]:cursor-pointer [&_summary]:flex [&_summary]:items-center [&_summary]:justify-between [&_summary]:gap-[20px] [&_summary]:text-[14px] [&_summary]:font-medium [&_summary]:text-[#745182] [&_summary]:leading-[1.8] [&_summary::-webkit-details-marker]:hidden [&_summary>span]:text-[23px] [&_summary>span]:font-normal [&_summary>span]:text-[#bc9bd0] [&_summary>span]:leading-[1] [&_summary>span]:[transition:transform_.2s] [&_details[open]_summary>span]:[transform:rotate(45deg)] [&_details>p]:text-[13px] [&_details>p]:leading-[1.95] [&_details>p]:text-[#997eaa] [&_details>p]:p-[14px_25px_0_0] max-[501px]:[&_summary]:text-[13px] dark:[&_summary]:text-slate-100 dark:[&_summary>span]:text-slate-300 dark:[&_details>p]:text-slate-300",
};
export function ui(tokens = "") {
  return applyRecipes(recipes, tokens);
}
