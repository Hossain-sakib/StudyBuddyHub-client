/** Learner workspace Tailwind patterns, loaded after authentication is opened. */
import { commonRecipes, applyRecipes } from "./style-recipes";
const recipes = {
  ...commonRecipes,
  "app-shell":
    "min-h-screen bg-[#f5f6fa] font-sans text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-100",
  "brand-dot": "text-[#776487] dark:text-slate-100",
  avatar:
    "flex justify-center items-center bg-[#f0d0b5] text-[#8b573e] w-[35px] h-[35px] rounded-[50%] font-bold text-[13px] [border:3px_solid_#fff4e8] shrink-0 dark:bg-slate-800 dark:text-slate-100",
  "page-heading":
    "mb-7 flex flex-wrap items-end justify-between gap-4 [&_h1]:font-heading [&_h1]:text-[25px] [&_h1]:font-bold [&_h1]:leading-[1.4] [&_h1]:tracking-[-.9px] [&_h1]:text-slate-800 sm:[&_h1]:text-[30px] [&_p]:mt-2 [&_p]:max-w-xl [&_p]:text-xs [&_p]:leading-7 [&_p]:text-slate-400 dark:[&_h1]:text-slate-100",
  overline:
    "mb-2 text-[8px] font-semibold uppercase tracking-[.18em] text-slate-400",
  wave: "ml-1 inline-block text-amber-400",
  white:
    "border border-slate-200 bg-white text-slate-500 hover:border-violet-200 hover:text-violet-600 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-violet-900/60 dark:hover:text-violet-300",
  danger: "bg-[#b94960] text-[white]",
  "icon-tile":
    "inline-flex items-center justify-center w-[39px] h-[39px] shrink-0 rounded-[11px] [&_svg]:w-[18px] [&_svg]:h-[18px]",
  purple: "bg-[#eee7ff] text-[#776487] dark:bg-slate-800 dark:text-slate-100",
  subtle: "text-[#776487] text-[13px] leading-[1.7] dark:text-slate-100",
  "icon-button":
    "inline-flex items-center justify-center rounded-lg p-2 text-slate-400 transition hover:bg-violet-50 hover:text-violet-600 [&_svg]:h-4 [&_svg]:w-4 dark:hover:bg-violet-950/30 dark:hover:text-violet-300",
  "content-columns":
    "grid [grid-template-columns:minmax(0,1fr)_264px] gap-[22px] min-[1450px]:[grid-template-columns:minmax(0,1fr)_300px] max-[1151px]:[grid-template-columns:minmax(0,1fr)_230px] max-[1151px]:gap-[17px] max-[951px]:[grid-template-columns:1fr]",
  "section-heading":
    "mb-5 flex flex-wrap items-center justify-between gap-3 [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight [&_p]:mt-2 [&_p]:text-xs [&_p]:leading-6 [&_p]:text-slate-400",
  "count-pill":
    "ml-2 inline-flex rounded-lg bg-violet-50 px-2 py-1 text-[10px] font-medium text-violet-500 dark:bg-violet-950/30 dark:text-violet-400",
  "text-button":
    "inline-flex items-center gap-[6px] bg-[transparent] text-[#776487] p-0 text-[12px] font-medium [&:hover]:text-[#67489b] [&_svg]:w-[13px] max-[701px]:text-[12px] dark:text-slate-100 dark:[&:hover]:text-slate-100",
  "purple-text": "text-[#776487] dark:text-slate-100",
  "progress-track":
    "h-[4px] bg-[#f2ecf7] rounded-[4px] overflow-hidden mt-[7px] [&>span]:block [&>span]:h-[100%] [&>span]:bg-[#9671cc] [&>span]:rounded-[4px] [&>span]:[transition:width_.3s] dark:bg-slate-800",
  "little-pill":
    "text-[10px] bg-[#f4f0f9] text-[#776487] rounded-[4px] tracking-[.6px] p-[5px_7px] whitespace-nowrap dark:bg-slate-800 dark:text-slate-100",
  "page-footer":
    "mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 pt-6 text-[9px] text-slate-400 dark:border-slate-700/70",
  tabs: "flex flex-wrap gap-[5px] [&_button]:bg-[transparent] [&_button]:p-[8px_12px] [&_button]:rounded-[7px] [&_button]:text-[13px] [&_button]:text-[#776487] [&_button.selected]:bg-[#eae1fb] [&_button.selected]:text-[#8c6ab9] max-[701px]:[&_button]:text-[12px] max-[701px]:[&_button]:p-[8px_10px] max-[701px]:gap-[1px] dark:[&_button]:text-slate-100 dark:[&_button.selected]:bg-slate-800 dark:[&_button.selected]:text-slate-300",
  panel:
    "rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm sm:p-7 [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight dark:border-slate-700/70 dark:bg-slate-900",
  "assignment-row":
    "flex items-start gap-[15px] [border-top:1px_solid_var(--line)] p-[22px_0] [&_h3]:text-[14px] [&_h3]:text-[#695177] [&_p]:text-[12px] [&_p]:leading-[1.7] [&_p]:text-[#776487] [&_p]:m-[8px_0_12px] [&_p]:whitespace-pre-wrap [&.finished_h3]:[text-decoration:line-through] [&.finished_h3]:text-[#776487] max-[951px]:flex-wrap max-[701px]:[&_p]:text-[12px] max-[701px]:[&_h3]:text-[14px] dark:[&_h3]:text-slate-100 dark:[&_p]:text-slate-100 dark:[&.finished_h3]:text-slate-100",
  "assignment-info":
    "[flex:1] min-w-[0] [overflow-wrap:anywhere] [&_.submission]:bg-[#f6f1fb] [&_.submission]:p-[12px] [&_.submission]:rounded-[8px] [&_.submission]:mb-[0] [&_.submission]:text-[13px] [&_.submission]:text-[#8b769c] max-[701px]:[&_.submission]:text-[12px] dark:[&_.submission]:bg-slate-800 dark:[&_.submission]:text-slate-300",
  "check-button":
    "w-[23px] h-[23px] [border:1px_solid_#d6c6e4] rounded-[7px] bg-[white] flex items-center justify-center text-[white] shrink-0 mt-[2px] [&.checked]:bg-[#a88bc9] [&.checked]:[border-color:#a88bc9]",
  "row-actions":
    "flex items-center gap-[12px] max-[951px]:w-[100%] max-[951px]:pl-[38px] max-[701px]:flex-wrap",
  "due-date":
    "text-[12px] text-[#776487] inline-flex items-center gap-[5px] ml-[12px] [&.overdue]:text-[#b05a70] [&_svg]:w-[12px] dark:text-slate-100 dark:[&.overdue]:text-slate-100",
  "quiz-grid":
    "grid [grid-template-columns:repeat(2,minmax(0,1fr))] gap-[20px] max-[701px]:gap-[12px] max-[701px]:[grid-template-columns:1fr]",
  "quiz-card":
    "[&>.icon-tile]:mb-[20px] [&_.eyebrow]:mb-[10px] [&_h2]:text-[19px] [&>p]:text-[12px] [&>p]:text-[#776487] [&>p]:m-[12px_0_22px] [&>p]:leading-[1.8] max-[1151px]:[&_h2]:text-[16px] max-[951px]:[&>.button]:text-[12px] max-[701px]:p-[17px] max-[701px]:[&_h2]:text-[19px] max-[701px]:[&_h2]:leading-[1.6] max-[701px]:[&>p]:text-[13px] max-[701px]:[&>.button]:text-[12px] max-[701px]:[&>.button]:gap-[5px] max-[701px]:[&>.button]:p-[10px] max-[701px]:[&>.button]:w-[100%] max-[701px]:[&>.button_svg]:w-[12px] dark:[&>p]:text-slate-100",
  "quiz-meta":
    "flex gap-[25px] text-[12px] text-[#776487] mb-[22px] [&_span]:flex [&_span]:items-center [&_span]:gap-[5px] [&_svg]:w-[12px] max-[951px]:flex-col max-[951px]:gap-[8px] max-[701px]:text-[11px] max-[701px]:gap-[10px] max-[701px]:flex-row max-[701px]:flex-wrap dark:text-slate-100",
  "last-score":
    "text-[13px] p-[10px] rounded-[6px] bg-[#edf4ee] text-[#83a58b] m-[0_0_15px] flex gap-[8px] items-center max-[701px]:text-[12px] max-[701px]:p-[8px] dark:bg-slate-800 dark:text-slate-300",
  lounge:
    "flex min-h-[550px] p-0 overflow-hidden max-[951px]:flex-col max-[701px]:[&_.messages]:min-h-[260px]",
  rooms:
    "w-[235px] shrink-0 p-[25px_18px] bg-[#fdfbff] [border-right:1px_solid_var(--line)] [&_h3]:m-[12px_0_25px] [&>button]:flex [&>button]:items-center [&>button]:gap-[9px] [&>button]:bg-[transparent] [&>button]:w-[100%] [&>button]:text-left [&>button]:text-[13px] [&>button]:p-[13px_10px] [&>button]:rounded-[8px] [&>button]:text-[#776487] [&>button]:m-[5px_0] [&>button.selected]:bg-[#eee5fa] [&>button.selected]:text-[#8e6bb6] [&>button>span]:text-[17px] max-[1151px]:w-[195px] max-[1151px]:[&>button]:text-[12px] max-[951px]:[border-right:0] max-[951px]:[border-bottom:1px_solid_var(--line)] max-[951px]:w-[auto] max-[951px]:flex max-[951px]:items-center max-[951px]:gap-[5px] max-[951px]:flex-wrap max-[951px]:p-[16px] max-[951px]:[&_.eyebrow]:hidden max-[951px]:[&_h3]:hidden max-[951px]:[&>button]:w-[auto] max-[951px]:[&>button]:m-0 max-[951px]:[&>button]:p-[9px] max-[951px]:[&>button]:text-[12px] max-[701px]:p-[12px_9px] max-[701px]:[&>button]:text-[11px] dark:bg-slate-800 dark:[&>button]:text-slate-100 dark:[&>button.selected]:bg-slate-800 dark:[&>button.selected]:text-slate-300",
  "room-note":
    "mt-[50px] p-[15px] bg-[#f3edf9] rounded-[10px] text-[#776487] [&_p]:text-[12px] [&_p]:leading-[1.9] [&_p]:mt-[8px] max-[951px]:hidden dark:bg-slate-800 dark:text-slate-100",
  "chat-main": "flex flex-col [flex:1] min-w-[0]",
  "chat-heading":
    "p-[22px_25px] [border-bottom:1px_solid_var(--line)] [&_h2]:text-[16px] [&_p]:text-[12px] [&_p]:text-[#776487] [&_p]:mt-[7px] max-[951px]:p-[20px] max-[701px]:[&_h2]:text-[15px] dark:[&_p]:text-slate-100",
  messages:
    "[flex:1] min-h-[300px] max-h-[500px] overflow-auto p-[25px] max-[701px]:p-[20px]",
  message:
    "flex gap-[10px] mb-[22px] [&_.avatar]:w-[30px] [&_.avatar]:h-[30px] [&_.avatar]:text-[12px] [&>div]:min-w-[0] [&_p]:whitespace-pre-wrap [&_p]:[overflow-wrap:anywhere] [&_p]:text-[12px] [&_p]:text-[#695177] [&_p]:leading-[1.9] [&_p]:mt-[5px] dark:[&_p]:text-slate-100",
  "message-meta":
    "flex gap-[12px] items-center text-[13px] text-[#776487] [&_time]:text-[11px] [&_time]:text-[#776487] dark:text-slate-100 dark:[&_time]:text-slate-100",
  "message-form":
    "p-[18px] [border-top:1px_solid_var(--line)] flex gap-[10px] [&>input]:bg-[#faf7ff] [&>input]:[border:1px_solid_#eee4f7] [&>input]:rounded-[8px] [&>input]:p-[12px] [&>input]:text-[13px] [&>input]:w-[100%] [&>input]:text-[#836b96] [&>input]:min-w-[0] [&>input::placeholder]:text-[#776487] [&_.button]:p-[12px] max-[701px]:p-[12px] max-[701px]:gap-[8px] max-[701px]:[&>input]:text-[12px] max-[701px]:[&>input]:p-[10px] dark:[&>input]:bg-slate-800 dark:[&>input]:text-slate-300 dark:[&>input::placeholder]:text-slate-100",
  "progress-hero":
    "flex items-center gap-[20px] bg-[#eae2f7] [border:1px_solid_#e2d8ee] rounded-[14px] p-[25px] mb-[24px] [&>.icon-tile]:w-[57px] [&>.icon-tile]:h-[57px] [&>.icon-tile]:rounded-[50%] [&>.icon-tile]:bg-[#fff9] [&_p]:text-[13px] [&_p]:text-[#776487] [&_p]:leading-[1.8] [&_p]:mt-[8px] [&>.button]:ml-[auto] max-[1151px]:[&_h2]:text-[17px] max-[1151px]:[&_.button]:text-[12px] max-[1151px]:[&_.button]:p-[10px] max-[1151px]:[&_p]:text-[12px] max-[951px]:flex-wrap max-[951px]:[&>.button]:ml-[0] max-[701px]:p-[20px] max-[701px]:gap-[12px] max-[701px]:[&>.icon-tile]:w-[45px] max-[701px]:[&>.icon-tile]:h-[45px] max-[701px]:[&_h2]:text-[16px] max-[701px]:[&_p]:text-[12px] max-[701px]:[&>div]:[flex:1] dark:bg-slate-800 dark:[&_p]:text-slate-100",
  "journey-row":
    "flex items-center gap-[15px] p-[24px_0] [border-bottom:1px_solid_var(--line)] [&:last-child]:border-0 [&>div]:[flex:1] [&_h3]:text-[12px] [&_h3]:text-[#9377a6] [&_p]:text-[12px] [&_p]:text-[#776487] [&_p]:m-[6px_0_12px] [&>b]:text-[12px] [&>b]:text-[#776487] max-[701px]:gap-[10px] max-[701px]:[&_h3]:text-[13px] max-[701px]:[&_p]:text-[12px] max-[701px]:[&>.icon-tile]:w-[30px] max-[701px]:[&>.icon-tile]:h-[30px] max-[701px]:[&>.icon-tile_svg]:w-[14px] dark:[&_h3]:text-slate-300 dark:[&_p]:text-slate-100 dark:[&>b]:text-slate-100",
  "badge-row":
    "flex items-center gap-[12px] p-[21px_0] opacity-[.8] [&.unlocked]:opacity-[1] [&_.icon-tile]:bg-[#f2edf7] [&_.icon-tile]:text-[#776487] [&.unlocked_.icon-tile]:bg-[#fff1d7] [&.unlocked_.icon-tile]:text-[#c6a46a] [&_h3]:text-[13px] [&_h3]:text-[#776487] [&_p]:text-[12px] [&_p]:text-[#776487] [&_p]:mt-[5px] [&_p]:leading-[1.7] [&>span:last-child]:ml-[auto] [&>span:last-child]:text-[11px] [&>span:last-child]:text-[#776487] [&.unlocked>span:last-child]:text-[#776487] dark:[&_.icon-tile]:bg-slate-800 dark:[&_.icon-tile]:text-slate-100 dark:[&.unlocked_.icon-tile]:bg-slate-800 dark:[&.unlocked_.icon-tile]:text-slate-300 dark:[&_h3]:text-slate-100 dark:[&_p]:text-slate-100 dark:[&>span:last-child]:text-slate-100 dark:[&.unlocked>span:last-child]:text-slate-100",
  "settings-grid":
    "grid [grid-template-columns:1.2fr_1fr] gap-[25px] max-[951px]:[grid-template-columns:1fr]",
  "settings-form":
    "[&_h2]:mb-[10px] [&>.subtle]:mb-[25px] [&_label]:flex [&_label]:flex-col [&_label]:gap-[9px] [&_label]:text-[12px] [&_label]:text-[#695177] [&_label]:mb-[20px] [&_input]:bg-[#fcfaff] [&_input]:[border:1px_solid_#e8deef] [&_input]:text-[#836e94] [&_input]:rounded-[8px] [&_input]:p-[12px] [&_input]:w-[100%] [&_input]:text-[12px] [&_input]:leading-[1.6] [&_select]:bg-[#fcfaff] [&_select]:[border:1px_solid_#e8deef] [&_select]:text-[#836e94] [&_select]:rounded-[8px] [&_select]:p-[12px] [&_select]:w-[100%] [&_select]:text-[12px] [&_select]:leading-[1.6] [&_.button]:mt-[6px] dark:[&_label]:text-slate-100 dark:[&_input]:bg-slate-800 dark:[&_input]:text-slate-300 dark:[&_select]:bg-slate-800 dark:[&_select]:text-slate-300",
  "account-panel":
    "[&_h2]:mb-[10px] [&>p]:text-[12px] [&>p]:text-[#776487] [&>p]:leading-[1.9] [&>p]:m-[15px_0_22px] [&_hr]:border-0 [&_hr]:[border-top:1px_solid_var(--line)] [&_hr]:m-[30px_0] [&_h3]:text-[14px] [&_h3]:text-[#776487] dark:[&>p]:text-slate-100 dark:[&_h3]:text-slate-100",
  "modal-form":
    "[&>label]:flex [&>label]:flex-col [&>label]:gap-[9px] [&>label]:text-[12px] [&>label]:text-[#695177] [&>label]:mb-[20px] [&_input]:bg-[#fcfaff] [&_input]:[border:1px_solid_#e8deef] [&_input]:text-[#836e94] [&_input]:rounded-[8px] [&_input]:p-[12px] [&_input]:w-[100%] [&_input]:text-[12px] [&_input]:leading-[1.6] [&_textarea]:bg-[#fcfaff] [&_textarea]:[border:1px_solid_#e8deef] [&_textarea]:text-[#836e94] [&_textarea]:rounded-[8px] [&_textarea]:p-[12px] [&_textarea]:w-[100%] [&_textarea]:text-[12px] [&_textarea]:leading-[1.6] [&_select]:bg-[#fcfaff] [&_select]:[border:1px_solid_#e8deef] [&_select]:text-[#836e94] [&_select]:rounded-[8px] [&_select]:p-[12px] [&_select]:w-[100%] [&_select]:text-[12px] [&_select]:leading-[1.6] mt-[25px] [&_textarea]:[resize:vertical] [&_input::placeholder]:text-[#776487] [&_textarea::placeholder]:text-[#776487] [&>.button]:w-[100%] [&>.button]:mt-[5px] [&>small]:block [&>small]:leading-[1.9] [&>small]:mb-[14px] [&>small]:text-[12px] dark:[&>label]:text-slate-100 dark:[&_input]:bg-slate-800 dark:[&_input]:text-slate-300 dark:[&_textarea]:bg-slate-800 dark:[&_textarea]:text-slate-300 dark:[&_select]:bg-slate-800 dark:[&_select]:text-slate-300 dark:[&_input::placeholder]:text-slate-100 dark:[&_textarea::placeholder]:text-slate-100",
  "form-columns":
    "[&>label]:flex [&>label]:flex-col [&>label]:gap-[9px] [&>label]:text-[12px] [&>label]:text-[#695177] [&>label]:mb-[20px] grid [grid-template-columns:1fr_1fr] gap-[15px] dark:[&>label]:text-slate-100",
  toast:
    "fixed bottom-[25px] left-[calc(50%_+_118px)] [transform:translateX(-50%)] z-[1000] bg-[#4f3c64] [border:1px_solid_#70587e] shadow-[0_6px_20px_#3e215025] text-[#fff] flex items-center gap-[12px] p-[14px_16px] rounded-[10px] text-[12px] max-w-[calc(100%_-_30px)] [&>svg]:text-[#776487] [&>button]:bg-[none] [&>button]:text-[#776487] [&>button]:flex [&>button]:items-center [&>button]:p-[3px] [&>button]:ml-[10px] max-[1151px]:left-[calc(50%_+_102px)] max-[701px]:left-[50%] max-[701px]:text-[13px] max-[701px]:w-[max-content] max-[701px]:max-w-[calc(100%_-_30px)] dark:[&>svg]:text-slate-100 dark:[&>button]:text-slate-100",
  "modal-backdrop":
    "fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-slate-950/50 p-4 backdrop-blur-sm sm:p-6",
  modal:
    "relative m-auto max-h-[90dvh] w-full max-w-[560px] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-6 text-slate-700 shadow-2xl sm:p-8 [&_h2]:pr-5 [&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-[1.4] [&_h2]:tracking-tight [&_h2]:text-slate-800 [&>p]:mt-3 [&>p]:text-sm [&>p]:leading-7 [&>p]:text-slate-400 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-200 dark:[&_h2]:text-slate-100",
  "modal-close":
    "absolute right-3 top-3 z-10 rounded-lg p-2 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800/50",
  "auth-switch":
    "mx-auto mt-6 flex text-xs font-medium text-violet-500 dark:text-violet-400",
  "lesson-modal": "max-w-[760px]",
  "lesson-tabs":
    "mt-6 grid gap-2 sm:grid-cols-3 [&>button]:flex [&>button]:items-center [&>button]:gap-2 [&>button]:rounded-xl [&>button]:border [&>button]:border-slate-100 [&>button]:bg-slate-50 [&>button]:p-3 [&>button]:text-left [&>button]:text-[11px] [&>button]:leading-5 [&>button]:text-slate-400 [&>button.selected]:border-violet-200 [&>button.selected]:bg-violet-50 [&>button.selected]:text-violet-600 [&_svg]:h-3 [&_svg]:w-3 dark:[&>button]:border-slate-700/70 dark:[&>button]:bg-slate-800/50 dark:[&>button.selected]:border-violet-900/60 dark:[&>button.selected]:bg-violet-950/30 dark:[&>button.selected]:text-violet-300",
  "lesson-body":
    "mt-6 border-t border-slate-100 pt-2 [&>p]:my-5 [&>p]:whitespace-pre-wrap [&>p]:text-sm [&>p]:leading-8 [&>p]:text-slate-500 dark:border-slate-700/70 dark:[&>p]:text-slate-400",
  "lesson-tip":
    "bg-[#f7f0fc] [border:1px_solid_#ebdef6] rounded-[9px] p-[16px] flex gap-[12px] text-[13px] leading-[1.9] text-[#776487] mt-[25px] [&_svg]:w-[19px] [&_svg]:mt-[4px] dark:bg-slate-800 dark:text-slate-100",
  "modal-actions":
    "flex justify-between gap-[12px] mt-[28px] max-[701px]:[&>.button]:text-[12px] max-[701px]:[&>.button]:p-[11px]",
  "quiz-form":
    "[&_fieldset]:border-0 [&_fieldset]:[border-top:1px_solid_#efe5f6] [&_fieldset]:p-[21px_0] [&_fieldset]:m-[20px_0] [&_legend]:text-[12px] [&_legend]:text-[#8c6c9f] [&_legend]:font-medium [&_legend]:leading-[1.8] [&_legend]:p-[0_0_0_2px] [&_legend_span]:[display:inline-grid] [&_legend_span]:[place-items:center] [&_legend_span]:bg-[#f1e8fa] [&_legend_span]:rounded-[50%] [&_legend_span]:w-[22px] [&_legend_span]:h-[22px] [&_legend_span]:text-[12px] [&_legend_span]:mr-[8px] [&>.button]:w-[100%] dark:[&_legend]:text-slate-300 dark:[&_legend_span]:bg-slate-800",
  answer:
    "flex items-center gap-[10px] text-[12px] leading-[1.8] text-[#71547f] [border:1px_solid_#eee5f4] bg-[#fcfaff] p-[10px_12px] rounded-[8px] m-[9px_0] cursor-pointer [&.selected]:bg-[#eee2f9] [&.selected]:[border-color:#c9aadd] [&.selected]:text-[#8a64a4] [&_input]:[accent-color:#a37cc5] dark:text-slate-100 dark:bg-slate-800 dark:[&.selected]:bg-slate-800 dark:[&.selected]:border-slate-700/70 dark:[&.selected]:text-slate-300",
  "quiz-results":
    "text-center pt-[15px] [&_h3]:text-[19px] [&_h3]:text-[#776487] [&_h3]:leading-[1.7] [&>p]:text-[13px] [&>p]:text-[#776487] [&>p]:m-[12px_0_25px] [&>.button]:mt-[20px] dark:[&_h3]:text-slate-100 dark:[&>p]:text-slate-100",
  "result-icon":
    "grid [place-items:center] w-[70px] h-[70px] rounded-[50%] bg-[#fff0d7] text-[#776487] m-[0_auto_20px] text-[35px] dark:bg-slate-800 dark:text-slate-100",
  "result-score":
    "[font-family:Manrope,sans-serif] font-bold text-[40px] text-[#776487] mt-[15px] [&_span]:text-[21px] [&_span]:text-[#776487] dark:text-slate-100 dark:[&_span]:text-slate-100",
  "answer-review":
    "text-left bg-[#fff4ef] [border:1px_solid_#f4e1d6] rounded-[9px] p-[12px] m-[10px_0] text-[#776487] text-[13px] leading-[1.8] [&.correct]:bg-[#f0f6ef] [&.correct]:[border-color:#dfebdf] [&.correct]:text-[#776487] [&_p]:text-[12px] [&_p]:mt-[5px] dark:bg-slate-800 dark:text-slate-100 dark:[&.correct]:bg-slate-800 dark:[&.correct]:border-slate-700/70 dark:[&.correct]:text-slate-100",
  "error-message":
    "p-[10px] bg-[#fff0f3] text-[#b67484] text-[12px] rounded-[6px] dark:bg-slate-800 dark:text-slate-300",
  "assignment-tabs": "mb-[20px] max-[701px]:[&_button]:text-[12px]",
  "shared-grid":
    "grid [grid-template-columns:repeat(2,minmax(0,1fr))] gap-[18px] max-[951px]:[grid-template-columns:1fr]",
  "shared-card":
    "[border:1px_solid_#ece2f3] rounded-[12px] p-[21px] [&_h3]:text-[#725183] [&_h3]:text-[16px] [&_h3]:leading-[1.7] [&>p]:text-[13px] [&>p]:leading-[1.8] [&>p]:text-[#816b90] [&>p]:m-[12px_0] [&>p]:whitespace-pre-wrap [&>p]:[overflow-wrap:anywhere] [&>p]:max-h-[100px] [&>p]:overflow-auto max-[701px]:p-[17px] dark:[&_h3]:text-slate-100 dark:[&>p]:text-slate-300",
  marks: "text-[11px] text-[#9770ae] dark:text-slate-300",
  "shared-author":
    "text-[11px] text-[#8b719d] flex flex-wrap gap-[12px] m-[18px_0] [&>span]:flex [&>span]:items-center [&>span]:gap-[5px] [&_svg]:w-[12px] dark:text-slate-300",
  "shared-actions":
    "flex items-center gap-[7px] flex-wrap [&>.button]:text-[11px] [&>.button]:p-[10px_12px] max-[701px]:[&_.button]:text-[12px]",
  "shared-dialog":
    "m-[auto] text-[#695177] [&::backdrop]:bg-[#25153466] [&::backdrop]:[backdrop-filter:blur(5px)] [&:focus]:[outline:none] max-[701px]:w-[calc(100%_-_28px)] dark:text-slate-100",
  "shared-instructions": "whitespace-pre-wrap [overflow-wrap:anywhere]",
  "review-title":
    "[border-top:1px_solid_#ece3f3] pt-[22px] mt-[25px] mb-[18px]",
  "review-card":
    "bg-[#faf6fd] [border:1px_solid_#eee3f6] rounded-[10px] p-[18px] m-[18px_0] [&_p]:whitespace-pre-wrap [&_p]:[overflow-wrap:anywhere] [&_p]:leading-[1.9] [&_p]:text-[13px] [&_p]:text-[#7d658d] [&_p]:m-[12px_0] [&_.last-score]:mt-[15px] [&_h3]:text-[14px] [&_h3]:text-[#886298] dark:bg-slate-800 dark:[&_p]:text-slate-100 dark:[&_h3]:text-slate-100",
  "google-button":
    "mt-6 w-full gap-3 rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50 [&_svg]:h-5 [&_svg]:w-5 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800/50",
  "auth-divider":
    "flex items-center gap-[12px] m-[20px_0_0] text-[#776487] text-[11px] [&:before]:[content:''] [&:before]:h-[1px] [&:before]:bg-[#e9e3ef] [&:before]:[flex:1] [&:after]:[content:''] [&:after]:h-[1px] [&:after]:bg-[#e9e3ef] [&:after]:[flex:1] [&+.modal-form]:mt-[20px] dark:text-slate-100 dark:[&:before]:bg-slate-800 dark:[&:after]:bg-slate-800",
  "brand-mark": "block shrink-0 rounded-[11px]",
};
export function ui(tokens = "") {
  return applyRecipes(recipes, tokens);
}
