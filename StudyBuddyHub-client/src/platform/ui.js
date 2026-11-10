/** Named Tailwind recipes. No handwritten stylesheet rules; keep related visual states together. */
const recipes = {
  brand:
    "[font-family:'Manrope',sans-serif] flex items-center gap-[9px] text-[22px] font-extrabold tracking-[-1px] max-[1151px]:text-[20px] max-[1151px]:gap-[7px]",
  "app-shell": "min-h-[100vh]",
  sidebar:
    "fixed top-[0] bottom-[0] left-[0] w-[236px] bg-[white] [border-right:1px_solid_var(--line)] p-[32px_21px_18px] flex flex-col z-[40] [&_nav]:flex [&_nav]:flex-col [&_nav]:gap-[7px] [&_nav_a]:flex [&_nav_a]:items-center [&_nav_a]:gap-[13px] [&_nav_a]:p-[13px_14px] [&_nav_a]:rounded-[9px] [&_nav_a]:text-[13px] [&_nav_a]:font-medium [&_nav_a]:text-[#7c798f] [&_nav_a]:whitespace-nowrap [&_nav_a_svg]:text-[17px] [&_nav_a:hover]:bg-[#f8f5ff] [&_nav_a:hover]:text-[#6e54cf] [&_nav_a.active]:bg-[#eee9fd] [&_nav_a.active]:text-[#7860d4] [&_nav_a.active]:font-bold max-[1151px]:w-[205px] max-[1151px]:p-[28px_14px_18px] max-[701px]:[transform:translateX(-100%)] max-[701px]:[transition:transform_.2s] max-[701px]:w-[236px] max-[701px]:[&.is-open]:[transform:translateX(0)]",
  "brand-icon":
    "inline-flex items-center justify-center rounded-[12px] bg-[#7864dd] text-[white] w-[36px] h-[38px] [transform:rotate(-5deg)] shadow-[3px_4px_0_#e9e3fb] [&_svg]:w-[21px] [&_svg]:h-[21px] max-[1151px]:w-[31px] max-[1151px]:h-[34px]",
  "brand-dot": "text-[#776487]",
  "workspace-label":
    "text-[12px] font-bold text-[#776487] tracking-[1.5px] m-[46px_12px_17px]",
  settings:
    "flex items-center gap-[13px] p-[13px_14px] rounded-[9px] text-[12px] font-medium text-[#7c798f] whitespace-nowrap [&_svg]:text-[17px] [&:hover]:bg-[#f8f5ff] [&:hover]:text-[#6e54cf] [&.active]:bg-[#eee9fd] [&.active]:text-[#7860d4] [&.active]:font-bold mb-[12px]",
  "nav-new":
    "text-[10px] tracking-[.5px] text-[#a38a54] bg-[#fff0d2] p-[4px_5px] rounded-[4px] ml-[auto]",
  "sidebar-bottom": "mt-[auto] pt-[30px]",
  "sidebar-tip":
    "relative bg-[#f6f3fe] [border:1px_solid_#ece5ff] rounded-[12px] p-[30px_17px_17px] m-[0_3px_20px] [&_strong]:[font-family:Manrope,sans-serif] [&_strong]:text-[13px] [&_strong]:leading-[1.7] [&_p]:text-[12px] [&_p]:text-[#776487] [&_p]:leading-[1.7] [&_p]:m-[8px_0_14px] [&_button]:flex [&_button]:items-center [&_button]:gap-[8px] [&_button]:bg-[transparent] [&_button]:text-[12px] [&_button]:text-[#8063c5] [&_button]:p-0 [&_button]:font-bold [&_button_svg]:w-[13px]",
  "tip-spark": "absolute right-[14px] top-[10px] text-[#776487] text-[25px]",
  profile:
    "[border-top:1px_solid_var(--line)] bg-[transparent] flex items-center gap-[10px] p-[17px_2px_0] w-[100%] text-left [&_strong]:text-[12px] [&_strong]:block [&_strong]:text-[#494453] [&_small]:text-[12px] [&_small]:block [&_small]:text-[#776487] [&_small]:mt-[3px] [&>svg]:ml-[auto] [&>svg]:text-[#999] [&>svg]:text-[14px]",
  avatar:
    "flex justify-center items-center bg-[#f0d0b5] text-[#8b573e] w-[35px] h-[35px] rounded-[50%] font-bold text-[13px] [border:3px_solid_#fff4e8] shrink-0",
  "main-shell": "ml-[236px] max-[1151px]:ml-[205px] max-[701px]:ml-[0]",
  topbar:
    "h-[81px] flex items-center justify-between p-[0_38px] [border-bottom:1px_solid_var(--line)] bg-[#fff] max-[1151px]:p-[0_24px] max-[701px]:h-[65px] max-[701px]:p-[0_17px] [&_.mode-label]:text-[11px]",
  breadcrumb:
    "flex items-center gap-[13px] text-[13px] text-[#776487] [&>svg]:text-[13px] [&_strong]:font-medium [&_strong]:text-[#655e76] max-[701px]:gap-[6px] max-[701px]:text-[12px] max-[701px]:[&>span]:hidden",
  "top-actions":
    "flex items-center gap-[23px] max-[951px]:gap-[14px] max-[701px]:gap-[10px]",
  "date-label": "text-[12px] text-[#776487] max-[951px]:hidden",
  "mode-label":
    "text-[12px] bg-[#f4f0ff] text-[#715398] p-[7px_10px] rounded-[6px] flex gap-[8px] items-center [&_span]:w-[5px] [&_span]:h-[5px] [&_span]:rounded-[50%] [&_span]:bg-[#aa91df] max-[701px]:text-[11px] max-[701px]:p-[6px_8px]",
  small:
    "w-[32px] h-[32px] text-[13px] max-[701px]:w-[27px] max-[701px]:h-[27px] max-[701px]:text-[12px]",
  "mobile-menu": "hidden max-[701px]:inline-flex max-[701px]:mr-[2px]",
  "page-heading":
    "flex items-center justify-between gap-[20px] mb-[23px] [&_p]:text-[#776487] [&_p]:text-[13px] [&_p]:mt-[8px] [&_p]:leading-[1.7] max-[951px]:[&>.button]:hidden max-[701px]:mb-[18px] max-[701px]:[&_p]:text-[12px] max-[701px]:[&_p]:max-w-[330px] max-[701px]:[&_p]:leading-[1.8] max-[701px]:[&_.primary]:text-[12px]",
  overline:
    "text-[11px] tracking-[1.8px] font-bold text-[#776487] mb-[9px] max-[701px]:text-[10px] max-[701px]:tracking-[1.3px]",
  wave: "inline-block text-[#d9a044] text-[30px] ml-[5px] max-[701px]:text-[24px]",
  button:
    "inline-flex items-center justify-center gap-[12px] rounded-[8px] p-[12px_17px] text-[13px] font-semibold leading-[1.5] whitespace-nowrap [&:hover]:[transform:translateY(-1px)]",
  white:
    "bg-[white] text-[#655979] [border:1px_solid_#e7e1ee] shadow-[0_2px_2px_#30203f02]",
  primary:
    "bg-[#7652d6] text-[white] shadow-[0_3px_7px_#7860dc15] [&:hover]:bg-[#6e51ce]",
  dark: "bg-[#39304d] text-[white]",
  danger: "bg-[#b94960] text-[white]",
  "demo-strip":
    "flex items-center justify-between bg-[#f1eef9] [border:1px_solid_#eae4f4] rounded-[7px] p-[9px_12px] text-[11px] text-[#8c7aab] mb-[20px] gap-[10px] [&>span]:flex [&>span]:items-center [&>span]:gap-[7px] [&_button]:text-[11px] [&_button]:text-[#8065b0] [&_button]:flex [&_button]:items-center [&_button]:gap-[6px] [&_button]:bg-[none] [&_button]:whitespace-nowrap [&_svg]:w-[12px] max-[701px]:text-[10px] max-[701px]:p-[9px] max-[701px]:items-start max-[701px]:[&>span]:leading-[1.7] max-[701px]:[&_button]:text-[10px] max-[701px]:[&_button]:p-0 max-[701px]:[&_button]:leading-[1.7] max-[701px]:[&_button_svg]:w-[11px] max-[701px]:flex-col max-[701px]:gap-[5px]",
  "live-dot": "w-[5px] h-[5px] rounded-[50%] bg-[#ad93d5] max-[701px]:hidden",
  "dashboard-top":
    "grid [grid-template-columns:minmax(0,1fr)_264px] gap-[22px] min-[1450px]:[grid-template-columns:minmax(0,1fr)_300px] max-[1151px]:[grid-template-columns:minmax(0,1fr)_230px] max-[1151px]:gap-[17px] max-[951px]:[grid-template-columns:1fr]",
  hero: "bg-[#e6dbff] [border:1px_solid_#e2d9f3] min-h-[300px] rounded-[15px] relative overflow-hidden flex p-[31px_28px] [&_h2]:text-[31px] [&_h2]:leading-[1.3] [&_h2]:tracking-[-1px] [&_h2]:font-extrabold [&_h2]:text-[#48355f] [&_h2>span]:text-[#8051c7] [&_p]:text-[#74598c] [&_p]:text-[12px] [&_p]:leading-[1.9] [&_p]:m-[12px_0_19px] [&_.button]:text-[12px] [&_.button]:p-[11px_14px] [&_.button]:gap-[13px] [&_.button_svg]:w-[14px] min-[1450px]:p-[36px] min-[1450px]:min-h-[335px] min-[1450px]:[&_h2]:text-[38px] min-[1450px]:[&_p]:text-[12px] min-[1450px]:[&_.button]:text-[13px] max-[1151px]:p-[25px_20px] max-[1151px]:[&_h2]:text-[27px] max-[1151px]:[&_p]:text-[12px] max-[951px]:min-h-[300px] max-[951px]:p-[30px] max-[951px]:[&_h2]:text-[34px] max-[951px]:[&_p]:text-[13px] max-[701px]:p-[25px_22px] max-[701px]:min-h-[305px] max-[701px]:[&_h2]:text-[27px] max-[701px]:[&_h2]:leading-[1.4] max-[701px]:[&_p]:text-[12px] max-[701px]:[&_.button]:text-[11px] [border-color:#dac8fa]",
  "hero-copy":
    "relative z-[2] w-[67%] min-[1450px]:w-[60%] max-[1151px]:w-[70%] max-[951px]:w-[60%] max-[701px]:w-[86%] min-[951px]:max-[1151px]:w-[80%]",
  "hero-tag":
    "text-[10px] tracking-[1.5px] font-bold text-[#74598c] flex items-center gap-[7px] mb-[17px] [&>span]:w-[4px] [&>span]:h-[4px] [&>span]:bg-[#a08bc2] [&>span]:rounded-[50%] min-[1450px]:text-[12px] max-[1151px]:text-[9px] max-[951px]:text-[11px] max-[701px]:text-[9px] max-[701px]:tracking-[1px]",
  "hero-foot":
    "flex items-center gap-[8px] mt-[20px] text-[10px] text-[#74598c] [&>span>span]:text-[#776487] min-[1450px]:mt-[25px] min-[1450px]:text-[12px] max-[1151px]:text-[10px] max-[951px]:text-[12px] max-[701px]:text-[9px] max-[701px]:gap-[5px] min-[951px]:max-[1151px]:flex-wrap max-[701px]:max-w-[210px] max-[701px]:leading-[1.8]",
  "mini-faces":
    "flex pl-[4px] [&_i]:[font-style:normal] [&_i]:text-[9px] [&_i]:w-[20px] [&_i]:h-[20px] [&_i]:[border:2px_solid_#eae3fb] [&_i]:rounded-[50%] [&_i]:bg-[#e2b791] [&_i]:grid [&_i]:[place-items:center] [&_i]:text-[#795447] [&_i]:ml-[-4px] [&_i:nth-child(2)]:bg-[#b0b9a1] [&_i:nth-child(2)]:text-[#50654a] [&_i:nth-child(3)]:bg-[#d4b5d4] [&_i:nth-child(3)]:text-[#835585]",
  "hero-illustration":
    "absolute w-[40%] right-[0] top-[0] h-[100%] z-[1] min-[1450px]:w-[42%] min-[1450px]:[transform:scale(1.1)] min-[1450px]:[transform-origin:right_center] max-[1151px]:[transform:scale(.82)] max-[1151px]:[transform-origin:right_center] max-[1151px]:w-[47%] max-[951px]:[transform:none] max-[951px]:w-[45%] max-[701px]:[transform:scale(.65)] max-[701px]:[transform-origin:right_70%] max-[701px]:right-[-50px] max-[701px]:w-[48%] [&_.floating-card]:text-[9px] [&_.floating-card]:text-[#74598c] [&_.floating-card_small]:text-[8px] [&_.floating-card_small]:text-[#74598c] [pointer-events:none] opacity-[.95] min-[951px]:max-[1151px]:opacity-[.65] min-[951px]:max-[1151px]:right-[-15px] max-[701px]:opacity-[.35]",
  "orbital-ring":
    "absolute top-[52px] right-[20px] w-[207px] h-[207px] [border:1px_solid_#b9a5d850] rounded-[50%] [&:after]:[content:''] [&:after]:absolute [&:after]:[inset:16px] [&:after]:[border:1px_dashed_#b9a5d840] [&:after]:rounded-[50%]",
  book: "absolute w-[104px] h-[142px] rounded-[7px_13px_13px_7px] [transform:rotate(-17deg)] shadow-[9px_15px_22px_#795a9930] top-[96px] right-[89px] [&:after]:[content:''] [&:after]:absolute [&:after]:bottom-[4px] [&:after]:right-[0] [&:after]:left-[5px] [&:after]:h-[9px] [&:after]:rounded-[2px_0_9px_2px] [&:after]:[background:repeating-linear-gradient(#fff_0px,#fff_2px,#e8dff0_2px,#e8dff0_3px)] [&:after]:[transform:skewX(-20deg)]",
  "book-back":
    "bg-[#d9a477] top-[78px] right-[50px] [transform:rotate(16deg)] [&:before]:[content:''] [&:before]:absolute [&:before]:[inset:0] [&:before]:[border-left:9px_solid_#c28d63] [&:before]:rounded-[7px] [&_span]:absolute [&_span]:w-[14px] [&_span]:h-[35px] [&_span]:bg-[#a0b2a0] [&_span]:right-[15px] [&_span]:bottom-[-15px] [&_span]:[clip-path:polygon(0_0,100%_0,100%_100%,50%_80%,0_100%)]",
  "book-front":
    "bg-[#9a7cc5] [border-left:9px_solid_#8665b4] flex items-center flex-col pt-[25px] gap-[8px] [&_svg]:text-[30px] [&_svg]:text-[#776487] [&_svg]:[fill:#e5d3f640] [&_svg]:mb-[4px] [&_i]:w-[43px] [&_i]:h-[3px] [&_i]:bg-[#d0b7e5] [&_i]:rounded-[3px] [&_i:last-child]:w-[26px]",
  "floating-card":
    "absolute bg-[#ffffffd9] [border:1px_solid_#fff] rounded-[8px] shadow-[0_7px_14px_#8e6ab016] flex items-center gap-[7px] text-[10px] text-[#857197] z-[3]",
  "float-top":
    "right-[23px] top-[50px] p-[9px_11px] [transform:rotate(7deg)] [&>span]:text-[17px] [&>span]:text-[#be9b5e]",
  "float-bottom":
    "right-[13px] bottom-[43px] [transform:rotate(-7deg)] p-[10px_12px] text-[11px] text-[#6b597e] [&_small]:block [&_small]:text-[9px] [&_small]:text-[#776487] [&_small]:mt-[3px]",
  "float-check":
    "bg-[#d6e7d9] rounded-[50%] p-[5px] flex text-[#75a083] [&_svg]:w-[12px]",
  "float-star": "absolute text-[#776487]",
  s1: "top-[29px] right-[130px] text-[29px] [transform:rotate(12deg)]",
  s2: "bottom-[26px] right-[185px] text-[32px]",
  "tiny-orbit":
    "absolute w-[7px] h-[7px] [border:2px_solid_#c4a2dc] rounded-[50%] top-[130px] right-[12px]",
  squiggle: "absolute bottom-[22px] right-[59px] text-[29px] text-[#776487]",
  "weekly-goal":
    "rounded-[15px] bg-[#fff] [border:1px_solid_var(--line)] p-[19px_20px_17px] [&_h3]:text-[16px] [&>p]:text-[12px] [&>p]:text-[#776487] [&>p]:mt-[6px] min-[1450px]:p-[24px] max-[1151px]:p-[17px_15px] max-[951px]:hidden",
  "section-top":
    "flex items-center gap-[9px] mb-[13px] [&_.icon-tile]:w-[28px] [&_.icon-tile]:h-[28px] [&_.icon-tile]:rounded-[8px] [&_.icon-tile_svg]:w-[13px] [&_.subtle]:text-[10px] [&_.subtle]:tracking-[1.1px] [&_.subtle]:font-bold [&_.icon-button]:ml-[auto] [&_.icon-button_svg]:w-[14px]",
  "icon-tile":
    "inline-flex items-center justify-center w-[39px] h-[39px] shrink-0 rounded-[11px] [&_svg]:w-[18px] [&_svg]:h-[18px]",
  purple: "bg-[#eee7ff] text-[#776487]",
  orange: "bg-[#fff0df] text-[#cf9c6c]",
  green: "bg-[#e7f2ec] text-[#776487]",
  pink: "bg-[#fbe9ef] text-[#776487]",
  subtle: "text-[#776487] text-[13px] leading-[1.7]",
  "icon-button":
    "bg-[transparent] inline-flex items-center justify-center text-[#776487] p-[6px] rounded-[6px] [&:hover]:bg-[#f0eaf7] [&:hover]:text-[#705694]",
  "goal-ring":
    "[background:conic-gradient(#aa8cde_var(--progress),#f0eaf7_0)] p-[9px] w-[114px] h-[114px] rounded-[50%] m-[15px_auto_14px] [transform:rotate(-90deg)] [&>div]:bg-[white] [&>div]:rounded-[50%] [&>div]:w-[100%] [&>div]:h-[100%] [&>div]:flex [&>div]:items-center [&>div]:justify-center [&>div]:flex-col [&>div]:[transform:rotate(90deg)] [&_b]:text-[26px] [&_b]:[font-family:Manrope,sans-serif] [&_b]:text-[#554568] [&_b>span]:text-[13px] [&_b>span]:text-[#776487] [&_b>span]:font-medium [&_small]:text-[11px] [&_small]:text-[#776487] [&_small]:mt-[1px] min-[1450px]:mt-[20px] min-[1450px]:mb-[20px]",
  "week-days":
    "flex justify-between [&>span]:flex [&>span]:items-center [&>span]:flex-col [&>span]:gap-[5px] [&_small]:text-[10px] [&_small]:text-[#776487] [&_i]:[font-style:normal] [&_i]:text-[11px] [&_i]:bg-[#f7f4fb] [&_i]:rounded-[50%] [&_i]:w-[22px] [&_i]:h-[22px] [&_i]:grid [&_i]:[place-items:center] [&_i]:text-[#776487] [&_.done_i]:bg-[#a487d4] [&_.done_i]:text-[white] [&_svg]:w-[11px]",
  "goal-caption":
    "block text-center text-[11px] text-[#776487] mt-[13px] leading-[1.7]",
  "stats-grid":
    "grid [grid-template-columns:repeat(4,1fr)] gap-[15px] m-[22px_0_30px] max-[1151px]:gap-[10px] max-[951px]:[grid-template-columns:repeat(2,1fr)] max-[701px]:gap-[10px] max-[701px]:mb-[25px] [&_.stat_small]:leading-[1.6] max-[701px]:[&_.stat]:p-[15px_10px] max-[701px]:[&_.stat]:gap-[8px]",
  stat: "bg-[#fff] [border:1px_solid_var(--line)] p-[19px_14px] rounded-[11px] flex gap-[12px] [&_.icon-tile]:w-[36px] [&_.icon-tile]:h-[36px] [&_.icon-tile]:rounded-[10px] [&_.icon-tile]:mt-[4px] [&_.icon-tile_svg]:w-[16px] [&_b]:[font-family:Manrope,sans-serif] [&_b]:block [&_b]:text-[25px] [&_b]:leading-[1.2] [&_div>span]:block [&_div>span]:text-[12px] [&_div>span]:text-[#8a8196] [&_div>span]:m-[4px_0_7px] [&_small]:text-[10px] [&_small]:text-[#776487] min-[1450px]:p-[22px] min-[1450px]:[&_div>span]:text-[13px] min-[1450px]:[&_small]:text-[12px] max-[1151px]:p-[16px_10px] max-[1151px]:gap-[8px] max-[1151px]:[&_.icon-tile]:w-[29px] max-[1151px]:[&_.icon-tile]:h-[29px] max-[1151px]:[&_.icon-tile]:rounded-[8px] max-[1151px]:[&_b]:text-[22px] max-[1151px]:[&_div>span]:text-[11px] max-[1151px]:[&_small]:text-[9px] max-[951px]:p-[18px] max-[951px]:gap-[15px] max-[951px]:[&_.icon-tile]:w-[39px] max-[951px]:[&_.icon-tile]:h-[39px] max-[951px]:[&_div>span]:text-[12px] max-[951px]:[&_small]:text-[11px] max-[701px]:p-[16px_12px] max-[701px]:gap-[10px] max-[701px]:[&_.icon-tile]:w-[31px] max-[701px]:[&_.icon-tile]:h-[31px] max-[701px]:[&_b]:text-[22px] max-[701px]:[&_div>span]:text-[10px] max-[701px]:[&_small]:text-[9px]",
  "content-columns":
    "grid [grid-template-columns:minmax(0,1fr)_264px] gap-[22px] min-[1450px]:[grid-template-columns:minmax(0,1fr)_300px] max-[1151px]:[grid-template-columns:minmax(0,1fr)_230px] max-[1151px]:gap-[17px] max-[951px]:[grid-template-columns:1fr]",
  "section-heading":
    "flex items-center justify-between gap-[12px] mb-[19px] [&_h2]:text-[17px] [&_p]:text-[12px] [&_p]:text-[#776487] [&_p]:mt-[7px] max-[1151px]:[&_h2]:text-[15px] max-[701px]:[&_h2]:text-[15px] max-[701px]:[&_p]:text-[11px] max-[701px]:flex-wrap",
  "count-pill":
    "inline-block [vertical-align:middle] [border:1px_solid_#e7e0f2] bg-[#f3eefa] text-[#776487] rounded-[5px] p-[2px_6px] [font-family:'DM_Sans',sans-serif] text-[12px] ml-[6px] tracking-[0]",
  "text-button":
    "inline-flex items-center gap-[6px] bg-[transparent] text-[#776487] p-0 text-[12px] font-medium [&:hover]:text-[#67489b] [&_svg]:w-[13px] max-[701px]:text-[12px]",
  "course-grid":
    "grid [grid-template-columns:repeat(3,minmax(0,1fr))] gap-[20px] [&.two]:[grid-template-columns:repeat(2,minmax(0,1fr))] [&.two]:gap-[17px] max-[1151px]:gap-[13px] max-[951px]:[grid-template-columns:repeat(2,minmax(0,1fr))] max-[701px]:[&.two]:gap-[12px] max-[701px]:gap-[12px] max-[701px]:[&.two]:[grid-template-columns:1fr] max-[701px]:[grid-template-columns:1fr] max-[701px]:[&_.level]:text-[10px]",
  "course-card":
    "bg-[#fff] [border:1px_solid_#eae7f0] rounded-[12px] p-[8px] overflow-hidden max-[701px]:p-[6px]",
  "course-art":
    "h-[146px] rounded-[8px] relative flex items-center justify-center overflow-hidden [&.purple]:bg-[#e3d2ff] [&.orange]:bg-[#ffe1bd] [&.green]:bg-[#d5eedb] [&.pink]:bg-[#f9d5e7] [&>svg]:relative [&>svg]:z-[2] [&>svg]:w-[60px] [&>svg]:h-[60px] [&>svg]:[stroke-width:1.3] [&>svg]:[transform:rotate(-12deg)] [&>svg]:[filter:drop-shadow(4px_7px_0_#ffffff88)] [&.purple>svg]:text-[#776487] [&.orange>svg]:text-[#c28b5b] [&.green>svg]:text-[#7b9d82] [&.pink>svg]:text-[#776487] min-[1450px]:h-[180px] max-[951px]:h-[160px] max-[701px]:h-[155px] max-[701px]:[&>svg]:w-[47px] max-[701px]:[&>svg]:h-[47px]",
  "art-orbit":
    "w-[110px] h-[110px] [border:1px_solid_currentColor] rounded-[50%] absolute opacity-[.2] [&:after]:[content:''] [&:after]:[inset:12px] [&:after]:absolute [&:after]:[border:1px_dashed_currentColor] [&:after]:rounded-[50%]",
  "art-grid":
    "w-[45px] h-[45px] absolute left-[16px] bottom-[20px] opacity-[.25] [transform:rotate(-15deg)] [background-image:linear-gradient(currentColor_1px,transparent_1px),linear-gradient(90deg,currentColor_1px,transparent_1px)] [background-size:10px_10px]",
  "art-dot":
    "absolute top-[39px] right-[40px] w-[17px] h-[17px] bg-[#fffb] rounded-[4px] [transform:rotate(28deg)]",
  level:
    "absolute right-[10px] top-[10px] text-[10px] bg-[#ffffffaa] [border:1px_solid_#ffffff99] p-[4px_7px] rounded-[4px] text-[#8e7993] max-[701px]:text-[9px] max-[701px]:top-[7px] max-[701px]:right-[7px]",
  "course-content":
    "p-[14px_10px_7px] [&_h3]:text-[15px] [&_h3]:m-[8px_0_12px] [&_h3]:leading-[1.6] min-[1450px]:[&_h3]:text-[16px] min-[1450px]:p-[18px_14px_10px] max-[1151px]:p-[12px_7px_5px] max-[1151px]:[&_h3]:text-[13px] max-[951px]:[&_h3]:text-[14px] max-[951px]:p-[15px_11px_8px] max-[701px]:p-[15px_11px_8px] max-[701px]:[&_h3]:text-[16px] max-[701px]:[&_h3]:leading-[1.8] max-[701px]:[&_h3]:mt-[6px]",
  eyebrow:
    "text-[11px] tracking-[.8px] font-semibold uppercase text-[#776487] block max-[701px]:text-[10px]",
  "purple-text": "text-[#776487]",
  "orange-text": "text-[#c5986c]",
  "green-text": "text-[#7e9e8b]",
  "pink-text": "text-[#776487]",
  teacher:
    "flex items-center gap-[6px] text-[11px] text-[#776487] min-[1450px]:text-[12px] max-[701px]:text-[11px]",
  "tiny-avatar":
    "h-[20px] w-[20px] grid [place-items:center] text-[9px] rounded-[50%]",
  "course-meta":
    "flex justify-between [border-bottom:1px_solid_#f2eef5] p-[12px_0] text-[10px] text-[#776487] [&>span]:flex [&>span]:items-center [&>span]:gap-[5px] [&_svg]:w-[10px] min-[1450px]:text-[12px] max-[1151px]:text-[9px] max-[1151px]:[&_svg]:w-[8px] max-[951px]:text-[11px] max-[951px]:[&_svg]:w-[10px] max-[701px]:text-[11px] max-[701px]:gap-[4px] max-[701px]:[&>span]:gap-[3px] max-[701px]:[&_svg]:w-[8px] flex-wrap gap-[8px]",
  "progress-label":
    "flex justify-between items-center mt-[12px] text-[10px] text-[#776487] [&_b]:text-[#76529b] [&_b]:font-medium min-[1450px]:text-[12px] max-[951px]:text-[12px] max-[701px]:text-[11px]",
  "progress-track":
    "h-[4px] bg-[#f2ecf7] rounded-[4px] overflow-hidden mt-[7px] [&>span]:block [&>span]:h-[100%] [&>span]:bg-[#9671cc] [&>span]:rounded-[4px] [&>span]:[transition:width_.3s]",
  "course-button":
    "rounded-[5px] bg-[#f0e6fc] text-[#7754a0] flex justify-between items-center p-[10px_11px] text-[12px] w-[100%] mt-[16px] [&:hover]:bg-[#e3d0f9] [&_svg]:w-[12px] min-[1450px]:text-[12px] min-[1450px]:p-[12px] max-[951px]:text-[12px] max-[701px]:text-[12px] max-[701px]:p-[10px_8px] max-[701px]:gap-[5px]",
  "discovery-banner":
    "bg-[#f2edfa] [border:1px_solid_#e9e1f3] rounded-[10px] mt-[18px] p-[17px] flex items-center gap-[13px] [&_h3]:text-[12px] [&_h3]:text-[#8b75a4] [&_p]:text-[11px] [&_p]:text-[#776487] [&_p]:mt-[5px] [&_.icon-button]:ml-[auto] max-[701px]:p-[13px] max-[701px]:gap-[8px] max-[701px]:[&_h3]:text-[12px] max-[701px]:[&_p]:text-[10px] max-[701px]:[&_p]:leading-[1.7]",
  "discovery-icon": "text-[32px] text-[#776487] max-[701px]:text-[26px]",
  "right-column":
    "flex flex-col gap-[19px] max-[951px]:grid max-[951px]:[grid-template-columns:1fr_1fr] max-[701px]:gap-[12px] max-[701px]:[grid-template-columns:1fr]",
  "focus-card":
    "[border:1px_solid_var(--line)] rounded-[12px] bg-[#fff] p-[18px] [&_.section-heading]:mb-[10px] [&_.section-heading]:gap-[3px] [&_h3]:text-[13px] [&_h3]:flex [&_h3]:items-center [&_h3]:gap-[8px] [&_h3_svg]:text-[#776487] [&_h3_svg]:w-[16px] [&>p]:text-[11px] [&>p]:text-[#776487] min-[1450px]:p-[23px] min-[1450px]:[&_h3]:text-[13px] max-[701px]:p-[14px] max-[701px]:[&_h3]:text-[14px] max-[701px]:[&_h3]:gap-[5px] max-[701px]:[&_h3_svg]:w-[13px] max-[701px]:[&_.little-pill]:hidden max-[701px]:[&>p]:text-[12px]",
  "up-next":
    "[border:1px_solid_var(--line)] rounded-[12px] bg-[#fff] p-[18px] [&_h3]:text-[12px] [&_.section-heading>svg]:w-[13px] [&_.section-heading>svg]:text-[#776487] min-[1450px]:p-[23px] max-[701px]:p-[14px] max-[701px]:[&_h3]:text-[14px]",
  "little-pill":
    "text-[10px] bg-[#f4f0f9] text-[#776487] rounded-[4px] tracking-[.6px] p-[5px_7px] whitespace-nowrap",
  timer:
    "[font-family:Manrope,sans-serif] text-[41px] tracking-[3px] text-center m-[19px_0] text-[#8f7aa9] font-semibold leading-[1.2] [&>span]:text-[#776487] max-[701px]:text-[44px] max-[701px]:m-[20px_0]",
  "focus-actions":
    "flex flex-col items-center gap-[10px] [&>.button]:w-[100%] [&>.button]:bg-[#805bcc] [&>.button]:text-[12px] [&>.button]:p-[10px] [&>.button]:justify-between [&>.button_svg]:w-[12px] max-[701px]:[&>.button]:text-[12px] max-[701px]:[&>.button]:p-[10px_7px]",
  "empty-small":
    "text-center p-[5px_4px] [&>svg]:text-[#776487] [&>svg]:mb-[10px] [&>svg]:text-[23px] [&_strong]:block [&_strong]:text-[12px] [&_strong]:text-[#776487] [&_strong]:font-medium [&_p]:text-[11px] [&_p]:text-[#776487] [&_p]:leading-[1.8] [&_p]:m-[6px_0_12px] [&_.text-button]:text-[11px] max-[701px]:[&_strong]:text-[12px] max-[701px]:[&_p]:text-[12px] max-[701px]:[&_.text-button]:text-[10px]",
  "radar-item":
    "bg-[transparent] flex items-center gap-[8px] text-left w-[100%] p-[10px_0] [&>.icon-tile]:w-[28px] [&>.icon-tile]:h-[28px] [&_.icon-tile_svg]:w-[12px] [&_b]:text-[12px] [&_b]:text-[#8e7c9e] [&_b]:block [&_small]:text-[10px] [&_small]:text-[#776487] [&_small]:block [&_small]:mt-[5px] [&>svg]:w-[11px] [&>svg]:ml-[auto] [&>svg]:text-[#776487]",
  "quote-card":
    "p-[4px_13px] [&>span]:[font-family:Georgia,serif] [&>span]:text-[35px] [&>span]:text-[#776487] [&>span]:leading-[.8] [&_p]:text-[12px] [&_p]:leading-[1.9] [&_p]:text-[#776487] [&_p]:[font-style:italic] [&_small]:text-[11px] [&_small]:text-[#776487] [&_small]:block [&_small]:mt-[9px] max-[951px]:hidden",
  "page-footer":
    "[border-top:1px_solid_#eae5ef] flex justify-between mt-[35px] p-[20px_0] text-[#776487] text-[11px] [&_.brand-dot]:text-[12px] [&_.brand-dot]:mr-[6px] max-[701px]:text-[10px] max-[701px]:mt-[25px] max-[701px]:gap-[10px]",
  "catalog-toolbar":
    "flex justify-between items-center gap-[16px] m-[25px_0] max-[951px]:items-stretch max-[951px]:flex-col",
  tabs: "flex flex-wrap gap-[5px] [&_button]:bg-[transparent] [&_button]:p-[8px_12px] [&_button]:rounded-[7px] [&_button]:text-[13px] [&_button]:text-[#776487] [&_button.selected]:bg-[#eae1fb] [&_button.selected]:text-[#8c6ab9] max-[701px]:[&_button]:text-[12px] max-[701px]:[&_button]:p-[8px_10px] max-[701px]:gap-[1px]",
  search:
    "flex items-center gap-[8px] [border:1px_solid_#e8e1ef] rounded-[8px] bg-[white] p-[10px_12px] max-w-[260px] [&_svg]:text-[#776487] [&_svg]:w-[14px] [&_input]:border-0 [&_input]:bg-[transparent] [&_input]:w-[100%] [&_input]:[outline:0] [&_input]:text-[13px] [&_input]:text-[#7b688d] [&_input::placeholder]:text-[#776487] max-[951px]:max-w-[none]",
  panel:
    "bg-[#fff] [border:1px_solid_var(--line)] rounded-[13px] p-[25px] max-[701px]:p-[20px] max-[701px]:[&_.section-heading>.button]:text-[12px]",
  "empty-state":
    "text-center p-[65px_20px] text-[#776487] [&>svg]:w-[40px] [&>svg]:h-[40px] [&>svg]:mb-[16px] [&>svg]:text-[#776487] [&_h2]:text-[20px] [&_h2]:text-[#8a709e] [&_p]:text-[12px] [&_p]:m-[13px_0_22px] [&_p]:leading-[1.8] [&>.button]:mt-[4px] max-[701px]:p-[40px_12px] max-[701px]:[&_h2]:text-[17px] max-[701px]:[&_p]:text-[13px]",
  "assignment-row":
    "flex items-start gap-[15px] [border-top:1px_solid_var(--line)] p-[22px_0] [&_h3]:text-[14px] [&_h3]:text-[#695177] [&_p]:text-[12px] [&_p]:leading-[1.7] [&_p]:text-[#776487] [&_p]:m-[8px_0_12px] [&_p]:whitespace-pre-wrap [&.finished_h3]:[text-decoration:line-through] [&.finished_h3]:text-[#776487] max-[951px]:flex-wrap max-[701px]:[&_p]:text-[12px] max-[701px]:[&_h3]:text-[14px]",
  "assignment-info":
    "[flex:1] min-w-[0] [overflow-wrap:anywhere] [&_.submission]:bg-[#f6f1fb] [&_.submission]:p-[12px] [&_.submission]:rounded-[8px] [&_.submission]:mb-[0] [&_.submission]:text-[13px] [&_.submission]:text-[#8b769c] max-[701px]:[&_.submission]:text-[12px]",
  "check-button":
    "w-[23px] h-[23px] [border:1px_solid_#d6c6e4] rounded-[7px] bg-[white] flex items-center justify-center text-[white] shrink-0 mt-[2px] [&.checked]:bg-[#a88bc9] [&.checked]:[border-color:#a88bc9]",
  "row-actions":
    "flex items-center gap-[12px] max-[951px]:w-[100%] max-[951px]:pl-[38px] max-[701px]:flex-wrap",
  "due-date":
    "text-[12px] text-[#776487] inline-flex items-center gap-[5px] ml-[12px] [&.overdue]:text-[#b05a70] [&_svg]:w-[12px]",
  "quiz-grid":
    "grid [grid-template-columns:repeat(2,minmax(0,1fr))] gap-[20px] max-[701px]:gap-[12px] max-[701px]:[grid-template-columns:1fr]",
  "quiz-card":
    "[&>.icon-tile]:mb-[20px] [&_.eyebrow]:mb-[10px] [&_h2]:text-[19px] [&>p]:text-[12px] [&>p]:text-[#776487] [&>p]:m-[12px_0_22px] [&>p]:leading-[1.8] max-[1151px]:[&_h2]:text-[16px] max-[951px]:[&>.button]:text-[12px] max-[701px]:p-[17px] max-[701px]:[&_h2]:text-[19px] max-[701px]:[&_h2]:leading-[1.6] max-[701px]:[&>p]:text-[13px] max-[701px]:[&>.button]:text-[12px] max-[701px]:[&>.button]:gap-[5px] max-[701px]:[&>.button]:p-[10px] max-[701px]:[&>.button]:w-[100%] max-[701px]:[&>.button_svg]:w-[12px]",
  "quiz-meta":
    "flex gap-[25px] text-[12px] text-[#776487] mb-[22px] [&_span]:flex [&_span]:items-center [&_span]:gap-[5px] [&_svg]:w-[12px] max-[951px]:flex-col max-[951px]:gap-[8px] max-[701px]:text-[11px] max-[701px]:gap-[10px] max-[701px]:flex-row max-[701px]:flex-wrap",
  "last-score":
    "text-[13px] p-[10px] rounded-[6px] bg-[#edf4ee] text-[#83a58b] m-[0_0_15px] flex gap-[8px] items-center max-[701px]:text-[12px] max-[701px]:p-[8px]",
  lounge:
    "flex min-h-[550px] p-0 overflow-hidden max-[951px]:flex-col max-[701px]:[&_.messages]:min-h-[260px]",
  rooms:
    "w-[235px] shrink-0 p-[25px_18px] bg-[#fdfbff] [border-right:1px_solid_var(--line)] [&_h3]:m-[12px_0_25px] [&>button]:flex [&>button]:items-center [&>button]:gap-[9px] [&>button]:bg-[transparent] [&>button]:w-[100%] [&>button]:text-left [&>button]:text-[13px] [&>button]:p-[13px_10px] [&>button]:rounded-[8px] [&>button]:text-[#776487] [&>button]:m-[5px_0] [&>button.selected]:bg-[#eee5fa] [&>button.selected]:text-[#8e6bb6] [&>button>span]:text-[17px] max-[1151px]:w-[195px] max-[1151px]:[&>button]:text-[12px] max-[951px]:[border-right:0] max-[951px]:[border-bottom:1px_solid_var(--line)] max-[951px]:w-[auto] max-[951px]:flex max-[951px]:items-center max-[951px]:gap-[5px] max-[951px]:flex-wrap max-[951px]:p-[16px] max-[951px]:[&_.eyebrow]:hidden max-[951px]:[&_h3]:hidden max-[951px]:[&>button]:w-[auto] max-[951px]:[&>button]:m-0 max-[951px]:[&>button]:p-[9px] max-[951px]:[&>button]:text-[12px] max-[701px]:p-[12px_9px] max-[701px]:[&>button]:text-[11px]",
  "room-note":
    "mt-[50px] p-[15px] bg-[#f3edf9] rounded-[10px] text-[#776487] [&_p]:text-[12px] [&_p]:leading-[1.9] [&_p]:mt-[8px] max-[951px]:hidden",
  "chat-main": "flex flex-col [flex:1] min-w-[0]",
  "chat-heading":
    "p-[22px_25px] [border-bottom:1px_solid_var(--line)] [&_h2]:text-[16px] [&_p]:text-[12px] [&_p]:text-[#776487] [&_p]:mt-[7px] max-[951px]:p-[20px] max-[701px]:[&_h2]:text-[15px]",
  messages:
    "[flex:1] min-h-[300px] max-h-[500px] overflow-auto p-[25px] max-[701px]:p-[20px]",
  message:
    "flex gap-[10px] mb-[22px] [&_.avatar]:w-[30px] [&_.avatar]:h-[30px] [&_.avatar]:text-[12px] [&>div]:min-w-[0] [&_p]:whitespace-pre-wrap [&_p]:[overflow-wrap:anywhere] [&_p]:text-[12px] [&_p]:text-[#695177] [&_p]:leading-[1.9] [&_p]:mt-[5px]",
  "message-meta":
    "flex gap-[12px] items-center text-[13px] text-[#776487] [&_time]:text-[11px] [&_time]:text-[#776487]",
  "message-form":
    "p-[18px] [border-top:1px_solid_var(--line)] flex gap-[10px] [&>input]:bg-[#faf7ff] [&>input]:[border:1px_solid_#eee4f7] [&>input]:rounded-[8px] [&>input]:p-[12px] [&>input]:text-[13px] [&>input]:w-[100%] [&>input]:text-[#836b96] [&>input]:min-w-[0] [&>input::placeholder]:text-[#776487] [&_.button]:p-[12px] max-[701px]:p-[12px] max-[701px]:gap-[8px] max-[701px]:[&>input]:text-[12px] max-[701px]:[&>input]:p-[10px]",
  "progress-hero":
    "flex items-center gap-[20px] bg-[#eae2f7] [border:1px_solid_#e2d8ee] rounded-[14px] p-[25px] mb-[24px] [&>.icon-tile]:w-[57px] [&>.icon-tile]:h-[57px] [&>.icon-tile]:rounded-[50%] [&>.icon-tile]:bg-[#fff9] [&_p]:text-[13px] [&_p]:text-[#776487] [&_p]:leading-[1.8] [&_p]:mt-[8px] [&>.button]:ml-[auto] max-[1151px]:[&_h2]:text-[17px] max-[1151px]:[&_.button]:text-[12px] max-[1151px]:[&_.button]:p-[10px] max-[1151px]:[&_p]:text-[12px] max-[951px]:flex-wrap max-[951px]:[&>.button]:ml-[0] max-[701px]:p-[20px] max-[701px]:gap-[12px] max-[701px]:[&>.icon-tile]:w-[45px] max-[701px]:[&>.icon-tile]:h-[45px] max-[701px]:[&_h2]:text-[16px] max-[701px]:[&_p]:text-[12px] max-[701px]:[&>div]:[flex:1]",
  "journey-row":
    "flex items-center gap-[15px] p-[24px_0] [border-bottom:1px_solid_var(--line)] [&:last-child]:border-0 [&>div]:[flex:1] [&_h3]:text-[12px] [&_h3]:text-[#9377a6] [&_p]:text-[12px] [&_p]:text-[#776487] [&_p]:m-[6px_0_12px] [&>b]:text-[12px] [&>b]:text-[#776487] max-[701px]:gap-[10px] max-[701px]:[&_h3]:text-[13px] max-[701px]:[&_p]:text-[12px] max-[701px]:[&>.icon-tile]:w-[30px] max-[701px]:[&>.icon-tile]:h-[30px] max-[701px]:[&>.icon-tile_svg]:w-[14px]",
  "badge-row":
    "flex items-center gap-[12px] p-[21px_0] opacity-[.8] [&.unlocked]:opacity-[1] [&_.icon-tile]:bg-[#f2edf7] [&_.icon-tile]:text-[#776487] [&.unlocked_.icon-tile]:bg-[#fff1d7] [&.unlocked_.icon-tile]:text-[#c6a46a] [&_h3]:text-[13px] [&_h3]:text-[#776487] [&_p]:text-[12px] [&_p]:text-[#776487] [&_p]:mt-[5px] [&_p]:leading-[1.7] [&>span:last-child]:ml-[auto] [&>span:last-child]:text-[11px] [&>span:last-child]:text-[#776487] [&.unlocked>span:last-child]:text-[#776487]",
  "settings-grid":
    "grid [grid-template-columns:1.2fr_1fr] gap-[25px] max-[951px]:[grid-template-columns:1fr]",
  "settings-form":
    "[&_h2]:mb-[10px] [&>.subtle]:mb-[25px] [&_label]:flex [&_label]:flex-col [&_label]:gap-[9px] [&_label]:text-[12px] [&_label]:text-[#695177] [&_label]:mb-[20px] [&_input]:bg-[#fcfaff] [&_input]:[border:1px_solid_#e8deef] [&_input]:text-[#836e94] [&_input]:rounded-[8px] [&_input]:p-[12px] [&_input]:w-[100%] [&_input]:text-[12px] [&_input]:leading-[1.6] [&_select]:bg-[#fcfaff] [&_select]:[border:1px_solid_#e8deef] [&_select]:text-[#836e94] [&_select]:rounded-[8px] [&_select]:p-[12px] [&_select]:w-[100%] [&_select]:text-[12px] [&_select]:leading-[1.6] [&_.button]:mt-[6px]",
  "account-panel":
    "[&_h2]:mb-[10px] [&>p]:text-[12px] [&>p]:text-[#776487] [&>p]:leading-[1.9] [&>p]:m-[15px_0_22px] [&_hr]:border-0 [&_hr]:[border-top:1px_solid_var(--line)] [&_hr]:m-[30px_0] [&_h3]:text-[14px] [&_h3]:text-[#776487]",
  "modal-form":
    "[&>label]:flex [&>label]:flex-col [&>label]:gap-[9px] [&>label]:text-[12px] [&>label]:text-[#695177] [&>label]:mb-[20px] [&_input]:bg-[#fcfaff] [&_input]:[border:1px_solid_#e8deef] [&_input]:text-[#836e94] [&_input]:rounded-[8px] [&_input]:p-[12px] [&_input]:w-[100%] [&_input]:text-[12px] [&_input]:leading-[1.6] [&_textarea]:bg-[#fcfaff] [&_textarea]:[border:1px_solid_#e8deef] [&_textarea]:text-[#836e94] [&_textarea]:rounded-[8px] [&_textarea]:p-[12px] [&_textarea]:w-[100%] [&_textarea]:text-[12px] [&_textarea]:leading-[1.6] [&_select]:bg-[#fcfaff] [&_select]:[border:1px_solid_#e8deef] [&_select]:text-[#836e94] [&_select]:rounded-[8px] [&_select]:p-[12px] [&_select]:w-[100%] [&_select]:text-[12px] [&_select]:leading-[1.6] mt-[25px] [&_textarea]:[resize:vertical] [&_input::placeholder]:text-[#776487] [&_textarea::placeholder]:text-[#776487] [&>.button]:w-[100%] [&>.button]:mt-[5px] [&>small]:block [&>small]:leading-[1.9] [&>small]:mb-[14px] [&>small]:text-[12px]",
  "form-columns":
    "[&>label]:flex [&>label]:flex-col [&>label]:gap-[9px] [&>label]:text-[12px] [&>label]:text-[#695177] [&>label]:mb-[20px] grid [grid-template-columns:1fr_1fr] gap-[15px]",
  toast:
    "fixed bottom-[25px] left-[calc(50%_+_118px)] [transform:translateX(-50%)] z-[1000] bg-[#4f3c64] [border:1px_solid_#70587e] shadow-[0_6px_20px_#3e215025] text-[#fff] flex items-center gap-[12px] p-[14px_16px] rounded-[10px] text-[12px] max-w-[calc(100%_-_30px)] [&>svg]:text-[#776487] [&>button]:bg-[none] [&>button]:text-[#776487] [&>button]:flex [&>button]:items-center [&>button]:p-[3px] [&>button]:ml-[10px] max-[1151px]:left-[calc(50%_+_102px)] max-[701px]:left-[50%] max-[701px]:text-[13px] max-[701px]:w-[max-content] max-[701px]:max-w-[calc(100%_-_30px)]",
  "modal-backdrop":
    "fixed [inset:0] bg-[#25153466] [backdrop-filter:blur(5px)] flex items-center justify-center z-[100] p-[25px] overflow-auto max-[701px]:p-[14px]",
  modal:
    "relative bg-[#fff] [border:1px_solid_#e7daf0] rounded-[18px] shadow-[0_30px_80px_#32104733] w-[100%] max-w-[530px] max-h-[calc(100dvh_-_50px)] overflow-auto p-[36px] [&>.brand-icon]:mb-[23px] [&_h2]:text-[24px] [&_h2]:leading-[1.5] [&_h2]:text-[#77568f] [&_h2]:mb-[12px] [&_h2]:max-w-[95%] [&>.eyebrow]:mb-[12px] [&>.subtle]:leading-[1.9] [&>.subtle]:mb-[24px] [&>p]:text-[#776487] [&>p]:text-[13px] [&>p]:leading-[1.9] max-[701px]:p-[30px_23px] max-[701px]:max-h-[calc(100dvh_-_28px)] max-[701px]:rounded-[14px] max-[701px]:[&_h2]:text-[22px] max-[701px]:[&_.button]:text-[12px] [&>.brand-mark]:mb-[22px]",
  "modal-close": "absolute right-[15px] top-[15px]",
  "auth-switch": "flex m-[22px_auto_0] text-[13px]",
  "lesson-modal": "max-w-[740px]",
  "lesson-tabs":
    "flex gap-[8px] m-[23px_0] [&>button]:flex [&>button]:items-center [&>button]:gap-[7px] [&>button]:bg-[#f8f3fc] [&>button]:text-[#785589] [&>button]:[border:1px_solid_#eee4f5] [&>button]:rounded-[7px] [&>button]:text-[12px] [&>button]:p-[9px] [&>button]:[flex:1] [&>button]:text-left [&>button.selected]:[border-color:#c6a7df] [&>button.selected]:bg-[#eee0f9] [&>button.selected]:text-[#9470ae] [&_svg]:w-[12px] max-[701px]:gap-[5px] max-[701px]:[&>button]:text-[10px] max-[701px]:[&>button]:leading-[1.8] max-[701px]:[&>button]:flex-col max-[701px]:[&>button]:items-start",
  "lesson-body":
    "[border-top:1px_solid_var(--line)] pt-[14px] [&>p]:text-[15px] [&>p]:text-[#695177] [&>p]:leading-[2] [&>p]:m-[18px_0] [&>p]:whitespace-pre-wrap max-[701px]:[&>p]:text-[13px]",
  "lesson-tip":
    "bg-[#f7f0fc] [border:1px_solid_#ebdef6] rounded-[9px] p-[16px] flex gap-[12px] text-[13px] leading-[1.9] text-[#776487] mt-[25px] [&_svg]:w-[19px] [&_svg]:mt-[4px]",
  "modal-actions":
    "flex justify-between gap-[12px] mt-[28px] max-[701px]:[&>.button]:text-[12px] max-[701px]:[&>.button]:p-[11px]",
  "quiz-form":
    "[&_fieldset]:border-0 [&_fieldset]:[border-top:1px_solid_#efe5f6] [&_fieldset]:p-[21px_0] [&_fieldset]:m-[20px_0] [&_legend]:text-[12px] [&_legend]:text-[#8c6c9f] [&_legend]:font-medium [&_legend]:leading-[1.8] [&_legend]:p-[0_0_0_2px] [&_legend_span]:[display:inline-grid] [&_legend_span]:[place-items:center] [&_legend_span]:bg-[#f1e8fa] [&_legend_span]:rounded-[50%] [&_legend_span]:w-[22px] [&_legend_span]:h-[22px] [&_legend_span]:text-[12px] [&_legend_span]:mr-[8px] [&>.button]:w-[100%]",
  answer:
    "flex items-center gap-[10px] text-[12px] leading-[1.8] text-[#71547f] [border:1px_solid_#eee5f4] bg-[#fcfaff] p-[10px_12px] rounded-[8px] m-[9px_0] cursor-pointer [&.selected]:bg-[#eee2f9] [&.selected]:[border-color:#c9aadd] [&.selected]:text-[#8a64a4] [&_input]:[accent-color:#a37cc5]",
  "quiz-results":
    "text-center pt-[15px] [&_h3]:text-[19px] [&_h3]:text-[#776487] [&_h3]:leading-[1.7] [&>p]:text-[13px] [&>p]:text-[#776487] [&>p]:m-[12px_0_25px] [&>.button]:mt-[20px]",
  "result-icon":
    "grid [place-items:center] w-[70px] h-[70px] rounded-[50%] bg-[#fff0d7] text-[#776487] m-[0_auto_20px] text-[35px]",
  "result-score":
    "[font-family:Manrope,sans-serif] font-bold text-[40px] text-[#776487] mt-[15px] [&_span]:text-[21px] [&_span]:text-[#776487]",
  "answer-review":
    "text-left bg-[#fff4ef] [border:1px_solid_#f4e1d6] rounded-[9px] p-[12px] m-[10px_0] text-[#776487] text-[13px] leading-[1.8] [&.correct]:bg-[#f0f6ef] [&.correct]:[border-color:#dfebdf] [&.correct]:text-[#776487] [&_p]:text-[12px] [&_p]:mt-[5px]",
  "error-message":
    "p-[10px] bg-[#fff0f3] text-[#b67484] text-[12px] rounded-[6px]",
  "sidebar-shade":
    "max-[701px]:fixed max-[701px]:[inset:0] max-[701px]:bg-[#2a19385c] max-[701px]:z-[39]",
  "assignment-tabs": "mb-[20px] max-[701px]:[&_button]:text-[12px]",
  "shared-grid":
    "grid [grid-template-columns:repeat(2,minmax(0,1fr))] gap-[18px] max-[951px]:[grid-template-columns:1fr]",
  "shared-card":
    "[border:1px_solid_#ece2f3] rounded-[12px] p-[21px] [&_h3]:text-[#725183] [&_h3]:text-[16px] [&_h3]:leading-[1.7] [&>p]:text-[13px] [&>p]:leading-[1.8] [&>p]:text-[#816b90] [&>p]:m-[12px_0] [&>p]:whitespace-pre-wrap [&>p]:[overflow-wrap:anywhere] [&>p]:max-h-[100px] [&>p]:overflow-auto max-[701px]:p-[17px]",
  marks: "text-[11px] text-[#9770ae]",
  "shared-author":
    "text-[11px] text-[#8b719d] flex flex-wrap gap-[12px] m-[18px_0] [&>span]:flex [&>span]:items-center [&>span]:gap-[5px] [&_svg]:w-[12px]",
  "shared-actions":
    "flex items-center gap-[7px] flex-wrap [&>.button]:text-[11px] [&>.button]:p-[10px_12px] max-[701px]:[&_.button]:text-[12px]",
  "shared-dialog":
    "m-[auto] text-[#695177] [&::backdrop]:bg-[#25153466] [&::backdrop]:[backdrop-filter:blur(5px)] [&:focus]:[outline:none] max-[701px]:w-[calc(100%_-_28px)]",
  "shared-instructions": "whitespace-pre-wrap [overflow-wrap:anywhere]",
  "review-title":
    "[border-top:1px_solid_#ece3f3] pt-[22px] mt-[25px] mb-[18px]",
  "review-card":
    "bg-[#faf6fd] [border:1px_solid_#eee3f6] rounded-[10px] p-[18px] m-[18px_0] [&_p]:whitespace-pre-wrap [&_p]:[overflow-wrap:anywhere] [&_p]:leading-[1.9] [&_p]:text-[13px] [&_p]:text-[#7d658d] [&_p]:m-[12px_0] [&_.last-score]:mt-[15px] [&_h3]:text-[14px] [&_h3]:text-[#886298]",
  "google-button":
    "w-[100%] bg-[#fff] text-[#454154] [border:1px_solid_#d9d3e4] text-[14px] p-[13px_18px] mt-[22px] shadow-[0_2px_5px_#35224908] [&:hover]:bg-[#f9f7fc] [&_svg]:h-[21px] [&_svg]:w-[21px]",
  "auth-divider":
    "flex items-center gap-[12px] m-[20px_0_0] text-[#776487] text-[11px] [&:before]:[content:''] [&:before]:h-[1px] [&:before]:bg-[#e9e3ef] [&:before]:[flex:1] [&:after]:[content:''] [&:after]:h-[1px] [&:after]:bg-[#e9e3ef] [&:after]:[flex:1] [&+.modal-form]:mt-[20px]",
  "public-site":
    "[background:radial-gradient(ellipse_at_0%_5%,#f6f0ff80,transparent_25%),#fffdf9] text-[#29213a] [&_.brand]:text-[24px] [&_.brand]:tracking-[-1px] [&_.brand]:gap-[10px] [&_.brand_img]:block [&_.brand_img]:shrink-0 max-[501px]:[&_.brand]:text-[20px] max-[501px]:[&_.brand]:gap-[8px] max-[501px]:[&_.site-footer_.brand]:text-[18px]",
  "brand-mark": "block shrink-0 rounded-[11px]",
  "skip-link":
    "fixed left-[15px] top-[-70px] z-[1000] bg-[#30213e] text-[#fff] p-[12px] rounded-[5px] [&:focus]:top-[12px]",
  "site-header":
    "max-w-[1280px] m-[auto] min-h-[100px] flex items-center justify-between gap-[30px] p-[22px_36px] [&>nav]:flex [&>nav]:gap-[28px] [&>nav]:text-[13px] [&>nav]:text-[#6c6078] [&>nav_a:hover]:text-[#7145d6] max-[1101px]:p-[22px_28px] max-[1101px]:gap-[20px] max-[1101px]:[&>nav]:gap-[20px] max-[1101px]:[&>nav]:text-[12px] max-[801px]:[&>nav]:hidden max-[501px]:min-h-[82px] max-[501px]:p-[20px] max-[501px]:gap-[12px] max-[501px]:[&_.brand_img]:w-[34px] max-[501px]:[&_.brand_img]:h-[34px] relative z-[5] [&:after]:[content:''] [&:after]:h-[1px] [&:after]:absolute [&:after]:bottom-[0] [&:after]:left-[36px] [&:after]:right-[36px] [&:after]:[background:linear-gradient(90deg,transparent,#e6daf1,transparent)]",
  "site-auth":
    "flex items-center gap-[22px] [&_.button]:p-[12px_16px] [&_.button]:text-[12px] max-[1101px]:gap-[15px] max-[501px]:gap-[13px] max-[501px]:[&>.button]:hidden",
  "site-signin":
    "bg-[none] text-[13px] text-[#3e304e] font-semibold p-[12px_0] [&:hover]:text-[#7145d6] max-[501px]:text-[13px]",
  "public-main":
    "m-[0_auto] p-[0_36px] max-w-[1280px] max-[1101px]:p-[0_28px] max-[501px]:p-[0_20px]",
  "website-hero":
    "grid [grid-template-columns:1.1fr_1fr] items-center min-h-[590px] p-[55px_0_60px] gap-[25px] [&_h1]:text-[64px] [&_h1]:tracking-[-3.8px] [&_h1]:leading-[1.13] [&_h1]:font-extrabold [&_h1]:m-[24px_0] [&_h1>span]:text-[#7949cf] [&_h1>span]:relative max-[1101px]:[&_h1]:text-[52px] max-[1101px]:[&_h1]:tracking-[-2.5px] max-[801px]:[grid-template-columns:1fr] max-[801px]:gap-[10px] max-[801px]:pt-[45px] max-[801px]:[&_h1]:text-[58px] max-[501px]:pt-[28px] max-[501px]:pb-[35px] max-[501px]:min-h-[0] max-[501px]:[&_h1]:text-[42px] max-[501px]:[&_h1]:tracking-[-2px] max-[501px]:[&_h1]:leading-[1.17] max-[501px]:[&_h1]:m-[20px_0] [&_h1>span]:[background:linear-gradient(110deg,#7040cf,#a36cdb)] [&_h1>span]:[background-clip:text] [&_h1>span]:[-webkit-text-fill-color:transparent] [&_.hero-spark]:[-webkit-text-fill-color:#e4ae55]",
  "site-kicker":
    "inline-flex items-center gap-[8px] text-[10px] tracking-[1.7px] text-[#806496] font-bold leading-[1.8] [&>span]:bg-[#9370ba] [&>span]:h-[6px] [&>span]:w-[6px] [&>span]:rounded-[50%] max-[501px]:text-[8px] max-[501px]:tracking-[1.1px]",
  "hero-spark":
    "text-[37px] text-[#e3a847] relative left-[9px] top-[-24px] max-[501px]:text-[25px] max-[501px]:top-[-17px] max-[501px]:left-[5px]",
  "website-hero-copy":
    "[&>p]:text-[16px] [&>p]:leading-[1.9] [&>p]:max-w-[450px] [&>p]:text-[#7d6e89] max-[801px]:max-w-[560px] max-[801px]:m-[auto] max-[801px]:text-center max-[801px]:[&>p]:m-[auto] max-[801px]:[&>p]:max-w-[480px] max-[501px]:[&>p]:text-[14px] max-[501px]:[&>p]:leading-[1.9]",
  "site-hero-actions":
    "flex items-center gap-[26px] mt-[32px] [&>.button]:text-[13px] [&>.button]:p-[16px_22px] [&>.button]:rounded-[9px] max-[1101px]:gap-[18px] max-[1101px]:[&>.button]:p-[14px_16px] max-[1101px]:[&>.button]:text-[12px] max-[801px]:justify-center max-[501px]:flex-col max-[501px]:gap-[20px] max-[501px]:mt-[26px] max-[501px]:[&>.button]:text-[13px] max-[501px]:[&>.button]:p-[15px_20px] max-[501px]:[&>.button]:w-[100%]",
  "site-secondary":
    "inline-flex gap-[8px] items-center text-[13px] font-semibold text-[#584565] [&:hover]:text-[#7145d6] max-[1101px]:text-[12px]",
  "site-benefits":
    "flex gap-[22px] text-[11px] text-[#897793] mt-[25px] [&>span]:flex [&>span]:gap-[7px] [&>span]:items-center [&_svg]:text-[#9878b3] [&_svg]:w-[13px] max-[801px]:justify-center max-[501px]:gap-[16px] max-[501px]:text-[10px] max-[501px]:leading-[1.8] max-[501px]:flex-wrap max-[501px]:mt-[23px]",
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
    "flex justify-between gap-[20px] [border-top:1px_solid_#ece4f1] [border-bottom:1px_solid_#ece4f1] p-[28px_12px] text-[#796585] text-[13px] [&>span]:flex [&>span]:items-center [&>span]:gap-[11px] [&_svg]:text-[#9a77bb] [&_svg]:w-[19px] [&_svg]:h-[19px] max-[1101px]:text-[11px] max-[1101px]:gap-[15px] max-[1101px]:[&>span]:gap-[7px] max-[801px]:flex-wrap max-[801px]:justify-center max-[801px]:gap-[20px_35px] max-[501px]:grid max-[501px]:[grid-template-columns:1fr_1fr] max-[501px]:gap-[20px_12px] max-[501px]:text-[10px] max-[501px]:p-[23px_0] max-[501px]:[&_svg]:w-[15px] max-[501px]:[&_svg]:h-[15px] max-[501px]:[&>span]:gap-[6px] max-[501px]:[&>span]:leading-[1.7] [background:linear-gradient(90deg,transparent,#f5effb80,transparent)]",
  "site-section": "p-[85px_0] [scroll-margin-top:25px] max-[501px]:p-[50px_0]",
  "site-section-heading":
    "flex justify-between items-end gap-[25px] mb-[32px] [&_h2]:text-[34px] [&_h2]:leading-[1.3] [&_h2]:tracking-[-1.4px] [&_h2]:font-extrabold [&_h2]:text-[#3c2c4c] [&_h2]:mt-[12px] [&_p]:text-[14px] [&_p]:text-[#8b7796] [&_p]:leading-[1.9] [&_p]:mt-[12px] max-[801px]:[&_h2]:text-[30px] max-[501px]:flex-col max-[501px]:items-start max-[501px]:gap-[15px] max-[501px]:mb-[26px] max-[501px]:[&_h2]:text-[27px] max-[501px]:[&_h2]:tracking-[-1px] max-[501px]:[&_h2]:mt-[10px] max-[501px]:[&_p]:text-[13px] max-[501px]:[&_p]:leading-[1.9]",
  "community-copy":
    "[&_h2]:text-[38px] [&_h2]:leading-[1.3] [&_h2]:tracking-[-1.4px] [&_h2]:font-extrabold [&_h2]:text-[#3c2c4c] [&_h2]:mt-[12px] [&_h2]:m-[15px_0_18px] [&_p]:text-[14px] [&_p]:text-[#8e759e] [&_p]:leading-[1.95] [&_p]:mb-[26px] [&_p]:max-w-[450px] [&_.button]:text-[13px] [&_.button]:p-[14px_20px] max-[1101px]:[&_h2]:text-[32px] max-[801px]:max-w-[560px] max-[501px]:[&_h2]:text-[30px] max-[501px]:[&_h2]:tracking-[-1px] max-[501px]:[&_p]:text-[13px] max-[501px]:[&_.button]:text-[12px] max-[501px]:[&_.button]:p-[14px_17px]",
  "catalog-note":
    "text-[11px] text-[#997aaa] whitespace-nowrap pb-[6px] max-[501px]:text-[10px]",
  "public-course-grid":
    "grid [grid-template-columns:repeat(3,minmax(0,1fr))] gap-[25px] max-[1101px]:[grid-template-columns:repeat(2,minmax(0,1fr))] max-[1101px]:gap-[22px] max-[501px]:[grid-template-columns:1fr] max-[501px]:gap-[22px] max-[1001px]:[grid-template-columns:repeat(2,minmax(0,1fr))]",
  "public-course":
    "[border:1px_solid_#ece4f2] bg-[#fff] rounded-[14px] p-[8px] overflow-hidden [transition:transform_.2s,box-shadow_.2s] [&:hover]:[transform:translateY(-4px)] [&:hover]:shadow-[0_12px_28px_#7a4daa0c] [&_.course-art]:h-[195px] [&_h3]:text-[18px] [&_h3]:leading-[1.7] [&_h3]:text-[#493157] [&_h3]:m-[9px_0] [&_h3]:tracking-[-.4px] max-[1101px]:[&_.course-art]:h-[190px] max-[501px]:[&_.course-art]:h-[195px] max-[501px]:[&_h3]:text-[18px] [&_.course-art>svg]:w-[76px] [&_.course-art>svg]:h-[76px] [&_.course-art>svg]:[stroke-width:1.1] [&_.art-orbit]:w-[140px] [&_.art-orbit]:h-[140px] [&_.art-grid]:w-[66px] [&_.art-grid]:h-[66px] [&_.art-grid]:left-[27px] [&_.art-grid]:bottom-[24px] [&_.course-art:after]:[content:'✦'] [&_.course-art:after]:absolute [&_.course-art:after]:right-[35px] [&_.course-art:after]:bottom-[28px] [&_.course-art:after]:text-[31px] [&_.course-art:after]:opacity-[.5] [&_.course-art:after]:[transform:rotate(15deg)] shadow-[0_4px_20px_#603c8904] [border-color:#eae0f1] max-[1001px]:[&_.course-art]:h-[185px]",
  "public-course-body":
    "p-[22px_16px_14px] [&>p]:text-[13px] [&>p]:leading-[1.9] [&>p]:text-[#8b749a] [&>p]:min-h-[75px] [&>button]:w-[100%] [&>button]:flex [&>button]:justify-between [&>button]:items-center [&>button]:bg-[#ede3fc] [&>button]:text-[#79519f] [&>button]:rounded-[7px] [&>button]:p-[13px_14px] [&>button]:text-[12px] [&>button]:font-semibold [&>button:hover]:bg-[#e9daf9] max-[1101px]:[&>p]:min-h-[45px] max-[501px]:p-[20px_13px_13px] max-[501px]:[&>p]:text-[13px] max-[501px]:[&>p]:min-h-[0] max-[501px]:[&>button]:text-[13px] max-[501px]:[&>button]:p-[13px] max-[1001px]:[&>p]:min-h-[72px] max-[701px]:p-[20px_13px_13px]",
  "public-course-meta":
    "flex justify-between gap-[8px] m-[18px_0] pb-[18px] [border-bottom:1px_solid_#efe7f4] text-[#9a80a9] text-[10px] flex-wrap [&>span]:flex [&>span]:items-center [&>span]:gap-[5px] [&_svg]:w-[12px] [&_svg]:h-[12px] max-[501px]:text-[11px]",
  "site-how": "pt-[30px] max-[501px]:pt-[12px]",
  "site-steps":
    "grid [grid-template-columns:repeat(3,1fr)] gap-[40px] mt-[42px] [&_article>div]:flex [&_article>div]:justify-between [&_article>div]:items-center [&_article>div]:[border-top:1px_solid_#e7dcef] [&_article>div]:pt-[22px] [&_article>div]:mb-[22px] [&_article>div>span]:[font-family:Manrope,sans-serif] [&_article>div>span]:text-[34px] [&_article>div>span]:font-bold [&_article>div>span]:text-[#b497ca] [&_article>div>span]:tracking-[-1px] [&_article>div>svg]:w-[25px] [&_article>div>svg]:h-[25px] [&_article>div>svg]:text-[#a687bd] [&_h3]:text-[17px] [&_h3]:text-[#51375f] [&_h3]:mb-[12px] [&_p]:text-[13px] [&_p]:leading-[1.9] [&_p]:text-[#8d769b] [&_p]:max-w-[300px] max-[801px]:gap-[25px] max-[801px]:[&_h3]:text-[15px] max-[801px]:[&_p]:text-[12px] max-[501px]:[grid-template-columns:1fr] max-[501px]:gap-[25px] max-[501px]:mt-[28px] max-[501px]:[&_article>div]:mb-[15px] max-[501px]:[&_article>div]:pt-[18px] max-[501px]:[&_article>div>span]:text-[30px] max-[501px]:[&_h3]:text-[18px] max-[501px]:[&_p]:text-[13px] max-[501px]:[&_p]:max-w-[100%]",
  "site-community":
    "grid [grid-template-columns:1fr_1fr] items-center gap-[70px] p-[30px_0_85px] max-[1101px]:gap-[38px] max-[801px]:[grid-template-columns:1fr] max-[801px]:gap-[35px] max-[501px]:pt-[10px] max-[501px]:pb-[45px]",
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
    "relative [background:radial-gradient(ellipse_at_top_left,#e0d0f7,transparent_70%),#eee3fc] [border:1px_solid_#e0d0f2] rounded-[24px] text-center p-[60px_25px] mb-[65px] overflow-hidden [&_h2]:text-[38px] [&_h2]:tracking-[-1.5px] [&_h2]:leading-[1.4] [&_h2]:text-[#59416f] [&_h2]:mt-[15px] [&_p]:text-[14px] [&_p]:text-[#8f74a4] [&_p]:leading-[1.8] [&_p]:m-[18px_0_26px] [&_.button]:p-[14px_22px] [&_.button]:text-[13px] max-[801px]:[&_h2]:text-[32px] max-[501px]:rounded-[17px] max-[501px]:p-[42px_19px] max-[501px]:mb-[40px] max-[501px]:[&_h2]:text-[26px] max-[501px]:[&_h2]:tracking-[-.9px] max-[501px]:[&_p]:text-[13px] max-[501px]:[&_p]:leading-[1.9] max-[501px]:[&_.button]:text-[12px]",
  "cta-star":
    "absolute right-[70px] top-[65px] text-[#ba9dda] text-[55px] [transform:rotate(15deg)] max-[801px]:right-[30px] max-[801px]:top-[30px] max-[801px]:text-[35px] max-[501px]:hidden",
  "site-footer":
    "[border-top:1px_solid_#eae0f0] max-w-[1208px] m-[0_auto] p-[28px_0] flex items-center justify-between gap-[25px] [&_.brand]:text-[20px] [&>p]:text-[11px] [&>p]:text-[#9b82aa] [&>a:last-child]:flex [&>a:last-child]:items-center [&>a:last-child]:gap-[8px] [&>a:last-child]:text-[12px] [&>a:last-child]:text-[#8c68a2] [&_svg]:w-[14px] max-[1101px]:m-[0_28px] max-[801px]:flex-wrap max-[801px]:[&>p]:[order:3] max-[801px]:[&>p]:w-[100%] max-[501px]:m-[0_20px] max-[501px]:p-[23px_0] max-[501px]:gap-[20px] max-[501px]:[&>p]:text-[11px] max-[501px]:[&>p]:leading-[1.8] max-[501px]:[&>a:last-child]:text-[11px]",
  "public-catalog-toolbar":
    "flex justify-between items-center gap-[20px] mb-[27px] max-[1001px]:items-stretch max-[1001px]:flex-col max-[1001px]:gap-[17px]",
  "public-topic-tabs":
    "flex gap-[7px] flex-wrap [&>button]:p-[10px_14px] [&>button]:rounded-[24px] [&>button]:bg-[#f7f2fc] [&>button]:text-[#8b6b9e] [&>button]:text-[12px] [&>button]:[border:1px_solid_#efe4f7] [&>button.selected]:text-[#fff] [&>button.selected]:bg-[#7951c8] [&>button.selected]:[border-color:#7951c8] [&>button.selected]:shadow-[0_4px_10px_#7145d618] max-[701px]:[&>button]:text-[11px] max-[701px]:[&>button]:p-[9px_12px] max-[701px]:gap-[6px]",
  "public-search":
    "flex gap-[8px] items-center bg-[#fff] [border:1px_solid_#e7dced] rounded-[24px] p-[10px_15px] max-w-[270px] w-[100%] text-[#ac91bc] [&>svg]:w-[15px] [&>svg]:h-[15px] [&>input]:text-[12px] [&>input]:border-0 [&>input]:bg-[none] [&>input]:[outline:0] [&>input]:text-[#6e517d] [&>input]:min-w-[0] [&>input]:w-[100%] [&>input::placeholder]:text-[#a990b7] max-[1001px]:max-w-[100%] max-[501px]:p-[12px_15px] max-[501px]:[&_input]:text-[13px]",
  "learning-paths": "pt-[0] pb-[70px] max-[701px]:pb-[50px]",
  "path-grid":
    "grid [grid-template-columns:repeat(3,minmax(0,1fr))] gap-[20px] max-[1001px]:gap-[16px] max-[701px]:[grid-template-columns:1fr]",
  "path-card":
    "relative [border:1px_solid_#e6d7f5] rounded-[16px] p-[26px] text-left flex flex-col items-start gap-[20px] bg-[#eee5fa] text-[#9573b4] min-h-[255px] overflow-hidden [transition:transform_.2s] [&:hover]:[transform:translateY(-4px)] [&.peach]:bg-[#ffedda] [&.peach]:[border-color:#f4e0c9] [&.peach]:text-[#bc925c] [&.mint]:bg-[#e5f1e8] [&.mint]:[border-color:#d3e6d8] [&.mint]:text-[#83a68c] [&:after]:[content:''] [&:after]:absolute [&:after]:w-[130px] [&:after]:h-[130px] [&:after]:[border:1px_solid_currentColor] [&:after]:opacity-[.16] [&:after]:rounded-[50%] [&:after]:right-[-45px] [&:after]:bottom-[-45px] [&.peach_strong]:text-[#89613b] [&.mint_strong]:text-[#50795d] [&.peach_.path-copy>span:last-child]:text-[#a28362] [&.mint_.path-copy>span:last-child]:text-[#73947d] [&>svg]:absolute [&>svg]:top-[27px] [&>svg]:right-[25px] [&>svg]:w-[20px] [&>svg]:h-[20px] max-[1001px]:p-[22px] max-[701px]:min-h-[0] max-[701px]:p-[24px] max-[701px]:flex-row max-[701px]:items-start max-[701px]:gap-[18px] max-[701px]:[&>svg]:top-[24px] max-[701px]:[&>svg]:right-[18px] max-[701px]:[&>svg]:w-[17px] max-[501px]:p-[21px] max-[501px]:gap-[14px]",
  "path-icon":
    "bg-[#fff9] p-[11px] rounded-[13px] flex [&>svg]:w-[25px] [&>svg]:h-[25px] max-[701px]:p-[10px] max-[701px]:[&_svg]:w-[22px] max-[701px]:[&_svg]:h-[22px]",
  "path-copy":
    "flex flex-col [&_.eyebrow]:text-[9px] [&_.eyebrow]:tracking-[1.2px] [&_.eyebrow]:text-[inherit] [&_strong]:[font-family:Manrope,sans-serif] [&_strong]:text-[20px] [&_strong]:tracking-[-.6px] [&_strong]:leading-[1.6] [&_strong]:text-[#5c416f] [&_strong]:m-[7px_0] [&>span:last-child]:text-[12px] [&>span:last-child]:leading-[1.8] [&>span:last-child]:text-[#8e739f] [&>span:last-child]:max-w-[260px] max-[1001px]:[&_strong]:text-[18px] max-[701px]:pr-[15px] max-[701px]:[&_strong]:text-[18px] max-[701px]:[&>span:last-child]:max-w-[none] max-[501px]:[&_strong]:text-[17px] max-[501px]:[&>span:last-child]:text-[12px]",
  "practice-section": "pt-[15px]",
  "practice-grid":
    "grid [grid-template-columns:repeat(3,minmax(0,1fr))] gap-[22px] max-[1001px]:gap-[16px] max-[701px]:[grid-template-columns:1fr]",
  "practice-card":
    "[border:1px_solid_#e8def0] rounded-[17px] overflow-hidden bg-[white] shadow-[0_8px_25px_#76509305] [&:nth-child(2)_.practice-visual]:bg-[#fcead5] [&:nth-child(3)_.practice-visual]:bg-[#e5f0e5] [&:nth-child(2)_.practice-number]:text-[#e7c49b] [&:nth-child(3)_.practice-number]:text-[#b9d3bb] [&:nth-child(2)_.practice-sticker]:bg-[#deb27b] [&:nth-child(2)_.practice-sticker]:[border-color:#fff5e6] [&:nth-child(2)_.practice-sticker]:[transform:rotate(12deg)] [&:nth-child(2)_.practice-sticker]:shadow-[8px_8px_0_#edcfaa77] [&:nth-child(3)_.practice-sticker]:bg-[#9abb9d] [&:nth-child(3)_.practice-sticker]:[border-color:#f1faef] [&:nth-child(3)_.practice-sticker]:shadow-[8px_8px_0_#ccdfcb77] max-[701px]:grid max-[701px]:[grid-template-columns:130px_1fr] max-[501px]:[grid-template-columns:1fr]",
  "practice-visual":
    "h-[150px] bg-[#f0e7fc] relative flex items-center justify-center overflow-hidden max-[701px]:h-[100%] max-[701px]:min-h-[220px] max-[501px]:min-h-[150px] max-[501px]:h-[150px]",
  "practice-number":
    "absolute [font-family:Manrope,sans-serif] text-[125px] font-extrabold tracking-[-7px] left-[14px] top-[-17px] text-[#d8c4ef] opacity-[.4] max-[701px]:text-[92px] max-[701px]:left-[1px] max-[701px]:top-[2px] max-[501px]:text-[125px] max-[501px]:left-[24px] max-[501px]:top-[-18px]",
  "practice-sticker":
    "grid [place-items:center] w-[74px] h-[80px] [transform:rotate(-13deg)] rounded-[15px] bg-[#aa87d9] [border:4px_solid_#f7efff] text-[white] shadow-[8px_8px_0_#d9c8ed77] [&>svg]:w-[36px] [&>svg]:h-[36px] [&>svg]:[stroke-width:1.3] max-[701px]:w-[65px] max-[701px]:h-[72px] max-[701px]:[&>svg]:w-[29px] max-[701px]:[&>svg]:h-[29px] max-[501px]:w-[74px] max-[501px]:h-[80px]",
  "practice-spark":
    "absolute text-[30px] text-[#b899d0] top-[23px] right-[29px] max-[701px]:text-[22px] max-[701px]:right-[12px] max-[701px]:top-[35px] max-[501px]:text-[32px] max-[501px]:right-[40px] max-[501px]:top-[20px]",
  "practice-body":
    "p-[23px] [&>h3]:text-[17px] [&>h3]:text-[#694879] [&>h3]:leading-[1.6] [&>h3]:m-[12px_0] [&>h3]:tracking-[-.5px] [&>p]:text-[12px] [&>p]:leading-[1.9] [&>p]:text-[#967da5] [&>p]:max-h-[90px] [&>p]:overflow-auto [&>p]:mb-[20px] [&>div]:flex [&>div]:items-center [&>div]:justify-between [&>div]:gap-[10px] [&>div]:pt-[17px] [&>div]:[border-top:1px_solid_#eee5f5] [&>div>span]:text-[10px] [&>div>span]:text-[#ae94bd] [&_button]:flex [&_button]:items-center [&_button]:gap-[8px] [&_button]:text-[11px] [&_button]:text-[#8f64ac] [&_button]:bg-[none] [&_button]:p-0 [&_button>svg]:w-[13px] max-[1001px]:p-[19px] max-[1001px]:[&>h3]:text-[16px] max-[1001px]:[&>div]:flex-wrap max-[701px]:p-[21px] max-[701px]:[&>p]:text-[12px] max-[501px]:[&>h3]:text-[18px] max-[501px]:[&>p]:text-[13px] max-[501px]:[&>p]:max-h-[none] max-[501px]:[&>div]:flex-nowrap",
  "sample-label":
    "inline-block text-[8px] tracking-[1px] text-[#ad91bd] bg-[#f6f0fc] rounded-[4px] p-[5px_7px]",
  "site-faq":
    "grid [grid-template-columns:1fr_1.6fr] gap-[70px] p-[10px_0_80px] [&_h2]:text-[36px] [&_h2]:tracking-[-1.3px] [&_h2]:leading-[1.4] [&_h2]:text-[#5c3b72] [&_h2]:m-[15px_0] [&>div>p]:text-[13px] [&>div>p]:text-[#997faa] [&>div>p]:leading-[1.9] max-[1001px]:gap-[40px] max-[701px]:[grid-template-columns:1fr] max-[701px]:gap-[22px] max-[701px]:pb-[50px] max-[701px]:[&_h2]:text-[30px] max-[701px]:[&_h2>br]:hidden",
  "faq-list":
    "[&>details]:[border-bottom:1px_solid_#eadff2] [&>details]:p-[21px_0] [&>details:first-child]:[border-top:1px_solid_#eadff2] [&_summary]:[list-style:none] [&_summary]:cursor-pointer [&_summary]:flex [&_summary]:items-center [&_summary]:justify-between [&_summary]:gap-[20px] [&_summary]:text-[14px] [&_summary]:font-medium [&_summary]:text-[#745182] [&_summary]:leading-[1.8] [&_summary::-webkit-details-marker]:hidden [&_summary>span]:text-[23px] [&_summary>span]:font-normal [&_summary>span]:text-[#bc9bd0] [&_summary>span]:leading-[1] [&_summary>span]:[transition:transform_.2s] [&_details[open]_summary>span]:[transform:rotate(45deg)] [&_details>p]:text-[13px] [&_details>p]:leading-[1.95] [&_details>p]:text-[#997eaa] [&_details>p]:p-[14px_25px_0_0] max-[501px]:[&_summary]:text-[13px]",
};
export function ui(tokens = "") {
  return tokens
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => `${token} ${recipes[token] || ""}`)
    .join(" ");
}
