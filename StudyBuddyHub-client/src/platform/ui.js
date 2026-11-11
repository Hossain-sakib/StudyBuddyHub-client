/** Shared Tailwind recipes for recurring patterns; presentation only. */
const recipes = {
  "app-shell":
    "min-h-screen bg-[#f5f6fa] font-sans text-slate-800 antialiased dark:bg-slate-950 dark:text-slate-100",
  sidebar:
    "fixed top-[0] bottom-[0] left-[0] w-[236px] bg-[white] [border-right:1px_solid_var(--line)] p-[32px_21px_18px] flex flex-col z-[40] [&_nav]:flex [&_nav]:flex-col [&_nav]:gap-[7px] [&_nav_a]:flex [&_nav_a]:items-center [&_nav_a]:gap-[13px] [&_nav_a]:p-[13px_14px] [&_nav_a]:rounded-[9px] [&_nav_a]:text-[13px] [&_nav_a]:font-medium [&_nav_a]:text-[#7c798f] [&_nav_a]:whitespace-nowrap [&_nav_a_svg]:text-[17px] [&_nav_a:hover]:bg-[#f8f5ff] [&_nav_a:hover]:text-[#6e54cf] [&_nav_a.active]:bg-[#eee9fd] [&_nav_a.active]:text-[#7860d4] [&_nav_a.active]:font-bold max-[1151px]:w-[205px] max-[1151px]:p-[28px_14px_18px] max-[701px]:[transform:translateX(-100%)] max-[701px]:[transition:transform_.2s] max-[701px]:w-[236px] max-[701px]:[&.is-open]:[transform:translateX(0)] dark:[&_nav_a]:text-slate-300 dark:[&_nav_a:hover]:bg-slate-800 dark:[&_nav_a:hover]:text-slate-100 dark:[&_nav_a.active]:bg-slate-800 dark:[&_nav_a.active]:text-slate-100",
  "brand-dot": "text-[#776487] dark:text-slate-100",
  settings:
    "flex items-center gap-[13px] p-[13px_14px] rounded-[9px] text-[12px] font-medium text-[#7c798f] whitespace-nowrap [&_svg]:text-[17px] [&:hover]:bg-[#f8f5ff] [&:hover]:text-[#6e54cf] [&.active]:bg-[#eee9fd] [&.active]:text-[#7860d4] [&.active]:font-bold mb-[12px] dark:text-slate-300 dark:[&:hover]:bg-slate-800 dark:[&:hover]:text-slate-100 dark:[&.active]:bg-slate-800 dark:[&.active]:text-slate-100",
  profile:
    "[border-top:1px_solid_var(--line)] bg-[transparent] flex items-center gap-[10px] p-[17px_2px_0] w-[100%] text-left [&_strong]:text-[12px] [&_strong]:block [&_strong]:text-[#494453] [&_small]:text-[12px] [&_small]:block [&_small]:text-[#776487] [&_small]:mt-[3px] [&>svg]:ml-[auto] [&>svg]:text-[#999] [&>svg]:text-[14px] dark:[&_strong]:text-slate-100 dark:[&_small]:text-slate-100 dark:[&>svg]:text-slate-300",
  avatar:
    "flex justify-center items-center bg-[#f0d0b5] text-[#8b573e] w-[35px] h-[35px] rounded-[50%] font-bold text-[13px] [border:3px_solid_#fff4e8] shrink-0 dark:bg-slate-800 dark:text-slate-100",
  small:
    "w-[32px] h-[32px] text-[13px] max-[701px]:w-[27px] max-[701px]:h-[27px] max-[701px]:text-[12px]",
  "page-heading":
    "mb-7 flex flex-wrap items-end justify-between gap-4 [&_h1]:font-heading [&_h1]:text-[25px] [&_h1]:font-bold [&_h1]:leading-[1.4] [&_h1]:tracking-[-.9px] [&_h1]:text-slate-800 sm:[&_h1]:text-[30px] [&_p]:mt-2 [&_p]:max-w-xl [&_p]:text-xs [&_p]:leading-7 [&_p]:text-slate-400 dark:[&_h1]:text-slate-100",
  overline:
    "mb-2 text-[8px] font-semibold uppercase tracking-[.18em] text-slate-400",
  wave: "ml-1 inline-block text-amber-400",
  button:
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-xs font-semibold transition duration-150 disabled:cursor-not-allowed disabled:opacity-50 motion-reduce:transition-none [&_svg]:h-4 [&_svg]:w-4",
  white:
    "border border-slate-200 bg-white text-slate-500 hover:border-violet-200 hover:text-violet-600 dark:border-slate-700/70 dark:bg-slate-900 dark:text-slate-400 dark:hover:border-violet-900/60 dark:hover:text-violet-300",
  primary: "bg-violet-600 text-white shadow-sm hover:bg-violet-700",
  dark: "bg-[#302a43] text-white hover:bg-violet-700",
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
  "course-card":
    "bg-[#fff] [border:1px_solid_#eae7f0] rounded-[12px] p-[8px] overflow-hidden max-[701px]:p-[6px] dark:bg-slate-800",
  "course-art":
    "h-[146px] rounded-[8px] relative flex items-center justify-center overflow-hidden [&.purple]:bg-[#e3d2ff] [&.orange]:bg-[#ffe1bd] [&.green]:bg-[#d5eedb] [&.pink]:bg-[#f9d5e7] [&>svg]:relative [&>svg]:z-[2] [&>svg]:w-[60px] [&>svg]:h-[60px] [&>svg]:[stroke-width:1.3] [&>svg]:[transform:rotate(-12deg)] [&>svg]:[filter:drop-shadow(4px_7px_0_#ffffff88)] [&.purple>svg]:text-[#776487] [&.orange>svg]:text-[#c28b5b] [&.green>svg]:text-[#7b9d82] [&.pink>svg]:text-[#776487] min-[1450px]:h-[180px] max-[951px]:h-[160px] max-[701px]:h-[155px] max-[701px]:[&>svg]:w-[47px] max-[701px]:[&>svg]:h-[47px] dark:[&.purple]:bg-slate-800 dark:[&.orange]:bg-slate-800 dark:[&.green]:bg-slate-800 dark:[&.pink]:bg-slate-800 dark:[&.purple>svg]:text-slate-100 dark:[&.orange>svg]:text-slate-300 dark:[&.green>svg]:text-slate-300 dark:[&.pink>svg]:text-slate-100",
  eyebrow:
    "text-[11px] tracking-[.8px] font-semibold uppercase text-[#776487] block max-[701px]:text-[10px] dark:text-slate-100",
  "purple-text": "text-[#776487] dark:text-slate-100",
  "progress-track":
    "h-[4px] bg-[#f2ecf7] rounded-[4px] overflow-hidden mt-[7px] [&>span]:block [&>span]:h-[100%] [&>span]:bg-[#9671cc] [&>span]:rounded-[4px] [&>span]:[transition:width_.3s] dark:bg-slate-800",
  "little-pill":
    "text-[10px] bg-[#f4f0f9] text-[#776487] rounded-[4px] tracking-[.6px] p-[5px_7px] whitespace-nowrap dark:bg-slate-800 dark:text-slate-100",
  timer:
    "[font-family:Manrope,sans-serif] text-[41px] tracking-[3px] text-center m-[19px_0] text-[#8f7aa9] font-semibold leading-[1.2] [&>span]:text-[#776487] max-[701px]:text-[44px] max-[701px]:m-[20px_0] dark:text-slate-300 dark:[&>span]:text-slate-100",
  "page-footer":
    "mt-9 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200/70 pt-6 text-[9px] text-slate-400 dark:border-slate-700/70",
  tabs: "flex flex-wrap gap-[5px] [&_button]:bg-[transparent] [&_button]:p-[8px_12px] [&_button]:rounded-[7px] [&_button]:text-[13px] [&_button]:text-[#776487] [&_button.selected]:bg-[#eae1fb] [&_button.selected]:text-[#8c6ab9] max-[701px]:[&_button]:text-[12px] max-[701px]:[&_button]:p-[8px_10px] max-[701px]:gap-[1px] dark:[&_button]:text-slate-100 dark:[&_button.selected]:bg-slate-800 dark:[&_button.selected]:text-slate-300",
  search:
    "flex items-center gap-[8px] [border:1px_solid_#e8e1ef] rounded-[8px] bg-[white] p-[10px_12px] max-w-[260px] [&_svg]:text-[#776487] [&_svg]:w-[14px] [&_input]:border-0 [&_input]:bg-[transparent] [&_input]:w-[100%] [&_input]:[outline:0] [&_input]:text-[13px] [&_input]:text-[#7b688d] [&_input::placeholder]:text-[#776487] max-[951px]:max-w-[none] dark:[&_svg]:text-slate-100 dark:[&_input]:text-slate-300 dark:[&_input::placeholder]:text-slate-100",
  panel:
    "rounded-2xl border border-slate-200/70 bg-white p-5 shadow-sm sm:p-7 [&_h2]:font-heading [&_h2]:text-lg [&_h2]:font-bold [&_h2]:tracking-tight dark:border-slate-700/70 dark:bg-slate-900",
  "empty-state":
    "text-center p-[65px_20px] text-[#776487] [&>svg]:w-[40px] [&>svg]:h-[40px] [&>svg]:mb-[16px] [&>svg]:text-[#776487] [&_h2]:text-[20px] [&_h2]:text-[#8a709e] [&_p]:text-[12px] [&_p]:m-[13px_0_22px] [&_p]:leading-[1.8] [&>.button]:mt-[4px] max-[701px]:p-[40px_12px] max-[701px]:[&_h2]:text-[17px] max-[701px]:[&_p]:text-[13px] dark:text-slate-100 dark:[&>svg]:text-slate-100 dark:[&_h2]:text-slate-300",
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
  "public-site":
    "min-h-screen bg-[#fffdf9] font-sans text-[#29243d] antialiased dark:bg-slate-950 dark:text-slate-100",
  "brand-mark": "block shrink-0 rounded-[11px]",
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
  "website-hero-art":
    "relative h-[460px] bg-[#f0e9fc] rounded-[49%_46%_43%_52%] ml-[10px] max-[1101px]:h-[410px] max-[1101px]:[transform:scale(.9)] max-[1101px]:[transform-origin:center_right] max-[801px]:[transform:none] max-[801px]:max-w-[460px] max-[801px]:w-[100%] max-[801px]:m-[25px_auto_0] max-[801px]:h-[420px] max-[501px]:h-[330px] max-[501px]:mt-[30px] max-[501px]:max-w-[350px]",
  "art-circle":
    "absolute [border:1px_solid_#d8c7ef] rounded-[50%] [&.one]:w-[340px] [&.one]:h-[340px] [&.one]:top-[60px] [&.one]:left-[60px] [&.two]:w-[286px] [&.two]:h-[286px] [&.two]:top-[87px] [&.two]:left-[87px] [&.two]:[border-style:dashed] max-[501px]:[&.one]:w-[260px] max-[501px]:[&.one]:h-[260px] max-[501px]:[&.one]:left-[43px] max-[501px]:[&.one]:top-[35px] max-[501px]:[&.two]:w-[222px] max-[501px]:[&.two]:h-[222px] max-[501px]:[&.two]:left-[62px] max-[501px]:[&.two]:top-[54px]",
  "illustrated-book":
    "absolute w-[175px] h-[235px] rounded-[9px_19px_19px_9px] shadow-[12px_24px_30px_#6d489b26] [&:after]:[content:''] [&:after]:absolute [&:after]:left-[7px] [&:after]:right-[0] [&:after]:bottom-[0] [&:after]:h-[15px] [&:after]:[background:repeating-linear-gradient(#fffdf5_0,#fffdf5_3px,#e2d8e6_3px,#e2d8e6_4px)] [&:after]:rounded-[2px_1px_13px_3px] [&:after]:[transform:skewX(-13deg)] [&.back]:bg-[#f1bd7e] [&.back]:[border-left:12px_solid_#d9a163] [&.back]:top-[78px] [&.back]:left-[202px] [&.back]:[transform:rotate(17deg)] [&.back]:p-[30px_18px] [&.back]:text-[#9d652e] [&.back>span]:text-[14px] [&.back>span]:tracking-[1.2px] [&.back>span]:font-bold [&.back>span]:leading-[1.6] [&.front]:bg-[#9471cc] [&.front]:[border-left:12px_solid_#7a53b4] [&.front]:top-[140px] [&.front]:left-[103px] [&.front]:[transform:rotate(-15deg)] [&.front]:p-[24px_22px] [&.front]:flex [&.front]:flex-col [&.front]:items-center [&.front]:justify-center [&.front]:gap-[18px] [&.front>img]:w-[56px] [&.front>img]:h-[56px] [&.front>img]:rounded-[16px] [&.front>img]:opacity-[.95] [&.front>span]:[font-family:Manrope,sans-serif] [&.front>span]:text-[15px] [&.front>span]:leading-[1.6] [&.front>span]:text-[#fff6ff] [&.front>span]:font-bold [&.front>span]:text-center [&.front>span]:tracking-[-.3px] [&.front>i]:absolute [&.front>i]:bottom-[-22px] [&.front>i]:w-[22px] [&.front>i]:h-[48px] [&.front>i]:bg-[#d1e3cd] [&.front>i]:right-[22px] [&.front>i]:[clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)] max-[501px]:w-[125px] max-[501px]:h-[177px] max-[501px]:[&.back]:top-[53px] max-[501px]:[&.back]:left-[155px] max-[501px]:[&.back]:[border-left-width:9px] max-[501px]:[&.back]:p-[20px_13px] max-[501px]:[&.back>span]:text-[11px] max-[501px]:[&.front]:top-[104px] max-[501px]:[&.front]:left-[75px] max-[501px]:[&.front]:[border-left-width:9px] max-[501px]:[&.front]:p-[16px] max-[501px]:[&.front]:gap-[13px] max-[501px]:[&.front>img]:w-[40px] max-[501px]:[&.front>img]:h-[40px] max-[501px]:[&.front>img]:rounded-[12px] max-[501px]:[&.front>span]:text-[11px] max-[501px]:[&.front>i]:bottom-[-15px] max-[501px]:[&.front>i]:h-[32px] max-[501px]:[&.front>i]:w-[17px] max-[501px]:[&.front>i]:right-[17px] max-[501px]:[&:after]:h-[10px]",
  "art-spark":
    "absolute z-[2] text-[45px] text-[#a37bd3] [&.top]:left-[105px] [&.top]:top-[30px] [&.bottom]:right-[34px] [&.bottom]:bottom-[58px] [&.bottom]:text-[#c79d5f] [&.bottom]:text-[54px] max-[501px]:[&.top]:top-[12px] max-[501px]:[&.top]:left-[65px] max-[501px]:[&.top]:text-[33px] max-[501px]:[&.bottom]:right-[9px] max-[501px]:[&.bottom]:bottom-[34px] max-[501px]:[&.bottom]:text-[39px]",
  "site-floating":
    "absolute z-[3] flex items-center gap-[12px] shadow-[0_10px_24px_#76529915] bg-[#fffffff5] [border:1px_solid_#fff] rounded-[12px] p-[15px] text-[12px] text-[#705181] [&.idea]:right-[0] [&.idea]:top-[45px] [&.idea]:[transform:rotate(7deg)] [&.idea>span]:text-[25px] [&.idea>span]:text-[#c79c4e] [&.lesson]:left-[10px] [&.lesson]:bottom-[25px] [&.lesson]:[transform:rotate(-6deg)] [&.lesson>span]:grid [&.lesson>span]:[place-items:center] [&.lesson>span]:bg-[#e5efdf] [&.lesson>span]:text-[#7f9e70] [&.lesson>span]:w-[34px] [&.lesson>span]:h-[34px] [&.lesson>span]:rounded-[50%] [&_small]:block [&_small]:text-[#96809f] [&_small]:text-[10px] [&_small]:mt-[5px] max-[501px]:text-[10px] max-[501px]:p-[11px] max-[501px]:gap-[8px] max-[501px]:rounded-[9px] max-[501px]:[&.idea]:top-[12px] max-[501px]:[&.idea]:right-[0] max-[501px]:[&.idea>span]:text-[20px] max-[501px]:[&.lesson]:bottom-[13px] max-[501px]:[&.lesson]:left-[0] max-[501px]:[&.lesson>span]:w-[28px] max-[501px]:[&.lesson>span]:h-[28px] max-[501px]:[&_small]:text-[9px]",
  "site-art-dots":
    "w-[56px] h-[56px] absolute [background-image:radial-gradient(#be9cdb_1.5px,transparent_1.5px)] [background-size:9px_9px] left-[7px] top-[115px] [transform:rotate(-10deg)] max-[501px]:top-[88px] max-[501px]:left-[7px] max-[501px]:w-[40px] max-[501px]:h-[40px]",
  "site-value-strip":
    "grid grid-cols-2 gap-5 border-y border-slate-200/70 py-6 text-[10px] text-slate-500 md:grid-cols-4 md:text-xs [&>span]:flex [&>span]:items-center [&>span]:gap-2 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-violet-400 dark:border-slate-700/70 dark:text-slate-400",
  "site-section": "scroll-mt-24 py-12 md:py-16",
  "site-section-heading":
    "mb-7 flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-end [&_h2]:mt-3 [&_h2]:font-heading [&_h2]:text-[26px] [&_h2]:font-bold [&_h2]:leading-[1.3] [&_h2]:tracking-[-.8px] [&_h2]:text-slate-800 sm:[&_h2]:text-[32px] [&_p]:mt-3 [&_p]:max-w-xl [&_p]:text-xs [&_p]:leading-7 [&_p]:text-slate-400 dark:[&_h2]:text-slate-100",
  "community-copy":
    "[&_h2]:text-[38px] [&_h2]:leading-[1.3] [&_h2]:tracking-[-1.4px] [&_h2]:font-extrabold [&_h2]:text-[#3c2c4c] [&_h2]:mt-[12px] [&_h2]:m-[15px_0_18px] [&_p]:text-[14px] [&_p]:text-[#8e759e] [&_p]:leading-[1.95] [&_p]:mb-[26px] [&_p]:max-w-[450px] [&_.button]:text-[13px] [&_.button]:p-[14px_20px] max-[1101px]:[&_h2]:text-[32px] max-[801px]:max-w-[560px] max-[501px]:[&_h2]:text-[30px] max-[501px]:[&_h2]:tracking-[-1px] max-[501px]:[&_p]:text-[13px] max-[501px]:[&_.button]:text-[12px] max-[501px]:[&_.button]:p-[14px_17px] dark:[&_h2]:text-slate-100 dark:[&_p]:text-slate-300",
  "catalog-note": "shrink-0 text-[10px] text-slate-400",
  "public-course-grid": "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3",
  "public-course":
    "[border:1px_solid_#ece4f2] bg-[#fff] rounded-[14px] p-[8px] overflow-hidden [transition:transform_.2s,box-shadow_.2s] [&:hover]:[transform:translateY(-4px)] [&:hover]:shadow-[0_12px_28px_#7a4daa0c] [&_.course-art]:h-[195px] [&_h3]:text-[18px] [&_h3]:leading-[1.7] [&_h3]:text-[#493157] [&_h3]:m-[9px_0] [&_h3]:tracking-[-.4px] max-[1101px]:[&_.course-art]:h-[190px] max-[501px]:[&_.course-art]:h-[195px] max-[501px]:[&_h3]:text-[18px] [&_.course-art>svg]:w-[76px] [&_.course-art>svg]:h-[76px] [&_.course-art>svg]:[stroke-width:1.1] [&_.art-orbit]:w-[140px] [&_.art-orbit]:h-[140px] [&_.art-grid]:w-[66px] [&_.art-grid]:h-[66px] [&_.art-grid]:left-[27px] [&_.art-grid]:bottom-[24px] [&_.course-art:after]:[content:'✦'] [&_.course-art:after]:absolute [&_.course-art:after]:right-[35px] [&_.course-art:after]:bottom-[28px] [&_.course-art:after]:text-[31px] [&_.course-art:after]:opacity-[.5] [&_.course-art:after]:[transform:rotate(15deg)] shadow-[0_4px_20px_#603c8904] [border-color:#eae0f1] max-[1001px]:[&_.course-art]:h-[185px] dark:bg-slate-800 dark:[&_h3]:text-slate-100 dark:border-slate-700/70",
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
  return tokens
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => token + " " + (recipes[token] || ""))
    .join(" ");
}
